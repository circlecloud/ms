declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                // @ts-ignore
                 class Vector3fEntityData extends cn.nukkit.entity.data.EntityData {
                    // @ts-ignore
                    constructor(id: number, x: number, y: number, z: number)
                    // @ts-ignore
                    constructor(id: number, pos: cn.nukkit.math.Vector3f)
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public getData(): cn.nukkit.math.Vector3f;
                    // @ts-ignore
                    public setData(data: cn.nukkit.math.Vector3f): void;
                    // @ts-ignore
                    public getType(): number;
                }
            }
        }
    }
}
