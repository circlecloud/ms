declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Comparator extends org.bukkit.block.data.Directional, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'mode' property.
                         */
                         getMode(): org.bukkit.block.data.type.Comparator.Mode;
                        /**
                         * Sets the value of the 'mode' property.
                         */
                         setMode(mode: org.bukkit.block.data.type.Comparator.Mode): void;
                    }
                }
            }
        }
    }
}
