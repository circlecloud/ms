export namespace server {
    export const ServerType = Symbol("ServerType");
    export const Console = Symbol("Console");
    export const Server = Symbol("Server");
    export interface Server {
        getVersion(): string;
        getPlayer(name: string): any;
    }
}
