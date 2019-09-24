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
                         getEggs(): number;
                        /**
                         * Sets the value of the 'eggs' property.
                         */
                         setEggs(eggs: number): void;
                        /**
                         * Gets the minimum allowed value of the 'eggs' property.
                         */
                         getMinimumEggs(): number;
                        /**
                         * Gets the maximum allowed value of the 'eggs' property.
                         */
                         getMaximumEggs(): number;
                        /**
                         * Gets the value of the 'hatch' property.
                         */
                         getHatch(): number;
                        /**
                         * Sets the value of the 'hatch' property.
                         */
                         setHatch(hatch: number): void;
                        /**
                         * Gets the maximum allowed value of the 'hatch' property.
                         */
                         getMaximumHatch(): number;
                    }
                }
            }
        }
    }
}
