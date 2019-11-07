// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface Archetype extends org.spongepowered.api.data.DataHolder {
                    /**
                     * Creates a new instance based on this archetype at the given location.
                     */
                    // @ts-ignore
                     apply(location: org.spongepowered.api.world.Location): java.util.Optional;
                    /**
                     * Creates a new immutable snapshot based on this archetype.
                     */
                    // @ts-ignore
                     toSnapshot(location: org.spongepowered.api.world.Location): org.spongepowered.api.data.LocatableSnapshot;
                }
            }
        }
    }
}
