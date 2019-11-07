declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class XMLFormatter extends java.util.logging.Formatter {
                // @ts-ignore
                constructor()
                /**
                 * Format the given message to XML.
                 * <p>
                 * This method can be overridden in a subclass.
                 * It is recommended to use the {@link Formatter#formatMessage}
                 * convenience method to localize and format the message field.
                 */
                // @ts-ignore
                public format(record: java.util.logging.LogRecord): string;
                /**
                 * Return the header string for a set of XML formatted records.
                 */
                // @ts-ignore
                public getHead(h: java.util.logging.Handler): string;
                /**
                 * Return the tail string for a set of XML formatted records.
                 */
                // @ts-ignore
                public getTail(h: java.util.logging.Handler): string;
            }
        }
    }
}
