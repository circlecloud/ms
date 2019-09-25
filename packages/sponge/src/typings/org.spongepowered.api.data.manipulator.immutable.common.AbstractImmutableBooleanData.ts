declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableBooleanData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData {
                                constructor(value: boolean, usedKey: org.spongepowered.api.data.key.Key, defaultValue: boolean)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: boolean)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: boolean, defaultValue: boolean)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}