declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Orientable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'axis' property.
                     */
                    // @ts-ignore
                     getAxis(): org.bukkit.Axis;
                    /**
                     * Sets the value of the 'axis' property.
                     */
                    // @ts-ignore
                     setAxis(axis: org.bukkit.Axis): void;
                    /**
                     * Gets the axes which are applicable to this block.
                     */
                    // @ts-ignore
                     getAxes(): java.util.Set;
                }
            }
        }
    }
}
