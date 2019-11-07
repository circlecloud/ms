// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace spec {
                    // @ts-ignore
                     class CommandSpec extends java.lang.Object implements org.spongepowered.api.command.CommandCallable {
                        /**
                         * Return a new builder for a CommandSpec.
                         */
                        // @ts-ignore
                        public static builder(): org.spongepowered.api.command.spec.CommandSpec.Builder;
                        /**
                         * Check the relevant permission for this command with the provided source,
                         * throwing an exception if the source does not have permission to use
                         * the command.
                         */
                        // @ts-ignore
                        public checkPermission(source: org.spongepowered.api.command.CommandSource): void;
                        /**
                         * Process this command with existing arguments and context objects.
                         */
                        // @ts-ignore
                        public populateContext(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): void;
                        /**
                         * Return tab completion results using the existing parsed arguments and
                         * context. Primarily useful when including a subcommand in an existing
                         * specification.
                         */
                        // @ts-ignore
                        public complete(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): java.util.List;
                        /**
                         * Gets the active executor for this command. Generally not a good idea to
                         * call this directly, unless you are handling arg parsing specially
                         */
                        // @ts-ignore
                        public getExecutor(): org.spongepowered.api.command.spec.CommandExecutor;
                        /**
                         * Gets the active input tokenizer used for this command.
                         */
                        // @ts-ignore
                        public getInputTokenizer(): org.spongepowered.api.command.args.parsing.InputTokenizer;
                        // @ts-ignore
                        public process(source: org.spongepowered.api.command.CommandSource, arguments: string): org.spongepowered.api.command.CommandResult;
                        // @ts-ignore
                        public getSuggestions(source: org.spongepowered.api.command.CommandSource, arguments: string, targetPos: org.spongepowered.api.world.Location): java.util.List;
                        // @ts-ignore
                        public testPermission(source: org.spongepowered.api.command.CommandSource): boolean;
                        /**
                         * Gets a short, one-line description used with this command if any is
                         * present.
                         */
                        // @ts-ignore
                        public getShortDescription(source: org.spongepowered.api.command.CommandSource): java.util.Optional;
                        /**
                         * Gets the extended description used with this command if any is present.
                         */
                        // @ts-ignore
                        public getExtendedDescription(source: org.spongepowered.api.command.CommandSource): java.util.Optional;
                        /**
                         * Gets the usage for this command appropriate for the provided command
                         * source.
                         */
                        // @ts-ignore
                        public getUsage(source: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text;
                        /**
                         * Return a longer description for this command. This description is
                         * composed of at least all present of the short description, the usage
                         * statement, and the extended description
                         */
                        // @ts-ignore
                        public getHelp(source: org.spongepowered.api.command.CommandSource): java.util.Optional;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
