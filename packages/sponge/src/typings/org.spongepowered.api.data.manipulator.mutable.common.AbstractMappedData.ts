declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractMappedData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData implements org.spongepowered.api.data.manipulator.mutable.MappedData {
                                constructor(value: Map<any, any> /*java.util.Map*/, usedKey: org.spongepowered.api.data.key.Key)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: Map<any, any> /*java.util.Map*/)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: Map<any, any> /*java.util.Map*/, defaultValue: Map<any, any> /*java.util.Map*/)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.mutable.MapValue;
                                // @ts-ignore
                                protected getValue(): Map<any, any> /*java.util.Map*/;
                                // @ts-ignore
                                protected setValue(value: Map<any, any> /*java.util.Map*/): org.spongepowered.api.data.manipulator.mutable.MappedData;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: any): boolean;
                                // @ts-ignore
                                public getMapValue(): org.spongepowered.api.data.value.mutable.MapValue;
                                // @ts-ignore
                                public asMap(): Map<any, any> /*java.util.Map*/;
                            }
                        }
                    }
                }
            }
        }
    }
}
