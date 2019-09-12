declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                class HangingPlaceEvent {
                    constructor(hanging: org.bukkit.entity.Hanging, player: org.bukkit.entity.Player, block: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace)
                    /**
                     * Returns the player placing the hanging entity
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Returns the block that the hanging entity was placed on
                     */
                    public getBlock(): org.bukkit.block.Block;
                    /**
                     * Returns the face of the block that the hanging entity was placed on
                     */
                    public getBlockFace(): org.bukkit.block.BlockFace;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
