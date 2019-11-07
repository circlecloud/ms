declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityCreatePortalEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.LivingEntity, blocks: java.util.List, type: org.bukkit.PortalType)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets a list of all blocks associated with the portal.
                     */
                    // @ts-ignore
                    public getBlocks(): java.util.List;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the type of portal that is trying to be created.
                     */
                    // @ts-ignore
                    public getPortalType(): org.bukkit.PortalType;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
