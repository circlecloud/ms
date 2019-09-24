declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockIgniteEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingEntity: org.bukkit.entity.Entity)
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingBlock: org.bukkit.block.Block)
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingEntity: org.bukkit.entity.Entity, ignitingBlock: org.bukkit.block.Block)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the cause of block ignite.
                     */
                    public getCause(): org.bukkit.event.block.BlockIgniteEvent.IgniteCause;
                    /**
                     * Gets the player who ignited this block
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets the entity who ignited this block
                     */
                    public getIgnitingEntity(): org.bukkit.entity.Entity;
                    /**
                     * Gets the block which ignited this block
                     */
                    public getIgnitingBlock(): org.bukkit.block.Block;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
