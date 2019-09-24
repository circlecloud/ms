declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Rail extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'shape' property.
                     */
                     getShape(): org.bukkit.block.data.Rail.Shape;
                    /**
                     * Sets the value of the 'shape' property.
                     */
                     setShape(shape: org.bukkit.block.data.Rail.Shape): void;
                    /**
                     * Gets the shapes which are applicable to this block.
                     */
                     getShapes(): any[] /*java.util.Set*/;
                }
            }
        }
    }
}
