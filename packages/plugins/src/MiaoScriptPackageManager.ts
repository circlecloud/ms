import { plugin as pluginApi, task, server, plugin, channel, constants } from '@ccms/api'

import { Translate } from '@ccms/i18n'
import { inject, DefaultContainer as container, optional, JSClass } from '@ccms/container'
import { interfaces, JSPlugin, Cmd, Tab, enable, Listener, disable } from '@ccms/plugin'

import * as fs from '@ccms/common/dist/fs'
import * as reflect from '@ccms/common/dist/reflect'
import http from '@ccms/common/dist/http'

let help = [
    '§6========= §6[§aMiaoScriptPackageManager§6] 帮助 §aBy §bMiaoWoo §6=========',
    '§6/mpm §ainstall §e<插件名称>  §6-  §3安装仓库插件',
    '§6/mpm §aload §e<插件名称>     §6-  §3安装本地插件',
    '§6/mpm §aunload §e<插件名称>   §6-  §3卸载已安装插件',
    '§6/mpm §areload §e<插件名称>   §6-  §3重载已安装插件(无名称则重载自身)',
    '§6/mpm §alist [i]            §6-  §3列出仓库插件[已安装的插件]',
    '§6/mpm §aupdate §e[插件名称]   §6-  §3更新插件(无名称则更新源)',
    '§6/mpm §aupgrade §e[插件名称]  §6-  §3升级插件/框架(§4无名称则升级框架§3)',
    '§6/mpm §arun §e<JS代码>        §6-  §3运行JS代码',
    '§6/mpm §adeploy §e<插件名称>   §6-  §3发布插件',
    '§6/mpm §crestart             §6-  §4重启MiaoScript脚本引擎'
]

let langMap = {
    'main.command.not.exists': '§4未知的子命令: §c{command}',
    'main.command.help.tip': '§6请执行 §b/{command} §ahelp §6查看帮助!',
    'main.command.no.permission': '§c你没有此命令的权限!',
    'list.install.header': '§6当前 §bMiaoScript §6已安装下列插件:',
    'list.install.body': '§6插件名称: §b{name} §6版本: §a{version}\n§6作者: §3{author} §6来源: §c{from}',
    'list.header': '§6当前 §bMiaoScriptPackageCenter §6中存在下列插件:',
    'list.body': '§6插件名称: §b{name} §6版本: §a{version}\n§6作者: §3{author} §6更新时间: §9{updated_at}',
    'plugin.not.exists': '§6插件 §b{name} §c不存在!',
    'plugin.unload.start': '§c开始卸载 §6插件 §b{name} §6版本 §3{version}!',
    'plugin.unload.finish': '§6插件 §b{name} §6版本 §3{version} §a已卸载!',
    'plugin.reload.start': '§a开始重载 §6插件 §b{name} §6版本 §3{version}!',
    'plugin.reload.finish': '§6插件 §b{name} §6版本 §3{version} §a重载完成!',
    'plugin.name.empty': '§c请输入插件名称!',
    'cloud.update.finish': '§6成功从 §aMiaoScriptPackageCenter §6获取到 §a{length} §6个插件!',
    'cloud.not.exists': '§6当前 §aMiaoScriptPackageCenter §c不存在 §a{name} §c插件!',
    'cloud.update.exists': '§6插件 §b{name} §a发现新版本 §3{new_version} §6当前版本 §3{old_version}!',
    'download.start': '§6开始下载插件: §b{name} §6版本 §3{version}',
    'download.url': '§6插件下载地址: §b{url}',
    'download.finish': '§6插件 §b{name} §6版本 §3{version} §a下载完毕 开始加载 ...',
    'install.finish': '§6插件 §b{name} §6版本 §3{version} §a安装成功!',
    'update.finish': '§6插件 §b{name} §6版本 §3{version} §a更新成功!',
    'upgrade.confirm': '§6您正在尝试更新 §bMiaoScript §c核心 §6请执行 §b/mpm §aupgrade §cconfirm §6确认执行!',
    'upgrade.failed': '§6尝试热更新 §bMiaoScript §c核心 §4失败! §6请重启服务器完成更新...',
    'deploy.token.not.exists': '§4请先配置发布Token!',
    'deploy.success': '§6插件 §b{name} §6版本 §3{version} §a发布成功! §6服务器返回: §a{msg}',
    'deploy.fail': '§6插件 §b{name} §6版本 §3{version} §c发布失败! §6服务器返回: §c{msg}',
    'run.script': '§b运行脚本:§r {script}',
    'run.result': '§a返回结果:§r {result}',
    'run.noresult': '§4没有返回结果!',
}

