// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace message {
                    // @ts-ignore
                    interface MessageEvent extends org.spongepowered.api.event.Event {
                        // @ts-ignore
                         PARAM_MESSAGE_HEADER: string;
                        // @ts-ignore
                         PARAM_MESSAGE_BODY: string;
                        // @ts-ignore
                         PARAM_MESSAGE_FOOTER: string;
                        /**
                         * Gets the original {@link Text} message.
                         */
                        // @ts-ignore
                         getOriginalMessage(): org.spongepowered.api.text.Text;
                        /**
                         * Returns true if the {@link Text} returned by
                         * {@link #getMessage()} should not be sent.
                         */
                        // @ts-ignore
                         isMessageCancelled(): boolean;
                        /**
                         * Sets whether the {@link Text} returned by
                         * {@link #getMessage()} should be sent.
                         */
                        // @ts-ignore
                         setMessageCancelled(cancelled: boolean): void;
                        /**
                         * Returns the {@link MessageFormatter} used to mutate the event's message.
                         */
                        // @ts-ignore
                         getFormatter(): org.spongepowered.api.event.message.MessageEvent.MessageFormatter;
                        /**
                         * Returns the formatted message.
                         */
                        // @ts-ignore
                         getMessage(): org.spongepowered.api.text.Text;
                        /**
                         * Clears the currently set message and returns the empty formatter.
                         */
                        // @ts-ignore
                         clearMessage(): org.spongepowered.api.event.message.MessageEvent.MessageFormatter;
                        /**
                         * Clears any existing components and sets the header, body, and footer
                         * respectively.
                         */
                        // @ts-ignore
                         setMessage(header: org.spongepowered.api.text.TextRepresentable, body: org.spongepowered.api.text.TextRepresentable, footer: org.spongepowered.api.text.TextRepresentable): void;
                        /**
                         * Clears any existing components and sets the header and body
                         * respectively.
                         */
                        // @ts-ignore
                         setMessage(header: org.spongepowered.api.text.TextRepresentable, body: org.spongepowered.api.text.TextRepresentable): void;
                        /**
                         * Clears any existing components and sets the body.
                         */
                        // @ts-ignore
                         setMessage(body: org.spongepowered.api.text.TextRepresentable): void;
                    }
                }
            }
        }
    }
}
