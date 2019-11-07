declare namespace java {
    namespace nio {
        namespace charset {
            // @ts-ignore
             class MalformedInputException extends java.nio.charset.CharacterCodingException {
                /**
                 * Constructs an {@code MalformedInputException} with the given
                 * length.
                 */
                // @ts-ignore
                constructor(inputLength: number)
                /**
                 * Returns the length of the input.
                 */
                // @ts-ignore
                public getInputLength(): number;
                /**
                 * Returns the message.
                 */
                // @ts-ignore
                public getMessage(): string;
            }
        }
    }
}
