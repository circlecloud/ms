declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                abstract class PlayerBucketEvent {
                    constructor(who: org.bukkit.entity.Player, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    constructor(who: org.bukkit.entity.Player, block: org.bukkit.block.Block, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    /**
                     * Returns the bucket used in this event
                     */
                    public getBucket(): org.bukkit.Material;
                    /**
                     * Get the resulting item in hand after the bucket event
                     */
                    public getItemStack(): org.bukkit.inventory.ItemStack;
                    /**
                     * Set the item in hand after the event
                     */
                    public setItemStack(itemStack: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets the block involved in this event.
                     */
                    public getBlock(): org.bukkit.block.Block;
                    /**
                     * Return the block clicked
                     */
                    public getBlockClicked(): org.bukkit.block.Block;
                    /**
                     * Get the face on the clicked block
                     */
                    public getBlockFace(): org.bukkit.block.BlockFace;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
