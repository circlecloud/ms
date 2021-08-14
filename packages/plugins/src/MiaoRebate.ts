/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { constants, plugin, server, task } from '@ccms/api'
import { Autowired, JSClass } from '@ccms/container'
import { Cmd, Config, interfaces, JSPlugin, Listener, PluginConfig, Tab } from '@ccms/plugin'

import type { MiaoReward } from './MiaoReward'
import http from '@ccms/common/dist/http'

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
    prefix: '§6[§b外卖系统§6]§r',
    check: '%playerpoints_points%',
    command: 'points give %player_name% %amount%',
    ratio: 1,
    coinName: '点券',
    joinTip: true,
    owner: {
        userid: '',
        ccid: '',
        openid: ''
    }
}

@JSPlugin({ version: '1.0.1', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], depends: ['MiaoReward'], nativeDepends: ['PlaceholderAPI'], source: __filename })
export class MiaoRebate extends interfaces.Plugin {
    @Autowired()
    private server: server.Server
    @Autowired()
    private taskManager: task.TaskManager
    @Autowired()
    private pluginManager: plugin.PluginManager

    @JSClass('me.clip.placeholderapi.PlaceholderAPI')
    private PlaceholderAPI: PlaceholderAPI

    private apiGateWay = "https://rebate.yumc.pw"
    private MiaoReward: MiaoReward

    @Config({ default: defaultConfig })
    private config: PluginConfig & typeof defaultConfig = defaultConfig

    load() {
        this.logger.prefix = this.config.prefix
    }

    enable() {
        this.MiaoReward = this.pluginManager.getPlugin('MiaoReward') as MiaoReward
        if (!this.MiaoReward) { return this.logger.error(`当前脚本插件需要 MiaoReward 作为前置脚本插件!`) }
    }

    disable() {
    }

    @Cmd({ autoMain: true })
    mre() { }

    cmdbind(sender: org.bukkit.entity.Player, server: boolean) {
        if (!sender.getItemInHand) { return this.logger.sender(sender, `§c手持物品检测异常 请检查是否在客户端执行命令!`) }
        if (server) { return this.bindServer(sender) }
        if (!sender.getItemInHand) { return this.logger.sender(sender, `§c手持物品检测异常 请检查是否在客户端执行命令!`) }
        if (!this.config.owner.openid || !this.config.owner.userid) { return this.logger.sender(sender, `§4当前服务器尚未绑定管理员账号 请联系管理员完成绑定!`) }
        this.MiaoReward.sendTitle(sender, `§a获取二维码中`, `§6请稍候...`)
        let scan = this.qrCreate(sender, `绑定成功 请返回游戏查看!`, {
            v: 1,
            type: "invite",
            user: this.config.owner.openid,
            userid: this.config.owner.userid,
        })
        this.createScanTask(sender, scan.url, `微信扫码绑定账号`, `微信扫码 点击关注 绑定账号`, (sender) => {
            this.MiaoReward.sendTitle(sender, `§a绑定成功!`, `§6已绑定用户: §b${this.qrGet(scan.token).user.username}`)
        })
    }

