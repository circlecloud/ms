// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockExplodeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.block.Block, blocks: java.util.List, yield: number)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the list of blocks that would have been removed or were removed
                     * from the explosion event.
                     */
                    // @ts-ignore
                    public blockList(): java.util.List;
                    /**
                     * Returns the percentage of blocks to drop from this explosion
                     */
                    // @ts-ignore
                    public getYield(): number;
                    /**
                     * Sets the percentage of blocks to drop from this explosion
                     */
                    // @ts-ignore
                    public setYield(yield: number): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
