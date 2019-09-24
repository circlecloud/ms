declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Dispenser extends org.bukkit.block.Container, org.bukkit.Nameable, org.bukkit.loot.Lootable {
                /**
                 * Gets the BlockProjectileSource object for the dispenser.
                 * <p>
                 * If the block represented by this state is no longer a dispenser, this
                 * will return null.
                 */
                 getBlockProjectileSource(): org.bukkit.projectiles.BlockProjectileSource;
                /**
                 * Attempts to dispense the contents of the dispenser.
                 * <p>
                 * If the block represented by this state is no longer a dispenser, this
                 * will return false.
                 */
                 dispense(): boolean;
            }
        }
    }
}
