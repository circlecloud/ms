// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface MutableBoundedValue extends org.spongepowered.api.data.value.BoundedValue, org.spongepowered.api.data.value.mutable.Value {
                            // @ts-ignore
                             asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            // @ts-ignore
                             copy(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        }
                    }
                }
            }
        }
    }
}
