declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractMappedData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData implements org.spongepowered.api.data.manipulator.mutable.MappedData {
                                // @ts-ignore
                                constructor(value: java.util.Map, usedKey: org.spongepowered.api.data.key.Key)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.util.Map)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.util.Map, defaultValue: java.util.Map)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.mutable.MapValue;
                                // @ts-ignore
                                protected getValue(): java.util.Map;
                                // @ts-ignore
                                protected setValue(value: java.util.Map): org.spongepowered.api.data.manipulator.mutable.MappedData;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: java.lang.Object): boolean;
                                // @ts-ignore
                                public getMapValue(): org.spongepowered.api.data.value.mutable.MapValue;
                                // @ts-ignore
                                public asMap(): java.util.Map;
                            }
                        }
                    }
                }
            }
        }
    }
}
