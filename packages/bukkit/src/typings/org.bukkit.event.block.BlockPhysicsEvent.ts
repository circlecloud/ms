declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockPhysicsEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block, changed: org.bukkit.block.data.BlockData)
                    constructor(block: org.bukkit.block.Block, changed: org.bukkit.block.data.BlockData, sourceBlock: org.bukkit.block.Block)
                    /**
                     * Gets the source block that triggered this event.
                     * Note: This will default to block if not set.
                     */
                    public getSourceBlock(): org.bukkit.block.Block;
                    /**
                     * Gets the type of block that changed, causing this event
                     */
                    public getChangedType(): org.bukkit.Material;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
