declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                abstract class DataPacket extends cn.nukkit.utils.BinaryStream {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public isEncoded: boolean;
                    // @ts-ignore
                    public encapsulatedPacket: cn.nukkit.raknet.protocol.EncapsulatedPacket;
                    // @ts-ignore
                    public reliability: number;
                    // @ts-ignore
                    public orderIndex: java.lang.Integer;
                    // @ts-ignore
                    public orderChannel: java.lang.Integer;
                    // @ts-ignore
                    public abstract pid(): number;
                    // @ts-ignore
                    public abstract decode(): void;
                    // @ts-ignore
                    public abstract encode(): void;
                    // @ts-ignore
                    public reset(): cn.nukkit.network.protocol.DataPacket;
                    // @ts-ignore
                    public setChannel(channel: number): void;
                    // @ts-ignore
                    public getChannel(): number;
                    // @ts-ignore
                    public clean(): cn.nukkit.network.protocol.DataPacket;
                    // @ts-ignore
                    public clone(): cn.nukkit.network.protocol.DataPacket;
                    // @ts-ignore
                    public compress(): cn.nukkit.network.protocol.BatchPacket;
                    // @ts-ignore
                    public compress(level: number): cn.nukkit.network.protocol.BatchPacket;
                }
            }
        }
    }
}
