declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityChangeBlockEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, block: org.bukkit.block.Block, to: org.bukkit.block.data.BlockData)
                    /**
                     * Gets the block the entity is changing
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the Material that the block is changing into
                     */
                    // @ts-ignore
                    public getTo(): org.bukkit.Material;
                    /**
                     * Gets the data for the block that would be changed into
                     */
                    // @ts-ignore
                    public getBlockData(): org.bukkit.block.data.BlockData;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
