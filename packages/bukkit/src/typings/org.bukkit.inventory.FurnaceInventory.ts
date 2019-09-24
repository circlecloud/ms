declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface FurnaceInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the current item in the result slot.
                 */
                 getResult(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the current fuel.
                 */
                 getFuel(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the item currently smelting.
                 */
                 getSmelting(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current fuel.
                 */
                 setFuel(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the current item in the result slot.
                 */
                 setResult(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the item currently smelting.
                 */
                 setSmelting(stack: org.bukkit.inventory.ItemStack): void;
                 getHolder(): org.bukkit.block.Furnace;
            }
        }
    }
}
