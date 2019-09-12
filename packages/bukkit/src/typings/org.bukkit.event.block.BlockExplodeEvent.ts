declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class BlockExplodeEvent {
                    constructor(what: org.bukkit.block.Block, blocks: any[] /*java.util.List*/, yield: number)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the list of blocks that would have been removed or were removed
                     * from the explosion event.
                     */
                    public blockList(): any[] /*java.util.List*/;
                    /**
                     * Returns the percentage of blocks to drop from this explosion
                     */
                    public getYield(): number;
                    /**
                     * Sets the percentage of blocks to drop from this explosion
                     */
                    public setYield(yield: number): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
