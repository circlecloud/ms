// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface MultipleFacing extends org.bukkit.block.data.BlockData {
                    /**
                     * Checks if this block has the specified face enabled.
                     */
                    // @ts-ignore
                     hasFace(face: org.bukkit.block.BlockFace): boolean;
                    /**
                     * Set whether this block has the specified face enabled.
                     */
                    // @ts-ignore
                     setFace(face: org.bukkit.block.BlockFace, has: boolean): void;
                    /**
                     * Get all of the faces which are enabled on this block.
                     */
                    // @ts-ignore
                     getFaces(): java.util.Set;
                    /**
                     * Gets all of this faces which may be set on this block.
                     */
                    // @ts-ignore
                     getAllowedFaces(): java.util.Set;
                }
            }
        }
    }
}
