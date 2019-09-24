declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Dispenser extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'triggered' property.
                         */
                         isTriggered(): boolean;
                        /**
                         * Sets the value of the 'triggered' property.
                         */
                         setTriggered(triggered: boolean): void;
                    }
                }
            }
        }
    }
}
