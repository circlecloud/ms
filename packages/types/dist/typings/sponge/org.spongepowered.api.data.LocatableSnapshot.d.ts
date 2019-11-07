declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface LocatableSnapshot extends org.spongepowered.api.data.ImmutableDataHolder {
                    /**
                     * Gets the {@link UUID} of the world.
                     */
                    // @ts-ignore
                     getWorldUniqueId(): java.util.UUID;
                    /**
                     * Gets the saved block position.
                     */
                    // @ts-ignore
                     getPosition(): any /*Vector3i*/;
                    /**
                     * Gets the {@link Location} of the snapshot at which it may have been
                     * taken from. The {@link Location} being immutable signifies that the
                     * {@link LocatableSnapshot} can be re-created at the desired
                     * {@link Location}.
                     */
                    // @ts-ignore
                     getLocation(): java.util.Optional;
                    /**
                     * Creates a copy of the snapshot with the provided
                     * {@link Location}.
                     */
                    // @ts-ignore
                     withLocation(location: org.spongepowered.api.world.Location): org.spongepowered.api.data.LocatableSnapshot;
                }
            }
        }
    }
}
