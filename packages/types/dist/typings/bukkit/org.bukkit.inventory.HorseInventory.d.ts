// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface HorseInventory extends org.bukkit.inventory.AbstractHorseInventory {
                /**
                 * Gets the item in the horse's armor slot.
                 */
                // @ts-ignore
                 getArmor(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item in the horse's armor slot.
                 */
                // @ts-ignore
                 setArmor(stack: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
