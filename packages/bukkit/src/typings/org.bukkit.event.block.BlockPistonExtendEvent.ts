declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockPistonExtendEvent {
                    constructor(block: org.bukkit.block.Block, length: number, direction: org.bukkit.block.BlockFace)
                    constructor(block: org.bukkit.block.Block, blocks: any[] /*java.util.List*/, direction: org.bukkit.block.BlockFace)
                    /**
                     * Get the amount of blocks which will be moved while extending.
                     */
                    public getLength(): number;
                    /**
                     * Get an immutable list of the blocks which will be moved by the
                     * extending.
                     */
                    public getBlocks(): any[] /*java.util.List*/;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
