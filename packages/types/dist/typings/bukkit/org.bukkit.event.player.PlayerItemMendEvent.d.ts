declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerItemMendEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, item: org.bukkit.inventory.ItemStack, experienceOrb: org.bukkit.entity.ExperienceOrb, repairAmount: number)
                    /**
                     * Get the {@link ItemStack} to be repaired.
                     * This is not necessarily the item the player is holding.
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Get the experience orb triggering the event.
                     */
                    // @ts-ignore
                    public getExperienceOrb(): org.bukkit.entity.ExperienceOrb;
                    /**
                     * Get the amount the item is to be repaired.
                     * The default value is twice the value of the consumed experience orb
                     * or the remaining damage left on the item, whichever is smaller.
                     */
                    // @ts-ignore
                    public getRepairAmount(): number;
                    /**
                     * Set the amount the item will be repaired.
                     * Half of this value will be subtracted from the experience orb which initiated this event.
                     */
                    // @ts-ignore
                    public setRepairAmount(amount: number): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
