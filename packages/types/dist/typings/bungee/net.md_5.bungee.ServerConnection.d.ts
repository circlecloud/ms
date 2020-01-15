declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
             class ServerConnection extends java.lang.Object {
                // @ts-ignore
                constructor(ch: net.md_5.bungee.netty.ChannelWrapper, info: net.md_5.bungee.BungeeServerInfo)
                // @ts-ignore
                public sendData(channel: string, data: number): void;
                // @ts-ignore
                public disconnect(reason: string): void;
                // @ts-ignore
                public disconnect(reason: BaseComponent): void;
                // @ts-ignore
                public disconnect(reason: BaseComponent): void;
                // @ts-ignore
                public getAddress(): java.net.InetSocketAddress;
                // @ts-ignore
                public isConnected(): boolean;
                // @ts-ignore
                public unsafe(): Unsafe;
                // @ts-ignore
                public getCh(): net.md_5.bungee.netty.ChannelWrapper;
                // @ts-ignore
                public getInfo(): net.md_5.bungee.BungeeServerInfo;
                // @ts-ignore
                public isObsolete(): boolean;
                // @ts-ignore
                public setObsolete(isObsolete: boolean): void;
                // @ts-ignore
                public isForgeServer(): boolean;
                // @ts-ignore
                public getSentPingId(): number;
                // @ts-ignore
                public setSentPingId(sentPingId: number): void;
            }
        }
    }
}
