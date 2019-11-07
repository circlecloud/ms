declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class FluidLevelChangeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, newData: org.bukkit.block.data.BlockData)
                    /**
                     * Gets the new data of the changed block.
                     */
                    // @ts-ignore
                    public getNewData(): org.bukkit.block.data.BlockData;
                    /**
                     * Sets the new data of the changed block. Must be of the same Material as
                     * the old one.
                     */
                    // @ts-ignore
                    public setNewData(newData: org.bukkit.block.data.BlockData): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
