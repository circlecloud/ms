declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                 class IntArrayTag extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, data: number)
                    // @ts-ignore
                    public data: number[];
                    // @ts-ignore
                    public getData(): number[];
                    // @ts-ignore
                    public parseValue(): number[];
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.Tag;
                }
            }
        }
    }
}
