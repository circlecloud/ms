declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableBoundedValue extends org.spongepowered.api.data.value.BoundedValue, org.spongepowered.api.data.value.immutable.ImmutableValue {
                            // @ts-ignore
                             transform(func: java.util.function$.Function): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            // @ts-ignore
                             asMutable(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        }
                    }
                }
            }
        }
    }
}
