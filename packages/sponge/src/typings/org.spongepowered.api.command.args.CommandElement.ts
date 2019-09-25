declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                    abstract class CommandElement {
                        constructor(key: org.spongepowered.api.text.Text)
                        /**
                         * Return the key to be used for this object.
                         */
                        // @ts-ignore
                        public getKey(): org.spongepowered.api.text.Text;
                        /**
                         * Return the plain key, to be used when looking up this command element in
                         * a {@link CommandContext}. If the key is a {@link TranslatableText}, this
                         * is the translation's id. Otherwise, this is the result of
                         * {@link Text#toPlain()}.
                         */
                        // @ts-ignore
                        public getUntranslatedKey(): string;
                        /**
                         * Attempt to extract a value for this element from the given arguments and
                         * put it in the given context. This method normally delegates to
                         * {@link #parseValue(CommandSource, CommandArgs)} for getting the values.
                         * This method is expected to have no side-effects for the source, meaning
                         * that executing it will not change the state of the {@link CommandSource}
                         * in any way.
                         */
                        // @ts-ignore
                        public parse(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): void;
                        /**
                         * Attempt to extract a value for this element from the given arguments.
                         * This method is expected to have no side-effects for the source, meaning
                         * that executing it will not change the state of the {@link CommandSource}
                         * in any way.
                         */
                        // @ts-ignore
                        protected abstract parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): any;
                        /**
                         * Fetch completions for command arguments.
                         */
                        // @ts-ignore
                        public abstract complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): any[] /*java.util.List*/;
                        /**
                         * Return a usage message for this specific argument.
                         */
                        // @ts-ignore
                        public getUsage(src: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text;
                    }
                }
            }
        }
    }
}
