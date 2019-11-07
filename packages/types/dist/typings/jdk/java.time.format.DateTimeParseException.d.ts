// @ts-nocheck
declare namespace java {
    namespace time {
        namespace format {
            // @ts-ignore
             class DateTimeParseException extends java.time.DateTimeException {
                /**
                 * Constructs a new exception with the specified message.
                 */
                // @ts-ignore
                constructor(message: string, parsedData: java.lang.CharSequence, errorIndex: number)
                /**
                 * Constructs a new exception with the specified message and cause.
                 */
                // @ts-ignore
                constructor(message: string, parsedData: java.lang.CharSequence, errorIndex: number, cause: java.lang.Throwable)
                /**
                 * Returns the string that was being parsed.
                 */
                // @ts-ignore
                public getParsedString(): string;
                /**
                 * Returns the index where the error was found.
                 */
                // @ts-ignore
                public getErrorIndex(): number;
            }
        }
    }
}
