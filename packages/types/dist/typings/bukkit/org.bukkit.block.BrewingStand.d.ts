declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface BrewingStand extends org.bukkit.block.Container {
                /**
                 * How much time is left in the brewing cycle.
                 */
                // @ts-ignore
                 getBrewingTime(): number;
                /**
                 * Set the time left before brewing completes.
                 */
                // @ts-ignore
                 setBrewingTime(brewTime: number): void;
                /**
                 * Get the level of current fuel for brewing.
                 */
                // @ts-ignore
                 getFuelLevel(): number;
                /**
                 * Set the level of current fuel for brewing.
                 */
                // @ts-ignore
                 setFuelLevel(level: number): void;
                // @ts-ignore
                 getInventory(): org.bukkit.inventory.BrewerInventory;
                // @ts-ignore
                 getSnapshotInventory(): org.bukkit.inventory.BrewerInventory;
            }
        }
    }
}
