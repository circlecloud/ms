declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                 class ShortTag extends cn.nukkit.nbt.tag.NumberTag {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, data: number)
                    // @ts-ignore
                    public data: number;
                    // @ts-ignore
                    public getData(): java.lang.Integer;
                    // @ts-ignore
                    public setData(data: java.lang.Integer): void;
                    // @ts-ignore
                    public parseValue(): java.lang.Integer;
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
