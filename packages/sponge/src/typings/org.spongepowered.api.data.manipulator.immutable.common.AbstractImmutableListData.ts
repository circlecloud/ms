declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableListData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData implements org.spongepowered.api.data.manipulator.immutable.ImmutableListData {
                                constructor(value: any[] /*java.util.List*/, usedKey: org.spongepowered.api.data.key.Key)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any[] /*java.util.List*/)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any[] /*java.util.List*/, defaultValue: any[] /*java.util.List*/)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                                // @ts-ignore
                                public getListValue(): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                                // @ts-ignore
                                public asList(): any[] /*java.util.List*/;
                            }
                        }
                    }
                }
            }
        }
    }
}
