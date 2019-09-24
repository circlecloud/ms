declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Attachable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'attached' property.
                     */
                     isAttached(): boolean;
                    /**
                     * Sets the value of the 'attached' property.
                     */
                     setAttached(attached: boolean): void;
                }
            }
        }
    }
}
