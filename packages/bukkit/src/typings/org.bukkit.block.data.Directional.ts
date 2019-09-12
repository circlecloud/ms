declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                class Directional {
                    /**
                     * Gets the value of the 'facing' property.
                     */
                    public getFacing(): org.bukkit.block.BlockFace;
                    /**
                     * Sets the value of the 'facing' property.
                     */
                    public setFacing(facing: org.bukkit.block.BlockFace): void;
                    /**
                     * Gets the faces which are applicable to this block.
                     */
                    public getFaces(): any[] /*java.util.Set*/;
                }
            }
        }
    }
}
