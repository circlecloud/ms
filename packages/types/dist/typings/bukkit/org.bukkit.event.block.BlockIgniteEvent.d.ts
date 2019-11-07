declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockIgniteEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingEntity: org.bukkit.entity.Entity)
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingEntity: org.bukkit.entity.Entity, ignitingBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the cause of block ignite.
                     */
                    // @ts-ignore
                    public getCause(): org.bukkit.event.block.BlockIgniteEvent.IgniteCause;
                    /**
                     * Gets the player who ignited this block
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets the entity who ignited this block
                     */
                    // @ts-ignore
                    public getIgnitingEntity(): org.bukkit.entity.Entity;
                    /**
                     * Gets the block which ignited this block
                     */
                    // @ts-ignore
                    public getIgnitingBlock(): org.bukkit.block.Block;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
