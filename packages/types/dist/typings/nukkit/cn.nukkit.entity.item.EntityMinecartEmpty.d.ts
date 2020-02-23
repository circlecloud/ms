declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityMinecartEmpty extends cn.nukkit.entity.item.EntityMinecartAbstract {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public getType(): cn.nukkit.utils.MinecartType;
                    // @ts-ignore
                    public isRideable(): boolean;
                    // @ts-ignore
                    protected activate(x: number, y: number, z: number, flag: boolean): void;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                }
            }
        }
    }
}
