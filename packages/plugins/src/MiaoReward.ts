import { constants, task, server, channel, chat, proxy } from "@ccms/api"
import { JSPlugin, interfaces, Cmd, Tab, Listener, Config } from "@ccms/plugin"

import { QRCode, QRErrorCorrectLevel } from '@ccms/common/dist/qrcode'

import { Autowired, JSClass, optional } from '@ccms/container'
import http from '@ccms/common/dist/http'

let MapView
let Bukkit
let MapRenderer
let ItemStack
let Material

try {
  MapView = Java.type('org.bukkit.map.MapView')
  Bukkit = Java.type('org.bukkit.Bukkit')
  MapRenderer = Java.type('org.bukkit.map.MapRenderer')
  ItemStack = Java.type('org.bukkit.inventory.ItemStack')
  Material = Java.type('org.bukkit.Material')
} catch (error) {
}

const BufferedImage = Java.type('java.awt.image.BufferedImage')
const Color = Java.type('java.awt.Color')

class QRCodeRender {
  private _proxy
  private image
  private rendered = false
  constructor() {
    const MapRendererAdapter = Java.extend(MapRenderer, {
      render: (_mapView, mapCanvas, _player) => {
        if (this.rendered) return
        if (this.image) {
          mapCanvas.drawImage(0, 0, this.image)
        }
        this.rendered = true
      }
    })
    this._proxy = new MapRendererAdapter()
  }
  setImage(image) {
    this.image = image
    this.rendered = false
  }
  getHandler() {
    return this._proxy
  }
}

interface PlaceholderAPI {
  registerPlaceholderHook: (key: string, onPlaceholderRequest: (player, s) => string) => void
  unregisterPlaceholderHook: (key: string) => void
  setPlaceholders: (player: any, str: string) => string
}

interface UserInfo {
  balance: number
  sign: string
  video: string
  box: string
}

@JSPlugin({ prefix: 'MRD', version: '1.3.2', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename })
export class MiaoReward extends interfaces.Plugin {
  private serverInfo: any
  private cacheBindUuid = ''
  private zeroMapView = undefined
  private zeroMapRender: QRCodeRender = undefined
  private isBinding = false
  private bindingUser = 'unknow'
  private bindingTask = undefined
  private bindingLeftTime = 45
  private bindingNotify = new java.util.HashSet<org.bukkit.entity.Player>()
  private drawCooldown = new Map<string, number>()
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
  private config = {
    prefix: '§6[§b广告系统§6]§r',
    serverId: '',
    serverToken: '',
    drawCommand: 'p give %player_name% %amount%',
    drawCooldown: 300
  }

  @JSClass('me.clip.placeholderapi.PlaceholderAPI')
  private PlaceholderAPI: PlaceholderAPI
  @JSClass('me.clip.placeholderapi.PlaceholderHook')
  private PlaceholderHook: any

  private isBungeeCord = undefined
  private channelOff: { off: () => void }

  load() {
    this.config.prefix = this.config.prefix || '§6[§b广告系统§6]§r'
    this.config.drawCommand = this.config.drawCommand || 'p give %player_name% %amount%'
    this.config.drawCooldown = this.config.drawCooldown || 300
    //@ts-ignore
    this.logger.prefix = this.config.prefix
    this.downgrade = Bukkit.getServer().class.name.split('.')[3] == "v1_7_R4"
    this.updateServerInfo()
    this.updatePlayerInfo()
  }

  private updateServerInfo(player?: any) {
    this.taskManager.create(() => {
      if (this.config.serverId) {
        let result = this.httpPost(`https://reward.yumc.pw/server/server`, {
          id: this.config.serverId,
          token: this.config.serverToken
        })
        if (result.code == 200) {
          this.serverInfo = result.data
          if (player) this.bungee.for(player).forward("ALL", "MiaoReward", { type: "updateServerInfo", data: result.data }).send()
        }
      }
    }).async().submit()
  }

