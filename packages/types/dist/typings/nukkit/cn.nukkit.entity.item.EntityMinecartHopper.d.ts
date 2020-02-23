declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityMinecartHopper extends cn.nukkit.entity.item.EntityMinecartAbstract {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public getType(): cn.nukkit.utils.MinecartType;
                    // @ts-ignore
                    public isRideable(): boolean;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public dropItem(): void;
                    // @ts-ignore
                    protected activate(x: number, y: number, z: number, flag: boolean): void;
                    // @ts-ignore
                    public mountEntity(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    public onInteract(p: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean;
                }
            }
        }
    }
}
