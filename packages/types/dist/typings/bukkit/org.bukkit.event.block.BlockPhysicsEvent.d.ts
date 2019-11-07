declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockPhysicsEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, changed: org.bukkit.block.data.BlockData)
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, changed: org.bukkit.block.data.BlockData, sourceBlock: org.bukkit.block.Block)
                    /**
                     * Gets the source block that triggered this event.
                     * Note: This will default to block if not set.
                     */
                    // @ts-ignore
                    public getSourceBlock(): org.bukkit.block.Block;
                    /**
                     * Gets the type of block that changed, causing this event
                     */
                    // @ts-ignore
                    public getChangedType(): org.bukkit.Material;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
