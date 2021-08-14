/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { constants, plugin, server, task } from '@ccms/api'
import { Autowired, JSClass } from '@ccms/container'
import { Cmd, Config, interfaces, JSPlugin, Listener, PluginConfig, Tab } from '@ccms/plugin'

import type { MiaoReward } from './MiaoReward'
import http from '@ccms/common/dist/http'
import * as CryptoJS from "crypto-js"

const Thread = Java.type('java.lang.Thread')

interface App {
    appid: string
    appname: string
    ratio: number
    coin_name: string
}
interface Order {
    order_id: string
    amount: number
    url?: string
}
interface Sync {
    scaned: boolean
    start?: number
    left?: number
    cancelled?: boolean
    paying?: boolean
}

interface PlaceholderAPI {
    registerPlaceholderHook: (key: string, onPlaceholderRequest: (player, s) => string) => void
    unregisterPlaceholderHook: (key: string) => void
    setPlaceholders: (player: any, str: string) => string
}

const defaultConfig = {
    prefix: '§6[§b喵式支付§6]',
    name: '',
    id: '',
    secret: '',
    command: 'points give %player_name% %amount%',
    check: '%playerpoints_points%',
    ratio: 100,
    coinName: '点券',
    reward: {
        '*': [
            'msg %player_name% 充值 %amount% 点券成功...'
        ],
        10: [
            "points give %player_name% 1",
            'msg %player_name% 充值 10 点券 奖励 1 点券...'
        ],
        300: [
            "points give %player_name% 15",
            'msg %player_name% 充值 300 点券 奖励 15 点券...'
        ],
        500: [
            "points give %player_name% 25",
            'msg %player_name% 充值 500 点券 奖励 25 点券...'
        ],
        680: [
            "points give %player_name% 35",
            'msg %player_name% 充值 680 点券 奖励 35 点券...'
        ],
        1280: [
            "points give %player_name% 70",
            'msg %player_name% 充值 1280 点券 奖励 70 点券...'
        ],
    }
}

@JSPlugin({ version: '1.6.1', author: 'MiaoWoo', source: __filename, servers: [constants.ServerType.Bukkit], depends: ['MiaoReward'], nativeDepends: ['PlaceholderAPI', 'ProtocolLib'] })
export class MiaoPay extends interfaces.Plugin {
    @Autowired()
    private server: server.Server
    @Autowired()
    private taskManager: task.TaskManager
    @Autowired()
    private pluginManager: plugin.PluginManager

    @JSClass('me.clip.placeholderapi.PlaceholderAPI')
    private PlaceholderAPI: PlaceholderAPI

    private apiGateWay = "https://pay.yumc.pw"
    private MiaoReward: MiaoReward
    private appInfo: App

    private cacheMap = new Map<string, Order>();
    private cacheSyncMap = new Map<string, Sync>();

    private checkSet = new Set<string>();

    @Config()
    private config: PluginConfig & typeof defaultConfig = defaultConfig

    load() {
        this.MiaoReward = this.pluginManager.getPlugin('MiaoReward') as MiaoReward
    }

    enable() {
        if (!this.MiaoReward) { return this.logger.error('当前脚本插件需要 MiaoReward 作为前置脚本插件!') }
        if (!this.config.id || !this.config.secret) { return this.logger.console('§4尚未配置商户信息 将无法正常收款!') }
        let info = this.httpPost('/apps', { id: this.config.id })
        if (info.code == 200) {
            this.appInfo = info.data
            this.config.ratio = this.appInfo.ratio
            this.config.coinName = this.appInfo.coin_name
        } else {
            this.logger.console('§4初始化支付系统失败 请检查配置是否正确!')
            this.logger.console('§c服务器返回异常: §4' + info.msg)
        }
    }

    disable() {
        this.cacheMap.forEach((v, k) => {
            this.MiaoReward.cancelTask(this.server.getPlayer(k))
        })
        this.cacheMap.clear()
    }

    @Cmd({ autoMain: true })
    mpay() { }

