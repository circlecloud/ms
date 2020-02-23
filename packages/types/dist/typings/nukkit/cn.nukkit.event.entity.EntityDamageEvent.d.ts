declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDamageEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, damage: number)
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getCause(): cn.nukkit.event.entity.EntityDamageEvent.DamageCause;
                    // @ts-ignore
                    public getOriginalDamage(): number;
                    // @ts-ignore
                    public getOriginalDamage(type: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier): number;
                    // @ts-ignore
                    public getDamage(): number;
                    // @ts-ignore
                    public getDamage(type: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier): number;
                    // @ts-ignore
                    public setDamage(damage: number): void;
                    // @ts-ignore
                    public setDamage(damage: number, type: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier): void;
                    // @ts-ignore
                    public isApplicable(type: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier): boolean;
                    // @ts-ignore
                    public getFinalDamage(): number;
                    // @ts-ignore
                    public getAttackCooldown(): number;
                    // @ts-ignore
                    public setAttackCooldown(attackCooldown: number): void;
                    // @ts-ignore
                    public canBeReducedByArmor(): boolean;
                }
            }
        }
    }
}
