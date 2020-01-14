declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
             class UserConnection extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public init(): void;
                // @ts-ignore
                public sendPacket(packet: PacketWrapper): void;
                // @ts-ignore
                public isActive(): boolean;
                // @ts-ignore
                public setDisplayName(name: string): void;
                // @ts-ignore
                public connect(target: ServerInfo): void;
                // @ts-ignore
                public connect(target: ServerInfo, reason: any /*ServerConnectEvent.Reason*/): void;
                // @ts-ignore
                public connect(target: ServerInfo, callback: any): void;
                // @ts-ignore
                public connect(target: ServerInfo, callback: any, reason: any /*ServerConnectEvent.Reason*/): void;
                // @ts-ignore
                public connectNow(target: ServerInfo): void;
                // @ts-ignore
                public connectNow(target: ServerInfo, reason: any /*ServerConnectEvent.Reason*/): void;
                // @ts-ignore
                public updateAndGetNextServer(currentTarget: ServerInfo): ServerInfo;
                // @ts-ignore
                public connect(info: ServerInfo, callback: any, retry: boolean): void;
                // @ts-ignore
                public connect(info: ServerInfo, callback: any, retry: boolean, reason: any /*ServerConnectEvent.Reason*/): void;
                // @ts-ignore
                public connect(request: ServerConnectRequest): void;
                // @ts-ignore
                public disconnect(reason: string): void;
                // @ts-ignore
                public disconnect(reason: BaseComponent): void;
                // @ts-ignore
                public disconnect(reason: BaseComponent): void;
                // @ts-ignore
                public disconnect0(reason: BaseComponent): void;
                // @ts-ignore
                public chat(message: string): void;
                // @ts-ignore
                public sendMessage(message: string): void;
                // @ts-ignore
                public sendMessages(messages: string): void;
                // @ts-ignore
                public sendMessage(message: BaseComponent): void;
                // @ts-ignore
                public sendMessage(message: BaseComponent): void;
                // @ts-ignore
                public sendMessage(position: ChatMessageType, message: BaseComponent): void;
                // @ts-ignore
                public sendMessage(position: ChatMessageType, message: BaseComponent): void;
                // @ts-ignore
                public sendData(channel: string, data: number): void;
                // @ts-ignore
                public getAddress(): java.net.InetSocketAddress;
                // @ts-ignore
                public getGroups(): java.util.Collection;
                // @ts-ignore
                public addGroups(groups: string): void;
                // @ts-ignore
                public removeGroups(groups: string): void;
                // @ts-ignore
                public hasPermission(permission: string): boolean;
                // @ts-ignore
                public setPermission(permission: string, value: boolean): void;
                // @ts-ignore
                public getPermissions(): java.util.Collection;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public unsafe(): Unsafe;
                // @ts-ignore
                public getUUID(): string;
                // @ts-ignore
                public getUniqueId(): java.util.UUID;
                // @ts-ignore
                public setSettings(settings: ClientSettings): void;
                // @ts-ignore
                public getLocale(): java.util.Locale;
                // @ts-ignore
                public getViewDistance(): number;
                // @ts-ignore
                public getChatMode(): any /*ProxiedPlayer.ChatMode*/;
                // @ts-ignore
                public hasChatColors(): boolean;
                // @ts-ignore
                public getSkinParts(): SkinConfiguration;
                // @ts-ignore
                public getMainHand(): any /*ProxiedPlayer.MainHand*/;
                // @ts-ignore
                public isForgeUser(): boolean;
                // @ts-ignore
                public getModList(): java.util.Map;
                // @ts-ignore
                public setTabHeader(header: BaseComponent, footer: BaseComponent): void;
                // @ts-ignore
                public setTabHeader(header: BaseComponent, footer: BaseComponent): void;
                // @ts-ignore
                public resetTabHeader(): void;
                // @ts-ignore
                public sendTitle(title: Title): void;
                // @ts-ignore
                public getExtraDataInHandshake(): string;
                // @ts-ignore
                public setCompressionThreshold(compressionThreshold: number): void;
                // @ts-ignore
                public isConnected(): boolean;
                // @ts-ignore
                public getScoreboard(): Scoreboard;
            }
        }
    }
}
