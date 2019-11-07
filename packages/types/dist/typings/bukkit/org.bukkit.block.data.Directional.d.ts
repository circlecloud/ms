// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Directional extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'facing' property.
                     */
                    // @ts-ignore
                     getFacing(): org.bukkit.block.BlockFace;
                    /**
                     * Sets the value of the 'facing' property.
                     */
                    // @ts-ignore
                     setFacing(facing: org.bukkit.block.BlockFace): void;
                    /**
                     * Gets the faces which are applicable to this block.
                     */
                    // @ts-ignore
                     getFaces(): java.util.Set;
                }
            }
        }
    }
}
