declare namespace org {
    namespace bukkit {
        namespace inventory {
            class LlamaInventory {
                /**
                 * Gets the item in the llama's decor slot.
                 */
                public getDecor(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item in the llama's decor slot.
                 */
                public setDecor(stack: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
