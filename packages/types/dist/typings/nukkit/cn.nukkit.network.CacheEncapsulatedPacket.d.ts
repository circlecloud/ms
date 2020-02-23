declare namespace cn {
    namespace nukkit {
        namespace network {
            // @ts-ignore
             class CacheEncapsulatedPacket extends cn.nukkit.raknet.protocol.EncapsulatedPacket {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public internalData: number[];
                // @ts-ignore
                public toBinary(): number[];
                // @ts-ignore
                public toBinary(internal: boolean): number[];
            }
        }
    }
}
