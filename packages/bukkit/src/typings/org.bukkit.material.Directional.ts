declare namespace org {
    namespace bukkit {
        namespace material {
            class Directional {
                /**
                 * Sets the direction that this block is facing in
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the direction this block is facing
                 */
                public getFacing(): org.bukkit.block.BlockFace;
            }
        }
    }
}
