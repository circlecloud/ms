declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace spec {
                    namespace CommandSpec {
                        // @ts-ignore
                         class Builder extends java.lang.Object {
                            /**
                             * Sets the permission that will be checked before using this command.
                             */
                            // @ts-ignore
                            public permission(permission: string): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Sets the callback that will handle this command's execution.
                             */
                            // @ts-ignore
                            public executor(executor: org.spongepowered.api.command.spec.CommandExecutor): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Adds more child arguments for this command.
                             * If an executor or arguments are set, they are used as fallbacks.
                             */
                            // @ts-ignore
                            public children(children: java.util.Map): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Add a single child command to this command.
                             */
                            // @ts-ignore
                            public child(child: org.spongepowered.api.command.CommandCallable, aliases: string): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Add a single child command to this command.
                             */
                            // @ts-ignore
                            public child(child: org.spongepowered.api.command.CommandCallable, aliases: java.util.Collection): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * A short, one-line description of this command's purpose.
                             */
                            // @ts-ignore
                            public description(description: org.spongepowered.api.text.Text): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Sets an extended description to use in longer help listings for this
                             * command. Will be appended to the short description and the command's
                             * usage.
                             */
                            // @ts-ignore
                            public extendedDescription(extendedDescription: org.spongepowered.api.text.Text): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * If a child command is selected but fails to parse arguments passed to
                             * it, the following determines the behavior.
                             * <ul>
                             * <li>If this is set to <strong>false</strong>, this command (the
                             * parent) will not attempt to parse the command, and will send back
                             * the error from the child.</li>
                             * <li>If this is set to <strong>true</strong>, the error from the
                             * child will simply be discarded, and the parent command will
                             * execute.</li>
                             * </ul>
                             * <p>The default for this is <strong>true</strong>, which emulates the
                             * behavior from previous API revisions.</p>
                             */
                            // @ts-ignore
                            public childArgumentParseExceptionFallback(childCommandFallback: boolean): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Sets the argument specification for this command. Generally, for a
                             * multi-argument command the {@link GenericArguments#seq(CommandElement...)}
                             * method is used to parse a sequence of args.
                             */
                            // @ts-ignore
                            public arguments(args: org.spongepowered.api.command.args.CommandElement): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Sets the argument specification for this command. This method accepts
                             * a sequence of arguments. This is equivalent to calling {@code
                             * arguments(seq(args))}.
                             */
                            // @ts-ignore
                            public arguments(args: org.spongepowered.api.command.args.CommandElement): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Sets the input tokenizer to be used to convert input from a string
                             * into a list of argument tokens.
                             */
                            // @ts-ignore
                            public inputTokenizer(parser: org.spongepowered.api.command.args.parsing.InputTokenizer): org.spongepowered.api.command.spec.CommandSpec.Builder;
                            /**
                             * Create a new {@link CommandSpec} based on the data provided in this
                             * builder.
                             */
                            // @ts-ignore
                            public build(): org.spongepowered.api.command.spec.CommandSpec;
                        }
                    }
                }
            }
        }
    }
}