let fallbackMap = langMap

class FakeSender {
    private _proxy
    private name: string
    private plugin: MiaoScriptPackageManager
    constructor(name: string, plugin: MiaoScriptPackageManager, superclass: any) {
        this.name = name
        this.plugin = plugin
        let FakeSenderAdapter = Java.extend(superclass, {
            getName: () => this.name,
            isOp: () => true,
            sendMessage: (message) => this.plugin.sendBungeeCordMessage(this.name, `§6[§3BPM§6][§a${this.plugin.serverName}§6] ${message}`)
        })
        this._proxy = new FakeSenderAdapter()
    }
    getHandler() {
        return this._proxy
    }
}

@JSPlugin({ prefix: 'PM', version: '1.3.0', author: 'MiaoWoo', source: __filename })
export class MiaoScriptPackageManager extends interfaces.Plugin {
    @inject(plugin.PluginManager)
    private pluginManager: pluginApi.PluginManager
    @inject(task.TaskManager)
    private taskManager: task.TaskManager
    @inject(server.ServerType)
    private serverType: string
    @inject(server.Server)
    private server: server.Server
    @inject(pluginApi.PluginFolder)
    private pluginFolder: string
    @inject(channel.Channel)
    @optional() private channel: channel.Channel

    @JSClass('java.io.ByteArrayOutputStream')
    private ByteArrayOutputStream: any
    @JSClass('java.io.DataOutputStream')
    private DataOutputStream: any
    @JSClass('com.google.common.io.ByteStreams')
    private ByteStreams: any

    private packageCache: any[] = [];
    private packageNameCache: string[] = [];

    private isBungeeCord = false
    public serverName: string
    private translate: Translate
    private channelOff: { off: () => void }

    load() {
        this.translate = new Translate({
            langMap,
            fallbackMap
        })
        this.updateRepo(this.server.getConsoleSender())
    }

    @enable({ servers: [constants.ServerType.Bukkit, constants.ServerType.Sponge] })
    serverEnbale() {
        this.channelOff = this.channel?.listen(this, 'BungeeCord', (data) => {
            let input = this.ByteStreams.newDataInput(data)
            let subChannel = input.readUTF()
            switch (subChannel) {
                case "GetServer":
                    this.isBungeeCord = true
                    this.serverName = input.readUTF()
                    break
                case "MiaoScriptPackageManager":
                    this.readForward(input)
                    break
            }
        })
        let players = this.server.getOnlinePlayers()
        if (players.length) this.bungeeCordDetect(players[0])
    }

    @disable({ servers: [constants.ServerType.Bukkit, constants.ServerType.Sponge] })
    serverDisable() {
        this.channelOff?.off()
    }

    private bungeeCordDetect(player) {
        if (player) {
            let byteArray = new this.ByteArrayOutputStream()
            let out = new this.DataOutputStream(byteArray)
            out.writeUTF("GetServer")
            this.channel.send(player, "BungeeCord", byteArray.toByteArray())
        }
    }
    private bungeeCordForward(player, command) {
        if (player) {
            let byteArray = new this.ByteArrayOutputStream()
            let out = new this.DataOutputStream(byteArray)
            out.writeUTF("Forward")
            out.writeUTF("ALL")
            out.writeUTF("MiaoScriptPackageManager")
            out.writeUTF(JSON.stringify(command))
            this.channel.send(player, "BungeeCord", byteArray.toByteArray())
        }
    }
    private readForward(input) {
        let message = JSON.parse(input.readUTF())
        let fakeSender = this.getProxySender(message.sender)
        this.taskManager.create(() => this.main(fakeSender, message.command, message.args)).async().submit()
        this.logger.sender(fakeSender, `§6命令 §b/mpm ${message.args?.join?.(' ')} §a执行成功!`)
    }

