declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Scaffolding extends org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'bottom' property.
                         */
                         isBottom(): boolean;
                        /**
                         * Sets the value of the 'bottom' property.
                         */
                         setBottom(bottom: boolean): void;
                        /**
                         * Gets the value of the 'distance' property.
                         */
                         getDistance(): number;
                        /**
                         * Sets the value of the 'distance' property.
                         */
                         setDistance(distance: number): void;
                        /**
                         * Gets the maximum allowed value of the 'distance' property.
                         */
                         getMaximumDistance(): number;
                    }
                }
            }
        }
    }
}
