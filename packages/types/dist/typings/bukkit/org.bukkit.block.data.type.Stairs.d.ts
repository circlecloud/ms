declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Stairs extends org.bukkit.block.data.Bisected, org.bukkit.block.data.Directional, org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'shape' property.
                         */
                        // @ts-ignore
                         getShape(): org.bukkit.block.data.type.Stairs.Shape;
                        /**
                         * Sets the value of the 'shape' property.
                         */
                        // @ts-ignore
                         setShape(shape: org.bukkit.block.data.type.Stairs.Shape): void;
                    }
                }
            }
        }
    }
}
