declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
             class ServerConnector extends net.md_5.bungee.netty.PacketHandler {
                // @ts-ignore
                constructor(bungee: ProxyServer, user: net.md_5.bungee.UserConnection, target: net.md_5.bungee.BungeeServerInfo)
                // @ts-ignore
                public exception(t: java.lang.Throwable): void;
                // @ts-ignore
                public connected(channel: net.md_5.bungee.netty.ChannelWrapper): void;
                // @ts-ignore
                public disconnected(channel: net.md_5.bungee.netty.ChannelWrapper): void;
                // @ts-ignore
                public handle(packet: PacketWrapper): void;
                // @ts-ignore
                public handle(loginSuccess: LoginSuccess): void;
                // @ts-ignore
                public handle(setCompression: SetCompression): void;
                // @ts-ignore
                public handle(login: Login): void;
                // @ts-ignore
                public handle(encryptionRequest: EncryptionRequest): void;
                // @ts-ignore
                public handle(kick: Kick): void;
                // @ts-ignore
                public handle(pluginMessage: PluginMessage): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public getHandshakeHandler(): net.md_5.bungee.forge.ForgeServerHandler;
            }
        }
    }
}
