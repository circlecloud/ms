declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                // @ts-ignore
                 class NBTOutputStream extends java.lang.Object {
                    // @ts-ignore
                    constructor(stream: java.io.OutputStream)
                    // @ts-ignore
                    constructor(stream: java.io.OutputStream, endianness: java.nio.ByteOrder)
                    // @ts-ignore
                    constructor(stream: java.io.OutputStream, endianness: java.nio.ByteOrder, network: boolean)
                    // @ts-ignore
                    public getEndianness(): java.nio.ByteOrder;
                    // @ts-ignore
                    public isNetwork(): boolean;
                    // @ts-ignore
                    public write(bytes: number): void;
                    // @ts-ignore
                    public write(b: number, off: number, len: number): void;
                    // @ts-ignore
                    public write(b: number): void;
                    // @ts-ignore
                    public writeBoolean(v: boolean): void;
                    // @ts-ignore
                    public writeByte(v: number): void;
                    // @ts-ignore
                    public writeShort(v: number): void;
                    // @ts-ignore
                    public writeChar(v: number): void;
                    // @ts-ignore
                    public writeInt(v: number): void;
                    // @ts-ignore
                    public writeLong(v: number): void;
                    // @ts-ignore
                    public writeFloat(v: number): void;
                    // @ts-ignore
                    public writeDouble(v: number): void;
                    // @ts-ignore
                    public writeBytes(s: string): void;
                    // @ts-ignore
                    public writeChars(s: string): void;
                    // @ts-ignore
                    public writeUTF(s: string): void;
                    // @ts-ignore
                    public close(): void;
                }
            }
        }
    }
}
