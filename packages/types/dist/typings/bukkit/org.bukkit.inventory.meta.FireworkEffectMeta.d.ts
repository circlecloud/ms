declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface FireworkEffectMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Sets the firework effect for this meta.
                     */
                    // @ts-ignore
                     setEffect(effect: org.bukkit.FireworkEffect): void;
                    /**
                     * Checks if this meta has an effect.
                     */
                    // @ts-ignore
                     hasEffect(): boolean;
                    /**
                     * Gets the firework effect for this meta.
                     */
                    // @ts-ignore
                     getEffect(): org.bukkit.FireworkEffect;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.FireworkEffectMeta;
                }
            }
        }
    }
}
