declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Snowable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'snowy' property.
                     */
                     isSnowy(): boolean;
                    /**
                     * Sets the value of the 'snowy' property.
                     */
                     setSnowy(snowy: boolean): void;
                }
            }
        }
    }
}
