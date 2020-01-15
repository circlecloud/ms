declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace connection {
                // @ts-ignore
                 class InitialHandler extends net.md_5.bungee.netty.PacketHandler {
                    // @ts-ignore
                    constructor(bungee: net.md_5.bungee.BungeeCord, listener: ListenerInfo)
                    // @ts-ignore
                    public shouldHandle(packet: PacketWrapper): boolean;
                    // @ts-ignore
                    public connected(channel: net.md_5.bungee.netty.ChannelWrapper): void;
                    // @ts-ignore
                    public exception(t: java.lang.Throwable): void;
                    // @ts-ignore
                    public handle(packet: PacketWrapper): void;
                    // @ts-ignore
                    public handle(pluginMessage: PluginMessage): void;
                    // @ts-ignore
                    public handle(legacyHandshake: LegacyHandshake): void;
                    // @ts-ignore
                    public handle(ping: LegacyPing): void;
                    // @ts-ignore
                    public handle(statusRequest: StatusRequest): void;
                    // @ts-ignore
                    public handle(ping: PingPacket): void;
                    // @ts-ignore
                    public handle(handshake: Handshake): void;
                    // @ts-ignore
                    public handle(loginRequest: LoginRequest): void;
                    // @ts-ignore
                    public handle(encryptResponse: EncryptionResponse): void;
                    // @ts-ignore
                    public handle(response: LoginPayloadResponse): void;
                    // @ts-ignore
                    public disconnect(reason: string): void;
                    // @ts-ignore
                    public disconnect(reason: BaseComponent): void;
                    // @ts-ignore
                    public disconnect(reason: BaseComponent): void;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getVersion(): number;
                    // @ts-ignore
                    public getAddress(): java.net.InetSocketAddress;
                    // @ts-ignore
                    public unsafe(): Unsafe;
                    // @ts-ignore
                    public setOnlineMode(onlineMode: boolean): void;
                    // @ts-ignore
                    public setUniqueId(uuid: java.util.UUID): void;
                    // @ts-ignore
                    public getUUID(): string;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public isConnected(): boolean;
                    // @ts-ignore
                    public getListener(): ListenerInfo;
                    // @ts-ignore
                    public getHandshake(): Handshake;
                    // @ts-ignore
                    public getLoginRequest(): LoginRequest;
                    // @ts-ignore
                    public getRelayMessages(): java.util.List;
                    // @ts-ignore
                    public isOnlineMode(): boolean;
                    // @ts-ignore
                    public getVirtualHost(): java.net.InetSocketAddress;
                    // @ts-ignore
                    public getUniqueId(): java.util.UUID;
                    // @ts-ignore
                    public getOfflineId(): java.util.UUID;
                    // @ts-ignore
                    public getLoginProfile(): net.md_5.bungee.connection.LoginResult;
                    // @ts-ignore
                    public isLegacy(): boolean;
                    // @ts-ignore
                    public getExtraDataInHandshake(): string;
                }
            }
        }
    }
}
