declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Openable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'open' property.
                     */
                     isOpen(): boolean;
                    /**
                     * Sets the value of the 'open' property.
                     */
                     setOpen(open: boolean): void;
                }
            }
        }
    }
}
