declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                 class FloatTag extends cn.nukkit.nbt.tag.NumberTag {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, data: number)
                    // @ts-ignore
                    public data: number;
                    // @ts-ignore
                    public getData(): java.lang.Float;
                    // @ts-ignore
                    public setData(data: java.lang.Float): void;
                    // @ts-ignore
                    public parseValue(): java.lang.Float;
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
