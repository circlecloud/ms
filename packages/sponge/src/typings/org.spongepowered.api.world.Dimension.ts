declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface Dimension extends org.spongepowered.api.service.context.ContextSource {
                    /**
                     * Gets the type of dimension.
                     */
                    // @ts-ignore
                     getType(): org.spongepowered.api.world.DimensionType;
                    /**
                     * Gets the generator type of dimension.
                     */
                    // @ts-ignore
                     getGeneratorType(): org.spongepowered.api.world.GeneratorType;
                    /**
                     * Returns whether players can respawn within {@link Dimension} after death.
                     */
                    // @ts-ignore
                     allowsPlayerRespawns(): boolean;
                    /**
                     * Returns the minimum spawn height for {@link Dimension}.
                     */
                    // @ts-ignore
                     getMinimumSpawnHeight(): number;
                    /**
                     * Returns whether water evaporates for {@link Dimension}.
                     */
                    // @ts-ignore
                     doesWaterEvaporate(): boolean;
                    /**
                     * Returns whether this {@link Dimension} has a sky (lack of bedrock).
                     */
                    // @ts-ignore
                     hasSky(): boolean;
                    /**
                     * Gets the highest naturally generated y-coordinate of {@link World}s in
                     * this dimension. Usually 128 (no sky) or 256 (sky).
                     */
                    // @ts-ignore
                     getHeight(): number;
                    /**
                     * Gets the maximum y-coordinate a non-air cuboid can exist at of
                     * {@link World}s in this dimension. Usually 256.
                     */
                    // @ts-ignore
                     getBuildHeight(): number;
                }
            }
        }
    }
}
