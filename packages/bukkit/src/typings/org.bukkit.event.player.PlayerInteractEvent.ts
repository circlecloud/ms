declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerInteractEvent implements org.bukkit.event.Cancellable {
                    constructor(who: org.bukkit.entity.Player, action: org.bukkit.event.block.Action, item: org.bukkit.inventory.ItemStack, clickedBlock: org.bukkit.block.Block, clickedFace: org.bukkit.block.BlockFace)
                    constructor(who: org.bukkit.entity.Player, action: org.bukkit.event.block.Action, item: org.bukkit.inventory.ItemStack, clickedBlock: org.bukkit.block.Block, clickedFace: org.bukkit.block.BlockFace, hand: org.bukkit.inventory.EquipmentSlot)
                    protected item: org.bukkit.inventory.ItemStack;
                    protected action: org.bukkit.event.block.Action;
                    protected blockClicked: org.bukkit.block.Block;
                    protected blockFace: org.bukkit.block.BlockFace;
                    /**
                     * Returns the action type
                     */
                    public getAction(): org.bukkit.event.block.Action;
                    /**
                     * Gets the cancellation state of this event. Set to true if you want to
                     * prevent buckets from placing water and so forth
                     */
                    public isCancelled(): boolean;
                    /**
                     * Sets the cancellation state of this event. A canceled event will not be
                     * executed in the server, but will still pass to other plugins
                     * <p>
                     * Canceling this event will prevent use of food (player won't lose the
                     * food item), prevent bows/snowballs/eggs from firing, etc. (player won't
                     * lose the ammo)
                     */
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the item in hand represented by this event
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Convenience method. Returns the material of the item represented by
                     * this event
                     */
                    public getMaterial(): org.bukkit.Material;
                    /**
                     * Check if this event involved a block
                     */
                    public hasBlock(): boolean;
                    /**
                     * Check if this event involved an item
                     */
                    public hasItem(): boolean;
                    /**
                     * Convenience method to inform the user whether this was a block
                     * placement event.
                     */
                    public isBlockInHand(): boolean;
                    /**
                     * Returns the clicked block
                     */
                    public getClickedBlock(): org.bukkit.block.Block;
                    /**
                     * Returns the face of the block that was clicked
                     */
                    public getBlockFace(): org.bukkit.block.BlockFace;
                    /**
                     * This controls the action to take with the block (if any) that was
                     * clicked on. This event gets processed for all blocks, but most don't
                     * have a default action
                     */
                    public useInteractedBlock(): org.bukkit.event.Event.Result;
                    public setUseInteractedBlock(useInteractedBlock: org.bukkit.event.Event.Result): void;
                    /**
                     * This controls the action to take with the item the player is holding.
                     * This includes both blocks and items (such as flint and steel or
                     * records). When this is set to default, it will be allowed if no action
                     * is taken on the interacted block.
                     */
                    public useItemInHand(): org.bukkit.event.Event.Result;
                    public setUseItemInHand(useItemInHand: org.bukkit.event.Event.Result): void;
                    /**
                     * The hand used to perform this interaction. May be null in the case of
                     * {@link Action#PHYSICAL}.
                     */
                    public getHand(): org.bukkit.inventory.EquipmentSlot;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
