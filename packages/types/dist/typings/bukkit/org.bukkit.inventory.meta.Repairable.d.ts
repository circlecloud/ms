// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface Repairable {
                    /**
                     * Checks to see if this has a repair penalty
                     */
                    // @ts-ignore
                     hasRepairCost(): boolean;
                    /**
                     * Gets the repair penalty
                     */
                    // @ts-ignore
                     getRepairCost(): number;
                    /**
                     * Sets the repair penalty
                     */
                    // @ts-ignore
                     setRepairCost(cost: number): void;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.Repairable;
                }
            }
        }
    }
}
