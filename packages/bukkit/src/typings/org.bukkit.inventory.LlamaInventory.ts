declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface LlamaInventory extends org.bukkit.inventory.AbstractHorseInventory {
                /**
                 * Gets the item in the llama's decor slot.
                 */
                 getDecor(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item in the llama's decor slot.
                 */
                 setDecor(stack: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
