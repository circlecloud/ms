declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Powerable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'powered' property.
                     */
                     isPowered(): boolean;
                    /**
                     * Sets the value of the 'powered' property.
                     */
                     setPowered(powered: boolean): void;
                }
            }
        }
    }
}