    cmdpay(sender: org.bukkit.entity.Player, amount: number = 0) {
        if (!sender.getItemInHand) { return this.logger.sender(sender, '§4控制台无法执行此命令!') }
        if (!this.appInfo) {
            return this.logger.sender(sender, '§4当前服务器尚未配置 请联系管理员配置MiaoPay!')
        }
        if (!this.config.id || !this.config.secret) { return this.logger.sender(sender, '§c当前服务器尚未配置 请联系管理员配置支付密钥!') }
        if (this.cacheMap.has(sender.getName())) {
            this.logger.sender(sender, '§c您有一笔订单尚未完成 请完成支付或等待订单超时!')
            let sync = this.cacheSyncMap.get(sender.getName())
            if (!sync.cancelled) { return }
            sync.scaned = false
            sync.left = (sync.paying ? 100 : 55) - (Math.round(Date.now() / 1000) - sync.start)
            let order = this.cacheMap.get(sender.getName())
            this.MiaoReward.setItemAndTp(sender, order.url, sync, `充值 ${this.config.ratio * order.amount} ${this.config.coinName}`, `支付宝/微信/QQ 扫码支付`)
            return
        }
        if (amount < 1) { return this.logger.sender(sender, `§c充值异常 §4充值金额不得小于 1 ${this.config.coinName}!`) }
        if (amount / this.config.ratio > 5000) { return this.logger.sender(sender, `§c充值异常 §4充值金额不得大于 ${this.config.ratio * 5000} ${this.config.coinName}!`) }
        if (amount != Math.round(amount)) { return this.logger.sender(sender, `§c充值异常 §4充值金额必须为整数!`) }
        try {
            this.getPlayerAmount(sender)
        } catch (error) {
            return this.logger.sender(sender, error.message || error)
        }
        this.taskManager.create(() => this.createOrderByPlayer(sender, amount)).async().submit()
    }

    private createOrderByPlayer(sender: org.bukkit.entity.Player, amount: number = 0) {
        this.MiaoReward.sendTitle(sender, `§6充值 §a${amount} §6${this.config.coinName}`, '§c正在请求充值二维码 请稍候...')
        let sync: any = { scaned: false, start: Math.round(Date.now() / 1000) }
        let order = this.createOrder(sender, amount)
        this.cacheMap.set(sender.getName(), order)
        this.cacheSyncMap.set(sender.getName(), sync)
        let order_id = order.order_id
        this.MiaoReward.setItemAndTp(sender, order.url, sync, `充值 ${amount} ${this.config.coinName}`, `支付宝/微信/QQ 扫码支付`)
        this.logger.sender(sender, [`§3请使用 §b支付宝§3/§a微信§3/§5QQ §3扫描二维码支付!`, `§c如未显示二维码 请打开下列网址完成充值!`, `§6地址: §3${order.url}`])
        this.taskManager.create(() => {
            try {
                let status = this.queryStatus(order_id, 0, 55)
                if (status.code != 200) { throw new Error('§c扫码超时 请重新充值!') }
                this.MiaoReward.sendTitle(sender, '§a已扫码', `§3订单已创建 请及时支付!`)
                this.MiaoReward.sendActionBar(sender, '§6订单号: §3' + order_id)
                sync.scaned = true
                sync.start = Math.round(Date.now() / 1000)
                sync.paying = true
                status = this.queryStatus(order_id, 1, 100)
                if (status.code != 200) { throw new Error('§c支付超时 请重新充值!') }
                if (status.data == 2) {
                    this.MiaoReward.sendTitle(sender, '§a已支付', `§3订单已支付 请等待充值到账...`)
                    this.MiaoReward.sendActionBar(sender, '§6订单号: §3' + order_id)
                    this.logger.sender(sender, `§6订单号: §3${order_id} §a支付成功!`)
                    this.recharge(sender, order)
                }
            } catch (error) {
                let cacheOrder = this.cacheMap.get(sender.getName())
                if (cacheOrder && cacheOrder.order_id == order_id) {
                    this.MiaoReward.sendTitle(sender, '§4充值失败', error.message)
                }
            } finally {
                sync.scaned = true
                this.cacheMap.delete(sender.getName())
                this.cacheSyncMap.delete(sender.getName())
            }
        }).async().submit()
        this.MiaoReward.clearTitle(sender)
    }

    cmdquery(sender: org.bukkit.entity.Player, id: string) {
        if (!id) { return this.logger.sender(sender, '§c请输入订单号!') }
        this.taskManager.create(() => {
            let result = this.queryOrder(id, sender.getName(), sender.getUniqueId().toString())
            if (result.code != 200) { return this.logger.sender(sender, `§c查询异常! §4ERROR: ${result.msg}`) }
            let order = result.data
            this.logger.sender(sender, [
                `§6商户名称: §3${order.appname}`,
                `§6订单号: §3${id}`,
                `§6商品: §b${order.subject}`,
                `§6金额: §e${order.amount}`,
                `§6玩家: §a${order.username}`,
                `§6状态: §c${order.status}`,
            ])
            if (order.status > 1 && order.status < 4) {
                this.logger.sender(sender, `§3当前订单已支付 尚未完成充值 开始补单操作...`)
                this.recharge(sender, order)
            }
        }).async().submit()
    }

