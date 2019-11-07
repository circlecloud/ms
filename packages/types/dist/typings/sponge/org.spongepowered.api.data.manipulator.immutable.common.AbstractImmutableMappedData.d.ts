declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableMappedData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData implements org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData {
                                // @ts-ignore
                                constructor(value: java.util.Map, usedKey: org.spongepowered.api.data.key.Key)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.util.Map)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.util.Map, defaultValue: java.util.Map)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                                // @ts-ignore
                                public get(key: java.lang.Object): java.util.Optional;
                                // @ts-ignore
                                public getMapKeys(): java.util.Set;
                                // @ts-ignore
                                public getMapValue(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
