declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                // @ts-ignore
                 class NBTInputStream extends java.lang.Object {
                    // @ts-ignore
                    constructor(stream: java.io.InputStream)
                    // @ts-ignore
                    constructor(stream: java.io.InputStream, endianness: java.nio.ByteOrder)
                    // @ts-ignore
                    constructor(stream: java.io.InputStream, endianness: java.nio.ByteOrder, network: boolean)
                    // @ts-ignore
                    public getEndianness(): java.nio.ByteOrder;
                    // @ts-ignore
                    public isNetwork(): boolean;
                    // @ts-ignore
                    public readFully(b: number): void;
                    // @ts-ignore
                    public readFully(b: number, off: number, len: number): void;
                    // @ts-ignore
                    public skipBytes(n: number): number;
                    // @ts-ignore
                    public readBoolean(): boolean;
                    // @ts-ignore
                    public readByte(): number;
                    // @ts-ignore
                    public readUnsignedByte(): number;
                    // @ts-ignore
                    public readShort(): number;
                    // @ts-ignore
                    public readUnsignedShort(): number;
                    // @ts-ignore
                    public readChar(): string;
                    // @ts-ignore
                    public readInt(): number;
                    // @ts-ignore
                    public readLong(): number;
                    // @ts-ignore
                    public readFloat(): number;
                    // @ts-ignore
                    public readDouble(): number;
                    // @ts-ignore
                    public readLine(): string;
                    // @ts-ignore
                    public readUTF(): string;
                    // @ts-ignore
                    public available(): number;
                    // @ts-ignore
                    public close(): void;
                }
            }
        }
    }
}
