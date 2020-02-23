declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDamageByEntityEvent extends cn.nukkit.event.entity.EntityDamageEvent {
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, damage: number)
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map)
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, damage: number, knockBack: number)
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map, knockBack: number)
                    // @ts-ignore
                    protected addAttackerModifiers(damager: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public getDamager(): cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public getKnockBack(): number;
                    // @ts-ignore
                    public setKnockBack(knockBack: number): void;
                }
            }
        }
    }
}
