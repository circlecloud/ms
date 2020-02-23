declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class UNCONNECTED_PONG extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static ID: number;
                        // @ts-ignore
                        public pingID: number;
                        // @ts-ignore
                        public serverID: number;
                        // @ts-ignore
                        public serverName: string;
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
