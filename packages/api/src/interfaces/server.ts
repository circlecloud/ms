export namespace server {
    export const ServerType = Symbol("ServerType");
    export const Console = Symbol("Console");
    export const Server = Symbol("Server");
    export interface Server {
        getVersion(): string;
        getPlayer(name: string): any;
        getOnlinePlayers(): any[];
        getConsoleSender(): any;
        getService(service: string): any;
        dispatchCommand(sender: string | any, command: string): boolean;
        dispatchConsoleCommand(command: string): boolean;
        sendJson(sender: string | any, json: object | string): void;
    }
}
