// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace EntitySnapshot {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.ImmutableDataBuilder {
                        /**
                         * Sets the {@link WorldProperties} for this {@link EntitySnapshot}.
                         * <p>This is used to grab the {@link UUID} of the World for this
                         * snapshot.</p>
                         */
                        // @ts-ignore
                         world(worldProperties: org.spongepowered.api.world.storage.WorldProperties): org.spongepowered.api.entity.EntitySnapshot.Builder;
                        /**
                         * Sets the {@link EntityType} for this {@link EntitySnapshot}.
                         */
                        // @ts-ignore
                         type(entityType: org.spongepowered.api.entity.EntityType): org.spongepowered.api.entity.EntitySnapshot.Builder;
                        /**
                         * Sets the coordinates of this {@link EntitySnapshot} from a
                         * {@link Vector3i}.
                         */
                        // @ts-ignore
                         position(position: any /*Vector3d*/): org.spongepowered.api.entity.EntitySnapshot.Builder;
                        /**
                         * Copies over data from an {@link Entity}.
                         */
                        // @ts-ignore
                         from(entity: org.spongepowered.api.entity.Entity): org.spongepowered.api.entity.EntitySnapshot.Builder;
                    }
                }
            }
        }
    }
}
