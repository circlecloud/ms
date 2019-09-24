declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface TNT extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'unstable' property.
                         */
                         isUnstable(): boolean;
                        /**
                         * Sets the value of the 'unstable' property.
                         */
                         setUnstable(unstable: boolean): void;
                    }
                }
            }
        }
    }
}
