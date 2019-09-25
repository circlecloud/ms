declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface ImmutableDataHolder extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.property.PropertyHolder, org.spongepowered.api.data.value.immutable.ImmutableValueStore {
                    /**
                     * Gets a copy of all properties defined on this
                     * {@link ImmutableDataHolder}, with their current values.
                     */
                    // @ts-ignore
                     getManipulators(): any[] /*java.util.List*/;
                }
            }
        }
    }
}
