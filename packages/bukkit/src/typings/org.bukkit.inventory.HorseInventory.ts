declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface HorseInventory extends org.bukkit.inventory.AbstractHorseInventory {
                /**
                 * Gets the item in the horse's armor slot.
                 */
                 getArmor(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item in the horse's armor slot.
                 */
                 setArmor(stack: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
