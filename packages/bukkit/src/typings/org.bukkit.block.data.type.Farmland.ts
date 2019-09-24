declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Farmland extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'moisture' property.
                         */
                         getMoisture(): number;
                        /**
                         * Sets the value of the 'moisture' property.
                         */
                         setMoisture(moisture: number): void;
                        /**
                         * Gets the maximum allowed value of the 'moisture' property.
                         */
                         getMaximumMoisture(): number;
                    }
                }
            }
        }
    }
}
