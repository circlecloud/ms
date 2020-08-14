import { constants, task, server, channel } from "@ccms/api"
import { JSPlugin, interfaces, Cmd, Tab, Listener, Config } from "@ccms/plugin"

import { QRCode, QRErrorCorrectLevel } from '@ccms/common/dist/qrcode'

import { inject, JSClass, optional } from '@ccms/container'
import http from '@ccms/common/dist/http'
import chat from '@ccms/bukkit/dist/enhance/chat'

const MapView = Java.type('org.bukkit.map.MapView')
const Bukkit = Java.type('org.bukkit.Bukkit')
const MapRenderer = Java.type('org.bukkit.map.MapRenderer')
const ItemStack = Java.type('org.bukkit.inventory.ItemStack')
const Material = Java.type('org.bukkit.Material')

const BufferedImage = Java.type('java.awt.image.BufferedImage')
const Graphics2D = Java.type('java.awt.Graphics2D')
const Color = Java.type('java.awt.Color')
const Image = Java.type('java.awt.Image')
const Font = Java.type('java.awt.Font')
const RenderingHints = Java.type('java.awt.RenderingHints')

class QRCodeRender {
  private _proxy
  constructor(image: any) {
    const ProxyAdapter = Java.extend(MapRenderer, {
      render: (_mapView, mapCanvas) => {
        mapCanvas.drawImage(0, 0, image)
      }
    })
    this._proxy = new ProxyAdapter()
  }
  getHandler() {
    return this._proxy
  }
}

interface PlaceholderAPI {
  registerPlaceholderHook: (key: string, onPlaceholderRequest: (player, s) => string) => void
  setPlaceholders: (player: any, str: string) => string
}

@JSPlugin({ prefix: 'MRD', version: '1.1.0', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename })
export class MiaoReward extends interfaces.Plugin {
  private cacheBindUuid = ''
  private cacheTasks = new Map<number, task.Cancelable>()
  private isBinding = false
  private isBindingUser = 'unknow'
  private drawCooldown = new Map<string, number>()

