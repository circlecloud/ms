declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityXPOrb extends cn.nukkit.entity.Entity {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static ORB_SPLIT_SIZES: number[];
                    // @ts-ignore
                    public closestPlayer: cn.nukkit.Player;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getLength(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    protected getGravity(): number;
                    // @ts-ignore
                    protected getDrag(): number;
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
                    public getExp(): number;
                    // @ts-ignore
                    public setExp(exp: number): void;
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    public getPickupDelay(): number;
                    // @ts-ignore
                    public setPickupDelay(pickupDelay: number): void;
                    /**
                     * Returns the largest size of normal XP orb that will be spawned for the specified amount of XP. Used to split XP
                     * up into multiple orbs when an amount of XP is dropped.
                     */
                    // @ts-ignore
                    public static getMaxOrbSize(amount: number): number;
                    /**
                     * Splits the specified amount of XP into an array of acceptable XP orb sizes.
                     */
                    // @ts-ignore
                    public static splitIntoOrbSizes(amount: number): java.util.List;
                }
            }
        }
    }
}
