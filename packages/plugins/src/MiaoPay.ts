/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { plugin, server, task } from '@ccms/api'
import { Autowired, JSClass } from '@ccms/container'
import { Cmd, Config, interfaces, JSPlugin, PluginConfig, Tab } from '@ccms/plugin'

import type { MiaoReward } from './MiaoReward'
import http from '@ccms/common/dist/http'
import * as CryptoJS from "crypto-js"

interface PlayerPointsAPI {
    look(name: string)
    give(name: string, amount: number)
    take(name: string, amount: number)
}

interface Order {
    order_id: string
    amount: string
    url: string
}
interface Sync {
    scaned: boolean
    start?: number
    left?: number
    cancelled?: boolean
}

interface PlaceholderAPI {
    registerPlaceholderHook: (key: string, onPlaceholderRequest: (player, s) => string) => void
    unregisterPlaceholderHook: (key: string) => void
    setPlaceholders: (player: any, str: string) => string
}

const defaultConfig = {
    prefix: '§6[§b喵式支付§6]',
    id: '',
    secret: '',
    command: 'p give %player_name% %amount%',
    check: '%playerpoints_points%',
    ratio: 100,
    coinName: '点券'
}

@JSPlugin({ version: '1.2.0', author: 'MiaoWoo', source: __filename, depends: ['MiaoReward'], nativeDepends: ['PlaceholderAPI'] })
export class MiaoPay extends interfaces.Plugin {
    @Autowired()
    private server: server.Server
    @Autowired()
    private taskManager: task.TaskManager
    @Autowired()
    private pluginManager: plugin.PluginManager

    @JSClass('me.clip.placeholderapi.PlaceholderAPI')
    private PlaceholderAPI: PlaceholderAPI

    private MiaoReward: MiaoReward

    private cacheMap = new Map<string, Order>();
    private cacheSyncMap = new Map<string, Sync>();

    @Config()
    private config: PluginConfig & typeof defaultConfig = defaultConfig

    load() {
        let needSave = false
        for (const key of Object.keys(defaultConfig)) {
            if (!this.config[key]) {
                this.config[key] = defaultConfig[key]
                needSave = true
            }
        }
        needSave && this.config.save()
    }

    cmdtest(sender: org.bukkit.entity.Player) {
        try {
            this.logger.sender(sender, this.getPlayerAmount(sender))
        } catch (error) {
            return this.logger.sender(sender, error.message)
        }
    }

    enable() {
        this.MiaoReward = this.pluginManager.getPlugin('MiaoReward') as MiaoReward
        if (!this.MiaoReward) { return this.logger.error('当前脚本插件需要 MiaoReward 作为前置脚本插件!') }
        if (!this.config.id || !this.config.secret) { return this.logger.console('§4尚未配置商户信息 将无法正常收款!') }
    }

    disable() {
        this.cacheMap.forEach((v, k) => {
            this.MiaoReward.cancelTask(this.server.getPlayer(k))
        })
        this.cacheMap.clear()
    }

    @Cmd({ autoMain: true })
    mpay() { }

