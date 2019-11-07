// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                     class ArgumentParseException extends org.spongepowered.api.command.CommandException {
                        /**
                         * Return a new {@link ArgumentParseException} with the given message, source and position.
                         */
                        // @ts-ignore
                        constructor(message: org.spongepowered.api.text.Text, source: string, position: number)
                        /**
                         * Return a new {@link ArgumentParseException} with the given message, cause, source and position.
                         */
                        // @ts-ignore
                        constructor(message: org.spongepowered.api.text.Text, cause: java.lang.Throwable, source: string, position: number)
                        // @ts-ignore
                        public getText(): org.spongepowered.api.text.Text;
                        /**
                         * Return a string pointing to the position of the arguments when this
                         * exception occurs.
                         */
                        // @ts-ignore
                        public getAnnotatedPosition(): string;
                        /**
                         * Gets the position of the last fetched argument in the provided source
                         * string.
                         */
                        // @ts-ignore
                        public getPosition(): number;
                        /**
                         * Returns the source string arguments are being parsed from.
                         */
                        // @ts-ignore
                        public getSourceString(): string;
                    }
                }
            }
        }
    }
}
