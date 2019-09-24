declare namespace org {
    namespace bukkit {
        namespace projectiles {
            // @ts-ignore
            interface BlockProjectileSource extends org.bukkit.projectiles.ProjectileSource {
                /**
                 * Gets the block this projectile source belongs to.
                 */
                 getBlock(): org.bukkit.block.Block;
            }
        }
    }
}
