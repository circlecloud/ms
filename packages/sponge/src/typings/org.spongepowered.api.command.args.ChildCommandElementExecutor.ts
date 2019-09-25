declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                     class ChildCommandElementExecutor extends org.spongepowered.api.command.args.CommandElement implements org.spongepowered.api.command.spec.CommandExecutor {
                        /**
                         * Create a new combined argument element and executor to handle the
                         * parsing and execution of child commands.
                         */
                        constructor(fallbackExecutor: org.spongepowered.api.command.spec.CommandExecutor)
                        /**
                         * Create a new combined argument element and executor to handle the
                         * parsing and execution of child commands.
                         */
                        constructor(fallbackExecutor: org.spongepowered.api.command.spec.CommandExecutor, fallbackElements: org.spongepowered.api.command.args.CommandElement, fallbackOnFail: boolean)
                        /**
                         * Register a child command for a given set of aliases.
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, aliases: any[] /*java.util.List*/): any;
                        /**
                         * Register a child command for a given set of aliases.
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, aliases: string): any;
                        // @ts-ignore
                        public complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): any[] /*java.util.List*/;
                        // @ts-ignore
                        public parse(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): void;
                        // @ts-ignore
                        protected parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): any;
                        // @ts-ignore
                        public execute(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandContext): org.spongepowered.api.command.CommandResult;
                        // @ts-ignore
                        public getUsage(src: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text;
                    }
                }
            }
        }
    }
}
