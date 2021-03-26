import { constants, task, server, channel, chat, proxy } from "@ccms/api"
import { JSPlugin, interfaces, Cmd, Tab, Listener, Config, PluginConfig } from "@ccms/plugin"

import { QRCode, QRErrorCorrectLevel } from '@ccms/common/dist/qrcode'

import { Autowired, JSClass, optional } from '@ccms/container'
import http from '@ccms/common/dist/http'

const BufferedImage = Java.type('java.awt.image.BufferedImage')
const Color = Java.type('java.awt.Color')
const Bytes = Java.type('byte[]')

interface PlaceholderAPI {
    registerPlaceholderHook: (key: string, onPlaceholderRequest: (player, s) => string) => void
    registerExpansion: (expansion: PlaceholderExpansion) => void
    unregisterPlaceholderHook: (key: string) => void
    setPlaceholders: (player: any, str: string) => string
}

interface PlaceholderExpansion {
    getIdentifier: () => string
    getAuthor: () => string
    getVersion: () => string
    persist: () => string
    onPlaceholderRequest: (player, s) => string
}

interface UserInfo {
    balance: number
    sign: string
    video: string
    box: string
    block: string
}

interface ServerInfo {
    // 16,
    id: number
    // "圈云大陆",
    name: string
    // 1,
    owner: number
    // 48200,
    score: number
    // 1,
    ratio: number
    // 1,
    audit: number
    // 2,
    status: number
    // 0
    today: number
}

let createPacketAdapterFunction = eval(`
function(cls, plugin, type, onPacketSending){
    return new cls(plugin, type) {
        onPacketSending: onPacketSending
    }
}`)

const defaultConfig = {
    prefix: '§6[§b广告系统§6]§r',
    serverId: '',
    serverToken: '',
    drawCommand: 'points give %player_name% %amount%',
    coinName: '点券',
    joinTip: true
}

@JSPlugin({ prefix: 'MRD', version: '1.5.9', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], nativeDepends: ['ProtocolLib', 'PlaceholderAPI'], source: __filename })
export class MiaoReward extends interfaces.Plugin {
    public serverInfo: ServerInfo
    private notifyError = true
    private cacheBindUuid = ''
    private zeroMapView = undefined
    private playerImageCache = new Map<string, any>()
    private playerTaskCache = new Map<string, task.Cancelable>()
    private playerInfoCache = new Map<string, UserInfo>()

    private downgrade = false

    @Autowired()
    private chat: chat.Chat
    @Autowired()
    private server: server.Server
    @Autowired()
    private taskManager: task.TaskManager
    @Autowired()
    private channel: channel.Channel
    @Autowired()
    private bungee: proxy.BungeeCord

    @Config()
    private config: PluginConfig & typeof defaultConfig = defaultConfig

    @JSClass('org.bukkit.Bukkit')
    private Bukkit: any

    @JSClass('me.clip.placeholderapi.PlaceholderAPI')
    private PlaceholderAPI: PlaceholderAPI
    @JSClass('me.clip.placeholderapi.PlaceholderHook')
    private PlaceholderHook: any
    @JSClass('me.clip.placeholderapi.expansion.PlaceholderExpansion')
    private PlaceholderExpansion: any
    private expansion: any

    @JSClass('com.comphenix.protocol.ProtocolLibrary')
    private ProtocolLibrary: any
    @JSClass('com.comphenix.protocol.PacketType')
    private PacketType: any
    @JSClass('com.comphenix.protocol.events.PacketAdapter')
    private PacketAdapter: any

    private adapter: any
    private itemStackArrayLength: number

    private isBungeeCord = undefined
    private channelOff: { off: () => void }

    load() {
        this.config.prefix = this.config.prefix || '§6[§b广告系统§6]§r'
        this.config.drawCommand = this.config.drawCommand || 'p give %player_name% %amount%'
        if (this.config.coinName == undefined) {
            this.config.coinName = '点券'
            this.config.save()
        }
        if (this.config.joinTip == undefined) {
            this.config.joinTip = true
            this.config.save()
        }
        //@ts-ignore
        this.logger.prefix = this.config.prefix
        this.downgrade = this.Bukkit.server.class.name.split('.')[3] == "v1_7_R4"
        this.updateServerInfo(null, () => this.updateOnlinePlayersInfo())
    }

