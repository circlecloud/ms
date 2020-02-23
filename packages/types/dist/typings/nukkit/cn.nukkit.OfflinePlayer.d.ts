declare namespace cn {
    namespace nukkit {
        // @ts-ignore
         class OfflinePlayer extends java.lang.Object implements cn.nukkit.IPlayer {
            /**
             * 初始化这个{@code OfflinePlayer}对象。<br>
             * Initializes the object {@code OfflinePlayer}.
             */
            // @ts-ignore
            constructor(server: cn.nukkit.Server, uuid: java.util.UUID)
            // @ts-ignore
            constructor(server: cn.nukkit.Server, name: string)
            // @ts-ignore
            constructor(server: cn.nukkit.Server, uuid: java.util.UUID, name: string)
            // @ts-ignore
            public isOnline(): boolean;
            // @ts-ignore
            public getName(): string;
            // @ts-ignore
            public getUniqueId(): java.util.UUID;
            // @ts-ignore
            public getServer(): cn.nukkit.Server;
            // @ts-ignore
            public isOp(): boolean;
            // @ts-ignore
            public setOp(value: boolean): void;
            // @ts-ignore
            public isBanned(): boolean;
            // @ts-ignore
            public setBanned(value: boolean): void;
            // @ts-ignore
            public isWhitelisted(): boolean;
            // @ts-ignore
            public setWhitelisted(value: boolean): void;
            // @ts-ignore
            public getPlayer(): cn.nukkit.Player;
            // @ts-ignore
            public getFirstPlayed(): java.lang.Long;
            // @ts-ignore
            public getLastPlayed(): java.lang.Long;
            // @ts-ignore
            public hasPlayedBefore(): boolean;
            // @ts-ignore
            public setMetadata(metadataKey: string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void;
            // @ts-ignore
            public getMetadata(metadataKey: string): java.util.List;
            // @ts-ignore
            public hasMetadata(metadataKey: string): boolean;
            // @ts-ignore
            public removeMetadata(metadataKey: string, owningPlugin: cn.nukkit.plugin.Plugin): void;
        }
    }
}
