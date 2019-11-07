declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface SeaPickle extends org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'pickles' property.
                         */
                        // @ts-ignore
                         getPickles(): number;
                        /**
                         * Sets the value of the 'pickles' property.
                         */
                        // @ts-ignore
                         setPickles(pickles: number): void;
                        /**
                         * Gets the minimum allowed value of the 'pickles' property.
                         */
                        // @ts-ignore
                         getMinimumPickles(): number;
                        /**
                         * Gets the maximum allowed value of the 'pickles' property.
                         */
                        // @ts-ignore
                         getMaximumPickles(): number;
                    }
                }
            }
        }
    }
}
