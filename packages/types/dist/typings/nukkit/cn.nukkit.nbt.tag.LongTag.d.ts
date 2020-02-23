declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                 class LongTag extends cn.nukkit.nbt.tag.NumberTag {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, data: number)
                    // @ts-ignore
                    public data: number;
                    // @ts-ignore
                    public getData(): java.lang.Long;
                    // @ts-ignore
                    public setData(data: java.lang.Long): void;
                    // @ts-ignore
                    public parseValue(): java.lang.Long;
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
