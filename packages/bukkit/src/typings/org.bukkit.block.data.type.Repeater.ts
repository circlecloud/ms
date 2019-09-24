declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Repeater extends org.bukkit.block.data.Directional, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'delay' property.
                         */
                         getDelay(): number;
                        /**
                         * Sets the value of the 'delay' property.
                         */
                         setDelay(delay: number): void;
                        /**
                         * Gets the minimum allowed value of the 'delay' property.
                         */
                         getMinimumDelay(): number;
                        /**
                         * Gets the maximum allowed value of the 'delay' property.
                         */
                         getMaximumDelay(): number;
                        /**
                         * Gets the value of the 'locked' property.
                         */
                         isLocked(): boolean;
                        /**
                         * Sets the value of the 'locked' property.
                         */
                         setLocked(locked: boolean): void;
                    }
                }
            }
        }
    }
}
