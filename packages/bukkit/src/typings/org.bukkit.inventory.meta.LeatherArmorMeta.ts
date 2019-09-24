declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface LeatherArmorMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Gets the color of the armor. If it has not been set otherwise, it will
                     * be {@link ItemFactory#getDefaultLeatherColor()}.
                     */
                     getColor(): org.bukkit.Color;
                    /**
                     * Sets the color of the armor.
                     */
                     setColor(color: org.bukkit.Color): void;
                     clone(): org.bukkit.inventory.meta.LeatherArmorMeta;
                }
            }
        }
    }
}
