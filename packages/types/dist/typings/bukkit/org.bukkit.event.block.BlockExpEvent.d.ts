// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockExpEvent extends org.bukkit.event.block.BlockEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, exp: number)
                    /**
                     * Get the experience dropped by the block after the event has processed
                     */
                    // @ts-ignore
                    public getExpToDrop(): number;
                    /**
                     * Set the amount of experience dropped by the block after the event has
                     * processed
                     */
                    // @ts-ignore
                    public setExpToDrop(exp: number): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
