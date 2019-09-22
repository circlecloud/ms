import { Container } from "@ms/container";

export namespace plugin {
    /**
     * MiaoScript Plugin
     */
    export const Plugin = Symbol("Plugin");
    /**
     * Runtime Plugin Instance
     */
    export const PluginInstance = Symbol("PluginInstance");
    /**
     * MiaoScript Plugin Manager
     */
    export const PluginManager = Symbol("PluginManager");
    /**
     * MiaoScript Plugin Manager
     */
    export interface PluginManager {
        scan(folder: string): void;
        build(container: Container): void;
        load(...args: any[]): void;
        enable(...args: any[]): void;
        disable(...args: any[]): void;
        reload(...args: any[]): void;
        getPlugins(): Map<string, any>;
    }
}
