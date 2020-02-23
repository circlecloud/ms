declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                // @ts-ignore
                 class StringEntityData extends cn.nukkit.entity.data.EntityData {
                    // @ts-ignore
                    constructor(id: number, data: string)
                    // @ts-ignore
                    public data: string;
                    // @ts-ignore
                    public getData(): string;
                    // @ts-ignore
                    public setData(data: string): void;
                    // @ts-ignore
                    public getType(): number;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
