declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Sapling extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'stage' property.
                         */
                         getStage(): number;
                        /**
                         * Sets the value of the 'stage' property.
                         */
                         setStage(stage: number): void;
                        /**
                         * Gets the maximum allowed value of the 'stage' property.
                         */
                         getMaximumStage(): number;
                    }
                }
            }
        }
    }
}
