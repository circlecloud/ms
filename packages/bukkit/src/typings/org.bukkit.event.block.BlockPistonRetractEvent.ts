declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockPistonRetractEvent {
                    constructor(block: org.bukkit.block.Block, blocks: any[] /*java.util.List*/, direction: org.bukkit.block.BlockFace)
                    /**
                     * Gets the location where the possible moving block might be if the
                     * retracting piston is sticky.
                     */
                    public getRetractLocation(): org.bukkit.Location;
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
