declare namespace org {
    namespace bukkit {
        namespace entity {
            class SpectralArrow {
                /**
                 * Returns the amount of time that this arrow will apply
                 * the glowing effect for.
                 */
                public getGlowingTicks(): number;
                /**
                 * Sets the amount of time to apply the glowing effect for.
                 */
                public setGlowingTicks(duration: number): void;
            }
        }
    }
}
