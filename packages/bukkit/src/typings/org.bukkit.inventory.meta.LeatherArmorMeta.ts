declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class LeatherArmorMeta {
                    /**
                     * Gets the color of the armor. If it has not been set otherwise, it will
                     * be {@link ItemFactory#getDefaultLeatherColor()}.
                     */
                    public getColor(): org.bukkit.Color;
                    /**
                     * Sets the color of the armor.
                     */
                    public setColor(color: org.bukkit.Color): void;
                    public clone(): org.bukkit.inventory.meta.LeatherArmorMeta;
                }
            }
        }
    }
}
