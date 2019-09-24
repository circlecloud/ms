declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class PortalCreateEvent implements org.bukkit.event.Cancellable {
                    constructor(blocks: any[] /*java.util.List*/, world: org.bukkit.World, reason: org.bukkit.event.world.PortalCreateEvent.CreateReason)
                    constructor(blocks: any[] /*java.util.List*/, world: org.bukkit.World, entity: org.bukkit.entity.Entity, reason: org.bukkit.event.world.PortalCreateEvent.CreateReason)
                    /**
                     * Gets an array list of all the blocks associated with the created portal
                     */
                    public getBlocks(): any[] /*java.util.List*/;
                    /**
                     * Returns the Entity that triggered this portal creation (if available)
                     */
                    public getEntity(): org.bukkit.entity.Entity;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the reason for the portal's creation
                     */
                    public getReason(): org.bukkit.event.world.PortalCreateEvent.CreateReason;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
