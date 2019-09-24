declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface DaylightDetector extends org.bukkit.block.data.AnaloguePowerable {
                        /**
                         * Gets the value of the 'inverted' property.
                         */
                         isInverted(): boolean;
                        /**
                         * Sets the value of the 'inverted' property.
                         */
                         setInverted(inverted: boolean): void;
                    }
                }
            }
        }
    }
}
