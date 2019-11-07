// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerInteractEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, action: org.bukkit.event.block.Action, item: org.bukkit.inventory.ItemStack, clickedBlock: org.bukkit.block.Block, clickedFace: org.bukkit.block.BlockFace)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, action: org.bukkit.event.block.Action, item: org.bukkit.inventory.ItemStack, clickedBlock: org.bukkit.block.Block, clickedFace: org.bukkit.block.BlockFace, hand: org.bukkit.inventory.EquipmentSlot)
                    // @ts-ignore
                    protected item: org.bukkit.inventory.ItemStack;
                    // @ts-ignore
                    protected action: org.bukkit.event.block.Action;
                    // @ts-ignore
                    protected blockClicked: org.bukkit.block.Block;
                    // @ts-ignore
                    protected blockFace: org.bukkit.block.BlockFace;
                    /**
                     * Returns the action type
                     */
                    // @ts-ignore
                    public getAction(): org.bukkit.event.block.Action;
                    /**
                     * Gets the cancellation state of this event. Set to true if you want to
                     * prevent buckets from placing water and so forth
                     */
                    // @ts-ignore
                    public isCancelled(): boolean;
                    /**
                     * Sets the cancellation state of this event. A canceled event will not be
                     * executed in the server, but will still pass to other plugins
                     * <p>
                     * Canceling this event will prevent use of food (player won't lose the
                     * food item), prevent bows/snowballs/eggs from firing, etc. (player won't
                     * lose the ammo)
                     */
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the item in hand represented by this event
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Convenience method. Returns the material of the item represented by
                     * this event
                     */
                    // @ts-ignore
                    public getMaterial(): org.bukkit.Material;
                    /**
                     * Check if this event involved a block
                     */
                    // @ts-ignore
                    public hasBlock(): boolean;
                    /**
                     * Check if this event involved an item
                     */
                    // @ts-ignore
                    public hasItem(): boolean;
                    /**
                     * Convenience method to inform the user whether this was a block
                     * placement event.
                     */
                    // @ts-ignore
                    public isBlockInHand(): boolean;
                    /**
                     * Returns the clicked block
                     */
                    // @ts-ignore
                    public getClickedBlock(): org.bukkit.block.Block;
                    /**
                     * Returns the face of the block that was clicked
                     */
                    // @ts-ignore
                    public getBlockFace(): org.bukkit.block.BlockFace;
                    /**
                     * This controls the action to take with the block (if any) that was
                     * clicked on. This event gets processed for all blocks, but most don't
                     * have a default action
                     */
                    // @ts-ignore
                    public useInteractedBlock(): org.bukkit.event.Event.Result;
                    // @ts-ignore
                    public setUseInteractedBlock(useInteractedBlock: org.bukkit.event.Event.Result): void;
                    /**
                     * This controls the action to take with the item the player is holding.
                     * This includes both blocks and items (such as flint and steel or
                     * records). When this is set to default, it will be allowed if no action
                     * is taken on the interacted block.
                     */
                    // @ts-ignore
                    public useItemInHand(): org.bukkit.event.Event.Result;
                    // @ts-ignore
                    public setUseItemInHand(useItemInHand: org.bukkit.event.Event.Result): void;
                    /**
                     * The hand used to perform this interaction. May be null in the case of
                     * {@link Action#PHYSICAL}.
                     */
                    // @ts-ignore
                    public getHand(): org.bukkit.inventory.EquipmentSlot;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
