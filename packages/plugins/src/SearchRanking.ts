import { constants, plugin as pluginApi, amqp, server, web } from '@ccms/api'
import { plugin, interfaces, cmd } from '@ccms/plugin'
import { AmqpAdmin, ConnectionFactoryAdapter, AmqpManager } from '@ccms/amqp'
import { inject, Autowired } from '@ccms/container'
import { Server } from '@ccms/web'

@plugin({ name: SearchRanking.name, version: SearchRanking.version, author: SearchRanking.author, servers: SearchRanking.servers, source: __filename })
export class SearchRanking extends interfaces.Plugin {
    public static version = '1.0.0'
    public static author = 'MiaoWoo'
    public static servers = [constants.ServerType.Spring]

    @inject(pluginApi.PluginManager)
    private pluginManager: pluginApi.PluginManager
    @inject(amqp.Manager)
    private amqpManager: AmqpManager
    @inject(server.Server)
    private Server: server.Server
    @inject(web.Server)
    private webServer: Server

    @Autowired()
    private mongoTemplate: any
    @Autowired()
    private redisTemplate: any

    private amqpAdmin: AmqpAdmin
    private listener: org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer

    private readonly exchangeName = 'search.ranking'
    private readonly queueName = 'search.ranking'
    private readonly routerKey = 'search.ranking'

    load() {
        let connection = new ConnectionFactoryAdapter({
            url: 'amqp://rabbitmq.c.sixi.com:5672',
            username: 'root',
            password: 'SixiMQ2018@'
        })
        let template = this.amqpManager.createTemplate(connection)
        this.amqpAdmin = this.amqpManager.createAdmin(template)
    }

    enable() {
        this.webServer.registryMapping('/api/search', (ctx) => {
            if (!ctx.params.keyword) { return { status: 400, msg: '查询关键词不得为空!' } }
            let keyword = ctx.params.keyword + ''
            let type = ctx.params.type == 'sale' ? 'sale' : 'normal'
            let time = parseInt(ctx.params.time + '') || 60 * 60 * 24 * 15
            return this.cacheAndSearch(keyword, type as any, time * 1000)
        })
        this.webServer.registryMapping('/api/search/ranking', (ctx) => {
            if (!ctx.params.keyword || !ctx.params.shopName) { return { status: 400, msg: '查询关键词不得为空!' } }
            let keyword = ctx.params.keyword + ''
            let shopName = ctx.params.shopName + ''
            let type = ctx.params.type == 'sale' ? 'sale' : 'normal'
            let time = parseInt(ctx.params.time + '') || 60 * 60 * 24 * 15
            return this.sendSearchRankingCmd(keyword, shopName, type as any, time * 1000)
        })
        this.amqpAdmin.declareQueueAndBindExchange(this.queueName, this.exchangeName, this.routerKey)
        this.amqpAdmin.declareBinding(this.queueName, 'client.topic.exchange', `cmd_res.${this.routerKey}`)
        this.listener = this.amqpAdmin.createContainer<string>(this.queueName, (content, message, channel) => {
            let searchResult = JSON.parse(content)
            this.redisTemplate.opsForValue().set(searchResult.reqData.cacheKey, searchResult)
            this.logger.sender(this.Server.getConsoleSender(), `§6查询任务完成! §b关键词: §r${searchResult.reqData.keywords}`)
        })
        this.listener.start()
    }

    disable() {
        this.listener.stop()
    }

    @cmd()
    sr(sender: any, cmd: string, args: string[]) {
        let cmdKey = 'cmd' + (args[0] || 'help')
        if (!this[cmdKey]) {
            this.logger.sender(sender, `§4子命令 ${args[0]} 不存在!`)
            return
        }
        args.shift()
        this[cmdKey](sender, ...args)
    }

    cmdrun(sender: any, ...args: string[]) {
        sender.sendMessage(eval(args.join(' ')))
    }

    cmdreload() {
        this.pluginManager.reload(this)
    }

    cmdsend(sender: any, ...args: string[]) {
    }

    cmdsearch(sender: any, keyword: string, type: "sale" | "normal" = "sale", time: number) {
        this.logger.sender(sender, this.cacheAndSearch(keyword, type, time)?.msg)
    }

    private cacheAndSearch(keyword: string, type: string = "sale", time: number = 15 * 24 * 60 * 60 * 1000) {
        let cacheKey = this.getCacheKey(keyword, type)
        if (this.redisTemplate.hasKey(cacheKey)) {
            let lastSearchTime = this.redisTemplate.opsForValue().get(cacheKey)
            if (Date.now() - lastSearchTime > time) {
                return this.createKeyworkSearch(keyword, type)
            }
            let lastSearchKey = this.getResultCacheKey(keyword, type, lastSearchTime)
            if (!this.redisTemplate.hasKey(lastSearchKey)) {
                return { status: 202, msg: `关键词: ${keyword} 排名类型: ${type} 缓存Key: ${lastSearchKey} 查询任务尚未完成...` }
            }
            return {
                status: 200,
                msg: `关键词: ${keyword} 排名类型: ${type} 查询时间: ${new Date(lastSearchTime).toLocaleString()} 查询已完成!`,
                data: this.redisTemplate.opsForValue().get(lastSearchKey)
            }
        }
        return this.createKeyworkSearch(keyword, type)
    }

    private createKeyworkSearch(keyword: string, type: string) {
        let cacheDate = Date.now()
        this.redisTemplate.opsForValue().set(this.getCacheKey(keyword, type), cacheDate)
        this.sendSearchCmd(keyword, type, cacheDate)
        return { status: 201, msg: `关键词: ${keyword} 排名类型: ${type} 查询任务以创建...`, createTime: cacheDate }
    }

    private createRankingSearch(keyword: string, shopName: string, type: string) {
        let cacheDate = Date.now()
        this.redisTemplate.opsForValue().set(this.getCacheKey(keyword, type), cacheDate)
        this.sendSearchRankingCmd(keyword, shopName, type, cacheDate)
        return { status: 201, msg: `关键词: ${keyword} 店铺名称: ${shopName} 排名类型: ${type} 查询任务以创建...`, createTime: cacheDate }
    }

    private sendSearchCmd(keywords: string, type: string, dateCache: number) {
        this.amqpAdmin.getTemplate().convertAndSend('client.topic.exchange', 'cmd_req', {
            cmd: 'scout._1688Search',
            data: {
                keywords: keywords,
                parameter: type == "sale" ? {
                    descendOrder: true,
                    sortType: 'va_rmdarkgmv30rt',
                    button_click: 'top'
                } : {},
                cacheKey: this.getResultCacheKey(keywords, type, dateCache)
            },
            resRouteSuffix: this.routerKey,
            target: {}
        })
    }

    private sendSearchRankingCmd(keywords: string, shopName: string, type: string, cacheTime: number) {
        this.amqpAdmin.getTemplate().convertAndSend('client.topic.exchange', 'cmd_req', {
            cmd: 'scout._1688Ranking',
            data: {
                keywords: keywords,
                selector: {
                    shopName
                },
                cacheKey: this.getResultCacheKey(keywords, type, cacheTime),
                cacheTime
            },
            resRouteSuffix: this.routerKey,
            target: {}
        })
    }

    /**
     * 获得关键词+类型的上次查询时间
     * @param keywords 关键词
     * @param type 类型
     */
    private getCacheKey(keywords: string, type: string) {
        return `SearchRanking:${keywords}:${type}`
    }
    private getResultCacheKey(keywords: string, type: string, date: number) {
        return `SearchRanking:${keywords}:${type}:${date}`
    }
}
