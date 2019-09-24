declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockFadeEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    /**
                     * Gets the state of the block that will be fading, melting or
                     * disappearing.
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
