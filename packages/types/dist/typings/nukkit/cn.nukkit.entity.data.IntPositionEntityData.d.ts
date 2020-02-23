declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                // @ts-ignore
                 class IntPositionEntityData extends cn.nukkit.entity.data.EntityData {
                    // @ts-ignore
                    constructor(id: number, x: number, y: number, z: number)
                    // @ts-ignore
                    constructor(id: number, pos: cn.nukkit.math.Vector3)
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public getData(): cn.nukkit.math.BlockVector3;
                    // @ts-ignore
                    public setData(data: cn.nukkit.math.BlockVector3): void;
                    // @ts-ignore
                    public getType(): number;
                }
            }
        }
    }
}