    private updateServerInfo(player?: any, cb?: () => void) {
        this.taskManager.create(() => {
            if (this.config.serverId) {
                let result = this.httpPost(`https://reward.yumc.pw/server/server`, {
                    id: this.config.serverId,
                    token: this.config.serverToken
                })
                if (result.code == 200) {
                    this.serverInfo = result.data
                    if (player) this.bungee.for(player).forward("ALL", "MiaoReward", { type: "updateServerInfo", data: result.data }).send()
                    cb?.()
                }
            }
        }).async().submit()
    }

    private updateOnlinePlayersInfo() {
        Java.from(this.server.getOnlinePlayers()).forEach(player => this.updatePlayerInfo(player))
    }

    private updatePlayerInfo(player: org.bukkit.entity.Player) {
        this.taskManager.create(() => this.queryUser(player)).async().submit()
    }

    @JSClass('com.google.common.io.ByteStreams')
    private ByteStreams: any

    enable() {
        this.initPlaceholderAPI()
        this.initBungeeCord()
        this.initZeroMap()
    }

    private initBungeeCord() {
        this.channelOff = this.channel?.listen(this, 'BungeeCord', (data) => {
            if (!this.isBungeeCord) {
                this.isBungeeCord = true
            }
            let input = this.ByteStreams.newDataInput(data)
            let subChannel = input.readUTF()
            switch (subChannel) {
                case "GetServer":
                    this.isBungeeCord = true
                    let serverName = input.readUTF()
                    break
                case "MiaoReward":
                    this.readForward(input)
                    break
            }
        })
        let players = this.server.getOnlinePlayers()
        if (players.length) this.bungeeCordDetect(players[0])
    }

    private readForward(input) {
        let message = JSON.parse(input.readUTF())
        console.log(message)
        switch (message.type) {
            case "updateServerInfo":
                this.serverInfo = message.data
                console.console(this.config.prefix, '§6兑换比例已更新为:§a', message.data.ratio)
                break
        }
    }

    private initPlaceholderAPI() {
        if (!this.PlaceholderAPI) {
            console.console("§cCan't found me.clip.placeholderapi.PlaceholderAPI variable will not be replaced!")
        } else {
            this.expansion = new this.PlaceholderExpansion({
                getIdentifier: () => 'mrd',
                persist: () => true,
                getAuthor: () => 'MiaoWoo',
                getVersion: () => '1.0.0',
                onPlaceholderRequest: this.onPlaceholderRequest.bind(this)
            })
            this.taskManager.create(() => this.expansion.register()).submit()
        }
    }

    private onPlaceholderRequest(player: any, s: string) {
        if (!this.playerInfoCache.has(player.getName())) { return '数据加载中' }
        let data = this.playerInfoCache.get(player.getName())
        if (!data) { return '用户未绑定' }
        switch (s.toLowerCase()) {
            case "balance": return data.balance
            case "sign": return data.sign
            case "video": return data.video
            case "box": return data.box
            case "block": return data.block
            default: return "未知的参数: " + s
        }
    }

    private initZeroMap() {
        this.taskManager.create(() => {
            this.zeroMapView = this.Bukkit.getMap(0) || this.Bukkit.createMap(this.Bukkit.getWorlds()[0])
            this.zeroMapView.setScale(org.bukkit.map.MapView.Scale.FARTHEST)
            this.zeroMapView.getRenderers().clear()
        }).submit()
        var minecraftVersion = this.ProtocolLibrary.getProtocolManager().getMinecraftVersion()
        this.itemStackArrayLength = minecraftVersion.getMinor() < 9 ? 45 : 46
        this.initPacketAdapter()
    }

    private createPacketAdapter(onPacketSending: (event) => void) {
        return createPacketAdapterFunction(this.PacketAdapter, base.getInstance(), [this.PacketType.Play.Server.MAP], onPacketSending)
    }

    private initPacketAdapter() {
        if (!this.ProtocolLibrary) {
            return this.logger.console(`§4服务器未安装 ProtocolLib 无法扫码功能 请安装后重试!`)
        }
        this.adapter = this.createPacketAdapter((event) => {
            let integers = event.getPacket().getIntegers().getValues()
            let mapId = integers.get(0)
            let player = event.getPlayer()
            if (mapId == this.zeroMapView.getId() && this.playerImageCache.has(player.getName())) {
                let bytes = this.playerImageCache.get(player.getName())
                if (!this.downgrade) {
                    event.getPacket().getByteArrays().write(0, bytes)
                    event.getPacket().getIntegers().write(3, 128)
                    event.getPacket().getIntegers().write(4, 128)
                } else {
                    // let xbytes = new Bytes(131)
                    let origin = event.getPacket().getByteArrays().read(0)
                    // xbytes[1] = origin[1]
                    // xbytes[2] = origin[2]
                    for (let y = 0; y < 128; ++y) {
                        origin[y + 3] = bytes[y * 128 + origin[1]]
                    }
                    event.getPacket().getByteArrays().write(0, origin)
                }
            }
        })
        this.ProtocolLibrary.getProtocolManager().addPacketListener(this.adapter)
    }