  @inject(server.Server)
  private server: server.Server
  @inject(task.TaskManager)
  private taskManager: task.TaskManager
  @inject(channel.Channel)
  @optional() private Channel: channel.Channel

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
  }

  enable() {
    if (!this.PlaceholderAPI) {
      console.console("§cCan't found me.clip.placeholderapi.PlaceholderAPI variable will not be replaced!")
    } else {
      this.PlaceholderAPI.registerPlaceholderHook("mrd", new this.PlaceholderHook({
        onPlaceholderRequest: (player: any, s: string) => {
          switch (s.toLowerCase()) {
            case "server":
            case "bserver":
            default:
          }
          return "未知的参数"
        }
      }))
    }
    this.channelOff = this.Channel?.listen(this, 'BungeeCord', (data) => { this.isBungeeCord = true })
    let players = this.server.getOnlinePlayers()
    if (players.length) this.bungeeCordDetect(players[0])
  }

  disable() {
    this.cacheTasks.forEach(t => t.cancel())
    this.server.getOnlinePlayers().forEach(p => this.checkAndClear(p))
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

  cmdbind(sender: org.bukkit.entity.Player, server: boolean) {
    if (this.isBinding) {
      let bindUser = Bukkit.getPlayerExact(this.isBindingUser)
      if (bindUser && bindUser.isOnline() && this.isQrCodeItem(bindUser.getItemInHand())[0]) {
        return this.logger.sender(sender, "§c当前 §a" + this.isBindingUser + " §c玩家正在绑定账号 请稍候重试...")
      }
    }
    if (sender.getItemInHand()?.getType() !== Material.AIR) { return this.logger.sender(sender, "§c请空手执行此命令!") }
    this.isBinding = true
    this.isBindingUser = sender.getDisplayName() || sender.getName()
    if (server) {
      if (!sender.isOp()) { return this.logger.sender(sender, '§4您没有配置服务器的权限!') }
      this.bindServer(sender)
    } else {
      this.bindUser(sender)
    }
  }

  cmddraw(sender: org.bukkit.entity.Player, amount: number) {
    if (this.drawCooldown.has(sender.getName())) {
      let leftTime = this.config.drawCooldown - (Date.now() - this.drawCooldown.get(sender.getName())) / 1000
      if (leftTime > 0) {
        return this.logger.sender(sender, `§c点券兑换冷却中 剩余 ${leftTime} 秒!`)
      }
    }
    amount = Number(amount)
    if (!Number.isInteger(amount)) {
      return this.logger.sender(sender, '§4金额必须是数字!')
    }
    if (amount % 100 !== 0) {
      return this.logger.sender(sender, '§4金额必须是100倍数!')
    }
    let address = `https://reward.yumc.pw/server/draw/id/${this.config.serverId}/token/${this.config.serverToken}/uuid/${sender.getUniqueId().toString()}/username/${sender.getName()}/amount/${amount}`
    let draw = http.get(address)
    if (draw.code !== 200) {
      return this.sendError(sender, `§4兑换异常 §6服务器返回: §c${draw.msg}`)
    }
    let drawAmount = draw.data
    if (!drawAmount) {
      return this.sendError(sender, '§c服务器返回金额 ' + draw.data + ' 可能存在异常')
    }
    let command = `p give ${sender.getName()} ${draw.data}`
    if (!this.server.dispatchConsoleCommand(command)) {
      return this.sendError(sender, '§6执行命令 §3/' + command + ' §c可能存在异常')
    }
    this.logger.sender(sender, draw.msg.split('\n'))
    this.drawCooldown.set(sender.getName(), Date.now())
    this.sendBoardcast(sender, `${this.config.prefix}§6玩家 §b${sender.getName()} §6成功将 §a${amount}喵币 §6兑换成 §c${draw.data}点券!`)
    this.sendBoardcast(sender, `${this.config.prefix}§c/mrd help §b查看广告系统帮助 §6快来一起看广告赚点券吧!`)
  }

  private sendError(sender, error) {
    return this.logger.sender(sender, [
      `§c========== ${this.config.prefix}§4兑换异常 §c==========`,
      error,
      `§6异常账号: §b${sender.getName()}`,
      `§6异常时间: §a${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      `§c如果喵币被扣除且未得到奖励 请截图发往QQ群!`,
      `§c========== ${this.config.prefix}§4兑换异常 §c==========`,
    ])
  }

  cmdrank(sender: any, boardcast: boolean) {
    if (!sender.isOp()) { return this.logger.sender(sender, '§4你没有此命令的权限!') }
    let result = http.get(`https://reward.yumc.pw/server/rank/id/${this.config.serverId}/token/${this.config.serverToken}`)
    if (result.code !== 200) {
      return this.logger.sender(sender, `§c今日未查询到数据!`)
    }
    let ranks = [
      `§6====== ${this.config.prefix} §a喵币兑换排行 §6======`,
      ...result.data.map((e, i) => `§6${i + 1}. §a${e.username} §6兑换 §3${e.count} §6次 §c${e.amount} §6喵币`),
      `§6====== ${this.config.prefix} §a喵币兑换排行 §6======`,
    ]
    if (boardcast) {
      ranks.forEach(l => this.sendBoardcast(sender, l))
    } else {
      this.logger.sender(sender, ranks)
    }
  }

  cmdserver(sender: any) {
    if (!sender.isOp()) { return this.logger.sender(sender, '§4你没有此命令的权限!') }
    let result = http.get(`https://reward.yumc.pw/server/server/id/${this.config.serverId}/token/${this.config.serverToken}`)
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

  cmdratio(sender: any, ratio: number, confirm: string) {
    if (!sender.isOp()) { return this.logger.sender(sender, '§4你没有此命令的权限!') }
    let mbr = (1 / ratio).toFixed(4)
    if (!confirm) {
      return this.logger.sender(sender, [
        '§4警告: 您正在设置服务器喵币/点券兑换比例 设置后将实时生效!',
        `§6您设置的兑换比例为 §c${ratio} §6=> §a${mbr}喵币 §6兑换 §c1点券`,
        `§6玩家至少需要 §a${mbr}喵币 §6才可以兑换点券!`,
        `§6请执行 §b/mrd ratio §c${ratio} §econfirm §c确认修改!`
      ])
    }
    if (confirm != 'confirm') return this.logger.sender(sender, `§6请执行 §b/mrd ratio §c${ratio} §econfirm §c确认修改!`)
    let result = http.get(`https://reward.yumc.pw/server/ratio/id/${this.config.serverId}/token/${this.config.serverToken}/ratio/${ratio}`)
    if (result.code !== 200) {
      return this.logger.sender(sender, `§4操作异常 §6服务器返回: §c${result.msg}`)
    }
    this.logger.sender(sender, `§a操作成功 §6服务器返回: §a${result.msg}`)
    this.sendBoardcast(sender, `${this.config.prefix} §6当前兑换比例已调整为 §c${ratio} §6=> §a${mbr}喵币 §6兑换 §c1点券!`)
  }

  @JSClass('java.io.ByteArrayOutputStream')
  private ByteArrayOutputStream
  @JSClass('java.io.DataOutputStream')
  private DataOutputStream

  private sendBoardcast(player, message) {
    if (!this.isBungeeCord) { return org.bukkit.Bukkit.broadcastMessage(message) }
    let byteArray = new this.ByteArrayOutputStream()
    let out = new this.DataOutputStream(byteArray)
    out.writeUTF("Message")
    out.writeUTF("ALL")
    out.writeUTF(message)
    player.sendPluginMessage(base.getInstance(), "BungeeCord", byteArray.toByteArray())
  }

  private bindServer(sender: org.bukkit.entity.Player) {
    let scanObj = http.get(`https://reward.yumc.pw/server/scan`)
    if (scanObj.code !== 200) {
      return this.logger.sender(sender, '§c获取服务器绑定码失败! Error: ' + scanObj.msg)
    }
    this.cacheBindUuid = scanObj.data.uuid
    this.setItemAndTp(sender, scanObj.data.url, () => {
      let check = http.get(`https://reward.yumc.pw/server/check/token/${this.cacheBindUuid}`)
      if (check.code == 200) {
        this.config.serverId = check.data.serverId
        this.config.serverToken = check.data.serverToken
        // @ts-ignore
        this.config.save()
        this.checkAndClear(sender)
        this.logger.sender(sender, '§a已成功绑定服务器: §b' + check.data.serverName)
        return true
      }
    })
  }

  private bindUser(sender: org.bukkit.entity.Player) {
    if (!this.config.serverId || !this.config.serverToken) { return this.logger.sender(sender, '§4当前服务器尚未配置绑定ID 请联系腐竹进行配置!') }
    let check = http.get(`https://reward.yumc.pw/server/query?id=${this.config.serverId}&token=${this.config.serverToken}`)
    if (check.code !== 200) {
      return this.logger.sender(sender, '§4获取绑定参数异常! §cError: ' + check.msg)
    }
    let queryUser = this.queryUser(sender)
    if (queryUser.code == 200) {
      return this.logger.sender(sender, ['§4当前用户已绑定! §c如需解绑 请联系腐竹!', '§b如需看广告请进QQ群 点击聊天框上的圈云盒子!'])
    }
    let bindUrl = 'https://m.q.qq.com/a/p/1110360279?s=' + encodeURIComponent(`pages/my/index?bindType=user&serverId=${this.config.serverId}&uuid=${sender.getUniqueId().toString()}&username=${sender.getName()}`)
    this.setItemAndTp(sender, bindUrl, () => {
      let queryUser = this.queryUser(sender)
      if (queryUser.code == 200) {
        this.sendResult(sender, '绑定成功', queryUser.data)
        this.checkAndClear(sender)
        return true
      }
    })
  }

  private setItemAndTp(sender: org.bukkit.entity.Player, content: string, func: () => boolean) {
    this.taskManager.create(() => {
      let [id, item] = this.createQrCodeMapItem(content)
      let times = 0
      let task = this.taskManager.create(() => {
        chat.send(sender, JSON.stringify({
          text: '§c§l请使用手机QQ扫描二维码绑定!'
        }), 2)
        if (func() || !sender.isOnline()) {
          task.cancel()
          this.cacheTasks.delete(id)
          this.isBinding = false
        }
        if (times++ > 120) {
          this.logger.sender(sender, '§c绑定超时!')
          this.checkAndClear(sender)
          task.cancel()
          this.cacheTasks.delete(id)
          this.isBinding = false
        }
      }).async().later(20).timer(20).submit()
      this.cacheTasks.set(id, task)
      sender.setItemInHand(item)
      let temp = sender.getLocation()
      temp.setPitch(90)
      sender.teleport(temp)
    }).submit()
  }

  private queryUser(sender: org.bukkit.entity.Player) {
    return http.get(`https://reward.yumc.pw/server/queryUser/id/${this.config.serverId}/token/${this.config.serverToken}/uuid/${sender.getUniqueId().toString()}/username/${sender.getName()}`)
  }

  cmdquery(sender: org.bukkit.entity.Player) {
    let check = this.queryUser(sender)
    if (check.code !== 200) {
      return this.logger.sender(sender, '§4查询异常! §cError: ' + check.msg)
    }
    this.sendResult(sender, '查询结果', check.data)
  }

  private sendResult(sender: any, title: string, data: any) {
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

  private createQrCodeMapItem(contents: string): [number, any] {
    let view = Bukkit.createMap(Bukkit.getWorlds()[0])
    view.setScale(MapView.Scale.FARTHEST)
    view.getRenderers().forEach(r => view.removeRenderer(r))
    view.addRenderer(new QRCodeRender(this.createQrcode(contents)).getHandler())
    let item: org.bukkit.inventory.ItemStack = new ItemStack(Material.MAP)
    let meta = item.getItemMeta()
    meta.setDisplayName('§c请使用手机QQ扫描二维码绑定!')
    meta.setLore(["QRCODE"])
    item.setDurability(view.getId())
    item.setItemMeta(meta)
    return [view.getId(), item]
  }

  private createQrcode(contents: string) {
    let bufferedImage = new BufferedImage(128, 128, BufferedImage.TYPE_INT_RGB)
    let graphics2D = bufferedImage.getGraphics()
    graphics2D.setPaint(Color.WHITE)
    graphics2D.fillRect(0, 0, bufferedImage.getWidth(), bufferedImage.getHeight())
    let qrcode = this.js2qr(contents)
    let startPoint = Math.round((bufferedImage.getWidth() - qrcode.getWidth()) / 2)
    graphics2D.drawImage(qrcode, startPoint, startPoint, null)
    // let font = new Font("DejaVuSans", Font.PLAIN, 10)
    // graphics2D.setFont(font)
    // let fm = graphics2D.getFontMetrics(font)
    // let text = "Use QQ Scan Bind!"
    // let textWidth = fm.stringWidth(text)
    // let widthX = (128 - textWidth) / 2
    // graphics2D.setColor(Color.BLACK)
    // graphics2D.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_LCD_HRGB)
    // graphics2D['drawString(java.lang.String, int, int)'](text, Math.round(widthX), 122)
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

  // let byteArray = new this.ByteArrayOutputStream()
  // let out = new this.DataOutputStream(byteArray)
  // out.writeUTF("GetServer")
  // player.sendPluginMessage(base.getInstance(), "BungeeCord", byteArray.toByteArray())

  private bungeeCordDetect(player) {
    if (this.isBungeeCord === undefined && player) {
      let byteArray = new this.ByteArrayOutputStream()
      let out = new this.DataOutputStream(byteArray)
      out.writeUTF("GetServer")
      player.sendPluginMessage(base.getInstance(), "BungeeCord", byteArray.toByteArray())
    }
  }

  @Listener()
  PlayerJoinEvent(event: org.bukkit.event.player.PlayerJoinEvent) {
    this.bungeeCordDetect(event.getPlayer())
  }

  @Listener()
  PlayerDropItemEvent(event: org.bukkit.event.player.PlayerDropItemEvent) {
    let [cancelled, id] = this.isQrCodeItem(event.getItemDrop().getItemStack())
    if (id != null && id != undefined && cancelled) {
      event.getItemDrop().remove()
      this.cancelTask(id)
    }
  }

  @Listener()
  PlayerItemHeldEvent(event: org.bukkit.event.player.PlayerItemHeldEvent) {
    let inv = event.getPlayer().getInventory()
    let [cancelled, id] = this.isQrCodeItem(inv.getItem(event.getPreviousSlot() as any))
    if (id != null && id != undefined && cancelled) {
      inv.setItem(event.getPreviousSlot(), null)
      this.cancelTask(id)
    }
  }

  @Listener()
  InventoryClickEvent(event: org.bukkit.event.inventory.InventoryClickEvent) {
    let item = event.getCurrentItem()
    let [cancelled, id] = this.isQrCodeItem(item)
    if (id != null && id != undefined && cancelled) {
      event.getInventory().setItem(event.getSlot(), null)
      this.cancelTask(id)
      event.setCancelled(true)
    }
  }

  @Listener()
  PlayerQuitEvent(event: org.bukkit.event.player.PlayerQuitEvent) {
    this.checkAndClear(event.getPlayer())
  }

  private cancelTask(id) {
    this.cacheTasks.get(id)?.cancel()
    this.cacheTasks.delete(id)
    this.isBinding = false
  }

  private checkAndClear(player: org.bukkit.entity.Player) {
    if (this.isQrCodeItem(player.getItemInHand())[0]) {
      player.setItemInHand(null)
    }
  }

  private isQrCodeItem(item: org.bukkit.inventory.ItemStack): [boolean, number?] {
    if (!item) { return [false] }
    if ((item?.getType() == Material.MAP || item?.getType() == Material.FILLED_MAP) && item.hasItemMeta()) {
      let meta = item.getItemMeta()
      return [!!(Java.from(meta.getLore()).indexOf('QRCODE') != -1), item.getDurability()]
    }
    return [false]
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
    if (args.length === 1) return ['help', 'bind', 'show', 'query', 'draw', 'ratio', 'rank', 'server']
    if (args.length === 2 && args[0] === "bind" && sender.isOp()) return ['server']
  }
}
