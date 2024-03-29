let containerStartTime = Date.now()
console.i18n("ms.core.ioc.initialize", { scope: global.scope })
import { plugin, server, task, constants, console as jsconsole } from '@ccms/api'
import { DefaultContainer as container, provideSingleton, ContainerInstance, buildProviderModule, Autowired } from '@ccms/container'
console.i18n("ms.core.ioc.completed", { scope: global.scope, time: (Date.now() - containerStartTime) / 1000 })
import * as yaml from 'js-yaml'
import http from '@ccms/common/dist/http'
import * as fs from '@ccms/common/dist/fs'
import { VersionUtils } from '@ccms/common/dist/version'

const UUID = Java.type('java.util.UUID')
const MiaoScriptAPI = Java.type('pw.yumc.MiaoScript.api.MiaoScriptAPI')

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
        process.emit('core.before.enable')
        this.loadServerConsole()
        try {
            MiaoScriptAPI.setPluginManager(this.pluginManager)
        } catch (error) {
        }
        this.loadPlugins()
        process.emit('core.after.enable')
        console.i18n("ms.core.engine.completed", {
            loader: base.version,
            version: 'v' + global.ScriptEngineVersion,
            time: (Date.now() - global.ScriptEngineStartTime) / 1000
        })
        return () => this.disable()
    }

    loadServerConsole() {
        process.emit('core.before.load.console')
        //@ts-ignore
        global.setGlobal('console', new this.Console(), { writable: false, configurable: false })
        process.emit('core.after.load.console')
    }

    loadPlugins() {
        process.emit('core.before.load.plugins')
        let loadPluginStartTime = new Date().getTime()
        console.i18n("ms.core.plugin.initialize")
        this.pluginManager.scan(this.pluginFolder)
        this.pluginManager.build()
        this.pluginManager.load(this.pluginManager.getPlugins())
        this.pluginManager.enable(this.pluginManager.getPlugins())
        console.i18n("ms.core.plugin.completed", { time: (new Date().getTime() - loadPluginStartTime) / 1000 })
        process.emit('core.after.load.plugins')
    }

    disable() {
        process.emit('core.before.disable')
        let disableStartTime = Date.now()
        console.i18n("ms.core.engine.disable")
        this.pluginManager.disable(this.pluginManager.getPlugins())
        this.taskManager.disable()
        process.emit('core.after.disable')
        loadCoreScript('exit')
        process.emit('core.before.exit')
        process.exit(0)
        console.i18n("ms.core.engine.disable.finish", {
            loader: base.version,
            version: 'v' + global.ScriptEngineVersion,
            time: (new Date().getTime() - disableStartTime) / 1000
        })
        process.emit('core.after.exit')
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

function loadCoreScript(name) {
    try {
        let scriptname = name + (global.debug ? '-debug' : '')
        engineLoad({
            script: http.get(`https://mscript.yumc.pw/api/plugin/download/name/${scriptname}`),
            name: `core/${scriptname}.js`
        })
    } catch (error: any) {
        if (global.debug) {
            console.debug(error)
            console.ex(error)
        }
    }
}

function loadMiaoScriptConfig() {
    let configFile = fs.concat(root, 'config.yml')
    if (!fs.exists(configFile)) {
        global.ScriptEngineConfig = base.save(configFile, yaml.dump({
            uuid: UUID.randomUUID().toString(),
            slow_execute: 50
        }))
    } else {
        global.ScriptEngineConfig = yaml.load(base.read(configFile))
    }
    global.ScriptSlowExecuteTime = global.ScriptEngineConfig.slow_execute || 50
}

function createCore() {
    let corePackageStartTime = new Date().getTime()
    container.bind(ContainerInstance).toConstantValue(container)
    container.bind(plugin.PluginInstance).toConstantValue(base.getInstance())
    container.bind(plugin.PluginFolder).toConstantValue('plugins')
    let type = detectServer()

    process.emit('core.before.initialize.detect')
    console.i18n("ms.core.initialize.detect", { scope: global.scope, type })
    container.bind(server.ServerType).toConstantValue(type)
    container.bind(server.ServerChecker).toSelf().inSingletonScope()
    container.bind(server.NativePluginManager).toSelf().inSingletonScope()
    container.bind(server.NativePluginChecker).toSelf().inSingletonScope()
    process.emit('core.after.initialize.detect')

    process.emit('core.before.package.initialize')
    console.i18n("ms.core.package.initialize", { scope: global.scope, type })
    require(`${global.scope}/${type}`).default(container)
    require(`${global.scope}/plugin`)
    container.load(buildProviderModule())
    console.i18n("ms.core.package.completed", { scope: global.scope, type, time: (Date.now() - corePackageStartTime) / 1000 })
    process.emit('core.after.package.initialize')
    return container.get<MiaoScriptCore>(MiaoScriptCore)
}

function initialize() {
    process.emit('core.before.initialize')
    loadMiaoScriptConfig()
    global.ScriptEngineVersion = require('../package.json').version
    global.setGlobal('loadCoreScript', loadCoreScript)
    loadCoreScript('initialize')
    try {
        let core = createCore()
        return VersionUtils.isGreaterOrEqual(base.version, '0.22.0') ? core : core.enable()
    } catch (error: any) {
        let core = { enable: () => () => console.i18n('ms.core.engine.disable.abnormal') }
        console.i18n("core.initialize.error", { error })
        jsconsole.getStackTrace(error, false).forEach(line => console.log(line))
        process.emit('core.initialize.error')
        return VersionUtils.isGreaterOrEqual(base.version, '0.22.0') ? core : core.enable()
    } finally {
        process.emit('core.after.initialize')
    }
}

export default initialize()
