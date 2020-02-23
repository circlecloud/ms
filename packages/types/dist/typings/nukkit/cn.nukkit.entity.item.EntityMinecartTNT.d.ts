declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityMinecartTNT extends cn.nukkit.entity.item.EntityMinecartAbstract implements cn.nukkit.entity.EntityExplosive {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public isRideable(): boolean;
                    // @ts-ignore
                    public initEntity(): void;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    public activate(x: number, y: number, z: number, flag: boolean): void;
                    // @ts-ignore
                    public explode(): void;
                    // @ts-ignore
                    public explode(square: number): void;
                    // @ts-ignore
                    public dropItem(): void;
                    // @ts-ignore
                    public getType(): cn.nukkit.utils.MinecartType;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public saveNBT(): void;
                    // @ts-ignore
                    public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean;
                    // @ts-ignore
                    public mountEntity(entity: cn.nukkit.entity.Entity, mode: number): boolean;
                }
            }
        }
    }
}
