// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockRedstoneEvent extends org.bukkit.event.block.BlockEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, oldCurrent: number, newCurrent: number)
                    /**
                     * Gets the old current of this block
                     */
                    // @ts-ignore
                    public getOldCurrent(): number;
                    /**
                     * Gets the new current of this block
                     */
                    // @ts-ignore
                    public getNewCurrent(): number;
                    /**
                     * Sets the new current of this block
                     */
                    // @ts-ignore
                    public setNewCurrent(newCurrent: number): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
