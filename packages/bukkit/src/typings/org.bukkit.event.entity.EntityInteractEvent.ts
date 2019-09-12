declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityInteractEvent {
                    constructor(entity: org.bukkit.entity.Entity, block: org.bukkit.block.Block)
                    protected block: org.bukkit.block.Block;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the involved block
                     */
                    public getBlock(): org.bukkit.block.Block;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
