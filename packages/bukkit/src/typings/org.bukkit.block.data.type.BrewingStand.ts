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
                         hasBottle(bottle: number): boolean;
                        /**
                         * Set whether the stand has this bottle present.
                         */
                         setBottle(bottle: number, has: boolean): void;
                        /**
                         * Get the indexes of all the bottles present on this block.
                         */
                         getBottles(): any[] /*java.util.Set*/;
                        /**
                         * Get the maximum amount of bottles present on this stand.
                         */
                         getMaximumBottles(): number;
                    }
                }
            }
        }
    }
}
