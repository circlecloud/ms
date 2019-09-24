declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Piston extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'extended' property.
                         */
                         isExtended(): boolean;
                        /**
                         * Sets the value of the 'extended' property.
                         */
                         setExtended(extended: boolean): void;
                    }
                }
            }
        }
    }
}
