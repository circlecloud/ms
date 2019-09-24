declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Rotatable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'rotation' property.
                     */
                     getRotation(): org.bukkit.block.BlockFace;
                    /**
                     * Sets the value of the 'rotation' property.
                     */
                     setRotation(rotation: org.bukkit.block.BlockFace): void;
                }
            }
        }
    }
}
