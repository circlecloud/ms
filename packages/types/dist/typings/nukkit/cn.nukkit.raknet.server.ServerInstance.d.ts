declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                // @ts-ignore
                interface ServerInstance {
                    // @ts-ignore
                     openSession(identifier: string, address: string, port: number, clientID: number): void;
                    // @ts-ignore
                     closeSession(identifier: string, reason: string): void;
                    // @ts-ignore
                     handleEncapsulated(identifier: string, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number): void;
                    // @ts-ignore
                     handleRaw(address: string, port: number, payload: number): void;
                    // @ts-ignore
                     notifyACK(identifier: string, identifierACK: number): void;
                    // @ts-ignore
                     handleOption(option: string, value: string): void;
                }
            }
        }
    }
}
