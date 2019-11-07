declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface GeneratorType extends org.spongepowered.api.CatalogType {
                    /**
                     * Gets a copy of the default settings for this generator type.
                     */
                    // @ts-ignore
                     getGeneratorSettings(): org.spongepowered.api.data.DataContainer;
                    /**
                     * Creates a new {@link WorldGenerator} for this generator type.
                     * <p>This will use the default settings of this generator type.</p>
                     */
                    // @ts-ignore
                     createGenerator(world: org.spongepowered.api.world.World): org.spongepowered.api.world.gen.WorldGenerator;
                }
            }
        }
    }
}
