declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                 class CommandNotFoundException extends org.spongepowered.api.command.CommandException {
                    /**
                     * Create an exception with the default message.
                     */
                    constructor(command: string)
                    /**
                     * Create an exception with a custom message.
                     */
                    constructor(message: org.spongepowered.api.text.Text, command: string)
                    /**
                     * Returns the command that was queried for.
                     */
                    // @ts-ignore
                    public getCommand(): string;
                }
            }
        }
    }
}
