declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityChangeBlockEvent {
                    constructor(what: org.bukkit.entity.Entity, block: org.bukkit.block.Block, to: org.bukkit.block.data.BlockData)
                    /**
                     * Gets the block the entity is changing
                     */
                    public getBlock(): org.bukkit.block.Block;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the Material that the block is changing into
                     */
                    public getTo(): org.bukkit.Material;
                    /**
                     * Gets the data for the block that would be changed into
                     */
                    public getBlockData(): org.bukkit.block.data.BlockData;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
