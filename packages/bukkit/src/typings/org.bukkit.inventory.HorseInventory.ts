declare namespace org {
    namespace bukkit {
        namespace inventory {
            class HorseInventory {
                /**
                 * Gets the item in the horse's armor slot.
                 */
                public getArmor(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item in the horse's armor slot.
                 */
                public setArmor(stack: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
