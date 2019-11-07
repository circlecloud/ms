// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface LlamaInventory extends org.bukkit.inventory.AbstractHorseInventory {
                /**
                 * Gets the item in the llama's decor slot.
                 */
                // @ts-ignore
                 getDecor(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item in the llama's decor slot.
                 */
                // @ts-ignore
                 setDecor(stack: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
