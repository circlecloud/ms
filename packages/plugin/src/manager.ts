import i18n from '@ccms/i18n'
import { plugin, server } from '@ccms/api'
import { provideSingleton, Container, ContainerInstance, Autowired } from '@ccms/container'

import './config'
import { interfaces } from './interfaces'
import { PluginTaskManager } from './task'
import { PluginEventManager } from './event'
import { PluginCommandManager } from './command'
import { PluginConfigManager } from './config'

const Thread = Java.type('java.lang.Thread')

@provideSingleton(plugin.PluginManager)
export class PluginManagerImpl implements plugin.PluginManager {
    @Autowired(ContainerInstance)
    private container: Container
    @Autowired(plugin.PluginInstance)
    private pluginInstance: any
    @Autowired(server.ServerType)
    private serverType: string

    @Autowired()
    private serverChecker: server.ServerChecker
    @Autowired()
    private nativePluginManager: server.NativePluginManager

    @Autowired()
    private taskManager: PluginTaskManager
    @Autowired()
    private eventManager: PluginEventManager
    @Autowired()
    private configManager: PluginConfigManager
    @Autowired()
    private commandManager: PluginCommandManager

    private initialized: boolean = false

    private sacnnerMap: Map<string, plugin.PluginScanner>
    private loaderMap: Map<string, plugin.PluginLoader>

    private instanceMap: Map<string, plugin.Plugin>
    private metadataMap: Map<string, plugin.PluginMetadata>
    /**
     * 延时加载插件
     */
    private lazyMetadataMap: Map<string, plugin.PluginMetadata>

    constructor() {
        this.sacnnerMap = new Map()
        this.loaderMap = new Map()

        this.instanceMap = new Map()
        this.metadataMap = new Map()
        this.lazyMetadataMap = new Map()

        // ignore unused
        this.taskManager
        this.eventManager
        this.configManager
        this.commandManager
    }

    initialize() {
        if (this.pluginInstance === undefined) { throw new Error("Can't found Plugin Instance!") }
        if (this.initialized !== true) {
            console.i18n('ms.plugin.initialize', { plugin: this.pluginInstance, loader: Thread.currentThread().contextClassLoader })
            console.i18n('ms.plugin.event.map', { count: this.eventManager.mapEventName(), type: this.serverType })
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
            process.emit('plugin.initialize')
        }
    }

    scan(folder: string): void {
        if (!folder) { throw new Error('plugin scan folder can\'t be empty!') }
        this.initialize()
        for (const [, scanner] of this.sacnnerMap) {
            try {
                console.i18n('ms.plugin.manager.scan', { scanner: scanner.type, folder })
                let plugins = scanner.scan(folder)
                console.i18n('ms.plugin.manager.scan.finish', { scanner: scanner.type, folder, size: plugins.length })
                plugins.forEach(loadMetadata => {
                    try {
                        this.loadAndRequirePlugin(loadMetadata)
                    } catch (error) {
                        console.error(`plugin scanner ${scanner.type} load ${loadMetadata.file} occurred error ${error}`)
                        console.ex(error)
                    }
                })
            } catch (error) {
                console.error(`plugin scanner ${scanner.type} occurred error ${error}`)
                console.ex(error)
            }
        }
        process.emit('plugin.scan', folder)
    }

    build(): void {
        this.buildPlugins()
        process.emit('plugin.build')
    }

    private logStage(plugin: plugin.Plugin, stage: string) {
        console.i18n("ms.plugin.manager.stage", { stage, plugin: plugin.description.name, version: plugin.description.version, author: plugin.description.author })
    }

    private runPluginStage(plugin: plugin.Plugin, stage: string) {
        if (!plugin) { throw new Error(`can't run runPluginStage ${stage} because plugin is ${plugin}`) }
        try {
            this.logStage(plugin, i18n.translate(`ms.plugin.manager.stage.${stage}`))
            process.emit(`plugin.before.${stage}`, plugin)
            this.runCatch(plugin, stage)
            this.runCatch(plugin, `${this.serverType}${stage}`)
            plugin.description.loadMetadata.loader[stage]?.(plugin)
            process.emit(`plugin.after.${stage}`, plugin)
        } catch (ex) {
            console.i18n("ms.plugin.manager.stage.exec.error", { plugin: plugin.description.name, executor: stage, error: ex })
            if (global.debug) { console.ex(ex) }
        }
    }

    private loadPlugin(loadMetadata: plugin.PluginLoadMetadata) {
        if (!loadMetadata) { throw new Error('loadMetadata can\'t be undefiend when loadPlugin!') }
        if (loadMetadata.loaded) { throw new Error(`Plugin file ${loadMetadata.file} is already loaded by ${loadMetadata.loader?.type}!`) }
        try {
            for (const [, loader] of this.loaderMap) {
                if (this.loaderRequirePlugin(loadMetadata, loader)?.loaded) return loadMetadata.metadata
            }
        } catch (error) {
            console.i18n("ms.plugin.manager.initialize.error", { name: loadMetadata.file, ex: error })
            console.ex(error)
        }
        console.console(`§6scanner: §b${loadMetadata.scanner.type} §ccan\'t load §6file §b${loadMetadata.file}. §eskip!`)
    }