    cmdcheck(sender: org.bukkit.entity.Player, force = 1) {
        if (this.checkSet.has(sender.getName())) {
            return this.logger.sender(sender, '§c检查任务执行中 请稍候...')
        }
        this.checkSet.add(sender.getName())
        this.logger.sender(sender, `§3正在检查需要补单充值的订单 请稍候...`)
        this.taskManager.create(() => {
            try {
                let result = this.queryUnconverted(sender.getName(), force)
                if (result.code != 200) { return this.logger.sender(sender, `§c订单查询失败: ${result.msg}`) }
                let unconverteds = result.data
                if (!unconverteds.length) { return this.logger.sender(sender, `§c未发现需要进行补单充值的订单!`) }
                this.logger.sender(sender, `§3发现 §a${unconverteds.length}笔 §3未充值订单 §c正在充值 请稍候...`)
                for (const unconverted of unconverteds) {
                    this.logger.sender(sender, `§3正在处理订单 §a${unconverted.order_id} §3请稍候...`)
                    this.recharge(sender, unconverted)
                    Thread.sleep(300)
                }
            } finally {
                this.checkSet.delete(sender.getName())
            }
        }).async().submit()
    }

    /**
     * 请在异步线程执行此方法
     * @param amount 订单金额(非点券金额)
     */
    recharge(sender: org.bukkit.entity.Player, order: Order) {
        let order_id = order.order_id
        let amount = order.amount
        let point = this.safeMultiply(amount, this.config.ratio)
        let finish = this.preFinishOrder(order_id)
        if (finish.code != 200) {
            this.sendError(sender, order_id, amount, '充值预标记异常!')
            return this.logger.console(`§c充值系统异常 订单 §3${order_id} 预标记异常! §4${this.config.coinName}已停止充值 §c请手动补单!`)
        }
        this.taskManager.callSyncMethod(() => {
            let prePoint = this.getPlayerAmount(sender)
            let command = this.config.command.replace('%player_name%', sender.getName()).replace('%amount%', `${point}`).replace('%remark%', `${order_id}`)
            if (!this.server.dispatchConsoleCommand(command)) {
                return this.sendError(sender, order_id, amount, '充值命令执行异常!')
            }
            this.checkRecharge(sender, order_id, amount, prePoint, point)
        })
    }

    @Listener()
    private PlayerJoinEvent(event: org.bukkit.event.player.PlayerJoinEvent) {
        const player = event.getPlayer()
        this.cmdcheck(player, 0)
    }

    private checkRecharge(sender: org.bukkit.entity.Player, order_id: string, amount: number, prePoint: number, point: number) {
        this.taskManager.create(() => {
            let nowPoint = this.checkNowPoint(sender, point, prePoint)
            if (nowPoint === false) {
                return this.sendError(sender, order_id, amount, '充值结果检测异常!')
            }
            this.logger.sender(sender, [
                `§6充值 §a${point} §6${this.config.coinName} §a成功 §6当前账户余额: §3${nowPoint} §6${this.config.coinName}`,
                `§c如出现未到账的情况 请联系管理员!`
            ])
            this.rewardOrder(sender, order_id, point)
            let finish = this.finishOrder(order_id)
            if (finish.code != 200) {
                this.errorOrder(order_id, '充值完成标记异常 请到后台标记为已兑换!')
                return this.logger.console(`§c充值系统异常 订单 §3${order_id} §c完成标记异常! §a请到后台标记为已兑换! §4否则${this.config.coinName}可能重复到账!`)
            }
        }).async().submit()
    }

    private checkNowPoint(sender: org.bukkit.entity.Player, point: number, prePoint: number, times: number = 1) {
        if (times > 3) { return false }
        let nowPoint = this.getPlayerAmount(sender)
        if (nowPoint == prePoint + point) { return nowPoint }
        Thread.sleep(times * 100)
        return this.checkNowPoint(sender, point, prePoint, times++)
    }

