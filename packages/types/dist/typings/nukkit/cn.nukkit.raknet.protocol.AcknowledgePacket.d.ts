declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                // @ts-ignore
                abstract class AcknowledgePacket extends cn.nukkit.raknet.protocol.Packet {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public packets: java.util.TreeMap;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public clean(): cn.nukkit.raknet.protocol.Packet;
                    // @ts-ignore
                    public clone(): cn.nukkit.raknet.protocol.AcknowledgePacket;
                }
            }
        }
    }
}
