declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface AbstractHorseInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Gets the item in the horse's saddle slot.
                 */
                // @ts-ignore
                 getSaddle(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item in the horse's saddle slot.
                 */
                // @ts-ignore
                 setSaddle(stack: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
