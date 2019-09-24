declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockFertilizeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(theBlock: org.bukkit.block.Block, player: org.bukkit.entity.Player, blocks: any[] /*java.util.List*/)
                    /**
                     * Gets the player that triggered the fertilization.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets a list of all blocks changed by the fertilization.
                     */
                    public getBlocks(): any[] /*java.util.List*/;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
