declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractListData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData implements org.spongepowered.api.data.manipulator.mutable.ListData {
                                constructor(value: any[] /*java.util.List*/, usedKey: org.spongepowered.api.data.key.Key)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any[] /*java.util.List*/)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any[] /*java.util.List*/, defaultValue: any[] /*java.util.List*/)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.mutable.ListValue;
                                // @ts-ignore
                                public get(key: org.spongepowered.api.data.key.Key): any;
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key): boolean;
                                // @ts-ignore
                                public abstract asImmutable(): org.spongepowered.api.data.manipulator.immutable.ImmutableListData;
                                // @ts-ignore
                                protected getValue(): any[] /*java.util.List*/;
                                // @ts-ignore
                                protected setValue(value: any[] /*java.util.List*/): org.spongepowered.api.data.manipulator.mutable.ListData;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: any): boolean;
                                // @ts-ignore
                                public getListValue(): org.spongepowered.api.data.value.mutable.ListValue;
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
