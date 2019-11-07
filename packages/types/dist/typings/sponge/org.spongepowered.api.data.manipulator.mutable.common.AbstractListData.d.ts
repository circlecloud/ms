declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractListData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData implements org.spongepowered.api.data.manipulator.mutable.ListData {
                                // @ts-ignore
                                constructor(value: java.util.List, usedKey: org.spongepowered.api.data.key.Key)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.util.List)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.util.List, defaultValue: java.util.List)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.mutable.ListValue;
                                // @ts-ignore
                                public get(key: org.spongepowered.api.data.key.Key): java.util.Optional;
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key): boolean;
                                // @ts-ignore
                                public abstract asImmutable(): org.spongepowered.api.data.manipulator.immutable.ImmutableListData;
                                // @ts-ignore
                                protected getValue(): java.util.List;
                                // @ts-ignore
                                protected setValue(value: java.util.List): org.spongepowered.api.data.manipulator.mutable.ListData;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: java.lang.Object): boolean;
                                // @ts-ignore
                                public getListValue(): org.spongepowered.api.data.value.mutable.ListValue;
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
