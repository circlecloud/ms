export namespace plugin {
    /**
     * MiaoScript Plugin
     */
    export const Plugin = Symbol("Plugin");
    /**
     * MiaoScript Plugin
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
        load(...args: any[]): void;
        enable(...args: any[]): void;
        disable(...args: any[]): void;
        reload(...args: any[]): void;
        getPlugins(): Map<string, any>;
    }
}
