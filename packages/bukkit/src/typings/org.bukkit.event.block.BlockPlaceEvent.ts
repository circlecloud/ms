declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class BlockPlaceEvent {
                    constructor(placedBlock: org.bukkit.block.Block, replacedBlockState: org.bukkit.block.BlockState, placedAgainst: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, thePlayer: org.bukkit.entity.Player, canBuild: boolean)
                    constructor(placedBlock: org.bukkit.block.Block, replacedBlockState: org.bukkit.block.BlockState, placedAgainst: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, thePlayer: org.bukkit.entity.Player, canBuild: boolean, hand: org.bukkit.inventory.EquipmentSlot)
                    protected cancel: boolean;
                    protected placedAgainst: org.bukkit.block.Block;
                    protected replacedBlockState: org.bukkit.block.BlockState;
                    protected itemInHand: org.bukkit.inventory.ItemStack;
                    protected player: org.bukkit.entity.Player;
                    protected hand: org.bukkit.inventory.EquipmentSlot;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the player who placed the block involved in this event.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Clarity method for getting the placed block. Not really needed except
                     * for reasons of clarity.
                     */
                    public getBlockPlaced(): org.bukkit.block.Block;
                    /**
                     * Gets the BlockState for the block which was replaced. Material type air
                     * mostly.
                     */
                    public getBlockReplacedState(): org.bukkit.block.BlockState;
                    /**
                     * Gets the block that this block was placed against
                     */
                    public getBlockAgainst(): org.bukkit.block.Block;
                    /**
                     * Gets the item in the player's hand when they placed the block.
                     */
                    public getItemInHand(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the hand which placed the block
                     */
                    public getHand(): org.bukkit.inventory.EquipmentSlot;
                    /**
                     * Gets the value whether the player would be allowed to build here.
                     * Defaults to spawn if the server was going to stop them (such as, the
                     * player is in Spawn). Note that this is an entirely different check
                     * than BLOCK_CANBUILD, as this refers to a player, not universe-physics
                     * rule like cactus on dirt.
                     */
                    public canBuild(): boolean;
                    /**
                     * Sets the canBuild state of this event. Set to true if you want the
                     * player to be able to build.
                     */
                    public setBuild(canBuild: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
