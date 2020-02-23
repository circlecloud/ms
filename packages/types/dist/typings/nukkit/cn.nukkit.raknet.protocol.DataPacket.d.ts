declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                // @ts-ignore
                abstract class DataPacket extends cn.nukkit.raknet.protocol.Packet {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public packets: java.util.concurrent.ConcurrentLinkedQueue;
                    // @ts-ignore
                    public seqNumber: java.lang.Integer;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public length(): number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public clean(): cn.nukkit.raknet.protocol.Packet;
                    // @ts-ignore
                    public clone(): cn.nukkit.raknet.protocol.DataPacket;
                }
            }
        }
    }
}
