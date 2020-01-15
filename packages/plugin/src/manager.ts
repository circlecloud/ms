import { plugin, server, command, event, MiaoScriptConsole } from '@ms/api'
import { injectable, inject, postConstruct, Container, DefaultContainer as container } from '@ms/container'
import * as fs from '@ms/common/dist/fs'

import { getPluginMetadatas, getPluginCommandMetadata, getPluginListenerMetadata, getPlugin, getPluginTabCompleterMetadata } from './utils'
import { interfaces } from './interfaces'

@injectable()
export class PluginManagerImpl implements plugin.PluginManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    @inject(server.ServerType)
    private serverType: string
    @inject(server.Console)
    private Console: MiaoScriptConsole
    @inject(command.Command)
    private CommandManager: command.Command
    @inject(event.Event)
    private EventManager: event.Event

    private pluginMap: Map<string, interfaces.Plugin>

    @postConstruct()
    init() {
        if (this.pluginInstance !== null) {
            // 如果plugin不等于null 则代表是正式环境
            console.info(`Initialization MiaoScript Plugin System: ${this.pluginInstance} ...`)
            this.pluginMap = new Map()
            console.info(`${this.EventManager.mapEventName().toFixed(0)} ${this.serverType} Event Mapping Complate...`)
        }
    }

    scan(folder: string): void {
        var plugin = fs.file(root, folder)
        var files = []
            // load common plugin
            .concat(this.scanFloder(plugin))
            // load space plugin
            .concat(this.scanFloder(fs.file(plugin, this.serverType)))
        this.loadPlugins(files)
    }

    build(container: Container): void {
        this.buildPlugins(container)
    }

    load(...args: any[]): void {
        this.checkAndGet(args[0]).forEach(pl => {
            this.runCatch(pl, 'load')
            this.runCatch(pl, `${this.serverType}load`)
        })
    }

    enable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach(plugin => {
            this.runCatch(plugin, 'enable')
            this.runCatch(plugin, `${this.serverType}enable`)
            this.registryCommand(plugin)
            this.registryListener(plugin)
        })
    }

    disable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach(pl => {
            this.runCatch(pl, 'disable')
            this.runCatch(pl, `${this.serverType}disable`)
            this.unregistryCommand(pl)
            this.unregistryListener(pl)
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
            console.console(`§6插件 §b${pl.description.name} §6执行 §d${func} §6方法时发生错误 §4${ex}`)
            console.ex(ex)
        }
    }

    private checkAndGet(name: string | interfaces.Plugin | undefined): Map<string, interfaces.Plugin> | interfaces.Plugin[] {
        if (name == undefined) { return this.pluginMap }
        if (typeof name == 'string' && this.pluginMap.has(name)) { return [this.pluginMap.get(name)] }
        if (name instanceof interfaces.Plugin) { return [name as interfaces.Plugin] }
        throw new Error(`Plugin ${JSON.stringify(name)} not exist!`)
    }

    private scanFloder(plugin: any): string[] {
        var files = []
        console.info(`Scanning Plugins in ${plugin} ...`)
        this.checkUpdateFolder(plugin)
        fs.list(plugin).forEach((file: any) => files.push(file.toFile()))
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
            console.console(`§6插件 §b${file.name} §6初始化时发生错误 §4${ex.message}`)
            console.ex(ex)
        }
    }

    private updatePlugin(file: any) {
        var update = fs.file(fs.file(file.parentFile, 'update'), file.name)
        if (update.exists()) {
            console.info(`Auto Update Plugin ${file.name} ...`)
            fs.move(update, file, true)
        }
    }

    private createPlugin(file) {
        //@ts-ignore
        require(file, {
            cache: false
        })
    }

    private buildPlugins(container: Container) {
        let pluginMetadatas = getPluginMetadatas()
        pluginMetadatas.forEach(metadata => {
            this.buildPlugin(metadata)
        })
    }

    private buildPlugin(metadata: interfaces.PluginMetadata) {
        this.bindPlugin(metadata)
        let pluginInstance = container.getNamed<interfaces.Plugin>(plugin.Plugin, metadata.name)
        if (!(pluginInstance instanceof interfaces.Plugin)) {
            console.console(`§4found error plugin §b${metadata.source} §4it's not extends interfaces.Plugin, the plugin will be ignore!`)
            return
        }
        this.pluginMap.set(metadata.name, pluginInstance)
        pluginInstance.description = metadata
        // @ts-ignore
        pluginInstance.logger = new this.Console(metadata.prefix || metadata.name)
        return pluginInstance
    }

    private bindPlugin(metadata: interfaces.PluginMetadata) {
        try {
            let pluginInstance = container.getNamed<interfaces.Plugin>(plugin.Plugin, metadata.name)
            if (pluginInstance.description.source + '' !== metadata.source + '') {
                console.console(`§4found duplicate plugin §b${pluginInstance.description.source} §4and §b${metadata.source}§4. the first plugin will be ignore!`)
            }
            container.rebind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        } catch{
            container.bind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        }
    }

    private registryCommand(pluginInstance: interfaces.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        let tabs = getPluginTabCompleterMetadata(pluginInstance)
        cmds.forEach(cmd => {
            let tab = tabs.get(cmd.name)
            this.CommandManager.on(pluginInstance, cmd.name, {
                cmd: pluginInstance[cmd.executor].bind(pluginInstance),
                tab: tab ? pluginInstance[tab.executor].bind(pluginInstance) : undefined
            })
        })
    }

    private registryListener(pluginInstance: interfaces.Plugin) {
        let events = getPluginListenerMetadata(pluginInstance)
        for (const event of events) {
            // ignore space listener
            if (event.servertype && event.servertype != this.serverType) { continue }
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