    cmddraw(sender: org.bukkit.entity.Player, amount: number) {
        if (!sender.getItemInHand) { return this.logger.sender(sender, `§c手持物品检测异常 请检查是否在客户端执行命令!`) }
        if (!this.config.owner.openid || !this.config.owner.userid) { return this.logger.sender(sender, `§4当前服务器尚未绑定管理员账号 请联系管理员完成绑定!`) }
        amount = Number(amount)
        if (!Number.isInteger(amount)) {
            return this.logger.sender(sender, `§4兑换金额必须是数字!`)
        }
        if (amount < 1) {
            return this.logger.sender(sender, `§4兑换金额必须大于1!`)
        }
        this.MiaoReward.sendTitle(sender, `§a获取二维码中`, `§6请稍候...`)
        let scan = this.qrCreate(sender, ``, {
            v: 1,
            type: "draw",
            ccid: this.config.owner.ccid,
            userid: this.config.owner.userid,
            amount
        })
        this.createScanTask(sender, scan.url, `微信扫码兑换奖励`, `微信扫码兑换奖励`, (sender) => {
            let result = this.qrGet(scan.token)
            this.MiaoReward.sendTitle(sender, `§a扫码成功`, `§a兑换奖励中 §b具体结果请查看公众号消息...`)
            if (!(result = result.result)) {
                return this.sendError(sender, amount, `§4服务器返回数据异常!`)
            }
            if (!result.success) {
                return this.sendError(sender, amount, `§c` + result.message)
            }
            this.logger.sender(sender, `§a` + result.message)
            this.taskManager.callSyncMethod(() => {
                let point = this.safeMultiply(amount, this.config.ratio)
                let command = this.config.command.replace(`%player_name%`, sender.getName()).replace(`%amount%`, `${point}`)
                if (!this.server.dispatchConsoleCommand(command)) {
                    return this.sendError(sender, amount, `§4充值命令执行异常!`)
                }
                let nowPoint = this.getPlayerAmount(sender)
                this.logger.sender(sender, [
                    `§6充值 §a${point} §6${this.config.coinName} §a成功 §6当前账户余额: §3${nowPoint} §6${this.config.coinName}`,
                    `§c如出现未到账的情况 请联系管理员!`
                ])
            })
        })
        this.MiaoReward.clearTitle(sender)
    }
    private safeMultiply(a: number, b: number) {
        return parseFloat((a * b).toFixed(0))
    }
    sendError(sender: org.bukkit.entity.Player, amount: number, error: string) {
        return this.logger.sender(sender, [
            `§c========== ${this.config.prefix}§4兑换异常 §c==========`,
            `§6兑换圈币: §3${amount}`,
            `§6异常原因: §4${error}`,
            `§6异常账号: §b${sender.getName()}`,
            `§6异常时间: §a${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            `§c如果已扣除圈币但${this.config.coinName}未到账 请截图发给腐竹!`,
            `§c========== ${this.config.prefix}§4兑换异常 §c==========`,
        ])
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
    private bindServer(sender: org.bukkit.entity.Player) {
        if (!sender.isOp()) { return this.logger.sender(sender, `§4您没有配置服务器的权限!`) }
        if (this.config.owner.openid || this.config.owner.userid) {
            this.logger.sender(sender, `§c更换管理员账号 历史绑定数据将不会迁移!`)
        }
        let scan = this.qrCreate(sender, `绑定成功 请返回游戏查看!`)
        this.createScanTask(sender, scan.url, `微信扫码绑定账号`, `微信扫码 点击关注 绑定账号`, (sender) => {
            let result = this.qrGet(scan.token)
            let user = result.user
            this.config.owner.userid = user.id
            this.config.owner.ccid = user.ccid
            this.config.owner.openid = result.openid
            this.config.save()
            this.MiaoReward.sendTitle(sender, `§a绑定成功!`, `§6已绑定用户: §b${user.username}`)
        })
        this.MiaoReward.clearTitle(sender)
    }

    private createScanTask(sender: org.bukkit.entity.Player, qrcode: string, name: string, tip: string, task: (sender: org.bukkit.entity.Player) => void) {
        let sync: any = { scaned: false, start: Math.round(Date.now() / 1000) }
        this.MiaoReward.setItemAndTp(sender, qrcode, sync, name, tip)
        this.taskManager.create(() => {
            try {
                task(sender)
            } catch (error) {
                if (!sync.cancelled) {
                    this.logger.sender(sender, `§c` + error)
                }
            } finally {
                sync.scaned = true
                sender.updateInventory()
            }
        }).async().submit()
        this.MiaoReward.clearTitle(sender)
    }

    @Listener()
    private PlayerJoinEvent(event: org.bukkit.event.player.PlayerJoinEvent) {
        if (this.config.joinTip) {
            this.taskManager.create(() => {
                this.logger.sender(event.getPlayer(), [
                    `§b本服已和§a饿了么§6美团§c达成战略合作!`,
                    `§3/mre bind §a扫码§e免费赠送§a外卖红包!`
                ])
            }).later(30).submit()
        }
    }

    @Tab()
    tabmre(sender: any, _command: any, args: string | any[]) {
        if (args.length === 2 && args[0] === "bind" && sender.isOp()) return [`server`]
    }

    private qrCreate(sender: org.bukkit.entity.Player, message: string, data: any = {}) {
        let create = this.httpPost(`/qr/create/type/login/message/${encodeURIComponent(message)}`, data)
        if (create.code != 200) {
            return this.logger.sender(sender, `§c获取链接异常: ` + create.msg)
        }
        return create.data
    }

    private qrGet(token: string) {
        let get = this.httpPost('/qr/get', { token })
        if (get.code != 200) {
            throw new Error(get.msg)
        }
        return get.data
    }

    private httpPost(method: string, data: any = {}) {
        let startTime = Date.now()
        let url = `${this.apiGateWay}${method}`
        let result = http.post(url, data)
        console.debug(`
====== HTTP POST ======
REQUEST URL : ${url}
REQUEST DATA: ${JSON.stringify(data)}
RESPONSE    : ${JSON.stringify(result)}
CAST TIME   : ${Date.now() - startTime}`)
        return result
    }

    private cmdhelp(sender: any) {
        let help = [
            `§6====== ${this.config.prefix} §a帮助菜单 §6======`,
            `§6/mre bind §a绑定账号`,
            `§6/mre draw §e<兑换数量> §a兑换${this.config.coinName}`
        ]
        if (sender.isOp()) {
            help = help.concat([
                `§c由于您是管理员 以为您展示额外命令`,
                `§6/mre bind server §a绑定服务器`,
            ])
        }
        this.logger.sender(sender, help)
    }
}
