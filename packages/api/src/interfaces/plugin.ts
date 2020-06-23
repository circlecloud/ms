export namespace plugin {
    /**
     * MiaoScript Plugin
     */
    export const Plugin = Symbol("Plugin")
    /**
     * MiaoScript Plugin Folder
     */
    export const PluginFolder = Symbol("PluginFolder")
    /**
     * Runtime Plugin Instance
     */
    export const PluginInstance = Symbol("PluginInstance")
    /**
     * MiaoScript Plugin Manager Symbol
     */
    export const PluginManager = Symbol("PluginManager")
    /**
     * MiaoScript Plugin Manager Interface
     */
    export interface PluginManager {
        scan(folder: string): void
        build(): void
        loadFromFile(file: string, scanner?: plugin.PluginScanner): Plugin
        load(...args: any[]): void
        enable(...args: any[]): void
        disable(...args: any[]): void
        reload(...args: any[]): void
        getPlugin(name: string): plugin.Plugin
        getPlugins(): Map<string, plugin.Plugin>
    }
    export const PluginScanner = Symbol("PluginScanner")
    /**
     * 插件加载元信息
     */
    export interface PluginLoadMetadata {
        /**
         * 插件加载类型
         */
        type: string
        /**
         * 插件名称
         */
        name?: string
        /**
         * 插件文件
         */
        file?: string
        /**
         * 插件实例
         */
        instance?: any
        /**
         * 插件元信息
         */
        metadata?: PluginMetadata
        /**
         * 插件扫描器
         */
        scanner: PluginScanner
        /**
         * 插件加载器
         */
        loader?: PluginLoader
        /**
         * 是否已加载
         */
        loaded?: boolean
        [key: string]: any
    }
    /**
     * 插件扫描器
     */
    export interface PluginScanner {
        /**
         * 扫描器类型
         */
        type: string
        /**
         * 扫描插件目录 返回插件加载元信息列表
         * @param target 扫描目标
         */
        scan(target: any): PluginLoadMetadata[]
        /**
         * 读取插件 返回插件加载元信息
         * @param target 
         */
        read(target: any): PluginLoadMetadata
        /**
         * 加载扫描到的目标
         * @param target 加载目标
         */
        load(target: PluginLoadMetadata): PluginLoadMetadata
    }
    export const PluginLoader = Symbol("PluginLoader")
    /**
     * 插件加载器
     */
    export interface PluginLoader {
        /**
         * 加载器类型
         */
        type: string
        /**
         * 加载插件 获取元数据
         * @param target 加载目标
         * @param result 扫描器加载的结果
         */
        require(loadMetadata: PluginLoadMetadata): PluginLoadMetadata
        /**
         * 构建插件
         * @param metadata 插件元信息
         */
        build(metadata: PluginMetadata): Plugin
        /**
         * Load 阶段
         * @param plugin 插件
         */
        load(plugin: Plugin): void
        /**
         * Enable 阶段
         * @param plugin 插件
         */
        enable(plugin: Plugin): void
        /**
         * Disable 阶段
         * @param plugin 插件
         */
        disable(plugin: Plugin): void
        /**
         * Reload 阶段
         * @param plugin 插件
         */
        reload(plugin: Plugin): void
    }
    export interface Plugin {
        description: PluginMetadata
        logger: Console
        load(): void
        enable(): void
        disable(): void
    }
    export interface BaseMetadata {
        /**
         * 名称 为空则为对象名称
         */
        name?: string
        /**
         * 支持的服务器列表 为空则代表所有
         */
        servers?: string[]
    }
    export interface PluginMetadata extends BaseMetadata {
        /**
         * 插件名称
         */
        name: string
        /**
         * 前缀
         */
        prefix?: string
        /**
         * 插件版本
         */
        version: string
        /**
         * 插件版本
         */
        author: string | string[]
        /**
         * 插件源文件 必须指定为 __filename
         */
        source: string
        /**
         * 插件类型 默认为 ioc 执行 MiaoScript 加载逻辑
         */
        type?: string
        /**
         * 插件加载信息
         */
        loadMetadata?: PluginLoadMetadata
        /**
         * 插件本体
         */
        target?: any
    }
}
