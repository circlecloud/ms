declare namespace org {
    namespace bukkit {
        namespace block {
            class BrewingStand {
                /**
                 * How much time is left in the brewing cycle.
                 */
                public getBrewingTime(): number;
                /**
                 * Set the time left before brewing completes.
                 */
                public setBrewingTime(brewTime: number): void;
                /**
                 * Get the level of current fuel for brewing.
                 */
                public getFuelLevel(): number;
                /**
                 * Set the level of current fuel for brewing.
                 */
                public setFuelLevel(level: number): void;
                public getInventory(): org.bukkit.inventory.BrewerInventory;
                public getSnapshotInventory(): org.bukkit.inventory.BrewerInventory;
            }
        }
    }
}
