declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Slab extends org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'type' property.
                         */
                         getType(): org.bukkit.block.data.type.Slab.Type;
                        /**
                         * Sets the value of the 'type' property.
                         */
                         setType(type: org.bukkit.block.data.type.Slab.Type): void;
                    }
                }
            }
        }
    }
}
