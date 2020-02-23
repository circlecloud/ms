declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class VarInt extends java.lang.Object {
                // @ts-ignore
                public static encodeZigZag32(v: number): number;
                // @ts-ignore
                public static decodeZigZag32(v: number): number;
                // @ts-ignore
                public static encodeZigZag64(v: number): number;
                // @ts-ignore
                public static decodeZigZag64(v: number): number;
                // @ts-ignore
                public static readVarInt(stream: cn.nukkit.utils.BinaryStream): number;
                // @ts-ignore
                public static readVarInt(stream: java.io.InputStream): number;
                // @ts-ignore
                public static readUnsignedVarInt(stream: cn.nukkit.utils.BinaryStream): number;
                // @ts-ignore
                public static readUnsignedVarInt(stream: java.io.InputStream): number;
                // @ts-ignore
                public static readVarLong(stream: cn.nukkit.utils.BinaryStream): number;
                // @ts-ignore
                public static readVarLong(stream: java.io.InputStream): number;
                // @ts-ignore
                public static readUnsignedVarLong(stream: cn.nukkit.utils.BinaryStream): number;
                // @ts-ignore
                public static readUnsignedVarLong(stream: java.io.InputStream): number;
                // @ts-ignore
                public static writeVarInt(stream: cn.nukkit.utils.BinaryStream, value: number): void;
                // @ts-ignore
                public static writeVarInt(stream: java.io.OutputStream, value: number): void;
                // @ts-ignore
                public static writeUnsignedVarInt(stream: cn.nukkit.utils.BinaryStream, value: number): void;
                // @ts-ignore
                public static writeUnsignedVarInt(stream: java.io.OutputStream, value: number): void;
                // @ts-ignore
                public static writeVarLong(stream: cn.nukkit.utils.BinaryStream, value: number): void;
                // @ts-ignore
                public static writeVarLong(stream: java.io.OutputStream, value: number): void;
                // @ts-ignore
                public static writeUnsignedVarLong(stream: cn.nukkit.utils.BinaryStream, value: number): void;
                // @ts-ignore
                public static writeUnsignedVarLong(stream: java.io.OutputStream, value: number): void;
            }
        }
    }
}
