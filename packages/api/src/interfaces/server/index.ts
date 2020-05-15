import { NativePluginManager } from './native_plugin'

export namespace server {
    /**
     * Runtime ServerType
     */
    export const ServerType = Symbol("ServerType");
    /**
     * Runtime Console
     */
    export const Console = Symbol("Console");
    /**
     * MiaoScript Server
     */
    export const Server = Symbol("Server");
    /**
     * Runtime Server Instance
     */
    export const ServerInstance = Symbol("ServerInstance");
    /**
     * MiaoScript Server
     */
    export interface Server {
        getVersion(): string;
        getPlayer(name: string): any;
        getOnlinePlayers(): any[];
        getConsoleSender(): any;
        getService(service: string): any;
        dispatchCommand(sender: string | any, command: string): boolean;
        dispatchConsoleCommand(command: string): boolean;
        getPluginsFolder(): string;
        getNativePluginManager(): NativePluginManager;
        getNettyPipeline(): any;
        getRootLogger(): any;
        sendJson(sender: string | any, json: object | string): void;
    }
}
