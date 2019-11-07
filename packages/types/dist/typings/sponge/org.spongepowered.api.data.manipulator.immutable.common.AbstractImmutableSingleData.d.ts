// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableSingleData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableData {
                                // @ts-ignore
                                constructor(value: java.lang.Object, usedKey: org.spongepowered.api.data.key.Key)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.lang.Object)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.lang.Object, defaultValue: java.lang.Object)
                                // @ts-ignore
                                protected usedKey: org.spongepowered.api.data.key.Key;
                                // @ts-ignore
                                protected value: java.lang.Object;
                                // @ts-ignore
                                protected defaultValue: java.lang.Object;
                                // @ts-ignore
                                protected abstract getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                // @ts-ignore
                                protected getValue(): java.lang.Object;
                                // @ts-ignore
                                public abstract asMutable(): org.spongepowered.api.data.manipulator.DataManipulator;
                                // @ts-ignore
                                protected registerGetters(): void;
                                // @ts-ignore
                                public get(key: org.spongepowered.api.data.key.Key): java.util.Optional;
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key): boolean;
                                // @ts-ignore
                                public getKeys(): java.util.Set;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: java.lang.Object): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}
