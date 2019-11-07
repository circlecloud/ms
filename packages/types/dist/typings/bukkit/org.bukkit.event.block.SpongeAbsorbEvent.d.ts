// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class SpongeAbsorbEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, waterblocks: java.util.List)
                    /**
                     * Get a list of all blocks to be removed by the sponge.
                     * <br>
                     * This list is mutable and contains the blocks in their removed state, i.e.
                     * having a type of {@link Material#AIR}.
                     */
                    // @ts-ignore
                    public getBlocks(): java.util.List;
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
