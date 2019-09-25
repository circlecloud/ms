declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableMappedData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData implements org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData {
                                constructor(value: Map<any, any> /*java.util.Map*/, usedKey: org.spongepowered.api.data.key.Key)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: Map<any, any> /*java.util.Map*/)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: Map<any, any> /*java.util.Map*/, defaultValue: Map<any, any> /*java.util.Map*/)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                                // @ts-ignore
                                public get(key: any): any;
                                // @ts-ignore
                                public getMapKeys(): any[] /*java.util.Set*/;
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
