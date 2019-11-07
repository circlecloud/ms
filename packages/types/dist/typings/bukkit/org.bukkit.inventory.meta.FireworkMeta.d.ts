declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface FireworkMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Add another effect to this firework.
                     */
                    // @ts-ignore
                     addEffect(effect: org.bukkit.FireworkEffect): void;
                    /**
                     * Add several effects to this firework.
                     */
                    // @ts-ignore
                     addEffects(effects: org.bukkit.FireworkEffect): void;
                    /**
                     * Add several firework effects to this firework.
                     */
                    // @ts-ignore
                     addEffects(effects: java.lang.Iterable): void;
                    /**
                     * Get the effects in this firework.
                     */
                    // @ts-ignore
                     getEffects(): java.util.List;
                    /**
                     * Get the number of effects in this firework.
                     */
                    // @ts-ignore
                     getEffectsSize(): number;
                    /**
                     * Remove an effect from this firework.
                     */
                    // @ts-ignore
                     removeEffect(index: number): void;
                    /**
                     * Remove all effects from this firework.
                     */
                    // @ts-ignore
                     clearEffects(): void;
                    /**
                     * Get whether this firework has any effects.
                     */
                    // @ts-ignore
                     hasEffects(): boolean;
                    /**
                     * Gets the approximate height the firework will fly.
                     */
                    // @ts-ignore
                     getPower(): number;
                    /**
                     * Sets the approximate power of the firework. Each level of power is half
                     * a second of flight time.
                     */
                    // @ts-ignore
                     setPower(power: number): void;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.FireworkMeta;
                }
            }
        }
    }
}
