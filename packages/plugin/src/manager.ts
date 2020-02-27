import i18n from '@ms/i18n'
import { plugin, server, command, event } from '@ms/api'
import { inject, provideSingleton, postConstruct, Container, ContainerInstance } from '@ms/container'
import * as fs from '@ms/common/dist/fs'

import { getPluginMetadatas, getPluginCommandMetadata, getPluginListenerMetadata, getPlugin, getPluginTabCompleterMetadata, getPluginConfigMetadata } from './utils'
import { interfaces } from './interfaces'
import { getConfigLoader } from './config'

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

    private pluginMap: Map<string, interfaces.Plugin>

    @postConstruct()
    initialize() {
        if (this.pluginInstance !== null) {
            // 如果plugin不等于null 则代表是正式环境
            console.i18n('ms.plugin.initialize', { plugin: this.pluginInstance })
            this.pluginMap = new Map()
            console.i18n('ms.plugin.event.map', { count: this.EventManager.mapEventName().toFixed(0), type: this.serverType });
        }
    }

    scan(folder: string): void {
        var plugin = fs.file(root, folder)
        var files = []
            // load common plugin
            .concat(this.scanFolder(plugin))
            // load space plugin
            .concat(this.scanFolder(fs.file(plugin, this.serverType)))
        this.loadPlugins(files)
    }

    build(): void {
        this.buildPlugins()
    }

    private logStage(plugin: interfaces.Plugin, stage: string) {
        console.i18n("ms.plugin.manager.stage", { stage, plugin: plugin.description.name, version: plugin.description.version, author: plugin.description.author })
    }

    load(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: interfaces.Plugin) => {
            this.logStage(plugin, i18n.translate("ms.plugin.manager.stage.load"))
            this.loadConfig(plugin)
            this.runCatch(plugin, 'load')
            this.runCatch(plugin, `${this.serverType}load`)
        })
    }

    enable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: interfaces.Plugin) => {
            this.logStage(plugin, i18n.translate("ms.plugin.manager.stage.enable"))
            this.runCatch(plugin, 'enable')
            this.runCatch(plugin, `${this.serverType}enable`)
            this.registryCommand(plugin)
            this.registryListener(plugin)
        })
    }

    disable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: interfaces.Plugin) => {
            this.logStage(plugin, i18n.translate("ms.plugin.manager.stage.disable"))
            this.runCatch(plugin, 'disable')
            this.runCatch(plugin, `${this.serverType}disable`)
            this.unregistryCommand(plugin)
            this.unregistryListener(plugin)
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
            console.console(`§6Plugin §b${pl.description.name} §6exec §d${func} §6function error §4${ex}`)
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

    private checkServers(servers: string[]) {
        if (!servers) { return true }
        if (servers.indexOf(`!${this.serverType}`) != -1) { return false }
        return servers?.indexOf(this.serverType) != -1
    }

    private createPlugin(file: string) {
        //@ts-ignore
        require(file, { cache: false })
    }

    private buildPlugins() {
        let pluginMetadatas = getPluginMetadatas()
        for (const [_, metadata] of pluginMetadatas) {
            if (!this.checkServers(metadata.servers)) { continue }
            this.buildPlugin(metadata)
        }
    }

    private buildPlugin(metadata: interfaces.PluginMetadata) {
        this.bindPlugin(metadata)
        let pluginInstance = this.container.getNamed<interfaces.Plugin>(plugin.Plugin, metadata.name)
        if (!(pluginInstance instanceof interfaces.Plugin)) {
            console.i18n('ms.plugin.manager.build.not.extends', { source: metadata.source })
            return
        }
        this.pluginMap.set(metadata.name, pluginInstance)
        return pluginInstance
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
            if (!this.checkServers(cmd.servers)) { continue }
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
            if (!this.checkServers(event.servers)) { continue }
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
}
