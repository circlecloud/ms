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
                        // @ts-ignore
                         getLayers(): number;
                        /**
                         * Sets the value of the 'layers' property.
                         */
                        // @ts-ignore
                         setLayers(layers: number): void;
                        /**
                         * Gets the minimum allowed value of the 'layers' property.
                         */
                        // @ts-ignore
                         getMinimumLayers(): number;
                        /**
                         * Gets the maximum allowed value of the 'layers' property.
                         */
                        // @ts-ignore
                         getMaximumLayers(): number;
                    }
                }
            }
        }
    }
}
