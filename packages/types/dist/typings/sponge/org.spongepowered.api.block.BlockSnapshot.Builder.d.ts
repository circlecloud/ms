// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace BlockSnapshot {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.ImmutableDataBuilder {
                        /**
                         * Sets the {@link WorldProperties} for this {@link BlockSnapshot}.
                         * <p>
                         * This is used to grab the {@link UUID} of the World for this snapshot.
                         * </p>
                         */
                        // @ts-ignore
                         world(worldProperties: org.spongepowered.api.world.storage.WorldProperties): org.spongepowered.api.block.BlockSnapshot.Builder;
                        /**
                         * Sets the {@link BlockState} for this {@link BlockSnapshot}.
                         */
                        // @ts-ignore
                         blockState(blockState: org.spongepowered.api.block.BlockState): org.spongepowered.api.block.BlockSnapshot.Builder;
                        /**
                         * Sets the coordinates of this {@link BlockSnapshot} from a {@link Vector3i}.
                         */
                        // @ts-ignore
                         position(position: any /*Vector3i*/): org.spongepowered.api.block.BlockSnapshot.Builder;
                        /**
                         * Copies over block data from a {@link Location}.
                         */
                        // @ts-ignore
                         from(location: org.spongepowered.api.world.Location): org.spongepowered.api.block.BlockSnapshot.Builder;
                        /**
                         * Sets the {@link UUID} of the user who created this
                         * {@link BlockSnapshot}.
                         */
                        // @ts-ignore
                         creator(uuid: java.util.UUID): org.spongepowered.api.block.BlockSnapshot.Builder;
                        /**
                         * Sets the {@link UUID} of the user who last notified this
                         * {@link BlockSnapshot}.
                         */
                        // @ts-ignore
                         notifier(uuid: java.util.UUID): org.spongepowered.api.block.BlockSnapshot.Builder;
                    }
                }
            }
        }
    }
}
