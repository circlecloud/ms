declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                // @ts-ignore
                abstract class Packet extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    protected offset: number;
                    // @ts-ignore
                    public buffer: number[];
                    // @ts-ignore
                    public sendTime: java.lang.Long;
                    // @ts-ignore
                    public abstract getID(): number;
                    // @ts-ignore
                    protected get(len: number): number[];
                    // @ts-ignore
                    protected getAll(): number[];
                    // @ts-ignore
                    protected get(): number[];
                    // @ts-ignore
                    protected getLong(): number;
                    // @ts-ignore
                    protected getInt(): number;
                    // @ts-ignore
                    protected getSignedShort(): number;
                    // @ts-ignore
                    protected getShort(): number;
                    // @ts-ignore
                    protected getTriad(): number;
                    // @ts-ignore
                    protected getLTriad(): number;
                    // @ts-ignore
                    protected getByte(): number;
                    // @ts-ignore
                    protected getString(): string;
                    // @ts-ignore
                    protected getAddress(): java.net.InetSocketAddress;
                    // @ts-ignore
                    protected feof(): boolean;
                    // @ts-ignore
                    protected put(b: number): void;
                    // @ts-ignore
                    protected putLong(v: number): void;
                    // @ts-ignore
                    protected putInt(v: number): void;
                    // @ts-ignore
                    protected putShort(v: number): void;
                    // @ts-ignore
                    protected putSignedShort(v: number): void;
                    // @ts-ignore
                    protected putTriad(v: number): void;
                    // @ts-ignore
                    protected putLTriad(v: number): void;
                    // @ts-ignore
                    protected putByte(b: number): void;
                    // @ts-ignore
                    protected putString(str: string): void;
                    // @ts-ignore
                    protected putAddress(addr: string, port: number): void;
                    // @ts-ignore
                    protected putAddress(addr: string, port: number, version: number): void;
                    // @ts-ignore
                    protected putAddress(address: java.net.InetSocketAddress): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public clean(): cn.nukkit.raknet.protocol.Packet;
                    // @ts-ignore
                    public clone(): cn.nukkit.raknet.protocol.Packet;
                }
            }
        }
    }
}
