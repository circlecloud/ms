declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Orientable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'axis' property.
                     */
                     getAxis(): org.bukkit.Axis;
                    /**
                     * Sets the value of the 'axis' property.
                     */
                     setAxis(axis: org.bukkit.Axis): void;
                    /**
                     * Gets the axes which are applicable to this block.
                     */
                     getAxes(): any[] /*java.util.Set*/;
                }
            }
        }
    }
}
