declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                 class StringTag extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, data: string)
                    // @ts-ignore
                    public data: string;
                    // @ts-ignore
                    public parseValue(): string;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                }
            }
        }
    }
}
