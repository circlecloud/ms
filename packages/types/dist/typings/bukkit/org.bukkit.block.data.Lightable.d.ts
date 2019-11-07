declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Lightable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'lit' property.
                     */
                    // @ts-ignore
                     isLit(): boolean;
                    /**
                     * Sets the value of the 'lit' property.
                     */
                    // @ts-ignore
                     setLit(lit: boolean): void;
                }
            }
        }
    }
}
