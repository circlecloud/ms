declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                // @ts-ignore
                abstract class EntityData extends java.lang.Object {
                    // @ts-ignore
                    constructor(id: number)
                    // @ts-ignore
                    public abstract getType(): number;
                    // @ts-ignore
                    public abstract getData(): java.lang.Object;
                    // @ts-ignore
                    public abstract setData(data: java.lang.Object): void;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public setId(id: number): cn.nukkit.entity.data.EntityData;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                }
            }
        }
    }
}
