/// <reference types="@javatypes/spring-data-redis" />

import { constants, plugin as pluginApi, amqp, server, web } from '@ccms/api'
import { plugin, interfaces, cmd } from '@ccms/plugin'
import { AmqpAdmin, ConnectionFactoryAdapter, AmqpManager } from '@ccms/amqp'
import { inject, Autowired, ContainerInstance, Container } from '@ccms/container'
import { Server, Controller, Get, Param, METADATA_KEY } from '@ccms/web'

const SearchRankingAmqpAdmin = Symbol('SearchRanking-AmqpAdmin')

const EXCHANGE_NAME = `search.ranking.${process.env.SPRING_CLOUD_CONFIG_PROFILE || 'dev'}`
const QUEUE_NAME = `search.ranking.${process.env.SPRING_CLOUD_CONFIG_PROFILE || 'dev'}`
const ROUTER_KEY = `search.ranking.${process.env.SPRING_CLOUD_CONFIG_PROFILE || 'dev'}`

@plugin({ name: SearchRanking.name, version: SearchRanking.version, author: SearchRanking.author, servers: SearchRanking.servers, source: __filename })
export class SearchRanking extends interfaces.Plugin {
    public static version = '1.0.0'
    public static author = 'MiaoWoo'
    public static servers = [constants.ServerType.Spring]

    @inject(ContainerInstance)
    private container: Container
    @inject(pluginApi.PluginManager)
    private pluginManager: pluginApi.PluginManager
    @inject(amqp.Manager)
    private amqpManager: AmqpManager
    @inject(server.Server)
    private Server: server.Server
    @inject(web.Server)
    private webServer: Server

    @Autowired()
    private redisTemplate: org.springframework.data.redis.core.RedisTemplate<string, any>

    private amqpAdmin: AmqpAdmin
    private listener: org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer

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
        this.amqpAdmin.declareQueueAndBindExchange(QUEUE_NAME, EXCHANGE_NAME, ROUTER_KEY)
        this.amqpAdmin.declareBinding(QUEUE_NAME, 'client.topic.exchange', `cmd_res.${ROUTER_KEY}`)
        this.listener = this.amqpAdmin.createContainer<string>(QUEUE_NAME, (content, _message, _channel) => {
            let searchResult = JSON.parse(content)
            if (searchResult.type == "company") {
                this.logger.info(content)
                return
            }
            this.redisTemplate.opsForValue().set(searchResult.reqData.cacheKey, searchResult)
            this.logger.sender(this.Server.getConsoleSender(), `§6查询任务完成! §b关键词: §r${searchResult.reqData.keywords}`)
        })
        this.container.bind(SearchRankingAmqpAdmin).toConstantValue(this.amqpAdmin)
        this.listener.start()
        this.webServer.registryController(SearchRankingController)
    }

    disable() {
        this.container.unbind(SearchRankingAmqpAdmin)
        this.listener.stop()
        this.webServer.unregistryController(SearchRankingController)
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

    cmdsearch(sender: any, keyword: string, type: "sale" | "normal" = "sale", time: number) {
        this.logger.sender(sender, this.container.getNamed<SearchRankingController>(METADATA_KEY.Controller, SearchRankingController.name).cacheAndSearch(keyword, type, time)?.msg)
    }
}

@Controller({ path: '/api', name: SearchRankingController.name })
class SearchRankingController {
    @Autowired()
    private redisTemplate: org.springframework.data.redis.core.RedisTemplate<string, any>

    @inject(SearchRankingAmqpAdmin)
    private amqpAdmin: AmqpAdmin

    @Get()
    public search(
        @Param({ name: 'keyword', require: true, message: '查询关键词不得为空!' }) keyword: string,
        @Param("type") type: string = 'normal',
        @Param('time') time: number = 60 * 60 * 24 * 15
    ) {
        return this.cacheAndSearch(keyword, type as any, time * 1000)
    }

    @Get("/search/ranking")
    public searchRanking(
        @Param({ name: 'keyword', require: true, message: '查询关键词不得为空!' }) keyword: string,
        @Param("shopName") shopName: string = 'normal',
        @Param("type") type: string = 'normal',
        @Param('time') time: number = 60 * 60 * 24 * 15
    ) {
        return this.sendSearchRankingCmd(keyword, shopName, type as any, time * 1000)
    }

    @Get('/search/company')
    public searchCompany(
        @Param('url') url: string
    ) {
        this.amqpAdmin.getTemplate().convertAndSend('client.topic.exchange', 'cmd_req', {
            cmd: 'scout._1688CompanyInfo',
            data: {
                type: 'company',
                url: url,
                cacheKey: 'SearchRanking:company'
            },
            resRouteSuffix: ROUTER_KEY,
            target: {}
        })
    }

    public cacheAndSearch(keyword: string, type: string = "sale", time: number = 15 * 24 * 60 * 60 * 1000) {
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
            resRouteSuffix: ROUTER_KEY,
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
            resRouteSuffix: ROUTER_KEY,
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