    private sendWindowItems(player: org.bukkit.entity.Player, mapItem: any) {
        var protocolManager = this.ProtocolLibrary.getProtocolManager()
        try {
            let ItemStackArray = Java.type('org.bukkit.inventory.ItemStack[]')
            let arritemStack = new ItemStackArray(this.itemStackArrayLength)
            java.util.Arrays.fill(arritemStack, new org.bukkit.inventory.ItemStack(org.bukkit.Material.AIR))
            arritemStack[36 + player.getInventory().getHeldItemSlot()] = mapItem
            var packetContainer = protocolManager.createPacket(this.PacketType.Play.Server.WINDOW_ITEMS)
            try {
                packetContainer.getItemArrayModifier().write(0, arritemStack)
            } catch (error) {
                try {
                    packetContainer.getItemListModifier().write(0, java.util.Arrays.asList(arritemStack))
                } catch (error) {
                    if (this.notifyError) {
                        console.console('§4发送虚拟物品包失败 可能是ProtocolLib版本不兼容!')
                        console.ex(error)
                        this.notifyError = false
                        return
                    }
                }
            }
            protocolManager.sendServerPacket(player, packetContainer)
        } catch (ex) {
            console.ex(ex)
        }
    }

    disable() {
        try { this.expansion?.unregister() } catch (error) { }
        this.adapter && this.ProtocolLibrary.getProtocolManager().removePacketListener(this.adapter)
        Java.from(this.server.getOnlinePlayers()).forEach(p => this.checkAndClear(p))
        this.channelOff?.off()
    }

    @Cmd()
    private mrd(sender: any, command: string, args: string[]) {
        let cmd = args[0] || 'help'
        let cmdKey = 'cmd' + cmd
        if (!this[cmdKey]) {
            console.sender(sender, '§4未知的子命令: §c' + cmd)
            console.sender(sender, `§6请执行 §b/${command} §ahelp §6查看帮助!`)
            return
        }
        args.shift()
        this.taskManager.create(() => this[cmdKey](sender, ...args)).async().submit()
    }

    public scanAuth(sender: org.bukkit.entity.Player, scanType: string, scanObj: { title: string, content: string }, success: (token: string, user: any) => void, cancel?: () => void) {
        this.logger.sender(sender, '§a正在获取授权二维码...')
        let scan = this.httpPost('https://reward.yumc.pw/auth/scan', { ...scanObj, type: scanType })
        if (scan.code == 200) {
            let sync = { scaned: false }
            this.logger.sender(sender, `§a授权二维码获取成功 §c如地图无法扫描 §6请点击链接\n§3§n${scan.data.qrcode}`)
            this.taskManager.create(() => {
                let result = this.httpPost('https://reward.yumc.pw/auth/scanCheck', {
                    token: scan.data.token,
                    type: scanType,
                    status: 'noscan'
                })
                sync.scaned = true
                if (result.code == 200 && result.data.status == "scaned") {
                    this.sendTitle(sender, "§3已扫码", "§a请在手机上确认")
                    let result = this.httpPost('https://reward.yumc.pw/auth/scanCheck', {
                        token: scan.data.token,
                        type: scanType,
                        status: 'scaned'
                    })
                    if (result.code == 200) {
                        if (result.data.status == "confirm") {
                            this.sendTitle(sender, '§3扫码完成')
                            success(scan.data.token, result.data.user)
                        } else if (result.data.status == "cancel") {
                            this.sendTitle(sender, '§c已取消授权')
                            cancel?.()
                        } else if (result.data.status == "scaned") {
                            this.sendTitle(sender, '§c授权操作超时')
                            cancel?.()
                        } else {
                            this.sendTitle(sender, "§c未知的结果", result.data.status)
                        }
                    } else {
                        this.sendTitle(sender, "§4扫码异常", result.msg)
                    }
                }
                sync.scaned = true
            }).async().submit()
            this.setItemAndTp(sender, scan.data.url, sync)
            this.sendTitle(sender, '')
        } else {
            this.logger.sender(sender, '§4授权二维码获取失败!')
        }
    }

