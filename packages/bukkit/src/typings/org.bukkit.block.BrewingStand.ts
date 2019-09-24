declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface BrewingStand extends org.bukkit.block.Container {
                /**
                 * How much time is left in the brewing cycle.
                 */
                 getBrewingTime(): number;
                /**
                 * Set the time left before brewing completes.
                 */
                 setBrewingTime(brewTime: number): void;
                /**
                 * Get the level of current fuel for brewing.
                 */
                 getFuelLevel(): number;
                /**
                 * Set the level of current fuel for brewing.
                 */
                 setFuelLevel(level: number): void;
                 getInventory(): org.bukkit.inventory.BrewerInventory;
                 getSnapshotInventory(): org.bukkit.inventory.BrewerInventory;
            }
        }
    }
}
