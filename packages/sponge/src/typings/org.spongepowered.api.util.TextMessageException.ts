declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class TextMessageException {
                    /**
                     * Constructs a new {@link TextMessageException}.
                     */
                    constructor()
                    /**
                     * Constructs a new {@link TextMessageException} with the given message.
                     */
                    constructor(message: org.spongepowered.api.text.Text)
                    /**
                     * Constructs a new {@link TextMessageException} with the given message and
                     * cause.
                     */
                    constructor(message: org.spongepowered.api.text.Text, throwable: any)
                    /**
                     * Constructs a new {@link TextMessageException} with the given cause.
                     */
                    constructor(throwable: any)
                    // @ts-ignore
                    public getMessage(): string;
                    /**
                     * Returns the text message for this exception, or null if nothing is
                     * present.
                     */
                    // @ts-ignore
                    public getText(): org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public getLocalizedMessage(): string;
                }
            }
        }
    }
}
