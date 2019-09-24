declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Snow extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'layers' property.
                         */
                         getLayers(): number;
                        /**
                         * Sets the value of the 'layers' property.
                         */
                         setLayers(layers: number): void;
                        /**
                         * Gets the minimum allowed value of the 'layers' property.
                         */
                         getMinimumLayers(): number;
                        /**
                         * Gets the maximum allowed value of the 'layers' property.
                         */
                         getMaximumLayers(): number;
                    }
                }
            }
        }
    }
}
