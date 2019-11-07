declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractSingleData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractData {
                                // @ts-ignore
                                constructor(value: java.lang.Object, usedKey: org.spongepowered.api.data.key.Key)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.lang.Object)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.lang.Object, defaultValue: java.lang.Object)
                                // @ts-ignore
                                protected usedKey: org.spongepowered.api.data.key.Key;
                                // @ts-ignore
                                protected defaultValue: java.lang.Object;
                                // @ts-ignore
                                protected value: java.lang.Object;
                                // @ts-ignore
                                protected registerGettersAndSetters(): void;
                                /**
                                 * Gets the {@link Value} as a method since this manipulator only focuses
                                 * on a single value.
                                 */
                                // @ts-ignore
                                protected abstract getValueGetter(): org.spongepowered.api.data.value.mutable.Value;
                                // @ts-ignore
                                public get(key: org.spongepowered.api.data.key.Key): java.util.Optional;
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key): boolean;
                                // @ts-ignore
                                public abstract asImmutable(): org.spongepowered.api.data.manipulator.ImmutableDataManipulator;
                                /**
                                 * A simple getter for usage with a {@link Supplier} for
                                 * the {@link #registerFieldGetter(Key, Supplier)} method.
                                 */
                                // @ts-ignore
                                protected getValue(): java.lang.Object;
                                /**
                                 * A simple setter for usage with a {@link Consumer} for
                                 * the {@link #registerFieldSetter(Key, Consumer)} method.
                                 */
                                // @ts-ignore
                                protected setValue(value: java.lang.Object): org.spongepowered.api.data.manipulator.DataManipulator;
                                // @ts-ignore
                                protected fillContainer(dataContainer: org.spongepowered.api.data.DataContainer): org.spongepowered.api.data.DataContainer;
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
