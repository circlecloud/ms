declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableData implements org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                constructor()
                                /**
                                 * Simple registration method for the keys to value return methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::getfoo()} is recommended.</p>
                                 */
                                // @ts-ignore
                                protected registerKeyValue(key: org.spongepowered.api.data.key.Key, func: any): void;
                                /**
                                 * Simple registration method for the keys to field getter methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::getfoo()} is recommended.</p>
                                 */
                                // @ts-ignore
                                protected registerFieldGetter(key: org.spongepowered.api.data.key.Key, func: any): void;
                                // @ts-ignore
                                protected abstract registerGetters(): void;
                                // @ts-ignore
                                public copy(): org.spongepowered.api.data.manipulator.ImmutableDataManipulator;
                                // @ts-ignore
                                public get(key: org.spongepowered.api.data.key.Key): any;
                                // @ts-ignore
                                public getValue(key: org.spongepowered.api.data.key.Key): any;
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key): boolean;
                                // @ts-ignore
                                public getKeys(): any[] /*java.util.Set*/;
                                // @ts-ignore
                                public getValues(): any[] /*java.util.Set*/;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: any): boolean;
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
