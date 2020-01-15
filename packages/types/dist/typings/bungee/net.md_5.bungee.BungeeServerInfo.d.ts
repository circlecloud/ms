declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
             class BungeeServerInfo extends java.lang.Object {
                // @ts-ignore
                constructor(name: string, address: java.net.InetSocketAddress, motd: string, restricted: boolean)
                // @ts-ignore
                public addPlayer(player: ProxiedPlayer): void;
                // @ts-ignore
                public removePlayer(player: ProxiedPlayer): void;
                // @ts-ignore
                public getPlayers(): java.util.Collection;
                // @ts-ignore
                public getPermission(): string;
                // @ts-ignore
                public canAccess(player: CommandSender): boolean;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public sendData(channel: string, data: number): void;
                // @ts-ignore
                public sendData(channel: string, data: number, queue: boolean): boolean;
                // @ts-ignore
                public ping(callback: any): void;
                // @ts-ignore
                public ping(callback: any, protocolVersion: number): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getAddress(): java.net.InetSocketAddress;
                // @ts-ignore
                public getMotd(): string;
                // @ts-ignore
                public isRestricted(): boolean;
                // @ts-ignore
                public getPacketQueue(): java.util.Queue;
            }
        }
    }
}
