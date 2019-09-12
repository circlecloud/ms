declare namespace org {
    namespace bukkit {
        namespace entity {
            class Hanging {
                /**
                 * Sets the direction of the hanging entity, potentially overriding rules
                 * of placement. Note that if the result is not valid the object would
                 * normally drop as an item.
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace, force: boolean): boolean;
            }
        }
    }
}
