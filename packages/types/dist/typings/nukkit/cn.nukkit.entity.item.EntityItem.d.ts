declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityItem extends cn.nukkit.entity.Entity {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static DATA_SOURCE_ID: number;
                    // @ts-ignore
                    protected owner: string;
                    // @ts-ignore
                    protected thrower: string;
                    // @ts-ignore
                    protected item: cn.nukkit.item.Item;
                    // @ts-ignore
                    protected pickupDelay: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getLength(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public getGravity(): number;
                    // @ts-ignore
                    public getDrag(): number;
                    // @ts-ignore
                    protected getBaseOffset(): number;
                    // @ts-ignore
                    public canCollide(): boolean;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    public saveNBT(): void;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    public getPickupDelay(): number;
                    // @ts-ignore
                    public setPickupDelay(pickupDelay: number): void;
                    // @ts-ignore
                    public getOwner(): string;
                    // @ts-ignore
                    public setOwner(owner: string): void;
                    // @ts-ignore
                    public getThrower(): string;
                    // @ts-ignore
                    public setThrower(thrower: string): void;
                    // @ts-ignore
                    public createAddEntityPacket(): cn.nukkit.network.protocol.DataPacket;
                    // @ts-ignore
                    public doesTriggerPressurePlate(): boolean;
                }
            }
        }
    }
}
