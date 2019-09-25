declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractSingleEnumData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData {
                                constructor(value: any, usedKey: org.spongepowered.api.data.key.Key, defaultValue: any)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any, defaultValue: any)
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
