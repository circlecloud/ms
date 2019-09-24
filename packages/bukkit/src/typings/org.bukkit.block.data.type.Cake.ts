declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Cake extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'bites' property.
                         */
                         getBites(): number;
                        /**
                         * Sets the value of the 'bites' property.
                         */
                         setBites(bites: number): void;
                        /**
                         * Gets the maximum allowed value of the 'bites' property.
                         */
                         getMaximumBites(): number;
                    }
                }
            }
        }
    }
}
