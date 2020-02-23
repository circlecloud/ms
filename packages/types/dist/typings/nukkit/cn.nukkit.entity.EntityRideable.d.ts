declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
            interface EntityRideable {
                /**
                 * Mount or Dismounts an Entity from a rideable entity
                 */
                // @ts-ignore
                 mountEntity(entity: cn.nukkit.entity.Entity): boolean;
                // @ts-ignore
                 dismountEntity(entity: cn.nukkit.entity.Entity): boolean;
            }
        }
    }
}
