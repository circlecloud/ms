declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractBooleanData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData {
                                constructor(value: boolean, usedKey: org.spongepowered.api.data.key.Key, defaultValue: boolean)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: boolean)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: boolean, defaultValue: boolean)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.mutable.Value;
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer;
                            }
                        }
                    }
                }
            }
        }
    }
}