declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    // @ts-ignore
                    interface SelectorFactory {
                        /**
                         * Creates a {@link Selector.Builder}.
                         */
                        // @ts-ignore
                         createBuilder(): org.spongepowered.api.text.selector.Selector.Builder;
                        /**
                         * Parses a {@link Selector} from the given selector string.
                         */
                        // @ts-ignore
                         parseRawSelector(selector: string): org.spongepowered.api.text.selector.Selector;
                        /**
                         * Creates a minimum and maximum {@link ArgumentType} filtering depending on
                         * the score of the specified objective.
                         */
                        // @ts-ignore
                         createScoreArgumentType(name: string): org.spongepowered.api.text.selector.ArgumentHolder.Limit;
                        /**
                         * Gets the {@link ArgumentType} with the provided name.
                         */
                        // @ts-ignore
                         getArgumentType(name: string): java.util.Optional;
                        /**
                         * Gets a {@link Collection} of all possible {@link ArgumentType}s.
                         */
                        // @ts-ignore
                         getArgumentTypes(): java.util.Collection;
                        /**
                         * Creates a custom {@link ArgumentType} with the specified key.
                         */
                        // @ts-ignore
                         createArgumentType(key: string): org.spongepowered.api.text.selector.ArgumentType;
                        /**
                         * Creates a custom {@link ArgumentType} with the specified key and value.
                         */
                        // @ts-ignore
                         createArgumentType(key: string, type: java.lang.Class): org.spongepowered.api.text.selector.ArgumentType;
                        /**
                         * Creates a new {@link Argument} using the specified type and value.
                         */
                        // @ts-ignore
                         createArgument(type: org.spongepowered.api.text.selector.ArgumentType, value: java.lang.Object): org.spongepowered.api.text.selector.Argument;
                        /**
                         * Creates a new {@link Argument.Invertible} using the specified type and
                         * value. The created {@link Argument} will be inverted based on the given
                         * parameter.
                         */
                        // @ts-ignore
                         createArgument(type: org.spongepowered.api.text.selector.ArgumentType.Invertible, value: java.lang.Object, inverted: boolean): org.spongepowered.api.text.selector.Argument.Invertible;
                        /**
                         * Creates a new set of {@link Argument}s using the specified type and
                         * value.
                         */
                        // @ts-ignore
                         createArguments(type: org.spongepowered.api.text.selector.ArgumentHolder, value: java.lang.Object): java.util.Set;
                        /**
                         * Parses an {@link Argument} from the given argument string.
                         * <p>In Vanilla, it should be formatted like {@code key=value}.</p>
                         */
                        // @ts-ignore
                         parseArgument(argument: string): org.spongepowered.api.text.selector.Argument;
                        /**
                         * Fetch completions for a selector command argument.
                         */
                        // @ts-ignore
                         complete(selector: string): java.util.List;
                    }
                }
            }
        }
    }
}
