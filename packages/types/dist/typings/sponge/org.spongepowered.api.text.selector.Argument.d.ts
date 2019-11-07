// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    // @ts-ignore
                    interface Argument {
                        /**
                         * Creates a new {@link Argument} using the specified type and value.
                         * <p>If the type is invertible, the {@link Argument} will not be
                         * inverted.</p>
                         */
                        // @ts-ignore
                         create(type: org.spongepowered.api.text.selector.ArgumentType, value: java.lang.Object): org.spongepowered.api.text.selector.Argument;
                        /**
                         * Creates a new {@link Argument.Invertible} using the specified type and
                         * value. The created {@link Argument} will be inverted based on the given
                         * parameter.
                         */
                        // @ts-ignore
                         create(type: org.spongepowered.api.text.selector.ArgumentType.Invertible, value: java.lang.Object, inverted: boolean): org.spongepowered.api.text.selector.Argument.Invertible;
                        /**
                         * Creates a new set of {@link Argument}s using the specified type and
                         * value.
                         */
                        // @ts-ignore
                         createSet(type: org.spongepowered.api.text.selector.ArgumentHolder, value: java.lang.Object): java.util.Set;
                        /**
                         * Parses an {@link Argument} from the given argument string.
                         * <p>In Vanilla, it should be formatted like {@code key=value}.</p>
                         */
                        // @ts-ignore
                         parse(argument: string): org.spongepowered.api.text.selector.Argument;
                        /**
                         * Returns the type of this {@link Argument}.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.text.selector.ArgumentType;
                        /**
                         * Returns the value of this {@link Argument}.
                         */
                        // @ts-ignore
                         getValue(): java.lang.Object;
                        /**
                         * Converts this {@link Argument} to a valid argument string.
                         */
                        // @ts-ignore
                         toPlain(): string;
                    }
                }
            }
        }
    }
}
