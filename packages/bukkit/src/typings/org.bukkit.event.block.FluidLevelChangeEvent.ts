declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class FluidLevelChangeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(theBlock: org.bukkit.block.Block, newData: org.bukkit.block.data.BlockData)
                    /**
                     * Gets the new data of the changed block.
                     */
                    public getNewData(): org.bukkit.block.data.BlockData;
                    /**
                     * Sets the new data of the changed block. Must be of the same Material as
                     * the old one.
                     */
                    public setNewData(newData: org.bukkit.block.data.BlockData): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
