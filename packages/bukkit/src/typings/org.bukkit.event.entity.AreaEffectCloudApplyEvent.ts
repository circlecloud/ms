declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class AreaEffectCloudApplyEvent {
                    constructor(entity: org.bukkit.entity.AreaEffectCloud, affectedEntities: any[] /*java.util.List*/)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.AreaEffectCloud;
                    /**
                     * Retrieves a mutable list of the effected entities
                     * <p>
                     * It is important to note that not every entity in this list
                     * is guaranteed to be effected.  The cloud may die during the
                     * application of its effects due to the depletion of {@link AreaEffectCloud#getDurationOnUse()}
                     * or {@link AreaEffectCloud#getRadiusOnUse()}
                     */
                    public getAffectedEntities(): any[] /*java.util.List*/;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
