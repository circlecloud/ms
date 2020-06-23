import i18n from '@ccms/i18n'
import { plugin, server, command, event } from '@ccms/api'
import { inject, provideSingleton, Container, ContainerInstance } from '@ccms/container'
import * as fs from '@ccms/common/dist/fs'

import { interfaces } from './interfaces'
import { getConfigLoader } from './config'
import { getPluginCommandMetadata, getPluginListenerMetadata, getPluginTabCompleterMetadata, getPluginConfigMetadata } from './utils'

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

    private sacnnerMap: Map<string, plugin.PluginScanner>
    private loaderMap: Map<string, plugin.PluginLoader>

    private instanceMap: Map<string, plugin.Plugin>
    private metadataMap: Map<string, plugin.PluginMetadata>

    constructor() {
        this.sacnnerMap = new Map()
        this.loaderMap = new Map()

        this.instanceMap = new Map()
        this.metadataMap = new Map()
    }

    initialize() {
        if (this.pluginInstance === undefined) { throw new Error("Can't found Plugin Instance!") }
        if (this.initialized !== true) {
            console.i18n('ms.plugin.initialize', { plugin: this.pluginInstance, loader: Thread.currentThread().contextClassLoader })
            console.i18n('ms.plugin.event.map', { count: this.EventManager.mapEventName().toFixed(0), type: this.serverType })
            let pluginScanner = this.container.getAll<plugin.PluginScanner>(plugin.PluginScanner)
            pluginScanner.forEach((scanner) => {
                console.debug(`loading plugin sacnner ${scanner.type}...`)
                this.sacnnerMap.set(scanner.type, scanner)
            })
            let pluginLoaders = this.container.getAll<plugin.PluginLoader>(plugin.PluginLoader)
            pluginLoaders.forEach((loader) => {
                console.debug(`loading plugin loader ${loader.type}...`)
                this.loaderMap.set(loader.type, loader)
            })
            this.initialized = true
        }
    }

    scan(folder: string): void {
        if (!folder) { throw new Error('plugin scan folder can\'t be empty!') }
        this.initialize()
        for (const [, scanner] of this.sacnnerMap) {
            try {
                scanner.scan(folder).forEach(loadMetadata => {
                    try {
                        this.loadPlugin(scanner.load(loadMetadata))
                    } catch (error) {
                        console.error(`plugin scanner ${scanner.type} load ${loadMetadata.name} occurred error ${error}`)
                        console.ex(error)
                    }
                })
            } catch (error) {
                console.error(`plugin scanner ${scanner.type} occurred error ${error}`)
                console.ex(error)
            }
        }
    }

    build(): void {
        this.buildPlugins()
    }

    private logStage(plugin: plugin.Plugin, stage: string) {
        console.i18n("ms.plugin.manager.stage", { stage, plugin: plugin.description.name, version: plugin.description.version, author: plugin.description.author })
    }

    private runPluginStage(plugin: plugin.Plugin, stage: string, ext: Function) {
        if (!plugin) { throw new Error(`can't run runPluginStage ${stage} because plugin is ${plugin}`) }
        try {
            this.logStage(plugin, i18n.translate(`ms.plugin.manager.stage.${stage}`))
            ext()
            this.runCatch(plugin, stage)
            this.runCatch(plugin, `${this.serverType}${stage}`)
            plugin.description.loadMetadata.loader[stage](plugin)
        } catch (ex) {
            console.i18n("ms.plugin.manager.stage.exec.error", { plugin: plugin.description.name, executor: stage, error: ex })
        }
    }

    private loadPlugin(loadMetadata: plugin.PluginLoadMetadata) {
        try {
            for (const [, loader] of this.loaderMap) {
                if (loader.require(loadMetadata).loaded) {
                    loadMetadata.loader = loader
                    let metadata = loadMetadata.metadata
                    this.metadataMap.set(metadata.name, metadata)
                    metadata.loadMetadata = loadMetadata
                    return metadata
                }
            }
        } catch (error) {
            console.i18n("ms.plugin.manager.initialize.error", { name: loadMetadata.file, ex: error })
            console.ex(error)
        }
        console.console(`§6scanner: §b${loadMetadata.scanner.type} §ccan\'t load §6file §b${loadMetadata.file}. §eskip!`)
    }

    /**
     * 从文件加载插件
     * @param file java.io.File
     */
    loadFromFile(file: string, scanner = this.sacnnerMap.get('file')): plugin.Plugin {
        if (!file) { throw new Error('plugin file can\'t be null!') }
        if (!scanner) { throw new Error('plugin scanner can\'t be null!') }
        let metadata = this.loadPlugin(scanner.read(file))
        let plugin = metadata.loadMetadata.loader.build(metadata)
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
            this.loadFromFile(pl.description.source, pl.description.loadMetadata.scanner)
        })
    }

    getPlugin(name: string) {
        return this.instanceMap.get(name)
    }

    getPlugins() {
        return this.instanceMap
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
        if (name == this.instanceMap) { return this.instanceMap }
        if (typeof name == 'string' && this.instanceMap.has(name)) { return [this.instanceMap.get(name)] }
        if (name instanceof interfaces.Plugin) { return [name as plugin.Plugin] }
        if (name.description || name.description.name) { return [name as plugin.Plugin] }
        throw new Error(`Plugin ${JSON.stringify(name)} not exist!`)
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

    private buildPlugins() {
        for (const [, metadata] of this.metadataMap) {
            let pluginInstance: plugin.Plugin
            if (!this.loaderMap.has(metadata.type)) {
                console.error(`§4无法加载插件 §c${metadata.name} §4请检查 §c${metadata.type} §4加载器是否正常启用!`)
                continue
            }
            pluginInstance = this.loaderMap.get(metadata.type).build(metadata)
            if (!pluginInstance) { console.error(`§4加载器 §c${metadata.type} §4加载插件 §c${metadata.name} §4失败!`); continue }
            this.instanceMap.set(metadata.name, pluginInstance)
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
}
