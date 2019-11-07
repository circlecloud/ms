// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    // @ts-ignore
                    interface PopulatorObject extends org.spongepowered.api.CatalogType {
                        /**
                         * Returns whether this object can be placed into the world at the given
                         * position.
                         */
                        // @ts-ignore
                         canPlaceAt(world: org.spongepowered.api.world.World, x: number, y: number, z: number): boolean;
                        /**
                         * Places the object into the world at the given location.
                         */
                        // @ts-ignore
                         placeObject(world: org.spongepowered.api.world.World, random: java.util.Random, x: number, y: number, z: number): void;
                    }
                }
            }
        }
    }
}
