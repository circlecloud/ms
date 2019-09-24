declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class SpongeAbsorbEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block, waterblocks: any[] /*java.util.List*/)
                    /**
                     * Get a list of all blocks to be removed by the sponge.
                     * <br>
                     * This list is mutable and contains the blocks in their removed state, i.e.
                     * having a type of {@link Material#AIR}.
                     */
                    public getBlocks(): any[] /*java.util.List*/;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
