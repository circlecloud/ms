import i18n from '@ccms/i18n'
import { plugin, server, command, event } from '@ccms/api'
import { inject, provideSingleton, Container, ContainerInstance } from '@ccms/container'
import * as fs from '@ccms/common/dist/fs'

import { getPluginMetadatas, getPluginCommandMetadata, getPluginListenerMetadata, getPlugin, getPluginTabCompleterMetadata, getPluginConfigMetadata, getPluginStageMetadata, getPluginSources } from './utils'
import { interfaces } from './interfaces'
import { getConfigLoader } from './config'

const Thread = Java.type('java.lang.Thread')

@provideSingleton(plugin.PluginManager)
export class PluginManagerImpl implements plugin.PluginManager {
    @inject(ContainerInstance)
    private container: Container
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    @inject(plugin.PluginFolder)
    private pluginFolder: string
    @inject(server.ServerType)
    private serverType: string
    @inject(command.Command)
    private CommandManager: command.Command
    @inject(event.Event)
    private EventManager: event.Event

    private initialized: boolean = false
    private pluginRequireMap: Map<string, any>
    private pluginInstanceMap: Map<string, plugin.Plugin>
    private pluginMetadataMap: Map<string, plugin.PluginMetadata>

    initialize() {
        if (this.pluginInstance === undefined) { throw new Error("Can't found Plugin Instance!") }
        if (this.initialized !== true) {
            console.i18n('ms.plugin.initialize', { plugin: this.pluginInstance, loader: Thread.currentThread().contextClassLoader })
            console.i18n('ms.plugin.event.map', { count: this.EventManager.mapEventName().toFixed(0), type: this.serverType })
            this.pluginRequireMap = new Map()
            this.pluginInstanceMap = new Map()
            this.pluginMetadataMap = getPluginSources()
            this.initialized = true
        }
    }

    scan(folder: string): void {
        this.initialize()
        var plugin = fs.file(root, folder)
        var files = this.scanFolder(plugin)
        this.loadPlugins(files)
    }

    build(): void {
        this.buildPlugins()
    }

    private logStage(plugin: plugin.Plugin, stage: string) {
        console.i18n("ms.plugin.manager.stage", { stage, plugin: plugin.description.name, version: plugin.description.version, author: plugin.description.author })
    }

    private runPluginStage(plugin: plugin.Plugin, stage: string, ext: Function) {
        try {
            this.logStage(plugin, i18n.translate(`ms.plugin.manager.stage.${stage}`))
            ext()
            this.runCatch(plugin, stage)
            this.runCatch(plugin, `${this.serverType}${stage}`)
            this.execPluginStage(plugin, stage)
        } catch (ex) {
            console.i18n("ms.plugin.manager.stage.exec.error", { plugin: plugin.description.name, executor: stage, error: ex })
        }
    }

    /**
     * 从文件加载插件
     * @param file java.io.File
     */
    loadFromFile(file: string): plugin.Plugin {
        let metadata = this.loadPlugin(file)
        let plugin = this.buildPlugin(metadata && metadata.description ? metadata.description : this.pluginMetadataMap.get(file.toString()))
        this.load(plugin)
        this.enable(plugin)
        return plugin
    }

