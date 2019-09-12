declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class MoistureChangeEvent {
                    constructor(block: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    /**
                     * Gets the new state of the affected block.
                     */
                    public getNewState(): org.bukkit.block.BlockState;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
