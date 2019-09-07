import { Container } from "inversify";

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
        load(container: Container): void;
        enable(): void;
        disable(): void;
    }
}
