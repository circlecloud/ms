declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class Repairable {
                    /**
                     * Checks to see if this has a repair penalty
                     */
                    public hasRepairCost(): boolean;
                    /**
                     * Gets the repair penalty
                     */
                    public getRepairCost(): number;
                    /**
                     * Sets the repair penalty
                     */
                    public setRepairCost(cost: number): void;
                    public clone(): org.bukkit.inventory.meta.Repairable;
                }
            }
        }
    }
}
