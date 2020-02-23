declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class Binary extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static signByte(value: number): number;
                // @ts-ignore
                public static unsignByte(value: number): number;
                // @ts-ignore
                public static signShort(value: number): number;
                // @ts-ignore
                public unsignShort(value: number): number;
                // @ts-ignore
                public static signInt(value: number): number;
                // @ts-ignore
                public static unsignInt(value: number): number;
                // @ts-ignore
                public static readTriad(bytes: number): number;
                // @ts-ignore
                public static writeTriad(value: number): number[];
                // @ts-ignore
                public static readLTriad(bytes: number): number;
                // @ts-ignore
                public static writeLTriad(value: number): number[];
                // @ts-ignore
                public static readUUID(bytes: number): java.util.UUID;
                // @ts-ignore
                public static writeUUID(uuid: java.util.UUID): number[];
                // @ts-ignore
                public static writeMetadata(metadata: cn.nukkit.entity.data.EntityMetadata): number[];
                // @ts-ignore
                public static readMetadata(payload: number): cn.nukkit.entity.data.EntityMetadata;
                // @ts-ignore
                public static readBool(b: number): boolean;
                // @ts-ignore
                public static writeBool(b: boolean): number;
                // @ts-ignore
                public static readSignedByte(b: number): number;
                // @ts-ignore
                public static writeByte(b: number): number;
                // @ts-ignore
                public static readShort(bytes: number): number;
                // @ts-ignore
                public static readSignedShort(bytes: number): number;
                // @ts-ignore
                public static writeShort(s: number): number[];
                // @ts-ignore
                public static readLShort(bytes: number): number;
                // @ts-ignore
                public static readSignedLShort(bytes: number): number;
                // @ts-ignore
                public static writeLShort(s: number): number[];
                // @ts-ignore
                public static readInt(bytes: number): number;
                // @ts-ignore
                public static writeInt(i: number): number[];
                // @ts-ignore
                public static readLInt(bytes: number): number;
                // @ts-ignore
                public static writeLInt(i: number): number[];
                // @ts-ignore
                public static readFloat(bytes: number): number;
                // @ts-ignore
                public static readFloat(bytes: number, accuracy: number): number;
                // @ts-ignore
                public static writeFloat(f: number): number[];
                // @ts-ignore
                public static readLFloat(bytes: number): number;
                // @ts-ignore
                public static readLFloat(bytes: number, accuracy: number): number;
                // @ts-ignore
                public static writeLFloat(f: number): number[];
                // @ts-ignore
                public static readDouble(bytes: number): number;
                // @ts-ignore
                public static writeDouble(d: number): number[];
                // @ts-ignore
                public static readLDouble(bytes: number): number;
                // @ts-ignore
                public static writeLDouble(d: number): number[];
                // @ts-ignore
                public static readLong(bytes: number): number;
                // @ts-ignore
                public static writeLong(l: number): number[];
                // @ts-ignore
                public static readLLong(bytes: number): number;
                // @ts-ignore
                public static writeLLong(l: number): number[];
                // @ts-ignore
                public static writeVarInt(v: number): number[];
                // @ts-ignore
                public static writeUnsignedVarInt(v: number): number[];
                // @ts-ignore
                public static reserveBytes(bytes: number): number[];
                // @ts-ignore
                public static bytesToHexString(src: number): string;
                // @ts-ignore
                public static bytesToHexString(src: number, blank: boolean): string;
                // @ts-ignore
                public static hexStringToBytes(hexString: string): number[];
                // @ts-ignore
                public static subBytes(bytes: number, start: number, length: number): number[];
                // @ts-ignore
                public static subBytes(bytes: number, start: number): number[];
                // @ts-ignore
                public static splitBytes(bytes: number, chunkSize: number): byte[][];
                // @ts-ignore
                public static appendBytes(bytes: number): number[];
                // @ts-ignore
                public static appendBytes(byte1: number, bytes2: number): number[];
                // @ts-ignore
                public static appendBytes(bytes1: number, bytes2: number): number[];
            }
        }
    }
}