    private bindCheck(sender: org.bukkit.entity.Player) {
        if (!this.ProtocolLibrary) {
            return this.logger.sender(sender, `§4服务器未安装 ProtocolLib 无法扫码功能 请安装后重试!`)
        }
        let scanning = this.playerTaskCache.has(sender.getName())
        if (scanning) {
            this.logger.sender(sender, "§4当前正在进行扫码 请稍候重试!")
        }
        return scanning
    }

    private cmdopen(sender: org.bukkit.entity.Player) {
        if (this.bindCheck(sender)) return
        this.logger.sender(sender, '§a正在获取小程序二维码...')
        let sync = { scaned: false }
        this.setItemAndTp(sender, 'https://m.q.qq.com/a/p/1110360279?s=' + encodeURIComponent(`pages/my/index`), sync)
        this.taskManager.create(() => sync.scaned = true).later(20 * 50).submit()
    }

    private cmdbind(sender: org.bukkit.entity.Player, server: boolean) {
        if (!sender.getItemInHand) { return this.logger.sender(sender, '§c手持物品检测异常 请检查是否在客户端执行命令!') }
        if (this.bindCheck(sender)) return
        if (server) {
            this.bindServer(sender)
        } else {
            this.bindUser(sender)
        }
    }

    private cmddraw(sender: org.bukkit.entity.Player, amount: number) {
        if (!sender.getItemInHand) { return this.logger.sender(sender, '§c手持物品检测异常 请检查是否在客户端执行命令!') }
        if (!this.playerInfoCache.get(sender.getName())) { return this.logger.sender(sender, '§c当前用户尚未绑定服务器玩家账号 请先执行 /mrd bind 绑定账号!') }
        amount = Number(amount)
        if (!Number.isInteger(amount)) {
            return this.logger.sender(sender, '§4金额必须是数字!')
        }
        if (amount % 100 !== 0) {
            return this.logger.sender(sender, '§4金额必须是100倍数!')
        }
        if (this.bindCheck(sender)) { return }
        this.scanAuth(sender,
            'draw', {
            title: '兑换授权',
            content: [
                "是否授权 " + this.serverInfo.name + " 兑换喵币",
                "兑换玩家: " + sender.getName(),
                "兑换数量: " + amount,
                "兑换比例: " + this.serverInfo.ratio,
                "预计到帐: " + (amount * this.serverInfo.ratio).toFixed(0),
                "注意: 数据可能更新不及时 请以实际到账金额为准!"
            ].join('\n')
        }, (token: string) => {
            this.drawCoin(sender, amount, token)
        })
    }

    private drawCoin(sender: org.bukkit.entity.Player, amount: number, token: string) {
        if (!token) return
        let draw = this.httpPost('https://reward.yumc.pw/server/draw', {
            id: this.config.serverId,
            token: this.config.serverToken,
            uuid: sender.getUniqueId().toString(),
            username: sender.getName(),
            amount,
            userToken: token
        })
        if (draw.code !== 200) {
            return this.sendError(sender, `§4兑换异常 §6服务器返回: §c${draw.msg}`)
        }
        let drawAmount = draw.data
        if (!drawAmount) {
            return this.sendError(sender, '§c服务器返回金额 ' + draw.data + ' 可能存在异常')
        }
        this.taskManager.create(() => {
            let command = this.config.drawCommand.replace('%player_name%', sender.getName()).replace('%amount%', draw.data)
            if (!this.server.dispatchConsoleCommand(command)) {
                return this.sendError(sender, ...draw.msg.split('\n').map(s => s.replace('点券', this.config.coinName)), `§6执行结果: §4已扣除 §c${amount} §4喵币`, `§6执行命令: §3/${command} §c可能存在异常`)
            }
            this.logger.sender(sender, draw.msg.split('\n').map(s => s.replace('点券', this.config.coinName)))
            this.sendBroadcast(sender, `${this.config.prefix}§6玩家 §b${sender.getName()} §6成功将 §a${amount}喵币 §6兑换成 §c${draw.data}${this.config.coinName}!`)
            this.sendBroadcast(sender, `${this.config.prefix}§c/mrd help §b查看广告系统帮助 §6快来一起看广告赚${this.config.coinName}吧!`)
            this.queryUser(sender)
        }).submit()
    }

