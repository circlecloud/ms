declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                abstract class EntityVehicle extends cn.nukkit.entity.Entity implements cn.nukkit.entity.EntityRideable, cn.nukkit.entity.EntityInteractable {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    protected rollingDirection: boolean;
                    // @ts-ignore
                    public getRollingAmplitude(): number;
                    // @ts-ignore
                    public setRollingAmplitude(time: number): void;
                    // @ts-ignore
                    public getRollingDirection(): number;
                    // @ts-ignore
                    public setRollingDirection(direction: number): void;
                    // @ts-ignore
                    public getDamage(): number;
                    // @ts-ignore
                    public setDamage(damage: number): void;
                    // @ts-ignore
                    public getInteractButtonText(): string;
                    // @ts-ignore
                    public canDoInteraction(): boolean;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    protected performHurtAnimation(): boolean;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                }
            }
        }
    }
}
