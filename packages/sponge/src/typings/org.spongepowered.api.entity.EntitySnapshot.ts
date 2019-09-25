declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface EntitySnapshot extends org.spongepowered.api.data.LocatableSnapshot {
                    /**
                     * Creates a new {@link Builder} to build an {@link EntitySnapshot}.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.entity.EntitySnapshot.Builder;
                    /**
                     * Gets an {@link Optional} containing the {@link UUID} of the
                     * {@link Entity} that this {@link EntitySnapshot} is representing. If the
                     * {@link Optional} is {@link Optional#empty()}, then this snapshot must
                     * have been created by an {@link Builder} without an {@link Entity} as a
                     * source.
                     */
                    // @ts-ignore
                     getUniqueId(): any;
                    /**
                     * Gets the {@link Transform} as an {@link Optional} as the {@link Location}
                     * may be undefined if this {@link EntitySnapshot} was built without a
                     * location. This method is linked to {@link #getLocation()} such that if
                     * there is a {@link Location}, there is usually a {@link Transform}.
                     */
                    // @ts-ignore
                     getTransform(): any;
                    /**
                     * Gets the {@link EntityType}.
                     */
                    // @ts-ignore
                     getType(): org.spongepowered.api.entity.EntityType;
                    /**
                     * Restores the {@link EntitySnapshot} to the {@link Location} stored within
                     * the snapshot. If the {@link Location} is not available, the snapshot will
                     * not be restored.
                     */
                    // @ts-ignore
                     restore(): any;
                    /**
                     * Creates a new {@link EntityArchetype} for use with {@link Schematic}s and
                     * placing the archetype in multiple locations.
                     */
                    // @ts-ignore
                     createArchetype(): org.spongepowered.api.entity.EntityArchetype;
                }
            }
        }
    }
}
