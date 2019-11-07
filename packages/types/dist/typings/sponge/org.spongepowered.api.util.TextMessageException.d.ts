declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class TextMessageException extends java.lang.Exception {
                    /**
                     * Constructs a new {@link TextMessageException}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new {@link TextMessageException} with the given message.
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text)
                    /**
                     * Constructs a new {@link TextMessageException} with the given message and
                     * cause.
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text, throwable: java.lang.Throwable)
                    /**
                     * Constructs a new {@link TextMessageException} with the given cause.
                     */
                    // @ts-ignore
                    constructor(throwable: java.lang.Throwable)
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
