// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractData extends java.lang.Object implements org.spongepowered.api.data.manipulator.DataManipulator {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Simple registration method for the keys to value return methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::getfoo()} is recommended.</p>
                                 */
                                // @ts-ignore
                                protected registerKeyValue(key: org.spongepowered.api.data.key.Key, func: java.util.function$.Supplier): void;
                                /**
                                 * Simple registration method for the keys to field getter methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::getfoo()} is recommended.</p>
                                 */
                                // @ts-ignore
                                protected registerFieldGetter(key: org.spongepowered.api.data.key.Key, func: java.util.function$.Supplier): void;
                                /**
                                 * Simple registration method for the keys to field setter methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::setFoo(something)} is recommended.</p>
                                 */
                                // @ts-ignore
                                protected registerFieldSetter(key: org.spongepowered.api.data.key.Key, func: java.util.function$.Consumer): void;
                                /**
                                 * A required registration method for registering the various fields and
                                 * value getters. It's suggested that if multiple fields are used, each
                                 * field can be represented as a {@link Value} such that there is an
                                 * associated {@link Key} to "get" that field value.
                                 */
                                // @ts-ignore
                                protected abstract registerGettersAndSetters(): void;
                                // @ts-ignore
                                public set(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.manipulator.DataManipulator;
                                // @ts-ignore
                                public transform(key: org.spongepowered.api.data.key.Key, func: java.util.function$.Function): org.spongepowered.api.data.manipulator.DataManipulator;
                                // @ts-ignore
                                public get(key: org.spongepowered.api.data.key.Key): java.util.Optional;
                                // @ts-ignore
                                public getValue(key: org.spongepowered.api.data.key.Key): java.util.Optional;
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key): boolean;
                                // @ts-ignore
                                public getKeys(): java.util.Set;
                                // @ts-ignore
                                public getValues(): java.util.Set;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: java.lang.Object): boolean;
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer;
                                /**
                                 * Implement this method to add the data to be persisted.
                                 */
                                // @ts-ignore
                                protected fillContainer(dataContainer: org.spongepowered.api.data.DataContainer): org.spongepowered.api.data.DataContainer;
                            }
                        }
                    }
                }
            }
        }
    }
}
