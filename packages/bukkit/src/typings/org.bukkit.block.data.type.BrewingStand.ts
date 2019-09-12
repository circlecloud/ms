declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    class BrewingStand {
                        /**
                         * Checks if the stand has the following bottle
                         */
                        public hasBottle(bottle: number): boolean;
                        /**
                         * Set whether the stand has this bottle present.
                         */
                        public setBottle(bottle: number, has: boolean): void;
                        /**
                         * Get the indexes of all the bottles present on this block.
                         */
                        public getBottles(): any[] /*java.util.Set*/;
                        /**
                         * Get the maximum amount of bottles present on this stand.
                         */
                        public getMaximumBottles(): number;
                    }
                }
            }
        }
    }
}
