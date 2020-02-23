declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityCombustByEntityEvent extends cn.nukkit.event.entity.EntityCombustEvent {
                    // @ts-ignore
                    constructor(combuster: cn.nukkit.entity.Entity, combustee: cn.nukkit.entity.Entity, duration: number)
                    // @ts-ignore
                    protected combuster: cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public getCombuster(): cn.nukkit.entity.Entity;
                }
            }
        }
    }
}