    load(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: plugin.Plugin) => {
            this.runPluginStage(plugin, 'load', () => {
                this.loadConfig(plugin)
            })
        })
    }

    enable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: plugin.Plugin) => {
            this.runPluginStage(plugin, 'enable', () => {
                this.registryCommand(plugin)
                this.registryListener(plugin)
            })
        })
    }

    disable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: plugin.Plugin) => {
            this.runPluginStage(plugin, 'disable', () => {
                this.saveConfig(plugin)
                this.unregistryCommand(plugin)
                this.unregistryListener(plugin)
            })
        })
    }

    reload(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((pl: plugin.Plugin) => {
            this.disable(pl)
            this.loadFromFile(pl.description.source)
        })
    }

    getPlugin(name: string) {
        return this.pluginInstanceMap.get(name)
    }

    getPlugins() {
        return this.pluginInstanceMap
    }

    private runCatch(pl: any, func: string) {
        try {
            if (pl[func]) pl[func].call(pl)
        } catch (ex) {
            console.i18n("ms.plugin.manager.stage.exec.error", { plugin: pl.description.name, executor: func, error: ex })
            console.ex(ex)
        }
    }

    private checkAndGet(name: string | plugin.Plugin | undefined | any): Map<string, plugin.Plugin> | plugin.Plugin[] {
        if (name == this.pluginInstanceMap) { return this.pluginInstanceMap }
        if (typeof name == 'string' && this.pluginInstanceMap.has(name)) { return [this.pluginInstanceMap.get(name)] }
        if (name instanceof interfaces.Plugin) { return [name as plugin.Plugin] }
        if (name.description || name.description.name) { return [name as plugin.Plugin] }
        throw new Error(`Plugin ${JSON.stringify(name)} not exist!`)
    }

    private scanFolder(folder: any): string[] {
        var files = []
        console.i18n('ms.plugin.manager.scan', { folder })
        this.checkUpdateFolder(folder)
        // must check file is exist maybe is a illegal symbolic link file
        fs.list(folder).forEach((file: any) => file.toFile().exists() ? files.push(file.toFile()) : void 0)
        return files
    }

    /**
     * 更新插件
     * @param path
     */
    private checkUpdateFolder(path: any) {
        var update = fs.file(path, "update")
        if (!update.exists()) {
            update.mkdirs()
        }
    }

    private loadPlugins(files: any[]): void {
        this.loadJsPlugins(files)
    }

    /**
    * JS类型插件预加载
    */
    private loadJsPlugins(files: any[]) {
        files.filter(file => file.name.endsWith(".js")).forEach(file => {
            try {
                this.loadPlugin(file)
            } catch (ex) {
                console.i18n("ms.plugin.manager.initialize.error", { name: file.name, ex })
                console.ex(ex)
            }
        })
    }

    private loadPlugin(file: any) {
        this.updatePlugin(file)
        return this.createPlugin(file.toString())
    }

    private updatePlugin(file: any) {
        var update = fs.file(fs.file(file.parentFile, 'update'), file.name)
        if (update.exists()) {
            console.i18n("ms.plugin.manager.build.update", { name: file.name })
            fs.move(update, file, true)
        }
    }

    private allowProcess(servers: string[]) {
        // Not set servers -> allow
        if (!servers || !servers.length) return true
        // include !type -> deny
        let denyServers = servers.filter(svr => svr.startsWith("!"))
        if (denyServers.length !== 0) {
            return !denyServers.includes(`!${this.serverType}`)
        } else {
            // only include -> allow
            return servers.includes(this.serverType)
        }
    }

    private createPlugin(file: string) {
        //@ts-ignore
        let instance = require(file, { cache: false })
        this.pluginRequireMap.set(file, instance)
        return instance
    }

    private buildPlugins() {
        let metadatas = []
        let pluginMetadatas = getPluginMetadatas()
        for (const [_, metadata] of pluginMetadatas) { metadatas.push(metadata) }
        for (const [_, instance] of this.pluginRequireMap) { if (instance.description) { this.buildPlugin(instance.description) } }
        for (const metadata of metadatas) {
            if (!this.allowProcess(metadata.servers)) { continue }
            this.buildPlugin(metadata)
        }
    }

    private buildPlugin(metadata: interfaces.PluginMetadata) {
        let pluginInstance: plugin.Plugin
        switch (metadata.type) {
            case "ioc":
                try {
                    this.bindPlugin(metadata)
                    pluginInstance = this.container.getNamed<plugin.Plugin>(plugin.Plugin, metadata.name)
                    if (!(pluginInstance instanceof interfaces.Plugin)) {
                        console.i18n('ms.plugin.manager.build.not.extends', { source: metadata.source })
                        return
                    }
                } catch (ex) {
                    console.i18n("ms.plugin.manager.initialize.error", { name: metadata.name, ex })
                    console.ex(ex)
                }
                break
            case "basic":
                pluginInstance = this.pluginRequireMap.get(metadata.source.toString())
                break
            default:
                throw new Error('§4不支持的插件类型 请检查加载器是否正常启用!')
        }
        pluginInstance && this.pluginInstanceMap.set(metadata.name, pluginInstance)
        return pluginInstance
    }

    private bindPlugin(metadata: interfaces.PluginMetadata) {
        try {
            let pluginInstance = this.container.getNamed<plugin.Plugin>(plugin.Plugin, metadata.name)
            if (pluginInstance.description.source + '' !== metadata.source + '') {
                console.i18n('ms.plugin.manager.build.duplicate', { exists: pluginInstance.description.source, source: metadata.source })
            }
            this.container.rebind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        } catch{
            this.container.bind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        }
    }

    private loadConfig(plugin: plugin.Plugin) {
        let configs = getPluginConfigMetadata(plugin)
        for (let [_, config] of configs) {
            try {
                let configFile = fs.concat(root, this.pluginFolder, plugin.description.name, config.name + '.' + config.format)
                let configFactory = getConfigLoader(config.format)
                if (!fs.exists(configFile)) {
                    base.save(configFile, configFactory.dump(plugin[config.variable]))
                    console.i18n("ms.plugin.manager.config.save.default", { plugin: plugin.description.name, name: config.name, format: config.format })
                } else {
                    plugin[config.variable] = configFactory.load(base.read(configFile))
                    plugin[config.variable].save = () => {
                        let result = configFactory.dump(plugin[config.variable])
                        base.save(configFile, result)
                        console.debug(`[${plugin.description.name}] Save Config ${config.variable} to file ${configFile} result ${result}`)
                    }
                    console.debug(`[${plugin.description.name}] Load Config ${config.variable} from file ${configFile} result ${JSON.stringify(plugin[config.variable])}`)
                }
            } catch (error) {
                console.i18n("ms.plugin.manager.config.load.error", { plugin: plugin.description.name, name: config.name, format: config.format, error })
                console.ex(error)
            }
        }
    }

    private saveConfig(plugin: plugin.Plugin) {
        let configs = getPluginConfigMetadata(plugin)
        for (let [_, config] of configs) {
            try {
                let configFile = fs.concat(root, this.pluginFolder, plugin.description.name, config.name + '.' + config.format)
                let configFactory = getConfigLoader(config.format)
                if (!config.readonly) { base.save(configFile, configFactory.dump(plugin[config.variable])) }
            } catch (error) {
                console.i18n("ms.plugin.manager.config.save.error", { plugin: plugin.description.name, name: config.name, format: config.format, error })
                console.ex(error)
            }
        }
    }

    private registryCommand(pluginInstance: plugin.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        let tabs = getPluginTabCompleterMetadata(pluginInstance)
        for (const [_, cmd] of cmds) {
            let tab = tabs.get(cmd.name)
            if (!this.allowProcess(cmd.servers)) { continue }
            this.CommandManager.on(pluginInstance, cmd.name, {
                cmd: pluginInstance[cmd.executor].bind(pluginInstance),
                tab: tab ? pluginInstance[tab.executor].bind(pluginInstance) : undefined
            })
        }
    }

    private registryListener(pluginInstance: plugin.Plugin) {
        let events = getPluginListenerMetadata(pluginInstance)
        for (const event of events) {
            // ignore space listener
            if (!this.allowProcess(event.servers)) { continue }
            // here must bind this to pluginInstance
            this.EventManager.listen(pluginInstance, event.name, pluginInstance[event.executor].bind(pluginInstance))
        }
    }

    private unregistryCommand(pluginInstance: plugin.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        cmds.forEach(cmd => {
            this.CommandManager.off(pluginInstance, cmd.name)
        })
    }

    private unregistryListener(pluginInstance: plugin.Plugin) {
        this.EventManager.disable(pluginInstance)
    }

    private execPluginStage(pluginInstance: plugin.Plugin, stageName: string) {
        let stages = getPluginStageMetadata(pluginInstance, stageName)
        for (const stage of stages) {
            if (!this.allowProcess(stage.servers)) { continue }
            console.i18n("ms.plugin.manager.stage.exec", { plugin: pluginInstance.description.name, name: stage.executor, stage: stageName, servers: stage.servers })
            try {
                pluginInstance[stage.executor].apply(pluginInstance)
            } catch (error) {
                console.i18n("ms.plugin.manager.stage.exec.error", { plugin: pluginInstance.description.name, executor: stage.executor, error })
                console.ex(error)
            }
        }
    }
}
