// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockPistonExtendEvent extends org.bukkit.event.block.BlockPistonEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, length: number, direction: org.bukkit.block.BlockFace)
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, blocks: java.util.List, direction: org.bukkit.block.BlockFace)
                    /**
                     * Get the amount of blocks which will be moved while extending.
                     */
                    // @ts-ignore
                    public getLength(): number;
                    /**
                     * Get an immutable list of the blocks which will be moved by the
                     * extending.
                     */
                    // @ts-ignore
                    public getBlocks(): java.util.List;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
