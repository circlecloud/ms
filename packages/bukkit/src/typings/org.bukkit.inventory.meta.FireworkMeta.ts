declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class FireworkMeta {
                    /**
                     * Add another effect to this firework.
                     */
                    public addEffect(effect: org.bukkit.FireworkEffect): void;
                    /**
                     * Add several effects to this firework.
                     */
                    public addEffects(effects: org.bukkit.FireworkEffect): void;
                    /**
                     * Add several firework effects to this firework.
                     */
                    public addEffects(effects: any): void;
                    /**
                     * Get the effects in this firework.
                     */
                    public getEffects(): any[] /*java.util.List*/;
                    /**
                     * Get the number of effects in this firework.
                     */
                    public getEffectsSize(): number;
                    /**
                     * Remove an effect from this firework.
                     */
                    public removeEffect(index: number): void;
                    /**
                     * Remove all effects from this firework.
                     */
                    public clearEffects(): void;
                    /**
                     * Get whether this firework has any effects.
                     */
                    public hasEffects(): boolean;
                    /**
                     * Gets the approximate height the firework will fly.
                     */
                    public getPower(): number;
                    /**
                     * Sets the approximate power of the firework. Each level of power is half
                     * a second of flight time.
                     */
                    public setPower(power: number): void;
                    public clone(): org.bukkit.inventory.meta.FireworkMeta;
                }
            }
        }
    }
}
