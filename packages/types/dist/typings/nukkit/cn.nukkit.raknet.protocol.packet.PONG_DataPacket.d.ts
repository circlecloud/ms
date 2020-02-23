declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class PONG_DataPacket extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static ID: number;
                        // @ts-ignore
                        public pingID: number;
                        // @ts-ignore
                        public getID(): number;
                        // @ts-ignore
                        public encode(): void;
                        // @ts-ignore
                        public decode(): void;
                    }
                }
            }
        }
    }
}
