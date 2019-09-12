declare namespace org {
    namespace bukkit {
        namespace inventory {
            class PlayerInventory {
                /**
                 * Get all ItemStacks from the armor slots
                 */
                public getArmorContents(): org.bukkit.inventory.ItemStack[];
                /**
                 * Get all additional ItemStacks stored in this inventory.
                 * <br>
                 * NB: What defines an extra slot is up to the implementation, however it
                 * will not be contained within {@link #getStorageContents()} or
                 * {@link #getArmorContents()}
                 */
                public getExtraContents(): org.bukkit.inventory.ItemStack[];
                /**
                 * Return the ItemStack from the helmet slot
                 */
                public getHelmet(): org.bukkit.inventory.ItemStack;
                /**
                 * Return the ItemStack from the chestplate slot
                 */
                public getChestplate(): org.bukkit.inventory.ItemStack;
                /**
                 * Return the ItemStack from the leg slot
                 */
                public getLeggings(): org.bukkit.inventory.ItemStack;
                /**
                 * Return the ItemStack from the boots slot
                 */
                public getBoots(): org.bukkit.inventory.ItemStack;
                /**
                 * Stores the ItemStack at the given index of the inventory.
                 * <p>
                 * Indexes 0 through 8 refer to the hotbar. 9 through 35 refer to the main inventory, counting up from 9 at the top
                 * left corner of the inventory, moving to the right, and moving to the row below it back on the left side when it
                 * reaches the end of the row. It follows the same path in the inventory like you would read a book.
                 * <p>
                 * Indexes 36 through 39 refer to the armor slots. Though you can set armor with this method using these indexes,
                 * you are encouraged to use the provided methods for those slots.
                 * <p>
                 * Index 40 refers to the off hand (shield) item slot. Though you can set off hand with this method using this index,
                 * you are encouraged to use the provided method for this slot.
                 * <p>
                 * If you attempt to use this method with an index less than 0 or greater than 40, an ArrayIndexOutOfBounds
                 * exception will be thrown.
                 */
                public setItem(index: number, item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Put the given ItemStacks into the armor slots
                 */
                public setArmorContents(items: org.bukkit.inventory.ItemStack): void;
                /**
                 * Put the given ItemStacks into the extra slots
                 * <br>
                 * See {@link #getExtraContents()} for an explanation of extra slots.
                 */
                public setExtraContents(items: org.bukkit.inventory.ItemStack): void;
                /**
                 * Put the given ItemStack into the helmet slot. This does not check if
                 * the ItemStack is a helmet
                 */
                public setHelmet(helmet: org.bukkit.inventory.ItemStack): void;
                /**
                 * Put the given ItemStack into the chestplate slot. This does not check
                 * if the ItemStack is a chestplate
                 */
                public setChestplate(chestplate: org.bukkit.inventory.ItemStack): void;
                /**
                 * Put the given ItemStack into the leg slot. This does not check if the
                 * ItemStack is a pair of leggings
                 */
                public setLeggings(leggings: org.bukkit.inventory.ItemStack): void;
                /**
                 * Put the given ItemStack into the boots slot. This does not check if the
                 * ItemStack is a boots
                 */
                public setBoots(boots: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the player is currently holding
                 * in their main hand.
                 */
                public getItemInMainHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the player is holding in their main hand.
                 */
                public setItemInMainHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the player is currently holding
                 * in their off hand.
                 */
                public getItemInOffHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the player is holding in their off hand.
                 */
                public setItemInOffHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the player is currently holding
                 */
                public getItemInHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the player is holding
                 */
                public setItemInHand(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the slot number of the currently held item
                 */
                public getHeldItemSlot(): number;
                /**
                 * Set the slot number of the currently held item.
                 * <p>
                 * This validates whether the slot is between 0 and 8 inclusive.
                 */
                public setHeldItemSlot(slot: number): void;
                public getHolder(): org.bukkit.entity.HumanEntity;
            }
        }
    }
}