    private rewardOrder(sender, order_id, point) {
        if (!this.config.reward) { return }
        this.taskManager.callSyncMethod(() => {
            try {
                if (this.config.reward['*']) {
                    let rewardCommands: string[] = this.config.reward['*']
                    for (const command of rewardCommands) {
                        this.dispatchConsoleCommand(sender, command, point, order_id)
                    }
                }
                let rewardCommands: string[] = this.config.reward[point]
                if (rewardCommands && rewardCommands.length) {
                    for (const command of rewardCommands) {
                        this.dispatchConsoleCommand(sender, command, point, order_id)
                    }
                }
            } catch (error) {
                console.error('§4充值奖励命令执行错误: §c' + error)
                console.ex(error)
            }
        })
    }

    private dispatchConsoleCommand(sender, command, point, order_id) {
        return this.server.dispatchConsoleCommand(command.replace('%player_name%', sender.getName()).replace('%amount%', `${point}`).replace('%remark%', `${order_id}`))
    }

    sendError(sender: org.bukkit.entity.Player, order_id: string, amount: number, error: string) {
        this.logger.sender(sender, [
            `§c========== ${this.config.prefix}§4充值异常 §c==========`,
            `§6异常订单: §3${order_id}`,
            `§6订单金额: §3${amount}`,
            `§6异常原因: §4${error}`,
            `§6异常账号: §b${sender.getName()}`,
            `§6异常时间: §a${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            `§c如果已付款但${this.config.coinName}未到账 请截图发给腐竹!`,
            `§c可尝试重新登录 或 执行 §3/mpay check §c手动补单!`,
            `§c========== ${this.config.prefix}§4充值异常 §c==========`,
        ])
        this.errorOrder(order_id, error)
    }

    @Tab()
    tabmpay() { }

    private safeMultiply(a: number, b: number) {
        return parseFloat((a * b).toFixed(0))
    }

    private getPlayerAmount(sender: any): number {
        let result = this.PlaceholderAPI.setPlaceholders(sender, this.config.check)
        let amount = parseFloat(result)
        if (isNaN(amount)) {
            throw new Error(`§c读取玩家 §3${this.config.coinName} §c异常 §6请检查 §3check §6配置是否正确!
§6数据解析链路: §3${this.config.check} §6=> §3${result} §6=> §3${amount}`)
        }
        return amount
    }

    private queryStatus(id: string, wait: number, time = 60) {
        return this.httpPost('/status', { id, wait, time })
    }

    private preFinishOrder(id: string) {
        return this.httpPost('/preFinish', { id }, true)
    }

    private errorOrder(id: string, error: string) {
        return this.httpPost('/error', { id, error }, true)
    }

    private finishOrder(id: string) {
        return this.httpPost('/finish', { id }, true)
    }

    private createOrder(sender: org.bukkit.entity.Player, amount: number): Order {
        let serverName = this.appInfo?.appname
        if (this.config.name) { serverName = `${serverName}(${this.config.name})` }
        let result = this.httpPost('/create', {
            subject: `${serverName} 充值 ${amount} ${this.config.coinName}`,
            amount: amount / this.appInfo.ratio,
            username: sender.getName(),
            unionId: sender.getUniqueId().toString()
        })
        if (result.code != 200) {
            throw new Error(`订单创建失败: ${result.msg}`)
        }
        return result.data
    }

    private queryOrder(id: string, username: string, uuid: string) {
        return this.httpPost('/query', { id, username, uuid })
    }

    private queryUnconverted(username: string, force: number) {
        return this.httpPost('/unconverted', { username, force })
    }

    private httpPost(method: string, data: any, retry = false) {
        let startTime = Date.now()
        data.appid = this.config.id
        data.timestamp = Math.round(Date.now() / 1000)
        data.nonce = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16))
        data.sign = this.sign(data)
        let url = `${this.apiGateWay}/api${method}`
        try {
            let result = http.post(url, data)
            console.debug(`
====== HTTP POST ======
REQUEST URL : ${url}
REQUEST DATA: ${JSON.stringify(data)}
RESPONSE    : ${JSON.stringify(result)}
CAST TIME   : ${Date.now() - startTime}`)
            return result
        } catch (error) {
            if (retry) {
                return this.httpPost(method, data)
            } else {
                console.console('§4请求支付中心发生异常 请联系管理员处理此问题!')
                console.ex(error)
            }
        }
    }

    private http_build_query(params: any) {
        return Object.keys(params).filter(key => key !== 'sign' && params[key] != undefined && params[key] != null)
            .sort().map(key => key + '=' + params[key]).join('&')
    }

    private sign(params) {
        // 排序后转换为字符串
        let signStr = `${this.http_build_query(params)}&key=${this.config.secret}`
        return CryptoJS.MD5(signStr).toString().toUpperCase()
    }
}
