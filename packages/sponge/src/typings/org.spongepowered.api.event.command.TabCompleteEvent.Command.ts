declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace command {
                    namespace TabCompleteEvent {
                        // @ts-ignore
                        interface Command extends org.spongepowered.api.event.command.TabCompleteEvent {
                            /**
                             * Gets the command as a string, without any sort of command prefix.
                             * <p>For example, if the message was {@code /example bob 3 -f},
                             * then the command would be {@code example}.</p>
                             */
                            // @ts-ignore
                             getCommand(): string;
                            /**
                             * Gets the arguments as a string.
                             * <p>For example, if the message was {@code /example bob 3 -f},
                             * then the arguments would be {@code bob 3 -f}.</p>
                             */
                            // @ts-ignore
                             getArguments(): string;
                        }
                    }
                }
            }
        }
    }
}