    private getProxySender(name: string) {
        switch (this.serverType) {
            case constants.ServerType.Bukkit:
                return new FakeSender(name, this, Java.type('org.bukkit.command.CommandSender')).getHandler()
            case constants.ServerType.Sponge:
                return new FakeSender(name, this, Java.type('org.spongepowered.api.command.CommandSource')).getHandler()
            default:
                return this.server.getConsoleSender()
        }
    }

    @Listener({ servers: [constants.ServerType.Bukkit] })
    PlayerJoinEvent(event: org.bukkit.event.player.PlayerJoinEvent) {
        this.bungeeCordDetect(event.getPlayer())
        if (event.getPlayer().isOp()) {
            this.updateRepo(event.getPlayer())
        }
    }

    @Listener({ servers: [constants.ServerType.Sponge] })
    ClientConnectionEvent$Join(event: org.spongepowered.api.event.network.ClientConnectionEvent.Join) {
        this.bungeeCordDetect(event.getTargetEntity())
        if (event.getTargetEntity().hasPermission('ms.mpm.admin')) {
            this.updateRepo(event.getTargetEntity())
        }
    }

    sendBungeeCordMessage(sender, message) {
        let players = this.server.getOnlinePlayers()
        if (players.length) {
            let byteArray = new this.ByteArrayOutputStream()
            let out = new this.DataOutputStream(byteArray)
            out.writeUTF("Message")
            out.writeUTF(sender)
            out.writeUTF(message)
            this.channel.send(players[0], "BungeeCord", byteArray.toByteArray())
        }
    }

    disable() {
        this.channelOff?.off()
    }

    @Cmd({ servers: [`!${constants.ServerType.Bungee}`] })
    bmpm(sender: any, command: string, args: string[]) {
        if (!sender?.isOp()) { return this.i18n(sender, 'main.command.no.permission') }
        if (!this.isBungeeCord) return this.logger.sender(sender, '§c当前服务器尚未检测到BungeeCord链接...')
        this.taskManager.create(() => this.main(sender, command, args)).async().submit()
        this.bungeeCordForward(sender, { sender: sender.getName(), command, args })
        this.logger.sender(sender, `§6[§3BPM§6][§a${this.serverName}§6] §6命令 §b/mpm ${args.join?.(' ')} §a发布成功!`)
    }

    @Cmd({ servers: [constants.ServerType.Bungee] })
    mpmanager(sender: any, command: string, args: string[]) {
        if (!sender?.isOp()) { return this.i18n(sender, 'main.command.no.permission') }
        this.taskManager.create(() => this.main(sender, command, args)).async().submit()
    }

    @Cmd({ servers: [`!${constants.ServerType.Bungee}`] })
    mpm(sender: any, command: string, args: string[]) {
        if (!sender?.isOp()) { return this.i18n(sender, 'main.command.no.permission') }
        this.taskManager.create(() => this.main(sender, command, args)).async().submit()
    }

    i18n(sender: any, name: string, params?: any) {
        this.logger.sender(sender, this.translate.translate(name, params).split('\n'))
    }

    main(sender: any, command: string, args: string[]) {
        let cmdKey = 'cmd' + (args[0] || 'help')
        if (!this[cmdKey]) {
            this.i18n(sender, 'main.command.not.exists', { command: args[0] })
            this.i18n(sender, 'main.command.help.tip', { command })
            return
        }
        args.shift()
        this[cmdKey](sender, ...args)
    }

    cmdhelp(sender: any) {
        this.logger.sender(sender, help)
    }

    cmdinfo(sender: any) {
        this.logger.sender(sender, [

        ])
    }

    cmdload(sender: any, name: string) {
        let pluginFile = fs.concat(__dirname + '', name)
        if (!fs.exists(pluginFile)) {
            this.i18n(sender, 'plugin.not.exists', { name: `${name}(${pluginFile})` })
            return
        }
        this.pluginManager.loadFromFile(fs.file(pluginFile))
    }

