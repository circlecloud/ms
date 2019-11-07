declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface BrewingStand extends org.bukkit.block.data.BlockData {
                        /**
                         * Checks if the stand has the following bottle
                         */
                        // @ts-ignore
                         hasBottle(bottle: number): boolean;
                        /**
                         * Set whether the stand has this bottle present.
                         */
                        // @ts-ignore
                         setBottle(bottle: number, has: boolean): void;
                        /**
                         * Get the indexes of all the bottles present on this block.
                         */
                        // @ts-ignore
                         getBottles(): java.util.Set;
                        /**
                         * Get the maximum amount of bottles present on this stand.
                         */
                        // @ts-ignore
                         getMaximumBottles(): number;
                    }
                }
            }
        }
    }
}
