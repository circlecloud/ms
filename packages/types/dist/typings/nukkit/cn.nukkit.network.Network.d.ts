declare namespace cn {
    namespace nukkit {
        namespace network {
            // @ts-ignore
             class Network extends java.lang.Object {
                // @ts-ignore
                constructor(server: cn.nukkit.Server)
                // @ts-ignore
                public static CHANNEL_NONE: number;
                // @ts-ignore
                public static CHANNEL_PRIORITY: number;
                // @ts-ignore
                public static CHANNEL_WORLD_CHUNKS: number;
                // @ts-ignore
                public static CHANNEL_MOVEMENT: number;
                // @ts-ignore
                public static CHANNEL_BLOCKS: number;
                // @ts-ignore
                public static CHANNEL_WORLD_EVENTS: number;
                // @ts-ignore
                public static CHANNEL_ENTITY_SPAWNING: number;
                // @ts-ignore
                public static CHANNEL_TEXT: number;
                // @ts-ignore
                public static CHANNEL_END: number;
                // @ts-ignore
                public addStatistics(upload: number, download: number): void;
                // @ts-ignore
                public getUpload(): number;
                // @ts-ignore
                public getDownload(): number;
                // @ts-ignore
                public resetStatistics(): void;
                // @ts-ignore
                public getInterfaces(): java.util.Set;
                // @ts-ignore
                public processInterfaces(): void;
                // @ts-ignore
                public registerInterface(interfaz: cn.nukkit.network.SourceInterface): void;
                // @ts-ignore
                public unregisterInterface(interfaz: cn.nukkit.network.SourceInterface): void;
                // @ts-ignore
                public setName(name: string): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getSubName(): string;
                // @ts-ignore
                public setSubName(subName: string): void;
                // @ts-ignore
                public updateName(): void;
                // @ts-ignore
                public registerPacket(id: number, clazz: java.lang.Class): void;
                // @ts-ignore
                public getServer(): cn.nukkit.Server;
                // @ts-ignore
                public processBatch(packet: cn.nukkit.network.protocol.BatchPacket, player: cn.nukkit.Player): void;
                /**
                 * Process packets obtained from batch packets
                 * Required to perform additional analyses and filter unnecessary packets
                 */
                // @ts-ignore
                public processPackets(player: cn.nukkit.Player, packets: java.util.List): void;
                // @ts-ignore
                public getPacket(id: number): cn.nukkit.network.protocol.DataPacket;
                // @ts-ignore
                public sendPacket(address: string, port: number, payload: number): void;
                // @ts-ignore
                public blockAddress(address: string): void;
                // @ts-ignore
                public blockAddress(address: string, timeout: number): void;
                // @ts-ignore
                public unblockAddress(address: string): void;
            }
        }
    }
}