    private loaderRequirePlugin(loadMetadata: plugin.PluginLoadMetadata, loader: plugin.PluginLoader) {
        try {
            if (loader.require(loadMetadata).loaded) {
                loadMetadata.loader = loader
                let metadata = loadMetadata.metadata
                if (this.metadataMap.has(metadata.name) && this.instanceMap.has(metadata.name)) {
                    let oldMetadata = this.metadataMap.get(metadata.name)
                    throw new Error(`Plugin ${oldMetadata.name} is already load from ${oldMetadata.source}...`)
                }
                this.metadataMap.set(metadata.name, metadata)
                metadata.loadMetadata = loadMetadata
            }
            return loadMetadata
        } catch (error) {
            if (global.debug) {
                console.console(`§6Loader §b${loader.type} §6load §a${loadMetadata.file} §cerror. §4Err: §c${error}`)
                console.ex(error)
            } else {
                console.warn(`Loader ${loader.type} load ${loadMetadata.file} error. Err: ${error}`)
            }
        }
    }

    private loadAndRequirePlugin(loadMetadata: plugin.PluginLoadMetadata) {
        let startTime = Date.now()
        let metadata = this.loadPlugin(loadMetadata.scanner.load(loadMetadata))
        console.i18n('ms.plugin.manager.build', {
            name: loadMetadata.metadata.name,
            version: loadMetadata.metadata.version,
            file: loadMetadata.file.toString().replace(root, ''),
            scanner: loadMetadata.scanner.type,
            loader: loadMetadata.loader.type,
            cost: (Date.now() - startTime) / 1000
        })
        return metadata
    }

    /**
     * 从文件加载插件
     * @param file java.io.File
     */
    loadFromFile(file: string, scanner = this.sacnnerMap.get('file')): plugin.Plugin {
        if (!file) { throw new Error('plugin file can\'t be undefiend!') }
        if (!scanner) { throw new Error('plugin scanner can\'t be undefiend!') }
        let metadata = this.loadAndRequirePlugin(scanner.read(file))
        let plugin = this.buildPlugin(metadata)
        this.load(plugin)
        this.enable(plugin)
        return plugin
    }

    load(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: plugin.Plugin) => this.runPluginStage(plugin, 'load'))
    }

    enable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: plugin.Plugin) => this.runPluginStage(plugin, 'enable'))
    }

    disable(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((plugin: plugin.Plugin) => {
            this.runPluginStage(plugin, 'disable')
            this.metadataMap.delete(plugin.description.name)
            this.instanceMap.delete(plugin.description.name)
        })
    }

    reload(...args: any[]): void {
        this.checkAndGet(args[0]).forEach((pl: plugin.Plugin) => {
            this.disable(pl)
            this.loadFromFile(pl.description.loadMetadata.file, pl.description.loadMetadata.scanner)
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
        if (name === undefined) throw new Error(`checkAndGet Plugin can't be undefiend!`)
        if (name == this.instanceMap) { return this.instanceMap }
        if (typeof name == 'string' && this.instanceMap.has(name)) { return [this.instanceMap.get(name)] }
        if (name instanceof interfaces.Plugin) { return [name as plugin.Plugin] }
        if (name.description?.name) { return [name as plugin.Plugin] }
        throw new Error(`Plugin ${JSON.stringify(name)} not exist!`)
    }

    private buildPlugins() {
        this.metadataMap.forEach((metadata, key) => {
            if (metadata?.depends?.length) {
                this.lazyMetadataMap.set(key, metadata)
            } else {
                this.buildPlugin(metadata)
            }
        })
        this.lazyMetadataMap.forEach((metadata, key) => this.buildPlugin(metadata))
    }

    private checkDepends(depends: string | string[]) {
        if (!depends) return []
        let loseDepends = []
        for (const depend of depends) { if (!this.metadataMap.has(depend)) loseDepends.push(depend) }
        return loseDepends
    }
    private checkNativeDepends(depends: string | string[]) {
        if (!depends) return []
        let loseDepends = []
        for (const depend of depends) { if (!this.nativePluginManager.has(depend)) loseDepends.push(depend) }
        return loseDepends
    }
    private buildPlugin(metadata: plugin.PluginMetadata) {
        try {
            if (this.instanceMap.has(metadata.name)) { throw new Error(`Plugin ${metadata.name} is already load from ${metadata.source}...`) }
            if (!this.loaderMap.has(metadata.type)) { throw new Error(`§4无法加载插件 §b${metadata.name} §4请检查 §c${metadata.type} §4加载器是否正常启用!`) }
            if (!this.serverChecker.check(metadata.servers)) { throw new Error(`§6插件 §b${metadata.name} §c服务器类型不兼容(${metadata.servers.join(',')}) §6忽略加载...`) }
            let loseDepends = this.checkDepends(metadata.depends) || []
            if (loseDepends.length) { throw new Error(`§4无法加载插件 §b${metadata.name} §4请检查脚本依赖 §3[${loseDepends.join(',')}] §4是否安装完整!`) }
            let loseNativeDepends = this.checkNativeDepends(metadata.nativeDepends) || []
            if (loseNativeDepends.length) { throw new Error(`§4无法加载插件 §b${metadata.name} §4请检查插件依赖 §3[${loseNativeDepends.join(',')}] §4是否安装完整!`) }
            let pluginInstance = this.loaderMap.get(metadata.type).build(metadata)
            if (!pluginInstance) { throw new Error(`§4加载器 §c${metadata.type} §4加载插件 §c${metadata.name} §4失败!`) }
            this.instanceMap.set(metadata.name, pluginInstance)
            return pluginInstance
        } catch (error) {
            console.console(`§4无法加载插件 §b${metadata.name} §4构建插件失败!`)
            console.ex(error)
        }
    }
}
