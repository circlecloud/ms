declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace command {
                    // @ts-ignore
                    interface SendCommandEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the command as a string, without any sort of command prefix.
                         * <p>For example, if the message was {@code /example bob 3 -f}, then
                         * the command would be {@code example}.</p>
                         */
                        // @ts-ignore
                         getCommand(): string;
                        /**
                         * Sets the command as a string, without any sort of command prefix.
                         * <p>For example, if the message was {@code /example bob 3 -f}, then
                         * the command would be {@code example}.</p>
                         */
                        // @ts-ignore
                         setCommand(command: string): void;
                        /**
                         * Gets the arguments as a string.
                         * <p>For example, if the message was {@code /example bob 3 -f}, then
                         * the arguments would be {@code bob 3 -f}.</p>
                         */
                        // @ts-ignore
                         getArguments(): string;
                        /**
                         * Sets the arguments as a string.
                         * <p>For example, if the message was {@code /example bob 3 -f}, then
                         * the arguments would be {@code bob 3 -f}.</p>
                         */
                        // @ts-ignore
                         setArguments(arguments: string): void;
                        /**
                         * The result of the command.
                         */
                        // @ts-ignore
                         getResult(): org.spongepowered.api.command.CommandResult;
                        /**
                         * Sets the result of the command.
                         */
                        // @ts-ignore
                         setResult(result: org.spongepowered.api.command.CommandResult): void;
                    }
                }
            }
        }
    }
}
