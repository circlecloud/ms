declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface Repairable {
                    /**
                     * Checks to see if this has a repair penalty
                     */
                     hasRepairCost(): boolean;
                    /**
                     * Gets the repair penalty
                     */
                     getRepairCost(): number;
                    /**
                     * Sets the repair penalty
                     */
                     setRepairCost(cost: number): void;
                     clone(): org.bukkit.inventory.meta.Repairable;
                }
            }
        }
    }
}
