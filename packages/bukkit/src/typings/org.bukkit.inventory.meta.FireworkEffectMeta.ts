declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class FireworkEffectMeta {
                    /**
                     * Sets the firework effect for this meta.
                     */
                    public setEffect(effect: org.bukkit.FireworkEffect): void;
                    /**
                     * Checks if this meta has an effect.
                     */
                    public hasEffect(): boolean;
                    /**
                     * Gets the firework effect for this meta.
                     */
                    public getEffect(): org.bukkit.FireworkEffect;
                    public clone(): org.bukkit.inventory.meta.FireworkEffectMeta;
                }
            }
        }
    }
}
