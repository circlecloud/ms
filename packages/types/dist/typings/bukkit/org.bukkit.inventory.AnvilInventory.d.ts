// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface AnvilInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the name to be applied to the repaired item. An empty string denotes
                 * the default item name.
                 */
                // @ts-ignore
                 getRenameText(): string;
                /**
                 * Get the experience cost (in levels) to complete the current repair.
                 */
                // @ts-ignore
                 getRepairCost(): number;
                /**
                 * Set the experience cost (in levels) to complete the current repair.
                 */
                // @ts-ignore
                 setRepairCost(levels: number): void;
                /**
                 * Get the maximum experience cost (in levels) to be allowed by the current
                 * repair. If the result of {@link #getRepairCost()} exceeds the returned
                 * value, the repair result will be air to due being "too expensive".
                 * <p>
                 * By default, this level is set to 40. Players in creative mode ignore the
                 * maximum repair cost.
                 */
                // @ts-ignore
                 getMaximumRepairCost(): number;
                /**
                 * Set the maximum experience cost (in levels) to be allowed by the current
                 * repair. The default value set by vanilla Minecraft is 40.
                 */
                // @ts-ignore
                 setMaximumRepairCost(levels: number): void;
            }
        }
    }
}
