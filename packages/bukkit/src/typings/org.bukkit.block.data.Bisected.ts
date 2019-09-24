declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Bisected extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'half' property.
                     */
                     getHalf(): org.bukkit.block.data.Bisected.Half;
                    /**
                     * Sets the value of the 'half' property.
                     */
                     setHalf(half: org.bukkit.block.data.Bisected.Half): void;
                }
            }
        }
    }
}
