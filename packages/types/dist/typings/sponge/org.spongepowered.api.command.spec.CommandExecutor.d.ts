declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace spec {
                    // @ts-ignore
                    interface CommandExecutor {
                        /**
                         * Callback for the execution of a command.
                         */
                        // @ts-ignore
                         execute(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandContext): org.spongepowered.api.command.CommandResult;
                    }
                }
            }
        }
    }
}
