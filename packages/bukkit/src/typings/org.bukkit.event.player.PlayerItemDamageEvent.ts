declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerItemDamageEvent {
                    constructor(player: org.bukkit.entity.Player, what: org.bukkit.inventory.ItemStack, damage: number)
                    /**
                     * Gets the item being damaged.
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the amount of durability damage this item will be taking.
                     */
                    public getDamage(): number;
                    public setDamage(damage: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
