declare namespace org {
    namespace bukkit {
        namespace block {
            class Dispenser {
                /**
                 * Gets the BlockProjectileSource object for the dispenser.
                 * <p>
                 * If the block represented by this state is no longer a dispenser, this
                 * will return null.
                 */
                public getBlockProjectileSource(): org.bukkit.projectiles.BlockProjectileSource;
                /**
                 * Attempts to dispense the contents of the dispenser.
                 * <p>
                 * If the block represented by this state is no longer a dispenser, this
                 * will return false.
                 */
                public dispense(): boolean;
            }
        }
    }
}