    cmdlist(sender: any, type: string = 'cloud') {
        if (type == "i" || type == "install") {
            this.i18n(sender, 'list.install.header')
            this.pluginManager.getPlugins().forEach((plugin) => {
                this.i18n(sender, 'list.install.body', { ...plugin.description, from: plugin.description.loadMetadata.type })
            })
        } else {
            this.i18n(sender, 'list.header')
            for (var pkgName in this.packageCache) {
                this.i18n(sender, 'list.body', this.packageCache[pkgName])
            }
        }
    }

    cmdinstall(sender: any, name: string) {
        if (!name) { return this.i18n(sender, 'plugin.name.empty') }
        if (this.pluginManager.getPlugins().has(name)) {

            return
        }
        this.download(sender, name, false, () => {
            let plugin = this.pluginManager.loadFromFile(fs.concat(root, this.pluginFolder, name + '.js'))
            this.i18n(sender, 'install.finish', { name, version: plugin.description.version })
        })
    }

    cmdupdate(sender: any, name: string) {
        if (name) {
            this.update(sender, name)
        } else {
            this.updateRepo(sender)
        }
    }

    cmdupgrade(sender: any, name: string, confirm: boolean) {
        if (name == "system") {
            if (!confirm) { return this.i18n(sender, 'upgrade.confirm') }
            let enginePath = fs.path(fs.file(root, 'node_modules'))
            if (enginePath.startsWith(root)) {
                try {
                    base.delete(enginePath)
                    this.cmdrestart(sender)
                } catch (ex) {
                    if (global.debug) {
                        console.ex(ex)
                    }
                    if (fs.exists(enginePath)) {
                        this.i18n(sender, 'upgrade.failed')
                        fs.create(fs.file(root, 'upgrade'))
                    }
                }
            }
            return
        }
        if (this.checkPlugin(sender, name)) {
            this.update(sender, name, () => this.reload(sender, name))
        }
    }

    cmdunload(sender: any, name: string) {
        if (this.checkPlugin(sender, name)) {
            let plugin = this.pluginManager.getPlugins().get(name)
            this.i18n(sender, 'plugin.unload.start', { name, version: plugin.description.version })
            this.pluginManager.disable(plugin)
            this.i18n(sender, 'plugin.unload.finish', { name, version: plugin.description.version })
        }
    }

    cmdreload(sender: any, name: string) {
        name = name || this.description.name
        this.reload(sender, name)
    }

    private reload(sender: any, name: string) {
        if (this.checkPlugin(sender, name)) {
            let plugin = this.pluginManager.getPlugins().get(name)
            this.i18n(sender, 'plugin.reload.start', { name, version: plugin.description.version })
            this.pluginManager.reload(plugin)
            this.i18n(sender, 'plugin.reload.finish', { name, version: this.pluginManager.getPlugins().get(name).description.version })
        }
    }

    checkPlugin(sender: any, name: string) {
        if (name && this.pluginManager.getPlugins().has(name)) { return true }
        this.i18n(sender, 'plugin.not.exists', { name })
        return false
    }

    checkCloudPlugin(sender: any, name: string) {
        if (name && this.packageNameCache.includes(name)) { return true }
        this.i18n(sender, 'cloud.not.exists', { name })
        return false
    }

    cmdrestart(sender: any) {
        if (this.serverType === "sponge") {
            setTimeout(() => this.server.dispatchConsoleCommand('sponge plugins reload'), 0)
            return
        }
        try {
            this.logger.sender(sender, '§6Reloading §3MiaoScript Engine...')
            ScriptEngineContextHolder.disableEngine()
            Packages.java.lang.System.gc()
            ScriptEngineContextHolder.enableEngine()
            this.logger.sender(sender, '§3MiaoScript Engine §6Reload §aSuccessful...')
        } catch (ex) {
            this.logger.sender(sender, "§3MiaoScript Engine §6Reload §cError! ERR: " + ex)
            this.logger.sender(sender, this.logger.stack(ex))
        }
    }

    cmdrun(sender: any, ...args: any[]) {
        try {
            let script = args.join(' ')
            this.i18n(sender, 'run.script', { script })
            let result = this.runCode(script, sender)
            this.i18n(sender, 'run.result', { result: result == undefined ? this.translate.translate('run.noresult') : result + '' })
        } catch (ex) {
            this.logger.sender(sender, this.logger.stack(ex))
        }
    }

