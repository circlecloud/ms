declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Hanging extends org.bukkit.entity.Entity, org.bukkit.material.Attachable {
                /**
                 * Sets the direction of the hanging entity, potentially overriding rules
                 * of placement. Note that if the result is not valid the object would
                 * normally drop as an item.
                 */
                // @ts-ignore
                 setFacingDirection(face: org.bukkit.block.BlockFace, force: boolean): boolean;
            }
        }
    }
}
