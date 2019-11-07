declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace type {
                        // @ts-ignore
                        interface MushroomType extends org.spongepowered.api.CatalogType {
                            /**
                             * Gets the {@link PopulatorObject} which is used to generate the large
                             * variant of this mushroom into the world.
                             */
                            // @ts-ignore
                             getPopulatorObject(): org.spongepowered.api.world.gen.PopulatorObject;
                            /**
                             * Sets the {@link PopulatorObject} which is used to generate the large
                             * variant of this mushroom into the world.
                             */
                            // @ts-ignore
                             setPopulatorObject(object: org.spongepowered.api.world.gen.PopulatorObject): void;
                        }
                    }
                }
            }
        }
    }
}
