declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class AreaEffectCloudApplyEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.AreaEffectCloud, affectedEntities: java.util.List)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.AreaEffectCloud;
                    /**
                     * Retrieves a mutable list of the effected entities
                     * <p>
                     * It is important to note that not every entity in this list
                     * is guaranteed to be effected.  The cloud may die during the
                     * application of its effects due to the depletion of {@link AreaEffectCloud#getDurationOnUse()}
                     * or {@link AreaEffectCloud#getRadiusOnUse()}
                     */
                    // @ts-ignore
                    public getAffectedEntities(): java.util.List;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
