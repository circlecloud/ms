declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableListData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData implements org.spongepowered.api.data.manipulator.immutable.ImmutableListData {
                                // @ts-ignore
                                constructor(value: java.util.List, usedKey: org.spongepowered.api.data.key.Key)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.util.List)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.util.List, defaultValue: java.util.List)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                                // @ts-ignore
                                public getListValue(): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                                // @ts-ignore
                                public asList(): java.util.List;
                            }
                        }
                    }
                }
            }
        }
    }
}
