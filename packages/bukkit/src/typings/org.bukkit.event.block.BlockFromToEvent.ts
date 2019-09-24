declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockFromToEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block, face: org.bukkit.block.BlockFace)
                    constructor(block: org.bukkit.block.Block, toBlock: org.bukkit.block.Block)
                    protected to: org.bukkit.block.Block;
                    protected face: org.bukkit.block.BlockFace;
                    protected cancel: boolean;
                    /**
                     * Gets the BlockFace that the block is moving to.
                     */
                    public getFace(): org.bukkit.block.BlockFace;
                    /**
                     * Convenience method for getting the faced Block.
                     */
                    public getToBlock(): org.bukkit.block.Block;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
