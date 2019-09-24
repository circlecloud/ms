declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityPoseChangeEvent {
                    constructor(who: org.bukkit.entity.Entity, pose: org.bukkit.entity.Pose)
                    /**
                     * Gets the entity's new pose.
                     */
                    public getPose(): org.bukkit.entity.Pose;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
