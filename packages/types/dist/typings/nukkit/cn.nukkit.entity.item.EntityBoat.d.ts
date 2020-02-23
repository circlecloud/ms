declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityBoat extends cn.nukkit.entity.item.EntityVehicle {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static DATA_WOOD_ID: number;
                    // @ts-ignore
                    public static RIDER_PLAYER_OFFSET: cn.nukkit.math.Vector3f;
                    // @ts-ignore
                    public static RIDER_OFFSET: cn.nukkit.math.Vector3f;
                    // @ts-ignore
                    public static PASSENGER_OFFSET: cn.nukkit.math.Vector3f;
                    // @ts-ignore
                    public static RIDER_PASSENGER_OFFSET: cn.nukkit.math.Vector3f;
                    // @ts-ignore
                    public static RIDER_INDEX: number;
                    // @ts-ignore
                    public static PASSENGER_INDEX: number;
                    // @ts-ignore
                    public static SINKING_DEPTH: number;
                    // @ts-ignore
                    public static SINKING_SPEED: number;
                    // @ts-ignore
                    public static SINKING_MAX_SPEED: number;
                    // @ts-ignore
                    protected sinking: boolean;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    protected getDrag(): number;
                    // @ts-ignore
                    protected getGravity(): number;
                    // @ts-ignore
                    public getBaseOffset(): number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    public close(): void;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    public updatePassengers(): void;
                    // @ts-ignore
                    public updatePassengers(sendLinks: boolean): void;
                    // @ts-ignore
                    public getWaterLevel(): number;
                    // @ts-ignore
                    public mountEntity(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    protected updatePassengerPosition(passenger: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public dismountEntity(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    public isControlling(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean;
                    // @ts-ignore
                    public getMountedOffset(entity: cn.nukkit.entity.Entity): cn.nukkit.math.Vector3f;
                    // @ts-ignore
                    public onPaddle(animation: cn.nukkit.network.protocol.AnimatePacket.Action, value: number): void;
                    // @ts-ignore
                    public applyEntityCollision(entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public canPassThrough(): boolean;
                    // @ts-ignore
                    public kill(): void;
                }
            }
        }
    }
}
