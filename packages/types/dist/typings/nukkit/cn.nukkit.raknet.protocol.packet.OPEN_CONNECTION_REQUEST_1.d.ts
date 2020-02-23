declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class OPEN_CONNECTION_REQUEST_1 extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static ID: number;
                        // @ts-ignore
                        public protocol: number;
                        // @ts-ignore
                        public mtuSize: number;
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
