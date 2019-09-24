declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface FireworkMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Add another effect to this firework.
                     */
                     addEffect(effect: org.bukkit.FireworkEffect): void;
                    /**
                     * Add several effects to this firework.
                     */
                     addEffects(effects: org.bukkit.FireworkEffect): void;
                    /**
                     * Add several firework effects to this firework.
                     */
                     addEffects(effects: any): void;
                    /**
                     * Get the effects in this firework.
                     */
                     getEffects(): any[] /*java.util.List*/;
                    /**
                     * Get the number of effects in this firework.
                     */
                     getEffectsSize(): number;
                    /**
                     * Remove an effect from this firework.
                     */
                     removeEffect(index: number): void;
                    /**
                     * Remove all effects from this firework.
                     */
                     clearEffects(): void;
                    /**
                     * Get whether this firework has any effects.
                     */
                     hasEffects(): boolean;
                    /**
                     * Gets the approximate height the firework will fly.
                     */
                     getPower(): number;
                    /**
                     * Sets the approximate power of the firework. Each level of power is half
                     * a second of flight time.
                     */
                     setPower(power: number): void;
                     clone(): org.bukkit.inventory.meta.FireworkMeta;
                }
            }
        }
    }
}
