declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerArmorStandManipulateEvent {
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.ArmorStand, playerItem: org.bukkit.inventory.ItemStack, armorStandItem: org.bukkit.inventory.ItemStack, slot: org.bukkit.inventory.EquipmentSlot)
                    /**
                     * Returns the item held by the player. If this Item is null and the armor stand Item is also null,
                     * there will be no transaction between the player and the armor stand.
                     * If the Player's item is null, but the armor stand item is not then the player will obtain the armor stand item.
                     * In the case that the Player's item is not null, but the armor stand item is null, the players item will be placed on the armor stand.
                     * If both items are not null, the items will be swapped.
                     * In the case that the event is cancelled the original items will remain the same.
                     */
                    public getPlayerItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Returns the item held by the armor stand.
                     * If this Item is null and the player's Item is also null, there will be no transaction between the player and the armor stand.
                     * If the Player's item is null, but the armor stand item is not then the player will obtain the armor stand item.
                     * In the case that the Player's item is not null, but the armor stand item is null, the players item will be placed on the armor stand.
                     * If both items are not null, the items will be swapped.
                     * In the case that the event is cancelled the original items will remain the same.
                     */
                    public getArmorStandItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Returns the raw item slot of the armor stand in this event.
                     */
                    public getSlot(): org.bukkit.inventory.EquipmentSlot;
                    public getRightClicked(): org.bukkit.entity.ArmorStand;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
