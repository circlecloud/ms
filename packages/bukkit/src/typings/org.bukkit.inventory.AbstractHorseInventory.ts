declare namespace org {
    namespace bukkit {
        namespace inventory {
            class AbstractHorseInventory {
                /**
                 * Gets the item in the horse's saddle slot.
                 */
                public getSaddle(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item in the horse's saddle slot.
                 */
                public setSaddle(stack: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
