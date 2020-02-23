declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                abstract class NumberTag extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    public abstract getData(): java.lang.Number;
                    // @ts-ignore
                    public abstract setData(data: java.lang.Number): void;
                }
            }
        }
    }
}
