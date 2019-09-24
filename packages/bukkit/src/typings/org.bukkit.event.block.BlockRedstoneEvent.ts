declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockRedstoneEvent extends org.bukkit.event.block.BlockEvent {
                    constructor(block: org.bukkit.block.Block, oldCurrent: number, newCurrent: number)
                    /**
                     * Gets the old current of this block
                     */
                    public getOldCurrent(): number;
                    /**
                     * Gets the new current of this block
                     */
                    public getNewCurrent(): number;
                    /**
                     * Sets the new current of this block
                     */
                    public setNewCurrent(newCurrent: number): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