    private sendError(sender: any, ...error: string[]) {
        return this.logger.sender(sender, [
            `§c========== ${this.config.prefix}§4兑换异常 §c==========`,
            ...error,
            `§6异常账号: §b${sender.getName()}`,
            `§6异常时间: §a${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            `§c如果喵币被扣除且未得到奖励 请截图发往QQ群!`,
            `§c========== ${this.config.prefix}§4兑换异常 §c==========`,
        ])
    }

    private cmdrank(sender: any, boardcast: boolean) {
        if (!sender.isOp()) { return this.logger.sender(sender, '§4你没有此命令的权限!') }
        let result = this.httpPost(`https://reward.yumc.pw/server/rank`, {
            id: this.config.serverId,
            token: this.config.serverToken
        })
        if (result.code !== 200) {
            return this.logger.sender(sender, `§c今日未查询到数据!`)
        }
        let ranks = [
            `§6====== ${this.config.prefix} §a喵币兑换排行 §6======`,
            ...result.data.map((e, i) => `§6${i + 1}. §a${e.username} §6兑换 §3${e.count} §6次 §c${e.amount} §6喵币`),
            `§6====== ${this.config.prefix} §a喵币兑换排行 §6======`,
        ]
        if (boardcast) {
            ranks.forEach(l => this.sendBroadcast(sender, l))
        } else {
            this.logger.sender(sender, ranks)
        }
    }

    private cmdserver(sender: any) {
        if (!sender.isOp()) { return this.logger.sender(sender, '§4你没有此命令的权限!') }
        let result = this.httpPost(`https://reward.yumc.pw/server/server`, {
            id: this.config.serverId,
            token: this.config.serverToken
        })
        if (result.code !== 200) {
            return this.logger.sender(sender, `§4操作异常 §6服务器返回: §c${result.msg}`)
        }
        let data = result.data
        this.logger.sender(sender, [
            `§6====== ${this.config.prefix} §a服务器信息 §6======`,
            `§6服务器: §a${data.name}`,
            `§6喵币余额: §b${data.score} §6喵币`,
            `§6喵币比例: §b${data.ratio}`,
            `§6今日收入: §b${data.today} §6喵币`,
            `§6====== ${this.config.prefix} §a服务器信息 §6======`,
        ])
    }

    private cmdratio(sender: any, ratioStr: string, confirm: string) {
        if (!sender.isOp()) { return this.logger.sender(sender, '§4你没有此命令的权限!') }
        if (!sender.getItemInHand) { return this.logger.sender(sender, '§c手持物品检测异常 请检查是否在客户端执行命令!') }
        let [ratio, mbr, msg] = this.ratio2string(ratioStr)
        if (!confirm) {
            return this.logger.sender(sender, [
                `§4警告: 您正在设置服务器喵币/${this.config.coinName}兑换比例 设置后将实时生效!`,
                `§6您设置的兑换比例为 ` + msg,
                `§6玩家至少需要 §a${mbr}喵币 §6才可以兑换${this.config.coinName}!`,
                `§6请执行 §b/mrd ratio §c${ratio} §econfirm §c确认修改!`
            ])
        }
        if (confirm != 'confirm') return this.logger.sender(sender, `§6请执行 §b/mrd ratio §c${ratio} §econfirm §c确认修改!`)
        this.scanAuth(sender, "ratio", {
            title: `是否授权 ${this.serverInfo.name} 调整兑换比例`,
            content: [
                `操作玩家: ${sender.getName()}`,
                `调整前: ${this.serverInfo.ratio}`,
                `调整后: ${msg.replace(/§./ig, '')}`,
                '调整结果实时生效!',
                '跨服端 将自动同步比例!',
                '非跨服端 请重载插件同步比例!'
            ].join('\n')
        }, (token) => {
            let result = this.httpPost(`https://reward.yumc.pw/server/ratio`, {
                id: this.config.serverId,
                token: this.config.serverToken,
                ratio,
                userToken: token
            })
            if (result.code !== 200) {
                return this.logger.sender(sender, `§4操作异常 §6服务器返回: §c${result.msg}`)
            }
            this.logger.sender(sender, `§a操作成功 §6服务器返回: §a${result.msg}`)
            this.updateServerInfo(sender)
            this.sendBroadcast(sender, `${this.config.prefix} §6当前兑换比例已调整为 ` + msg)
        })
    }

    private cmdreload() {
        this.config.reload()
    }

