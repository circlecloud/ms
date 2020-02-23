declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDamageByChildEntityEvent extends cn.nukkit.event.entity.EntityDamageByEntityEvent {
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, childEntity: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, damage: number)
                    // @ts-ignore
                    public getChild(): cn.nukkit.entity.Entity;
                }
            }
        }
    }
}
