declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Campfire extends org.bukkit.block.data.Lightable, org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'signal_fire' property.
                         */
                         isSignalFire(): boolean;
                        /**
                         * Sets the value of the 'signal_fire' property.
                         */
                         setSignalFire(signalFire: boolean): void;
                    }
                }
            }
        }
    }
}
