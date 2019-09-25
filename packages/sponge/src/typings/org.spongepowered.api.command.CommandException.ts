declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                 class CommandException extends org.spongepowered.api.util.TextMessageException {
                    /**
                     * Constructs a new {@link CommandException} with the given message.
                     */
                    constructor(message: org.spongepowered.api.text.Text)
                    /**
                     * Constructs a new {@link CommandException} with the given message and
                     * the given cause.
                     */
                    constructor(message: org.spongepowered.api.text.Text, cause: any)
                    /**
                     * Constructs a new {@link CommandException} with the given message.
                     */
                    constructor(message: org.spongepowered.api.text.Text, includeUsage: boolean)
                    /**
                     * Constructs a new {@link CommandException} with the given message and
                     * the given cause.
                     */
                    constructor(message: org.spongepowered.api.text.Text, cause: any, includeUsage: boolean)
                    /**
                     * Gets whether the exception should include usage in
                     * the presentation of the exception/stack-trace.
                     */
                    // @ts-ignore
                    public shouldIncludeUsage(): boolean;
                }
            }
        }
    }
}