    private ratio2string(ratio) {
        ratio = parseFloat(ratio)
        if (ratio > 1) {
            return [ratio, 1, `§c${ratio} §6就是 §a1喵币 §6=> §c${ratio}${this.config.coinName}!`]
        }
        let mbr = Math.round(1 / ratio * 10000) / 10000
        return [ratio, mbr, `§c${ratio} §6就是 §a${mbr}喵币 §6=> §c1${this.config.coinName}!`]
    }

    private sendBroadcast(player, message) {
        if (!this.isBungeeCord) { return org.bukkit.Bukkit.broadcastMessage(message) }
        this.bungee.for(player).broadcast(message).send()
    }

    private bindServer(sender: org.bukkit.entity.Player) {
        if (!sender.isOp()) { return this.logger.sender(sender, '§4您没有配置服务器的权限!') }
        this.logger.sender(sender, '§a正在请求二维码 请稍候...')
        let scanObj = http.get(`https://reward.yumc.pw/server/scan`)
        if (scanObj.code !== 200) {
            return this.logger.sender(sender, '§c获取服务器绑定码失败! Error: ' + scanObj.msg)
        }
        this.cacheBindUuid = scanObj.data.uuid
        let sync = { scaned: false }
        this.taskManager.create(() => {
            let check = this.httpPost(`https://reward.yumc.pw/server/check`, {
                token: this.cacheBindUuid,
                sync: true
            })
            if (check.code == 200) {
                this.config.serverId = check.data.serverId
                this.config.serverToken = check.data.serverToken
                this.config.save()
                this.logger.sender(sender, '§a已成功绑定服务器: §b' + check.data.serverName)
                this.updateServerInfo(sender)
                this.updateOnlinePlayersInfo()
            }
            sync.scaned = true
        }).async().submit()
        this.setItemAndTp(sender, scanObj.data.url, sync)
    }

    private bindUser(sender: org.bukkit.entity.Player) {
        if (!this.serverInfo) { return this.logger.sender(sender, '§4当前服务器尚未配置绑定ID 请联系腐竹进行配置!') }
        let check = this.httpPost(`https://reward.yumc.pw/server/query`, {
            id: this.config.serverId,
            token: this.config.serverToken
        })
        if (check.code !== 200) {
            return this.logger.sender(sender, '§4获取绑定参数异常! §cError: ' + check.msg)
        }
        let queryUser = this.queryUser(sender)
        if (queryUser.code == 200) {
            this.logger.sender(sender, ['§a当前用户已绑定! §3如需看广告请扫码进入!'])
            return this.cmdopen(sender)
        }
        this.logger.sender(sender, '§a正在请求二维码 请稍候...')
        let bindUrl = 'https://m.q.qq.com/a/p/1110360279?s=' + encodeURIComponent(`pages/my/index?bindType=user&serverId=${this.config.serverId}&uuid=${sender.getUniqueId().toString()}&username=${sender.getName()}`)
        let sync = { scaned: false, timeout: false }
        this.taskManager.create(() => {
            let queryUser = this.queryUser(sender, true)
            if (queryUser.code == 200) {
                this.sendResult(sender, '绑定成功', queryUser.data)
                sync.scaned = true
            }
        }).async().submit()
        this.setItemAndTp(sender, bindUrl, sync)
    }

    public sendActionBar(sender, message) {
        if (!this.downgrade) {
            this.chat.sendActionBar(sender, message)
        }
    }

    public sendTitle(sender: any, title: string, subtitle: string = '', fadeIn: number = 20, time: number = 100, fadeOut: number = 20) {
        if (!title) return
        if (this.downgrade) {
            this.logger.sender(sender, `${title}${subtitle ? ` ${subtitle}` : ''}`)
        } else {
            this.chat.sendTitle(sender, title, subtitle, fadeIn, time, fadeOut)
        }
    }

    public clearTitle(sender) {
        this.chat.clearTitle(sender)
    }

