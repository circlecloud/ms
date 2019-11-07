// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    // @ts-ignore
                    interface Populator {
                        /**
                         * Gets the type of this populator.
                         * <p>It should be noted that the relationship of classes implementing
                         * {@link Populator} and {@link PopulatorType}s is not a one-to-one
                         * relationship. That is to say that multiple different populators could
                         * return the same {@link PopulatorType} for the purposes of grouping (A
                         * plugin populator creating custom glowstone clusters may want to return
                         * {@link PopulatorTypes#GLOWSTONE} so that other plugins can recognize
                         * changes that it makes as being part of the generation of glowstone).</p>
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.world.gen.PopulatorType;
                        /**
                         * Applies the populator to the given {@link Extent} volume. The entire volume
                         * of the given extent should be populated.
                         * <p>Due to their transitive nature virtual biomes cannot be fetched from
                         * the given extent, instead your populator should override
                         * {@link #populate(World, Extent, Random, ImmutableBiomeVolume)} to make use
                         * of the ImmutableBiomeArea which does contain virtual biome types.</p>
                         */
                        // @ts-ignore
                         populate(world: org.spongepowered.api.world.World, volume: org.spongepowered.api.world.extent.Extent, random: java.util.Random): void;
                        /**
                         * Applies the populator to the given {@link Extent} volume. The entire volume
                         * of the given extent should be populated.
                         */
                        // @ts-ignore
                         populate(world: org.spongepowered.api.world.World, volume: org.spongepowered.api.world.extent.Extent, random: java.util.Random, virtualBiomes: org.spongepowered.api.world.extent.ImmutableBiomeVolume): void;
                    }
                }
            }
        }
    }
}
