declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class SERVER_HANDSHAKE_DataPacket extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static ID: number;
                        // @ts-ignore
                        public address: string;
                        // @ts-ignore
                        public port: number;
                        // @ts-ignore
                        public systemAddresses: java.net.InetSocketAddress[];
                        // @ts-ignore
                        public sendPing: number;
                        // @ts-ignore
                        public sendPong: number;
                        // @ts-ignore
                        public getID(): number;
                        // @ts-ignore
                        public encode(): void;
                    }
                }
            }
        }
    }
}
