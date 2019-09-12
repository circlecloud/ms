declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class ProjectileLaunchEvent {
                    constructor(what: org.bukkit.entity.Entity)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Projectile;
                }
            }
        }
    }
}
