declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                abstract class EntityMinecartAbstract extends cn.nukkit.entity.item.EntityVehicle {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public abstract getType(): cn.nukkit.utils.MinecartType;
                    // @ts-ignore
                    public abstract isRideable(): boolean;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    protected getDrag(): number;
                    // @ts-ignore
                    public setName(name: string): void;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getBaseOffset(): number;
                    // @ts-ignore
                    public hasCustomName(): boolean;
                    // @ts-ignore
                    public canDoInteraction(): boolean;
                    // @ts-ignore
                    public initEntity(): void;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    public dropItem(): void;
                    // @ts-ignore
                    public kill(): void;
                    // @ts-ignore
                    public close(): void;
                    // @ts-ignore
                    public onInteract(p: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean;
                    // @ts-ignore
                    public applyEntityCollision(entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public saveNBT(): void;
                    // @ts-ignore
                    public getMaxSpeed(): number;
                    // @ts-ignore
                    protected activate(x: number, y: number, z: number, flag: boolean): void;
                    /**
                     * Used to multiply the minecart current speed
                     */
                    // @ts-ignore
                    public setCurrentSpeed(speed: number): void;
                    /**
                     * Set the minecart display block
                     */
                    // @ts-ignore
                    public setDisplayBlock(block: cn.nukkit.block.Block): boolean;
                    /**
                     * Set the minecart display block
                     */
                    // @ts-ignore
                    public setDisplayBlock(block: cn.nukkit.block.Block, update: boolean): boolean;
                    /**
                     * Get the minecart display block
                     */
                    // @ts-ignore
                    public getDisplayBlock(): cn.nukkit.block.Block;
                    /**
                     * Set the block offset.
                     */
                    // @ts-ignore
                    public setDisplayBlockOffset(offset: number): void;
                    /**
                     * Get the block display offset
                     */
                    // @ts-ignore
                    public getDisplayBlockOffset(): number;
                    /**
                     * Is the minecart can be slowed when empty?
                     */
                    // @ts-ignore
                    public isSlowWhenEmpty(): boolean;
                    /**
                     * Set the minecart slowdown flag
                     */
                    // @ts-ignore
                    public setSlowWhenEmpty(slow: boolean): void;
                    // @ts-ignore
                    public getFlyingVelocityMod(): cn.nukkit.math.Vector3;
                    // @ts-ignore
                    public setFlyingVelocityMod(flying: cn.nukkit.math.Vector3): void;
                    // @ts-ignore
                    public getDerailedVelocityMod(): cn.nukkit.math.Vector3;
                    // @ts-ignore
                    public setDerailedVelocityMod(derailed: cn.nukkit.math.Vector3): void;
                    // @ts-ignore
                    public setMaximumSpeed(speed: number): void;
                }
            }
        }
    }
}
