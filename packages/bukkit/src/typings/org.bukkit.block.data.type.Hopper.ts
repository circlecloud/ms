declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Hopper extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'enabled' property.
                         */
                         isEnabled(): boolean;
                        /**
                         * Sets the value of the 'enabled' property.
                         */
                         setEnabled(enabled: boolean): void;
                    }
                }
            }
        }
    }
}
