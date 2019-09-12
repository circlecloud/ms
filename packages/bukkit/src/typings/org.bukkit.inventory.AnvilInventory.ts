declare namespace org {
    namespace bukkit {
        namespace inventory {
            class AnvilInventory {
                /**
                 * Get the name to be applied to the repaired item. An empty string denotes
                 * the default item name.
                 */
                public getRenameText(): string;
                /**
                 * Get the experience cost (in levels) to complete the current repair.
                 */
                public getRepairCost(): number;
                /**
                 * Set the experience cost (in levels) to complete the current repair.
                 */
                public setRepairCost(levels: number): void;
                /**
                 * Get the maximum experience cost (in levels) to be allowed by the current
                 * repair. If the result of {@link #getRepairCost()} exceeds the returned
                 * value, the repair result will be air to due being "too expensive".
                 * <p>
                 * By default, this level is set to 40. Players in creative mode ignore the
                 * maximum repair cost.
                 */
                public getMaximumRepairCost(): number;
                /**
                 * Set the maximum experience cost (in levels) to be allowed by the current
                 * repair. The default value set by vanilla Minecraft is 40.
                 */
                public setMaximumRepairCost(levels: number): void;
            }
        }
    }
}
