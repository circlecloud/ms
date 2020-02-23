declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                 class DoubleTag extends cn.nukkit.nbt.tag.NumberTag {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, data: number)
                    // @ts-ignore
                    public data: number;
                    // @ts-ignore
                    public getData(): java.lang.Double;
                    // @ts-ignore
                    public setData(data: java.lang.Double): void;
                    // @ts-ignore
                    public parseValue(): java.lang.Double;
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
