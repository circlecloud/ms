// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                    abstract class PatternMatchingCommandElement extends org.spongepowered.api.command.args.CommandElement {
                        // @ts-ignore
                        constructor(key: org.spongepowered.api.text.Text)
                        // @ts-ignore
                        protected parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): java.lang.Object;
                        // @ts-ignore
                        public complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): java.util.List;
                        /**
                         * Tests a string against a set of valid choices to see if it is a
                         * case-insensitive match.
                         */
                        // @ts-ignore
                        protected getExactMatch(choices: java.lang.Iterable, potentialChoice: string): java.util.Optional;
                        /**
                         * Gets the available choices for this command source.
                         */
                        // @ts-ignore
                        protected abstract getChoices(source: org.spongepowered.api.command.CommandSource): java.lang.Iterable;
                        /**
                         * Gets the value for a given choice. For any result in
                         * {@link #getChoices(CommandSource)}, this must return a non-null value.
                         * Otherwise, an {@link IllegalArgumentException} may be throw.
                         */
                        // @ts-ignore
                        protected abstract getValue(choice: string): java.lang.Object;
                    }
                }
            }
        }
    }
}
