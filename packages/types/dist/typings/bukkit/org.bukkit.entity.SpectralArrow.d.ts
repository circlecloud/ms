// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface SpectralArrow extends org.bukkit.entity.AbstractArrow {
                /**
                 * Returns the amount of time that this arrow will apply
                 * the glowing effect for.
                 */
                // @ts-ignore
                 getGlowingTicks(): number;
                /**
                 * Sets the amount of time to apply the glowing effect for.
                 */
                // @ts-ignore
                 setGlowingTicks(duration: number): void;
            }
        }
    }
}
