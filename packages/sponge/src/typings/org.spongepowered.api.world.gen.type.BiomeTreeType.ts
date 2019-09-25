declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace type {
                        // @ts-ignore
                        interface BiomeTreeType extends org.spongepowered.api.CatalogType {
                            /**
                             * Gets the {@link PopulatorObject} which is used to generate this tree into
                             * the world.
                             */
                            // @ts-ignore
                             getPopulatorObject(): org.spongepowered.api.world.gen.PopulatorObject;
                            /**
                             * Sets the {@link PopulatorObject} which is used to generate this tree into
                             * the world.
                             */
                            // @ts-ignore
                             setPopulatorObject(object: org.spongepowered.api.world.gen.PopulatorObject): void;
                            /**
                             * Gets whether this tree type has a larger equivalent.
                             */
                            // @ts-ignore
                             hasLargeEquivalent(): boolean;
                            /**
                             * Gets the {@link PopulatorObject} which is used to generate the larger
                             * equivalent of this tree into the world.
                             */
                            // @ts-ignore
                             getLargePopulatorObject(): any;
                            /**
                             * Sets the {@link PopulatorObject} which is used to generate the larger
                             * equivalent of this tree into the world.
                             */
                            // @ts-ignore
                             setLargePopulatorObject(object: org.spongepowered.api.world.gen.PopulatorObject): void;
                        }
                    }
                }
            }
        }
    }
}
