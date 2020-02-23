declare namespace cn {
    namespace nukkit {
        namespace nbt {
            // @ts-ignore
             class NBTIO extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static putItemHelper(item: cn.nukkit.item.Item): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static putItemHelper(item: cn.nukkit.item.Item, slot: java.lang.Integer): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static getItemHelper(tag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.item.Item;
                // @ts-ignore
                public static read(file: java.io.File): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static read(file: java.io.File, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static read(inputStream: java.io.InputStream): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static read(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static read(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder, network: boolean): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readTag(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder, network: boolean): cn.nukkit.nbt.tag.Tag;
                // @ts-ignore
                public static read(data: number): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static read(data: number, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static read(data: number, endianness: java.nio.ByteOrder, network: boolean): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readCompressed(inputStream: java.io.InputStream): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readCompressed(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readCompressed(data: number): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readCompressed(data: number, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readNetworkCompressed(inputStream: java.io.InputStream): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readNetworkCompressed(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readNetworkCompressed(data: number): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static readNetworkCompressed(data: number, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag): number[];
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, endianness: java.nio.ByteOrder): number[];
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, endianness: java.nio.ByteOrder, network: boolean): number[];
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.Tag, endianness: java.nio.ByteOrder, network: boolean): number[];
                // @ts-ignore
                public static write(tags: java.util.Collection): number[];
                // @ts-ignore
                public static write(tags: java.util.Collection, endianness: java.nio.ByteOrder): number[];
                // @ts-ignore
                public static write(tags: java.util.Collection, endianness: java.nio.ByteOrder, network: boolean): number[];
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, file: java.io.File): void;
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, file: java.io.File, endianness: java.nio.ByteOrder): void;
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream): void;
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder): void;
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder, network: boolean): void;
                // @ts-ignore
                public static writeNetwork(tag: cn.nukkit.nbt.tag.Tag): number[];
                // @ts-ignore
                public static writeGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag): number[];
                // @ts-ignore
                public static writeGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, endianness: java.nio.ByteOrder): number[];
                // @ts-ignore
                public static writeGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream): void;
                // @ts-ignore
                public static writeGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder): void;
                // @ts-ignore
                public static writeNetworkGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag): number[];
                // @ts-ignore
                public static writeNetworkGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, endianness: java.nio.ByteOrder): number[];
                // @ts-ignore
                public static writeNetworkGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream): void;
                // @ts-ignore
                public static writeNetworkGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder): void;
                // @ts-ignore
                public static writeZLIBCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream): void;
                // @ts-ignore
                public static writeZLIBCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder): void;
                // @ts-ignore
                public static writeZLIBCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, level: number): void;
                // @ts-ignore
                public static writeZLIBCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, level: number, endianness: java.nio.ByteOrder): void;
                // @ts-ignore
                public static safeWrite(tag: cn.nukkit.nbt.tag.CompoundTag, file: java.io.File): void;
            }
        }
    }
}
