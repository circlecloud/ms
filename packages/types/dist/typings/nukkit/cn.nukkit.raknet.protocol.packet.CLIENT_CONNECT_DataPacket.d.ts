declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class CLIENT_CONNECT_DataPacket extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static ID: number;
                        // @ts-ignore
                        public clientID: number;
                        // @ts-ignore
                        public sendPing: number;
                        // @ts-ignore
                        public useSecurity: boolean;
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
