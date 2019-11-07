// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockPistonRetractEvent extends org.bukkit.event.block.BlockPistonEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, blocks: java.util.List, direction: org.bukkit.block.BlockFace)
                    /**
                     * Gets the location where the possible moving block might be if the
                     * retracting piston is sticky.
                     */
                    // @ts-ignore
                    public getRetractLocation(): org.bukkit.Location;
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
