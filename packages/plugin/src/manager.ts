import i18n from '@ms/i18n'
import { plugin, server, command, event } from '@ms/api'
import { inject, provideSingleton, Container, ContainerInstance } from '@ms/container'
import * as fs from '@ms/common/dist/fs'

import { getPluginMetadatas, getPluginCommandMetadata, getPluginListenerMetadata, getPlugin, getPluginTabCompleterMetadata, getPluginConfigMetadata, getPluginStageMetadata } from './utils'
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
    private pluginFolder: string;
    @inject(server.ServerType)
    private serverType: string
    @inject(command.Command)
    private CommandManager: command.Command
    @inject(event.Event)
    private EventManager: event.Event

    private initialized: boolean = false
    private pluginMap: Map<string, interfaces.Plugin>

    initialize() {
        if (this.pluginInstance !== null && this.initialized !== true) {
            // 如果plugin不等于null 则代表是正式环境
            console.i18n('ms.plugin.initialize', { plugin: this.pluginInstance, loader: Thread.currentThread().contextClassLoader })
            this.pluginMap = new Map()
            console.i18n('ms.plugin.event.map', { count: this.EventManager.mapEventName().toFixed(0), type: this.serverType });
            this.initialized = true;
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

    private logStage(plugin: interfaces.Plugin, stage: string) {
        console.i18n("ms.plugin.manager.stage", { stage, plugin: plugin.description.name, version: plugin.description.version, author: plugin.description.author })
    }

    private runPluginStage(plugin: interfaces.Plugin, stage: string, ext: Function) {
        this.logStage(plugin, i18n.translate(`ms.plugin.manager.stage.${stage}`))
        this.runCatch(plugin, stage)
        this.runCatch(plugin, `${this.serverType}${stage}`)
        this.execPluginStage(plugin, stage)
    }

    load(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: interfaces.Plugin) => {
            this.runPluginStage(plugin, 'load', () => {
                this.loadConfig(plugin)
            })
        })
    }

    enable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: interfaces.Plugin) => {
            this.runPluginStage(plugin, 'enable', () => {
                this.registryCommand(plugin)
                this.registryListener(plugin)
            })
        })
    }

    disable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: interfaces.Plugin) => {
            this.runPluginStage(plugin, 'disable', () => {
                this.unregistryCommand(plugin)
                this.unregistryListener(plugin)
            })
        })
    }

    reload(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((pl: interfaces.Plugin) => {
            this.disable(pl)
            this.loadPlugin(pl.description.source)
            pl = this.buildPlugin(getPlugin(pl.description.name))
            this.load(pl)
            this.enable(pl)
        })
    }

    getPlugins() {
        return this.pluginMap
    }

    private runCatch(pl: any, func: string) {
        try {
            if (pl[func]) pl[func].call(pl)
        } catch (ex) {
            console.i18n("ms.plugin.manager.stage.exec.error", { plugin: pl.description.name, executor: func, error: ex })
            console.ex(ex)
        }
    }

    private checkAndGet(name: string | interfaces.Plugin | undefined): Map<string, interfaces.Plugin> | interfaces.Plugin[] {
        if (name == undefined) { return this.pluginMap }
        if (typeof name == 'string' && this.pluginMap.has(name)) { return [this.pluginMap.get(name)] }
        if (name instanceof interfaces.Plugin) { return [name as interfaces.Plugin] }
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
        files.filter(file => file.name.endsWith(".js")).forEach(file => this.loadPlugin(file))
    }

    private loadPlugin(file: any) {
        try {
            this.updatePlugin(file)
            this.createPlugin(file)
        } catch (ex) {
            console.i18n("ms.plugin.manager.initialize.error", { name: file.name, ex })
            console.ex(ex)
        }
    }

    private updatePlugin(file: any) {
        var update = fs.file(fs.file(file.parentFile, 'update'), file.name)
        if (update.exists()) {
            console.i18n("ms.plugin.manager.build.update", { name: file.name })
            fs.move(update, file, true)
        }
    }

    private allowProcess(servers: string[]) {
        // Not set servers allow
        if (!servers || !servers.length) return true
        // include !type deny
        let denyServers = servers.filter(svr => svr.startsWith("!"))
        if (denyServers.length !== 0) {
            return !denyServers.includes(`!${this.serverType}`)
        } else {
            return servers.includes(this.serverType)
        }
    }

    private createPlugin(file: string) {
        //@ts-ignore
        require(file, { cache: false })
    }

    private buildPlugins() {
        let pluginMetadatas = getPluginMetadatas()
        for (const [_, metadata] of pluginMetadatas) {
            if (!this.allowProcess(metadata.servers)) { continue }
            this.buildPlugin(metadata)
        }
    }

    private buildPlugin(metadata: interfaces.PluginMetadata) {
        try {
            this.bindPlugin(metadata)
            let pluginInstance = this.container.getNamed<interfaces.Plugin>(plugin.Plugin, metadata.name)
            if (!(pluginInstance instanceof interfaces.Plugin)) {
                console.i18n('ms.plugin.manager.build.not.extends', { source: metadata.source })
                return
            }
            this.pluginMap.set(metadata.name, pluginInstance)
            return pluginInstance;
        } catch (ex) {
            console.i18n("ms.plugin.manager.initialize.error", { name: metadata.name, ex })
            console.ex(ex)
        }
    }

    private bindPlugin(metadata: interfaces.PluginMetadata) {
        try {
            let pluginInstance = this.container.getNamed<interfaces.Plugin>(plugin.Plugin, metadata.name)
            if (pluginInstance.description.source + '' !== metadata.source + '') {
                console.i18n('ms.plugin.manager.build.duplicate', { exists: pluginInstance.description.source, source: metadata.source })
            }
            this.container.rebind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        } catch{
            this.container.bind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        }
    }

    private loadConfig(plugin: interfaces.Plugin) {
        let configs = getPluginConfigMetadata(plugin);
        for (let [_, config] of configs) {
            let configFile = fs.concat(root, this.pluginFolder, plugin.description.name, config.name + '.' + config.format)
            let configFactory = getConfigLoader(config.format);
            if (!fs.exists(configFile)) {
                base.save(configFile, configFactory.dump(plugin[config.variable]))
                console.i18n("ms.plugin.manager.config.save.default", { plugin: plugin.description.name, name: config.name, format: config.format })
            } else {
                plugin[config.variable] = configFactory.load(base.read(configFile));
            }
        }
    }

    private registryCommand(pluginInstance: interfaces.Plugin) {
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

    private registryListener(pluginInstance: interfaces.Plugin) {
        let events = getPluginListenerMetadata(pluginInstance)
        for (const event of events) {
            // ignore space listener
            if (!this.allowProcess(event.servers)) { continue }
            // here must bind this to pluginInstance
            this.EventManager.listen(pluginInstance, event.name, pluginInstance[event.executor].bind(pluginInstance))
        }
    }

    private unregistryCommand(pluginInstance: interfaces.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        cmds.forEach(cmd => {
            this.CommandManager.off(pluginInstance, cmd.name)
        })
    }

    private unregistryListener(pluginInstance: interfaces.Plugin) {
        this.EventManager.disable(pluginInstance)
    }

    private execPluginStage(pluginInstance: interfaces.Plugin, stageName: string) {
        let stages = getPluginStageMetadata(pluginInstance, stageName);
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
