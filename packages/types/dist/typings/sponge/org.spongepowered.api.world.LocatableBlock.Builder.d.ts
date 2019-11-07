declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace LocatableBlock {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                        /**
                         * Sets the {@link BlockState} for this builder.
                         */
                        // @ts-ignore
                         state(blockState: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.LocatableBlock.Builder;
                        /**
                         * Sets the {@link BlockState} and {@link Vector3i position} for this
                         * builder.
                         */
                        // @ts-ignore
                         location(location: org.spongepowered.api.world.Location): org.spongepowered.api.world.LocatableBlock.Builder;
                        /**
                         * Sets the {@link Vector3i position} for this builder.
                         */
                        // @ts-ignore
                         position(position: any /*Vector3i*/): org.spongepowered.api.world.LocatableBlock.Builder;
                        /**
                         * Sets the {@code x} {@code y} {@code z} positions for this builder.
                         */
                        // @ts-ignore
                         position(x: number, y: number, z: number): org.spongepowered.api.world.LocatableBlock.Builder;
                        /**
                         * Sets the {@link World} for this builder, used to get the {@link BlockState}
                         * for a desired position.
                         */
                        // @ts-ignore
                         world(world: org.spongepowered.api.world.World): org.spongepowered.api.world.LocatableBlock.Builder;
                        // @ts-ignore
                         reset(): org.spongepowered.api.world.LocatableBlock.Builder;
                        // @ts-ignore
                         from(value: org.spongepowered.api.world.LocatableBlock): org.spongepowered.api.world.LocatableBlock.Builder;
                        /**
                         * Creates a new {@link LocatableBlock}.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.world.LocatableBlock;
                    }
                }
            }
        }
    }
}
