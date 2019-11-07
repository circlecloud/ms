// @ts-nocheck
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
                        // @ts-ignore
                         getDelay(): number;
                        /**
                         * Sets the value of the 'delay' property.
                         */
                        // @ts-ignore
                         setDelay(delay: number): void;
                        /**
                         * Gets the minimum allowed value of the 'delay' property.
                         */
                        // @ts-ignore
                         getMinimumDelay(): number;
                        /**
                         * Gets the maximum allowed value of the 'delay' property.
                         */
                        // @ts-ignore
                         getMaximumDelay(): number;
                        /**
                         * Gets the value of the 'locked' property.
                         */
                        // @ts-ignore
                         isLocked(): boolean;
                        /**
                         * Sets the value of the 'locked' property.
                         */
                        // @ts-ignore
                         setLocked(locked: boolean): void;
                    }
                }
            }
        }
    }
}
