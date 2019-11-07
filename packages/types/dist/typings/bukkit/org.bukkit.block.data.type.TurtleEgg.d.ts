declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface TurtleEgg extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'eggs' property.
                         */
                        // @ts-ignore
                         getEggs(): number;
                        /**
                         * Sets the value of the 'eggs' property.
                         */
                        // @ts-ignore
                         setEggs(eggs: number): void;
                        /**
                         * Gets the minimum allowed value of the 'eggs' property.
                         */
                        // @ts-ignore
                         getMinimumEggs(): number;
                        /**
                         * Gets the maximum allowed value of the 'eggs' property.
                         */
                        // @ts-ignore
                         getMaximumEggs(): number;
                        /**
                         * Gets the value of the 'hatch' property.
                         */
                        // @ts-ignore
                         getHatch(): number;
                        /**
                         * Sets the value of the 'hatch' property.
                         */
                        // @ts-ignore
                         setHatch(hatch: number): void;
                        /**
                         * Gets the maximum allowed value of the 'hatch' property.
                         */
                        // @ts-ignore
                         getMaximumHatch(): number;
                    }
                }
            }
        }
    }
}
