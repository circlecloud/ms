declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                abstract class EntityEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    protected entity: cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.Entity;
                }
            }
        }
    }
}
