declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class OPEN_CONNECTION_REPLY_2 extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static ID: number;
                        // @ts-ignore
                        public serverID: number;
                        // @ts-ignore
                        public clientAddress: string;
                        // @ts-ignore
                        public clientPort: number;
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
