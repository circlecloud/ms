export namespace plugin {
    /**
     * MiaoScript Plugin
     */
    export const Plugin = Symbol("Plugin");
    /**
     * MiaoScript Plugin Folder
     */
    export const PluginFolder = Symbol("PluginFolder");
    /**
     * Runtime Plugin Instance
     */
    export const PluginInstance = Symbol("PluginInstance");
    /**
     * MiaoScript Plugin Manager Symbol
     */
    export const PluginManager = Symbol("PluginManager");
    /**
     * MiaoScript Plugin Manager Interface
     */
    export interface PluginManager {
        scan(folder: string): void;
        build(): void;
        loadFromFile(file: string): Plugin;
        load(...args: any[]): void;
        enable(...args: any[]): void;
        disable(...args: any[]): void;
        reload(...args: any[]): void;
        getPlugins(): Map<string, any>;
    }
    export interface Plugin {
        description: PluginMetadata;
        logger: Console;
        load(): void;
        enable(): void;
        disable(): void;
    }
    interface BaseMetadata {
        /**
         * 名称 为空则为对象名称
         */
        name?: string;
        /**
         * 支持的服务器列表 为空则代表所有
         */
        servers?: string[];
    }
    export interface PluginMetadata extends BaseMetadata {
        /**
         * 插件名称
         */
        name: string;
        /**
         * 前缀
         */
        prefix?: string;
        /**
         * 插件版本
         */
        version: string;
        /**
         * 插件版本
         */
        author: string | string[];
        /**
         * 插件源文件 必须指定为 __filename
         */
        source: string;
        /**
         * 插件本体
         */
        target?: any;
    }
}
