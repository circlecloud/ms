declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
            abstract class Formatter extends java.lang.Object {
                /**
                 * Construct a new formatter.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Format the given log record and return the formatted string.
                 * <p>
                 * The resulting formatted String will normally include a
                 * localized and formatted version of the LogRecord's message field.
                 * It is recommended to use the {@link Formatter#formatMessage}
                 * convenience method to localize and format the message field.
                 */
                // @ts-ignore
                public abstract format(record: java.util.logging.LogRecord): string;
                /**
                 * Return the header string for a set of formatted records.
                 * <p>
                 * This base class returns an empty string, but this may be
                 * overridden by subclasses.
                 */
                // @ts-ignore
                public getHead(h: java.util.logging.Handler): string;
                /**
                 * Return the tail string for a set of formatted records.
                 * <p>
                 * This base class returns an empty string, but this may be
                 * overridden by subclasses.
                 */
                // @ts-ignore
                public getTail(h: java.util.logging.Handler): string;
                /**
                 * Localize and format the message string from a log record.  This
                 * method is provided as a convenience for Formatter subclasses to
                 * use when they are performing formatting.
                 * <p>
                 * The message string is first localized to a format string using
                 * the record's ResourceBundle.  (If there is no ResourceBundle,
                 * or if the message key is not found, then the key is used as the
                 * format string.)  The format String uses java.text style
                 * formatting.
                 * <ul>
                 * <li>If there are no parameters, no formatter is used.
                 * <li>Otherwise, if the string contains "{0" then
                 * java.text.MessageFormat  is used to format the string.
                 * <li>Otherwise no formatting is performed.
                 * </ul>
                 * <p>
                 */
                // @ts-ignore
                public formatMessage(record: java.util.logging.LogRecord): string;
            }
        }
    }
}