    public setItemAndTp(sender: org.bukkit.entity.Player, content: string, sync: { scaned: boolean, left?: number, cancelled?: boolean }, name: string = '手机QQ扫描二维码', tip: string = '手机QQ扫描二维码') {
        this.taskManager.create(() => {
            if (!sync.left) { sync.left = 55 }
            sync.cancelled = false
            let task = this.taskManager.create(() => {
                try {
                    if (sync.scaned || !sender.isOnline() || !this.isHoldQrCodeItem(sender) || --sync.left < 0) {
                        if (sync.left < 0) {
                            this.logger.sender(sender, '§c二维码已过期 请重新获取 如已扫码请忽略!')
                            task.cancel()
                        }
                        this.cancelTask(sender)
                        sync.cancelled = true
                        return
                    }
                    this.sendActionBar(sender, `§c§l${tip} 剩余 ${sync.left} 秒...`)
                } catch (error) {
                    console.ex(error)
                }
            }, this).async().later(20).timer(20).submit()
            this.playerTaskCache.set(sender.getName(), task)
            if (this.downgrade) { this.downgradeTask(sender) }
            this.playerImageCache.set(sender.getName(), org.bukkit.map.MapPalette.imageToBytes(this.createQrcode(content)))
            if (!this.downgrade) {
                let temp = sender.getLocation()
                temp.setPitch(90)
                sender.teleport(temp)
            }
            this.sendWindowItems(sender, this.createQrCodeMapItem(name))
            sender.sendMap(this.zeroMapView)
            this.taskManager.create(() => this.sendWindowItems(sender, this.createQrCodeMapItem(name))).later(20).async().submit()
        }).submit()
    }

    private downgradeTask(sender) {
        this.logger.sender(sender, '§c低版本客户端 二维码渲染中 请等待 3 秒 稍候扫码!')
        let waitTask = this.taskManager.create(() => {
            let temp = sender.getLocation()
            temp.setPitch(-90)
            sender.teleport(temp)
        }, this).later(0).timer(20).submit()
        this.taskManager.create(() => {
            waitTask.cancel()
            let temp = sender.getLocation()
            temp.setPitch(90)
            sender.teleport(temp)
        }).later(80).submit()
    }

    private queryUser(sender: org.bukkit.entity.Player, sync = false) {
        if (!this.serverInfo) { return this.logger.sender(sender, '§4当前服务器尚未配置绑定ID 请联系腐竹进行配置!') }
        let result = this.httpPost(`https://reward.yumc.pw/server/queryUser`, {
            id: this.config.serverId,
            token: this.config.serverToken,
            uuid: sender.getUniqueId().toString(),
            username: sender.getName(),
            sync
        })
        this.playerInfoCache.set(sender.getName(), result?.code == 200 ? result.data : null)
        return result
    }

    private cmdquery(sender: org.bukkit.entity.Player) {
        let info = this.queryUser(sender)
        if (info.code !== 200) {
            return this.logger.sender(sender, '§4查询异常! §cError: ' + info.msg)
        }
        this.sendResult(sender, '查询结果', info.data)
    }

    private sendResult(sender: any, title: string, data: any) {
        this.playerInfoCache.set(sender.getName(), data)
        this.logger.sender(sender, [
            `§6====== ${this.config.prefix} §a${title} §6======`,
            `§6用 户 名: §a${sender.getName()}`,
            `§6U U I D: §b${sender.getUniqueId().toString()}`,
            `§6喵    币: §b${data.balance}`,
            `§6签    到: §b${data.sign}`,
            `§6视频广告: §b${data.video}`,
            `§6盒子广告: §b${data.box}`,
            `§6积木广告: §b${data.block}`,
            '§6==========================='
        ])
    }

    public httpPost(url, data) {
        let startTime = Date.now()
        let result = http.post(url, data)
        console.debug(`
====== HTTP POST ======
REQUEST URL : ${url}
REQUEST DATA: ${JSON.stringify(data)}
RESPONSE    : ${JSON.stringify(result)}
CAST TIME   : ${Date.now() - startTime}`)
        return result
    }

    private createQrCodeMapItem(name: string = '手机QQ扫描二维码') {
        let item: org.bukkit.inventory.ItemStack
        item = new org.bukkit.inventory.ItemStack(org.bukkit.Material.FILLED_MAP || org.bukkit.Material.MAP)
        let meta = <org.bukkit.inventory.meta.MapMeta>item.getItemMeta()
        if (meta.setMapView) {
            meta.setMapView(this.zeroMapView)
        } else if (meta.setMapId) {
            meta.setMapId(this.zeroMapView.getId())
        } else {
            item.setDurability(this.zeroMapView.getId())
        }
        meta.setDisplayName(`§c${name}`)
        meta.setLore(["QRCODE"])
        item.setItemMeta(meta)
        return item
    }

