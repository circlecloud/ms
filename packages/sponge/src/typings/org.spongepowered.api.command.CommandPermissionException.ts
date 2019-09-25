declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                 class CommandPermissionException extends org.spongepowered.api.command.CommandException {
                    /**
                     * Create an exception with the default message.
                     */
                    constructor()
                    /**
                     * Create a permissions exception with a custom message.
                     */
                    constructor(message: org.spongepowered.api.text.Text)
                    /**
                     * Create a permissions exception with a custom message and cause.
                     */
                    constructor(message: org.spongepowered.api.text.Text, cause: any)
                }
            }
        }
    }
}
