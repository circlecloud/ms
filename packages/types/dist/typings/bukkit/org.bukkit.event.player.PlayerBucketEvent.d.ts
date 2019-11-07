declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                abstract class PlayerBucketEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, block: org.bukkit.block.Block, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    /**
                     * Returns the bucket used in this event
                     */
                    // @ts-ignore
                    public getBucket(): org.bukkit.Material;
                    /**
                     * Get the resulting item in hand after the bucket event
                     */
                    // @ts-ignore
                    public getItemStack(): org.bukkit.inventory.ItemStack;
                    /**
                     * Set the item in hand after the event
                     */
                    // @ts-ignore
                    public setItemStack(itemStack: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets the block involved in this event.
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block;
                    /**
                     * Return the block clicked
                     */
                    // @ts-ignore
                    public getBlockClicked(): org.bukkit.block.Block;
                    /**
                     * Get the face on the clicked block
                     */
                    // @ts-ignore
                    public getBlockFace(): org.bukkit.block.BlockFace;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
