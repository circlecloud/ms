declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface FurnaceInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the current item in the result slot.
                 */
                // @ts-ignore
                 getResult(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the current fuel.
                 */
                // @ts-ignore
                 getFuel(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the item currently smelting.
                 */
                // @ts-ignore
                 getSmelting(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current fuel.
                 */
                // @ts-ignore
                 setFuel(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the current item in the result slot.
                 */
                // @ts-ignore
                 setResult(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the item currently smelting.
                 */
                // @ts-ignore
                 setSmelting(stack: org.bukkit.inventory.ItemStack): void;
                // @ts-ignore
                 getHolder(): org.bukkit.block.Furnace;
            }
        }
    }
}
