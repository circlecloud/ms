// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractSingleEnumData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData {
                                // @ts-ignore
                                constructor(value: java.lang.Enum, usedKey: org.spongepowered.api.data.key.Key, defaultValue: java.lang.Enum)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.lang.Enum)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.lang.Enum, defaultValue: java.lang.Enum)
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer;
                                // @ts-ignore
                                protected fillContainer(dataContainer: org.spongepowered.api.data.DataContainer): org.spongepowered.api.data.DataContainer;
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
