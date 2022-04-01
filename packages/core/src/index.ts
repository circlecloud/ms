let containerStartTime = Date.now()
console.i18n("ms.core.ioc.initialize", { scope: global.scope })
import { plugin, server, task, constants } from '@ccms/api'
import { DefaultContainer as container, provideSingleton, ContainerInstance, buildProviderModule, Autowired } from '@ccms/container'
console.i18n("ms.core.ioc.completed", { scope: global.scope, time: (Date.now() - containerStartTime) / 1000 })
import http from '@ccms/common/dist/http'

@provideSingleton(MiaoScriptCore)
class MiaoScriptCore {
    @Autowired(server.Console)
    private Console: Console
    @Autowired(plugin.PluginFolder)
    private pluginFolder: string
    @Autowired()
    private taskManager: task.TaskManager
    @Autowired()
    private pluginManager: plugin.PluginManager

    enable() {
        this.loadServerConsole()
        this.loadPlugins()
        return () => this.disable()
    }

    loadServerConsole() {
        //@ts-ignore
        global.setGlobal('console', new this.Console(), { writable: false, configurable: false })
    }

    loadPlugins() {
        let loadPluginStartTime = new Date().getTime()
        console.i18n("ms.core.plugin.initialize")
        this.pluginManager.scan(this.pluginFolder)
        this.pluginManager.build()
        this.pluginManager.load(this.pluginManager.getPlugins())
        this.pluginManager.enable(this.pluginManager.getPlugins())
        console.i18n("ms.core.plugin.completed", { time: (new Date().getTime() - loadPluginStartTime) / 1000 })
    }

    disable() {
        let disableStartTime = Date.now()
        console.i18n("ms.core.engine.disable")
        this.pluginManager.disable(this.pluginManager.getPlugins())
        this.taskManager.disable()
        process.exit(0)
        console.i18n("ms.core.engine.disable.finish", {
            loader: base.version,
            version: 'v' + global.ScriptEngineVersion,
            time: (new Date().getTime() - disableStartTime) / 1000
        })
    }
}

function detectServer(): constants.ServerType {
    try {
        Java.type("org.bukkit.Bukkit")
        return constants.ServerType.Bukkit
    } catch (ex: any) {
    }
    try {
        Java.type("org.spongepowered.api.Sponge")
        return constants.ServerType.Sponge
    } catch (ex: any) {
    }
    try {
        Java.type("cn.nukkit.Nukkit")
        return constants.ServerType.Nukkit
    } catch (ex: any) {
    }
    try {
        Java.type("net.md_5.bungee.api.ProxyServer")
        return constants.ServerType.Bungee
    } catch (ex: any) {
    }
    try {
        Java.type("org.springframework.boot.SpringApplication")
        return constants.ServerType.Spring
    } catch (ex: any) {
    }
    throw Error('Unknow Server Type...')
}

function initialize() {
    global.ScriptSlowExecuteTime = 30
    global.ScriptEngineVersion = require('../package.json').version
    try {
        engineLoad({
            script: http.get("https://ms.yumc.pw/api/plugin/download/name/initialize"),
            name: 'core/initialize.js'
        })
    } catch (error: any) {
        console.debug(error)
    }
    try {
        let corePackageStartTime = new Date().getTime()
        container.bind(ContainerInstance).toConstantValue(container)
        container.bind(plugin.PluginInstance).toConstantValue(base.getInstance())
        container.bind(plugin.PluginFolder).toConstantValue('plugins')
        let type = detectServer()
        console.i18n("ms.core.initialize.detect", { scope: global.scope, type })
        container.bind(server.ServerType).toConstantValue(type)
        container.bind(server.ServerChecker).toSelf().inSingletonScope()
        container.bind(server.NativePluginManager).toSelf().inSingletonScope()
        console.i18n("ms.core.package.initialize", { scope: global.scope, type })
        require(`${global.scope}/${type}`).default(container)
        require(`${global.scope}/plugin`)
        container.load(buildProviderModule())
        console.i18n("ms.core.package.completed", { scope: global.scope, type, time: (Date.now() - corePackageStartTime) / 1000 })
        let disable = container.get<MiaoScriptCore>(MiaoScriptCore).enable()
        console.i18n("ms.core.engine.completed", {
            loader: base.version,
            version: 'v' + global.ScriptEngineVersion,
            time: (Date.now() - global.ScriptEngineStartTime) / 1000
        })
        return disable
    } catch (error: any) {
        console.i18n("ms.core.initialize.error", { error })
        console.ex(error)
        return () => console.i18n('ms.core.engine.disable.abnormal')
    }
}

export default initialize()
