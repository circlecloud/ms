declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Leaves extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'persistent' property.
                         */
                         isPersistent(): boolean;
                        /**
                         * Sets the value of the 'persistent' property.
                         */
                         setPersistent(persistent: boolean): void;
                        /**
                         * Gets the value of the 'distance' property.
                         */
                         getDistance(): number;
                        /**
                         * Sets the value of the 'distance' property.
                         */
                         setDistance(distance: number): void;
                    }
                }
            }
        }
    }
}
