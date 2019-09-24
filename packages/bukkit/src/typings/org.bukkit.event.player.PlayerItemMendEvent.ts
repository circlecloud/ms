declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerItemMendEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(who: org.bukkit.entity.Player, item: org.bukkit.inventory.ItemStack, experienceOrb: org.bukkit.entity.ExperienceOrb, repairAmount: number)
                    /**
                     * Get the {@link ItemStack} to be repaired.
                     * This is not necessarily the item the player is holding.
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Get the experience orb triggering the event.
                     */
                    public getExperienceOrb(): org.bukkit.entity.ExperienceOrb;
                    /**
                     * Get the amount the item is to be repaired.
                     * The default value is twice the value of the consumed experience orb
                     * or the remaining damage left on the item, whichever is smaller.
                     */
                    public getRepairAmount(): number;
                    /**
                     * Set the amount the item will be repaired.
                     * Half of this value will be subtracted from the experience orb which initiated this event.
                     */
                    public setRepairAmount(amount: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
