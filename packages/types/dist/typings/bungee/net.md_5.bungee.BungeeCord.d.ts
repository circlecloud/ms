declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
             class BungeeCord extends ProxyServer {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public isRunning: boolean;
                // @ts-ignore
                public config: net.md_5.bungee.conf.Configuration;
                // @ts-ignore
                public eventLoops: EventLoopGroup;
                // @ts-ignore
                public pluginManager: PluginManager;
                // @ts-ignore
                public gson: any /*Gson*/;
                // @ts-ignore
                public static getInstance(): net.md_5.bungee.BungeeCord;
                /**
                 * Start this proxy instance by loading the configuration, plugins and
                 * starting the connect thread.
                 */
                // @ts-ignore
                public start(): void;
                // @ts-ignore
                public startListeners(): void;
                // @ts-ignore
                public stopListeners(): void;
                // @ts-ignore
                public stop(): void;
                // @ts-ignore
                public stop(reason: string): void;
                /**
                 * Broadcasts a packet to all clients that is connected to this instance.
                 */
                // @ts-ignore
                public broadcast(packet: DefinedPacket): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getVersion(): string;
                // @ts-ignore
                public reloadMessages(): void;
                // @ts-ignore
                public getTranslation(name: string, args: java.lang.Object): string;
                // @ts-ignore
                public getPlayers(): java.util.Collection;
                // @ts-ignore
                public getOnlineCount(): number;
                // @ts-ignore
                public getPlayer(name: string): ProxiedPlayer;
                // @ts-ignore
                public getPlayerByOfflineUUID(name: java.util.UUID): net.md_5.bungee.UserConnection;
                // @ts-ignore
                public getPlayer(uuid: java.util.UUID): ProxiedPlayer;
                // @ts-ignore
                public getServers(): java.util.Map;
                // @ts-ignore
                public getServerInfo(name: string): ServerInfo;
                // @ts-ignore
                public registerChannel(channel: string): void;
                // @ts-ignore
                public unregisterChannel(channel: string): void;
                // @ts-ignore
                public getChannels(): java.util.Collection;
                // @ts-ignore
                public registerChannels(protocolVersion: number): PluginMessage;
                // @ts-ignore
                public getProtocolVersion(): number;
                // @ts-ignore
                public getGameVersion(): string;
                // @ts-ignore
                public constructServerInfo(name: string, address: java.net.InetSocketAddress, motd: string, restricted: boolean): ServerInfo;
                // @ts-ignore
                public getConsole(): CommandSender;
                // @ts-ignore
                public broadcast(message: BaseComponent): void;
                // @ts-ignore
                public broadcast(message: BaseComponent): void;
                // @ts-ignore
                public addConnection(con: net.md_5.bungee.UserConnection): void;
                // @ts-ignore
                public removeConnection(con: net.md_5.bungee.UserConnection): void;
                // @ts-ignore
                public getDisabledCommands(): java.util.Collection;
                // @ts-ignore
                public matchPlayer(partialName: string): java.util.Collection;
                // @ts-ignore
                public createTitle(): Title;
            }
        }
    }
}
