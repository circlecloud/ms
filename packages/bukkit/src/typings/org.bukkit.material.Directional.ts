declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            interface Directional {
                /**
                 * Sets the direction that this block is facing in
                 */
                 setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the direction this block is facing
                 */
                 getFacing(): org.bukkit.block.BlockFace;
            }
        }
    }
}
