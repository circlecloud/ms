declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                abstract class Tag extends java.lang.Object {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    public static TAG_End: number;
                    // @ts-ignore
                    public static TAG_Byte: number;
                    // @ts-ignore
                    public static TAG_Short: number;
                    // @ts-ignore
                    public static TAG_Int: number;
                    // @ts-ignore
                    public static TAG_Long: number;
                    // @ts-ignore
                    public static TAG_Float: number;
                    // @ts-ignore
                    public static TAG_Double: number;
                    // @ts-ignore
                    public static TAG_Byte_Array: number;
                    // @ts-ignore
                    public static TAG_String: number;
                    // @ts-ignore
                    public static TAG_List: number;
                    // @ts-ignore
                    public static TAG_Compound: number;
                    // @ts-ignore
                    public static TAG_Int_Array: number;
                    // @ts-ignore
                    public abstract toString(): string;
                    // @ts-ignore
                    public abstract getId(): number;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    // @ts-ignore
                    public print(out: java.io.PrintStream): void;
                    // @ts-ignore
                    public print(prefix: string, out: java.io.PrintStream): void;
                    // @ts-ignore
                    public setName(name: string): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public static readNamedTag(dis: cn.nukkit.nbt.stream.NBTInputStream): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public static writeNamedTag(tag: cn.nukkit.nbt.tag.Tag, dos: cn.nukkit.nbt.stream.NBTOutputStream): void;
                    // @ts-ignore
                    public static writeNamedTag(tag: cn.nukkit.nbt.tag.Tag, name: string, dos: cn.nukkit.nbt.stream.NBTOutputStream): void;
                    // @ts-ignore
                    public static newTag(type: number, name: string): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public static getTagName(type: number): string;
                    // @ts-ignore
                    public abstract copy(): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public abstract parseValue(): java.lang.Object;
                }
            }
        }
    }
}
