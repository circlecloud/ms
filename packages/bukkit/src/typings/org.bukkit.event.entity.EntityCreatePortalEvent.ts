declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityCreatePortalEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.LivingEntity, blocks: any[] /*java.util.List*/, type: org.bukkit.PortalType)
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets a list of all blocks associated with the portal.
                     */
                    public getBlocks(): any[] /*java.util.List*/;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the type of portal that is trying to be created.
                     */
                    public getPortalType(): org.bukkit.PortalType;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