    private runCode(code: string, sender: any) {
        let paramNames = [
            'sender',
            'reflect',
            'container',
            'pluginManager'
        ]
        let params = [
            sender,
            reflect,
            container,
            this.pluginManager
        ]
        let tfunc = new Function(
            ...paramNames,
            `var api = require('@ccms/api');
if (this.serverType == "spring") {
    var dbm = container.get(api.database.DataBaseManager)
    var db = dbm.getMainDatabase()
    var df = base.getInstance().getAutowireCapableBeanFactory()
}
return '§a返回结果: §r'+ eval(${JSON.stringify(code)});`)
        return tfunc.apply(this, params) + ''
    }

    cmddeploy(sender: any, name: any) {
        if (!process.env.AccessToken) { return this.i18n(sender, 'deploy.token.not.exists') }
        this.taskManager.create(() => {
            if (this.checkPlugin(sender, name)) {
                let plugin: pluginApi.Plugin = this.pluginManager.getPlugins().get(name)
                let result = http.post("http://ms.yumc.pw/api/plugin/deploy?access_token=" + process.env.AccessToken, {
                    name,
                    author: plugin.description.author,
                    version: plugin.description.version,
                    source: base.read((plugin.description.source || plugin.description.loadMetadata.file).toString())
                })
                this.i18n(sender, result.code == 200 ? 'deploy.success' : 'deploy.fail', { name, msg: result.msg })
            }
        }).async().submit()
    }

    private update(sender: any, name: string, callback?: () => void) {
        if (this.checkCloudPlugin(sender, name)) {
            this.download(sender, name, true, () => {
                this.i18n(sender, 'update.finish', { name, version: this.packageCache[name].version })
                callback?.()
            })
        }
    }

    @Tab({ alias: ['bmpm'] })
    tabmpm(sender: any, command: any, args: string | any[]) {
        if (args.length === 1) { return ['list', 'install', 'update', 'upgrade', 'reload', 'restart', 'run', 'help', 'create', 'deploy'] }
        if (args.length > 1) {
            switch (args[0]) {
                case "list":
                    return ["install", "cloud"]
                case "install":
                    return this.packageNameCache
                case "upgrade":
                    if (args.length == 2) return ["system", ...this.pluginManager.getPlugins().keys()]
                    if (args.length == 3 && args[1] == "system") return ["confirm"]
                    return []
                case "update":
                case "load":
                case "unload":
                case "reload":
                case "deploy":
                    return [...this.pluginManager.getPlugins().keys()]
            }
        }
    }

    updateRepo(sender: any) {
        this.taskManager.create(() => {
            let result = http.get('http://ms.yumc.pw/api/plugin/list')
            for (const pl of result.data) { this.packageCache[pl.name] = pl }
            this.packageNameCache = Object.keys(this.packageCache)
            this.i18n(sender, 'cloud.update.finish', { length: this.packageNameCache.length })
            this.pluginManager.getPlugins().forEach(p => {
                let cloudPlugin = this.packageCache[p.description.name]
                //§6插件名称: §b{name}\n§6版本: §a{version}\n§6作者: §3{author}\§6更新时间: §9{updated_at}
                if (cloudPlugin && cloudPlugin.version != p.description.version) {
                    this.i18n(sender, 'cloud.update.exists', { name: p.description.name, new_version: cloudPlugin.version, old_version: p.description.version })
                }
            })
        }).async().submit()
    }

    download(sender: any, name: string, update: boolean, callback?: () => void) {
        this.taskManager.create(() => {
            let pluginPkg = this.packageCache[name]
            this.i18n(sender, 'download.start', { name, version: pluginPkg.version })
            this.i18n(sender, 'download.url', { url: pluginPkg.url })
            let pluginFile = update ? fs.concat(root, this.pluginFolder, 'update', name + '.js') : fs.concat(root, this.pluginFolder, name + '.js')
            http.download(pluginPkg.url, pluginFile)
            this.i18n(sender, 'download.finish', { name, version: pluginPkg.version })
            callback?.()
        }).async().submit()
    }
}