  private updatePlayerInfo(player?: any) {
    this.taskManager.create(() => {
      Java.from(this.server.getOnlinePlayers()).forEach(p => {
        let info = this.queryUser(p)
        if (info.code == 200) {
          this.playerInfoCache.set(p.getName(), info.data)
        }
      })
    }).async().submit()
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
      this.PlaceholderAPI.registerPlaceholderHook("mrd", new this.PlaceholderHook({
        onPlaceholderRequest: (player: any, s: string) => {
          if (!this.playerInfoCache.has(player.getName())) {
            return '用户未绑定'
          }
          let data = this.playerInfoCache.get(player.getName())
          switch (s.toLowerCase()) {
            case "balance":
              return data.balance
            case "sign":
              return data.sign
            case "box":
              return data.box
            default:
          }
          return "未知的参数: " + s
        }
      }))
    }
  }

  private initZeroMap() {
    this.taskManager.create(() => {
      this.zeroMapRender = new QRCodeRender()
      this.zeroMapView = Bukkit.getMap(0) || Bukkit.createMap(Bukkit.getWorlds()[0])
      this.zeroMapView.setScale(MapView.Scale.FARTHEST)
      this.zeroMapView.getRenderers().forEach(r => this.zeroMapView.removeRenderer(r))
      this.zeroMapView.addRenderer(this.zeroMapRender.getHandler())
    }).submit()
  }

  disable() {
    this.PlaceholderAPI.unregisterPlaceholderHook("mrd")
    Java.from(this.server.getOnlinePlayers()).forEach(p => this.checkAndClear(p))
    this.channelOff?.off()
  }

  @Cmd()
  mrd(sender: any, command: string, args: string[]) {
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

  private scanAuth(sender: org.bukkit.entity.Player, scanType: string, scanObj: { title: string, content: string }, success: (token: string, user: any) => void, cancel?: () => void) {
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

  private bindCheck(sender: org.bukkit.entity.Player, cooldown: number) {
    if (this.isBinding) {
      let bindUser = Bukkit.getPlayerExact(this.bindingUser)
      if (bindUser && bindUser.isOnline() && this.isHoldQrCodeItem(bindUser)) {
        this.bindingNotify.add(sender)
        this.logger.sender(sender, [
          "§c当前 §a" + this.bindingUser + " §c玩家正在扫码",
          "§6请等待 §e" + this.bindingLeftTime + "秒 §6后重试...",
          "§a玩家操作完成后将会通知您继续操作..."
        ])
        return true
      }
    }
    if (this.drawCooldown.has(sender.getName()) && !sender.hasPermission('mrd.admin')) {
      let leftTime = cooldown - (Date.now() - this.drawCooldown.get(sender.getName())) / 1000
      if (leftTime > 0) {
        this.logger.sender(sender, `§c扫码功能冷却中 剩余 ${leftTime} 秒!`)
        return true
      }
    }
    this.drawCooldown.set(sender.getName(), Date.now())
    this.isBinding = true
    this.bindingUser = sender.getName()
    this.bindingNotify.clear()
    return false
  }

  cmdbind(sender: org.bukkit.entity.Player, server: boolean) {
    if (this.bindCheck(sender, 60)) return
    if (!sender.getItemInHand) { return this.logger.sender(sender, '§c手持物品检测异常 请检查是否在客户端执行命令!') }
    if (sender.getItemInHand()?.getType() !== Material.AIR) { return this.logger.sender(sender, "§c请空手执行此命令!") }
    if (server) {
      if (!sender.isOp()) { return this.logger.sender(sender, '§4您没有配置服务器的权限!') }
      this.bindServer(sender)
    } else {
      if (!this.serverInfo) { return this.logger.sender(sender, '§4当前服务器尚未配置绑定ID 请联系腐竹进行配置!') }
      this.bindUser(sender)
    }
  }

  cmddraw(sender: org.bukkit.entity.Player, amount: number) {
    if (!sender.getItemInHand) { return this.logger.sender(sender, '§c手持物品检测异常 请检查是否在客户端执行命令!') }
    amount = Number(amount)
    if (!Number.isInteger(amount)) {
      return this.logger.sender(sender, '§4金额必须是数字!')
    }
    if (amount % 100 !== 0) {
      return this.logger.sender(sender, '§4金额必须是100倍数!')
    }
    if (this.bindCheck(sender, this.config.drawCooldown)) { return }
    this.scanAuth(sender,
      'draw', {
      title: '兑换授权',
      content: [
        "是否授权 " + this.serverInfo.name + " 兑换喵币",
        "兑换玩家: " + sender.getName(),
        "兑换数量: " + amount,
        "兑换比例: " + parseFloat(this.serverInfo.ratio),
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
        return this.sendError(sender, ...draw.msg.split('\n'), `§6执行结果: §4已扣除 §c${amount} §4喵币`, `§6执行命令: §3/${command} §c可能存在异常`)
      }
      this.logger.sender(sender, draw.msg.split('\n'))
      this.sendBroadcast(sender, `${this.config.prefix}§6玩家 §b${sender.getName()} §6成功将 §a${amount}喵币 §6兑换成 §c${draw.data}点券!`)
      this.sendBroadcast(sender, `${this.config.prefix}§c/mrd help §b查看广告系统帮助 §6快来一起看广告赚点券吧!`)
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

  cmdrank(sender: any, boardcast: boolean) {
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

  cmdserver(sender: any) {
    if (!sender.isOp()) { return this.logger.sender(sender, '§4你没有此命令的权限!') }
    let result = this.httpPost(`https://reward.yumc.pw/server/server`, {
      id: this.config.serverId,
      token: this.config.serverToken
    })
    if (result.code !== 200) {
      return this.logger.sender(sender, `§4操作异常 §6服务器返回: §c${result.msg}`)
    }
    this.logger.sender(sender, [
      `§6====== ${this.config.prefix} §a服务器信息 §6======`,
      `§6服务器: §a${result.data.name}`,
      `§6喵币余额: §b${result.data.score} §6喵币`,
      `§6喵币比例: §b${result.data.ratio}`,
      `§6今日收入: §b${result.data.today} §6喵币`,
      `§6====== ${this.config.prefix} §a服务器信息 §6======`,
    ])
  }

  cmdratio(sender: any, ratioStr: string, confirm: string) {
    if (!sender.isOp()) { return this.logger.sender(sender, '§4你没有此命令的权限!') }
    if (!sender.getItemInHand) { return this.logger.sender(sender, '§c手持物品检测异常 请检查是否在客户端执行命令!') }
    let [ratio, mbr, msg] = this.ratio2string(ratioStr)
    if (!confirm) {
      return this.logger.sender(sender, [
        '§4警告: 您正在设置服务器喵币/点券兑换比例 设置后将实时生效!',
        `§6您设置的兑换比例为 ` + msg,
        `§6玩家至少需要 §a${mbr}喵币 §6才可以兑换点券!`,
        `§6请执行 §b/mrd ratio §c${ratio} §econfirm §c确认修改!`
      ])
    }
    if (confirm != 'confirm') return this.logger.sender(sender, `§6请执行 §b/mrd ratio §c${ratio} §econfirm §c确认修改!`)
    if (this.bindCheck(sender, 60)) return
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

  private ratio2string(ratio) {
    ratio = parseFloat(ratio)
    if (ratio > 1) {
      return [ratio, 1, `§c${ratio} §6就是 §a1喵币 §6=> §c${ratio}点券!`]
    }
    let mbr = Math.round(1 / ratio * 10000) / 10000
    return [ratio, mbr, `§c${ratio} §6就是 §a${mbr}喵币 §6=> §c1点券!`]
  }

  private sendBroadcast(player, message) {
    if (!this.isBungeeCord) { return org.bukkit.Bukkit.broadcastMessage(message) }
    this.bungee.for(player).broadcast(message).send()
  }

  private bindServer(sender: org.bukkit.entity.Player) {
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
        this.config['save']()
        this.logger.sender(sender, '§a已成功绑定服务器: §b' + check.data.serverName)
        this.updateServerInfo()
      }
      sync.scaned = true
    }).async().submit()
    this.setItemAndTp(sender, scanObj.data.url, sync)
  }

  private bindUser(sender: org.bukkit.entity.Player) {
    if (!this.config.serverId || !this.config.serverToken) { return this.logger.sender(sender, '§4当前服务器尚未配置绑定ID 请联系腐竹进行配置!') }
    this.logger.sender(sender, '§a正在请求二维码 请稍候...')
    let check = this.httpPost(`https://reward.yumc.pw/server/query`, {
      id: this.config.serverId,
      token: this.config.serverToken
    })
    if (check.code !== 200) {
      return this.logger.sender(sender, '§4获取绑定参数异常! §cError: ' + check.msg)
    }
    let queryUser = this.queryUser(sender)
    if (queryUser.code == 200) {
      return this.logger.sender(sender, ['§4当前用户已绑定! §c如需解绑 请联系腐竹!', '§b如需看广告请进QQ群 §a点击聊天框上的圈云盒子!'])
    }
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

  private sendActionBar(sender, message) {
    if (!this.downgrade) {
      this.chat.sendActionBar(sender, message)
    }
  }

  private sendTitle(sender, title, subtitle?) {
    if (!title) return
    if (this.downgrade) {
      this.logger.sender(sender, `${title}${subtitle ? ` ${subtitle}` : ''}`)
    } else {
      this.chat.sendTitle(sender, title, subtitle)
    }
  }

  private setItemAndTp(sender: org.bukkit.entity.Player, content: string, sync: { scaned: boolean }) {
    this.taskManager.create(() => {
      this.bindingLeftTime = 30
      this.bindingTask = this.taskManager.create(() => {
        try {
          if (sync.scaned || !sender.isOnline() || !this.isHoldQrCodeItem(sender) || --this.bindingLeftTime < 0) {
            if (this.bindingLeftTime < 0) {
              this.logger.sender(sender, '§c二维码已过期 请重新获取 如已扫码请忽略!')
            }
            this.cancelTask(sender)
            return
          }
          this.sendActionBar(sender, `§c§l手机QQ扫描二维码 剩余 ${this.bindingLeftTime} 秒...`)
        } catch (error) {
          console.ex(error)
        }
      }).async().later(20).timer(20).submit()
      sender.setItemInHand(this.createQrCodeMapItem(content))
      if (this.downgrade) {
        this.logger.sender(sender, '§c低版本客户端 二维码渲染中 请等待 6 秒 稍候扫码!')
        let waitTask = this.taskManager.create(() => {
          let temp = sender.getLocation()
          temp.setPitch(-90)
          sender.teleport(temp)
        }).later(20).timer(20).submit()
        this.taskManager.create(() => {
          waitTask.cancel()
          let temp = sender.getLocation()
          temp.setPitch(90)
          sender.teleport(temp)
        }).later(150).submit()
      } else {
        let temp = sender.getLocation()
        temp.setPitch(90)
        sender.teleport(temp)
      }
    }).submit()
  }

  private queryUser(sender: org.bukkit.entity.Player, sync = false) {
    if (!this.config.serverId || !this.config.serverToken) { return this.logger.sender(sender, '§4当前服务器尚未配置绑定ID 请联系腐竹进行配置!') }
    return this.httpPost(`https://reward.yumc.pw/server/queryUser`, {
      id: this.config.serverId,
      token: this.config.serverToken,
      uuid: sender.getUniqueId().toString(),
      username: sender.getName(),
      sync
    })
  }

  cmdquery(sender: org.bukkit.entity.Player) {
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
      '§6==========================='
    ])
  }

  private httpPost(url, data) {
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

  private createQrCodeMapItem(content: string) {
    let item: org.bukkit.inventory.ItemStack
    item = new ItemStack(Material.FILLED_MAP || Material.MAP)
    let meta = <org.bukkit.inventory.meta.MapMeta>item.getItemMeta()
    if (meta.setMapView) {
      meta.setMapView(this.zeroMapView)
    } else if (meta.setMapId) {
      meta.setMapId(this.zeroMapView.getId())
    } else {
      item.setDurability(this.zeroMapView.getId())
    }
    meta.setDisplayName('§c请使用手机QQ扫描二维码!')
    meta.setLore(["QRCODE"])
    item.setItemMeta(meta)
    this.zeroMapRender.setImage(this.createQrcode(content))
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
  PlayerJoinEvent(event: org.bukkit.event.player.PlayerJoinEvent) {
    const player = event.getPlayer()
    this.bungeeCordDetect(player)
    let info = this.queryUser(player)
    if (info.code == 200) {
      this.playerInfoCache.set(player.getName(), info.data)
    }
  }

  @Listener()
  PlayerDropItemEvent(event: org.bukkit.event.player.PlayerDropItemEvent) {
    if (this.isQrCodeItem(event.getItemDrop().getItemStack())) {
      event.getItemDrop().remove()
    }
  }

  @Listener()
  PlayerItemHeldEvent(event: org.bukkit.event.player.PlayerItemHeldEvent) {
    let inv = event.getPlayer().getInventory()
    if (this.isQrCodeItem(inv.getItem(event.getPreviousSlot() as any))) {
      inv.setItem(event.getPreviousSlot(), null)
    }
  }

  @Listener()
  InventoryClickEvent(event: org.bukkit.event.inventory.InventoryClickEvent) {
    let item = event.getCurrentItem()
    if (this.isQrCodeItem(item)) {
      event.getInventory().setItem(event.getSlot(), null)
      event.setCancelled(true)
    }
  }

  @Listener()
  PlayerQuitEvent(event: org.bukkit.event.player.PlayerQuitEvent) {
    this.checkAndClear(event.getPlayer())
  }

  private cancelTask(player) {
    if (!this.isBinding) return
    this.isBinding = false
    this.bindingTask.cancel()
    this.bindingTask = undefined
    this.bindingUser = 'unknow'
    this.checkAndClear(player)
    this.sendActionBar(player, "")
    this.zeroMapRender.setImage(undefined)
    //@ts-ignore
    this.bindingNotify.forEach(p => {
      if (p.isOnline()) {
        this.logger.sender(p, `§6用户 §a${player.getName()} §6扫码已完成 §a您可以继续操作!`)
      }
    })
  }

  private isHoldQrCodeItem(player: org.bukkit.entity.Player) {
    return this.isQrCodeItem(player.getItemInHand())
  }

  private checkAndClear(player: org.bukkit.entity.Player) {
    if (this.isHoldQrCodeItem(player)) {
      player.setItemInHand(null)
    }
  }

  private isQrCodeItem(item: org.bukkit.inventory.ItemStack): boolean {
    if (!item) { return false }
    if ((item.getType() == Material.MAP || item.getType() == Material.FILLED_MAP) && item.hasItemMeta()) {
      return Java.from(item.getItemMeta().getLore()).indexOf('QRCODE') != -1
    }
    return false
  }

  cmdhelp(sender: any) {
    let help = [
      `§6====== ${this.config.prefix} §a帮助菜单 §6======`,
      `§6/mrd bind §a绑定圈云盒子`,
      `§6/mrd query §a查询当前账户`,
      `§6/mrd draw §e<兑换数量> §a兑换点券`
    ]
    if (sender.isOp()) {
      help = help.concat([
        `§c由于您是管理员 以为您展示额外命令`,
        `§6/mrd bind server §a绑定服务器`,
        `§6/mrd ratio §e<兑换比例> §a设置喵币/点券兑换比例`,
        `§6/mrd statistic §3近期收入统计`,
        `§6/mrd rank <boardcast>(是否公告) §2今日兑换排行`,
        `§6/mrd server §c当前服务器信息`,
        `§6兑换比例设置说明: §b默认比例为 0.001 §6=> §a1000喵币 §6兑换 §c1点券`,
        `§c注意 设置比例后 玩家兑换点券数量不能少于 1点券`,
        `§c比如 设置了0.001 那就是 玩家至少 1000喵币 才能兑换!`
      ])
    }
    this.logger.sender(sender, help)
  }

  @Tab()
  tabmrd(sender: any, _command: any, args: string | any[]) {
    if (args.length === 1) return ['help', 'bind', 'show', 'statistic', 'query', 'draw', 'ratio', 'rank', 'server']
    if (args.length === 2 && args[0] === "bind" && sender.isOp()) return ['server']
  }
}
