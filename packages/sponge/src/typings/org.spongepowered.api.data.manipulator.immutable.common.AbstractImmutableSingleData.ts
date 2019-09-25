declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableSingleData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableData {
                                constructor(value: any, usedKey: org.spongepowered.api.data.key.Key)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any, defaultValue: any)
                                // @ts-ignore
                                protected usedKey: org.spongepowered.api.data.key.Key;
                                // @ts-ignore
                                protected value: any;
                                // @ts-ignore
                                protected defaultValue: any;
                                // @ts-ignore
                                protected abstract getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                // @ts-ignore
                                protected getValue(): any;
                                // @ts-ignore
                                public abstract asMutable(): org.spongepowered.api.data.manipulator.DataManipulator;
                                // @ts-ignore
                                protected registerGetters(): void;
                                // @ts-ignore
                                public get(key: org.spongepowered.api.data.key.Key): any;
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key): boolean;
                                // @ts-ignore
                                public getKeys(): any[] /*java.util.Set*/;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: any): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}
