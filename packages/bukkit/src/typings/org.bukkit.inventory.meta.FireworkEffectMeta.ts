declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface FireworkEffectMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Sets the firework effect for this meta.
                     */
                     setEffect(effect: org.bukkit.FireworkEffect): void;
                    /**
                     * Checks if this meta has an effect.
                     */
                     hasEffect(): boolean;
                    /**
                     * Gets the firework effect for this meta.
                     */
                     getEffect(): org.bukkit.FireworkEffect;
                     clone(): org.bukkit.inventory.meta.FireworkEffectMeta;
                }
            }
        }
    }
}
