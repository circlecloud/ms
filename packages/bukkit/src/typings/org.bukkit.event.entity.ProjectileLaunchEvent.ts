declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ProjectileLaunchEvent extends org.bukkit.event.entity.EntitySpawnEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.Entity)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Projectile;
                }
            }
        }
    }
}
