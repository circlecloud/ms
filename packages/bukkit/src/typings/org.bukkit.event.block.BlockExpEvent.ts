declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class BlockExpEvent {
                    constructor(block: org.bukkit.block.Block, exp: number)
                    /**
                     * Get the experience dropped by the block after the event has processed
                     */
                    public getExpToDrop(): number;
                    /**
                     * Set the amount of experience dropped by the block after the event has
                     * processed
                     */
                    public setExpToDrop(exp: number): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
