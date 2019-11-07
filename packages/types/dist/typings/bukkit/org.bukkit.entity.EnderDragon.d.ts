// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface EnderDragon extends org.bukkit.entity.ComplexLivingEntity, org.bukkit.entity.Boss {
                /**
                 * Gets the current phase that the dragon is performing.
                 */
                // @ts-ignore
                 getPhase(): org.bukkit.entity.EnderDragon.Phase;
                /**
                 * Sets the next phase for the dragon to perform.
                 */
                // @ts-ignore
                 setPhase(phase: org.bukkit.entity.EnderDragon.Phase): void;
            }
        }
    }
}
