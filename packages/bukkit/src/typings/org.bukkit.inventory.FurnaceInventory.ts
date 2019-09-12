declare namespace org {
    namespace bukkit {
        namespace inventory {
            class FurnaceInventory {
                /**
                 * Get the current item in the result slot.
                 */
                public getResult(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the current fuel.
                 */
                public getFuel(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the item currently smelting.
                 */
                public getSmelting(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current fuel.
                 */
                public setFuel(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the current item in the result slot.
                 */
                public setResult(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the item currently smelting.
                 */
                public setSmelting(stack: org.bukkit.inventory.ItemStack): void;
                public getHolder(): org.bukkit.block.Furnace;
            }
        }
    }
}