    private createQrcode(content: string) {
        let bufferedImage = new BufferedImage(128, 128, BufferedImage.TYPE_INT_RGB)
        let graphics2D = bufferedImage.getGraphics()
        graphics2D.setPaint(Color.WHITE)
        graphics2D.fillRect(0, 0, bufferedImage.getWidth(), bufferedImage.getHeight())
        let qrcode = this.js2qr(content)
        let startPoint = Math.round((bufferedImage.getWidth() - qrcode.getWidth()) / 2)
        graphics2D.drawImage(qrcode, startPoint, startPoint, null)
        graphics2D.dispose()
        return bufferedImage
    }

    private js2qr(contents: string) {
        let qrcode = new QRCode(14, QRErrorCorrectLevel.H)
        qrcode.addData(contents)
        qrcode.make()
        let length = qrcode.getModuleCount()
        let image: java.awt.image.BufferedImage = new BufferedImage(length, length, BufferedImage.TYPE_INT_RGB)
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length; y++) {
                image.setRGB(x, y, qrcode.isDark(x, y) ? 0xFF000000 : 0xFFFFFFFF)
            }
        }
        return image
    }

    private bungeeCordDetect(player) {
        if (this.isBungeeCord === undefined && player) {
            this.bungee.for(player).getServer().send()
        }
    }

    @Listener()
    private PlayerJoinEvent(event: org.bukkit.event.player.PlayerJoinEvent) {
        const player = event.getPlayer()
        this.bungeeCordDetect(player)
        this.updatePlayerInfo(player)
        if (this.config.joinTip) {
            this.taskManager.create(() => this.logger.sender(player, `§a本服已使用喵式奖励 §3可以看广告赚${this.config.coinName} §c/mrd help §b查看帮助!`)).later(50).submit()
        }
    }

    @Listener()
    private PlayerDropItemEvent(event: org.bukkit.event.player.PlayerDropItemEvent) {
        if (this.checkAndClear(event.getPlayer())) {
            event.setCancelled(true)
        }
    }

    @Listener()
    private PlayerItemHeldEvent(event: org.bukkit.event.player.PlayerItemHeldEvent) {
        this.checkAndClear(event.getPlayer())
    }

    @Listener()
    private PlayerQuitEvent(event: org.bukkit.event.player.PlayerQuitEvent) {
        this.checkAndClear(event.getPlayer())
    }

    public cancelTask(player) {
        if (!this.playerTaskCache.has(player.getName())) { return }
        this.checkAndClear(player)
        this.sendActionBar(player, "")
        player.updateInventory()
        this.playerTaskCache.get(player.getName()).cancel()
        this.playerTaskCache.delete(player.getName())
        this.playerImageCache.delete(player.getName())
    }

    private isHoldQrCodeItem(player: org.bukkit.entity.Player) {
        return this.playerImageCache.has(player.getName())
    }

    private checkAndClear(player: org.bukkit.entity.Player) {
        if (this.isHoldQrCodeItem(player)) {
            this.playerImageCache.delete(player.getName())
            return true
        }
        return false
    }

    private cmdhelp(sender: any) {
        let help = [
            `§6====== ${this.config.prefix} §a帮助菜单 §6======`,
            `§6/mrd bind §a绑定圈云盒子`,
            `§6/mrd open §a打开圈云盒子`,
            `§6/mrd query §a查询当前账户`,
            `§6/mrd draw §e<兑换数量> §a兑换${this.config.coinName}`
        ]
        if (sender.isOp()) {
            help = help.concat([
                `§c由于您是管理员 以为您展示额外命令`,
                `§6/mrd bind server §a绑定服务器`,
                `§6/mrd ratio §e<兑换比例> §a设置喵币/${this.config.coinName}兑换比例`,
                `§6/mrd statistic §3近期收入统计`,
                `§6/mrd rank <boardcast>(是否公告) §2今日兑换排行`,
                `§6/mrd server §c当前服务器信息`,
                `§6兑换比例设置说明: §b默认比例为 0.001 §6=> §a1000喵币 §6兑换 §c1${this.config.coinName}`,
                `§c注意 设置比例后 玩家兑换${this.config.coinName}数量不能少于 1${this.config.coinName}`,
                `§c比如 设置了0.001 那就是 玩家至少 1000喵币 才能兑换!`
            ])
        }
        this.logger.sender(sender, help)
    }

    @Tab()
    private tabmrd(sender: any, _command: any, args: string | any[]) {
        if (args.length === 1) return ['help', 'bind', 'show', 'statistic', 'query', 'draw', 'ratio', 'rank', 'server']
        if (args.length === 2 && args[0] === "bind" && sender.isOp()) return ['server']
    }
}
