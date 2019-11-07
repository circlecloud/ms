// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                // @ts-ignore
                 class HangingPlaceEvent extends org.bukkit.event.hanging.HangingEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(hanging: org.bukkit.entity.Hanging, player: org.bukkit.entity.Player, block: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace)
                    /**
                     * Returns the player placing the hanging entity
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Returns the block that the hanging entity was placed on
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block;
                    /**
                     * Returns the face of the block that the hanging entity was placed on
                     */
                    // @ts-ignore
                    public getBlockFace(): org.bukkit.block.BlockFace;
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
