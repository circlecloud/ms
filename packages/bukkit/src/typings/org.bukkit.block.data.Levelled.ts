declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Levelled extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'level' property.
                     */
                     getLevel(): number;
                    /**
                     * Sets the value of the 'level' property.
                     */
                     setLevel(level: number): void;
                    /**
                     * Gets the maximum allowed value of the 'level' property.
                     */
                     getMaximumLevel(): number;
                }
            }
        }
    }
}
