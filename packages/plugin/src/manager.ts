import i18n from '@ccms/i18n'
import { plugin, server } from '@ccms/api'
import { provideSingleton, Container, ContainerInstance, Autowired } from '@ccms/container'

import { interfaces } from './interfaces'
import { PluginTaskManager } from './task'
import { PluginEventManager } from './event'
import { PluginConfigManager } from './config'
import { PluginCommandManager } from './command'

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
            process.emit('plugin.manager.before.initialize', this)
            console.i18n('ms.plugin.initialize', { plugin: this.pluginInstance, loader: Thread.currentThread().contextClassLoader })
            try {
                console.i18n('ms.plugin.event.map', { count: this.eventManager.mapEventName(), type: this.serverType })
            } catch (error) {
                console.i18n('ms.plugin.event.map.error', { type: this.serverType, error })
            }
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
            process.emit('plugin.manager.after.initialize', this)
        }
    }

    scan(folder: string): void {
        if (!folder) { throw new Error('plugin scan folder can\'t be empty!') }
        this.initialize()
        process.emit('plugin.manager.before.scan', folder, this)
        for (const [, scanner] of this.sacnnerMap) {
            try {
                console.i18n('ms.plugin.manager.scan', { scanner: scanner.type, folder })
                let loadMetadatas = scanner.scan(folder)
                console.i18n('ms.plugin.manager.scan.finish', { scanner: scanner.type, folder, size: loadMetadatas.length })
                for (const loadMetadata of loadMetadatas) {
                    try {
                        this.loadAndRequirePlugin(loadMetadata)
                    } catch (error: any) {
                        console.console(`§c扫描器 §4${scanner.type} §c文件 §4${loadMetadata.file.toString().replace(root, '')} §c编译失败 请提供下列错误给开发者`)
                        console.ex(error)
                    }
                }
            } catch (error: any) {
                console.ex(error)
            }
        }
        process.emit('plugin.manager.after.scan', folder, this)
    }

    build(): void {
        process.emit('plugin.manager.before.build', this)
        this.buildPlugins()
        process.emit('plugin.manager.after.build', this)
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
        } catch (ex: any) {
            console.i18n("ms.plugin.manager.stage.exec.error", { plugin: plugin.description.name, executor: stage, error: ex })
            if (global.debug) { console.ex(ex) }
        }
    }

    private loadPlugin(loadMetadata: plugin.PluginLoadMetadata) {
        if (!loadMetadata) { throw new Error('loadMetadata can\'t be undefiend when loadPlugin!') }
        if (loadMetadata.loaded) { throw new Error(`Plugin file ${loadMetadata.file} is already loaded by ${loadMetadata.loader?.type}!`) }
        process.emit(`plugin.before.require`, loadMetadata)
        try {
            for (const [, loader] of this.loaderMap) {
                if (this.loaderRequirePlugin(loadMetadata, loader)?.loaded) return loadMetadata.metadata
            }
        } catch (error: any) {
            console.i18n("ms.plugin.manager.initialize.error", { name: loadMetadata.file, ex: error })
            console.ex(error)
        }
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
                process.emit(`plugin.after.require`, loadMetadata)
            }
            return loadMetadata
        } catch (error: any) {
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
        if (!metadata) { throw new Error('load plugin metadata failed.') }
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
    loadFromFile(file: string, ext: any = 'js'): plugin.Plugin {
        if (!file) { throw new Error('plugin file can\'t be undefiend.') }
        let scanner = this.sacnnerMap.get(ext)
        if (!scanner) { throw new Error(`plugin scanner ${ext} can't found in sacnnerMap.`) }
        let metadata = this.loadAndRequirePlugin(scanner.read(file))
        this.buildPlugin(metadata)
        let plugin = metadata.target
        if (!plugin) { throw new Error(`plugin scanner ${ext} can't found in sacnnerMap.`) }
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
            this.loadFromFile(pl.description.loadMetadata.file, pl.description.loadMetadata.scanner.type)
        })
    }

    has(name: string) {
        return this.instanceMap.has(name)
    }

    get(name: string) {
        return this.instanceMap.get(name) || null
    }

    getPlugin(name: string) {
        return this.instanceMap.get(name) || null
    }

    getPlugins() {
        return this.instanceMap
    }

    private runCatch(pl: any, func: string) {
        try {
            if (pl[func]) pl[func].call(pl)
        } catch (ex: any) {
            console.i18n("ms.plugin.manager.stage.exec.error", { plugin: pl.description.name, executor: func, error: ex })
            console.ex(ex)
        }
    }

    private checkAndGet(name: string | plugin.Plugin | undefined | any): Map<string, plugin.Plugin> | plugin.Plugin[] {
        if (name === undefined) throw new Error(`checkAndGet Plugin can't be undefiend.`)
        if (name == this.instanceMap) { return this.instanceMap }
        if (typeof name == 'string' && this.instanceMap.has(name)) { return [this.instanceMap.get(name)] }
        if (name instanceof interfaces.Plugin) { return [name as plugin.Plugin] }
        if (name.description?.name) { return [name as plugin.Plugin] }
        throw new Error(`Plugin ${JSON.stringify(name)} not exist.`)
    }

    private buildPlugins() {
        this.metadataMap.forEach((metadata, key) => {
            if (metadata?.depends?.length) {
                this.lazyMetadataMap.set(key, metadata)
            } else {
                this.tryBuildPlugin(metadata)
            }
        })
        this.lazyMetadataMap.forEach((metadata, key) => this.tryBuildPlugin(metadata))
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

    private tryBuildPlugin(metadata: plugin.PluginMetadata) {
        try {
            return this.buildPlugin(metadata)
        } catch (error: any) {
            console.ex(error)
        }
    }

    private buildPlugin(metadata: plugin.PluginMetadata) {
        process.emit(`plugin.before.build`, metadata)
        if (this.instanceMap.has(metadata.name)) { throw new Error(`Plugin ${metadata.name} is already load from ${metadata.source}...`) }
        if (!this.loaderMap.has(metadata.type)) { throw new Error(`§4无法加载插件 §b${metadata.name} §4请检查 §c${metadata.type} §4加载器是否正常启用!`) }
        if (!this.serverChecker.check(metadata.servers)) { throw new Error(`§6插件 §b${metadata.name} §c服务器类型不兼容(${metadata.servers.join(',')}) §6忽略加载...`) }
        let loseDepends = this.checkDepends(metadata.depends) || []
        if (loseDepends.length) { throw new Error(`§4无法加载插件 §b${metadata.name} §4请检查脚本依赖 §3[${loseDepends.join(',')}] §4是否安装完整!`) }
        let loseNativeDepends = this.checkNativeDepends(metadata.nativeDepends) || []
        if (loseNativeDepends.length) { throw new Error(`§4无法加载插件 §b${metadata.name} §4请检查插件依赖 §3[${loseNativeDepends.join(',')}] §4是否安装完整!`) }
        let pluginInstance = this.loaderMap.get(metadata.type).build(metadata)
        if (!pluginInstance) { throw new Error(`§4加载器 §c${metadata.type} §4加载插件 §c${metadata.name} §4失败!`) }
        metadata.target = pluginInstance
        this.instanceMap.set(metadata.name, pluginInstance)
        process.emit(`plugin.after.build`, metadata, pluginInstance)
        return pluginInstance
    }
}
