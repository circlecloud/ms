declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                class MultipleFacing {
                    /**
                     * Checks if this block has the specified face enabled.
                     */
                    public hasFace(face: org.bukkit.block.BlockFace): boolean;
                    /**
                     * Set whether this block has the specified face enabled.
                     */
                    public setFace(face: org.bukkit.block.BlockFace, has: boolean): void;
                    /**
                     * Get all of the faces which are enabled on this block.
                     */
                    public getFaces(): any[] /*java.util.Set*/;
                    /**
                     * Gets all of this faces which may be set on this block.
                     */
                    public getAllowedFaces(): any[] /*java.util.Set*/;
                }
            }
        }
    }
}
