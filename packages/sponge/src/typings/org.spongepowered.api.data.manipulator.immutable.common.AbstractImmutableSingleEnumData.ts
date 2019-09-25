declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableSingleEnumData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData {
                                constructor(value: any, defaultValue: any, usedKey: org.spongepowered.api.data.key.Key)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any, defaultValue: any)
                                // @ts-ignore
                                protected enumType(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer;
                                // @ts-ignore
                                protected fillContainer(dataContainer: org.spongepowered.api.data.DataContainer): org.spongepowered.api.data.DataContainer;
                            }
                        }
                    }
                }
            }
        }
    }
}