    cmdpay(sender: org.bukkit.entity.Player, amount: number) {
        if (!sender.getItemInHand) { return this.logger.sender(sender, '§4控制台无法执行此命令!') }
        if (!this.MiaoReward.serverInfo) { return this.logger.sender(sender, '§4当前服务器尚未配置 请联系管理员先配置MiaoReward!') }
        if (!this.config.id || !this.config.secret) { return this.logger.sender(sender, '§c当前服务器尚未配置 请联系管理员配置支付密钥!') }
        if (this.cacheMap.has(sender.getName())) {
            this.logger.sender(sender, '§c您有一笔订单尚未完成 请完成支付或等待订单超时!')
            let sync = this.cacheSyncMap.get(sender.getName())
            if (!sync.cancelled) { return }
            sync.left = 55 - (Math.round(Date.now() / 1000) - sync.start)
            let order = this.cacheMap.get(sender.getName())
            this.MiaoReward.setItemAndTp(sender, order.url, sync, `充值 ${order.amount} ${this.config.coinName}`, `支付宝/微信/QQ 扫码支付`)
            return
        }
        if (amount < 1) { return this.logger.sender(sender, `§c充值异常 §4充值金额不得小于 1 ${this.config.coinName}!`) }
        try {
            this.getPlayerAmount(sender)
        } catch (error) {
            return this.logger.sender(sender, error.message)
        }
        this.MiaoReward.sendTitle(sender, `§6充值 §a${amount} §6${this.config.coinName}`, '§c正在请求充值二维码 请稍候...')
        let sync = { scaned: false, start: Math.round(Date.now() / 1000) }
        let order = this.createOrder(sender, amount)
        this.cacheMap.set(sender.getName(), order)
        this.cacheSyncMap.set(sender.getName(), sync)
        let order_id = order.order_id
        this.MiaoReward.setItemAndTp(sender, order.url, sync, `充值 ${amount} ${this.config.coinName}`, `支付宝/微信/QQ 扫码支付`)
        this.taskManager.create(() => {
            try {
                let status = this.queryStatus(order_id, 0, 55)
                if (status.code != 200) { throw new Error('§c扫码超时 请重新充值!') }
                this.MiaoReward.sendTitle(sender, '§a已扫码', `§3订单已创建 请及时支付!`)
                this.MiaoReward.sendActionBar(sender, '§6订单号: §3' + order_id)
                sync.scaned = true
                status = this.queryStatus(order_id, 1, 120)
                if (status.code != 200) { throw new Error('§c支付超时 请重新充值!') }
                if (status.data == 2) {
                    this.MiaoReward.sendTitle(sender, '§a已支付', `§3订单已支付 请等待充值到账...`)
                    this.MiaoReward.sendActionBar(sender, '§6订单号: §3' + order_id)
                    this.logger.sender(sender, `§6订单号: §3${order_id} §a支付成功!`)
                    this.recharge(sender, order_id, order.amount)
                } else {
                    this.logger.sender(sender, `§c充值系统异常 §4订单状态异常${status.data} §c点券可能未到账 请联系管理员!`)
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
                this.recharge(sender, id, order.amount)
            }
        }).async().submit()
    }

    /**
     * @param amount 订单金额(非点券金额)
     */
    recharge(sender: org.bukkit.entity.Player, order_id: string, amount: number) {
        let point = amount * this.config.ratio
        this.taskManager.create(() => {
            let finish = this.preFinishOrder(order_id)
            if (finish.code != 200) {
                return this.logger.console(`§c充值系统异常 订单 §3${order_id} 预标记异常! §4${this.config.coinName}已停止充值 §c请手动补单!`)
            }
            this.taskManager.callSyncMethod(() => {
                let prePoint = this.getPlayerAmount(sender)
                let command = this.config.command.replace('%player_name%', sender.getName()).replace('%amount%', `${point}`).replace('%remark%', `${order_id}`)
                if (!this.server.dispatchConsoleCommand(command)) {
                    return this.sendError(sender, order_id, amount, '§4充值命令执行异常!')
                }
                let nowPoint = this.getPlayerAmount(sender)
                if (nowPoint != prePoint + point) {
                    return this.sendError(sender, order_id, amount, '§4充值结果检测异常!')
                } else {
                    this.taskManager.create(() => {
                        this.logger.sender(sender, [
                            `§6充值 §a${point} §6${this.config.coinName} §a成功 §6当前账户余额: §3${nowPoint} §6${this.config.coinName}`,
                            `§c如出现未到账的情况 请联系管理员!`
                        ])
                        let finish = this.finishOrder(order_id)
                        if (finish.code != 200) {
                            return this.logger.console(`§c充值系统异常 订单 §3${order_id} 完成标记异常! §4${this.config.coinName}可能重复到账!`)
                        }
                    }).async().submit()
                }
            })
        }).async().submit()
    }

    sendError(sender: org.bukkit.entity.Player, order_id: string, amount: number, error: string) {
        return this.logger.sender(sender, [
            `§c========== ${this.config.prefix}§4充值异常 §c==========`,
            `§6异常订单: §3${order_id}`,
            `§6订单金额: §3${amount}`,
            `§6异常原因: §4${error}`,
            `§6异常账号: §b${sender.getName()}`,
            `§6异常时间: §a${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            `§c如果已付款但${this.config.coinName}未到账 请截图发往QQ群!`,
            `§c========== ${this.config.prefix}§4充值异常 §c==========`,
        ])
    }

    @Tab()
    tabmpay() { }

    private getPlayerAmount(sender: any): number {
        let result = this.PlaceholderAPI.setPlaceholders(sender, this.config.check)
        let amount = parseFloat(result)
        if (isNaN(amount)) {
            throw new Error(`§c读取玩家 §3${this.config.coinName} §c异常 §6请检查 §3check §6配置是否正确!\n§6数据解析链路: §3${this.config.check} §6=> §3${result} §6=> §3${amount}`)
        }
        return amount
    }

    private queryStatus(id: string, wait: number, time = 60) {
        return this.httpPost('/status', { id, wait, time })
    }

    private preFinishOrder(id: string) {
        return this.httpPost('/preFinish', { id })
    }

    private finishOrder(id: string) {
        return this.httpPost('/finish', { id })
    }

    private createOrder(sender: org.bukkit.entity.Player, amount: number) {
        let result = this.httpPost('/create', {
            subject: `${this.MiaoReward.serverInfo.name} 充值 ${amount} ${this.config.coinName}`,
            totalAmount: amount / this.config.ratio,
            username: sender.getName(),
            union_id: sender.getUniqueId().toString()
        })
        if (result.code != 200) {
            throw new Error(`订单创建失败: ${result.msg}`)
        }
        return result.data
    }

    private queryOrder(id: string, username: string, uuid: string) {
        return this.httpPost('/query', { id, username, uuid })
    }

    private httpPost(method: string, data: any) {
        let startTime = Date.now()
        data.appid = this.config.id
        data.timestamp = Math.round(Date.now() / 1000)
        data.sign = this.sign(data)
        let url = `https://pay.yumc.pw/api${method}`
        let result = http.post(url, data)
        console.debug(`
====== HTTP POST ======
REQUEST URL : ${url}
REQUEST DATA: ${JSON.stringify(data)}
RESPONSE    : ${JSON.stringify(result)}
CAST TIME   : ${Date.now() - startTime}`)
        return result
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
