declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class ConsoleHandler extends java.util.logging.StreamHandler {
                /**
                 * Create a <tt>ConsoleHandler</tt> for <tt>System.err</tt>.
                 * <p>
                 * The <tt>ConsoleHandler</tt> is configured based on
                 * <tt>LogManager</tt> properties (or their default values).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Publish a <tt>LogRecord</tt>.
                 * <p>
                 * The logging request was made initially to a <tt>Logger</tt> object,
                 * which initialized the <tt>LogRecord</tt> and forwarded it here.
                 * <p>
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void;
                /**
                 * Override <tt>StreamHandler.close</tt> to do a flush but not
                 * to close the output stream.  That is, we do <b>not</b>
                 * close <tt>System.err</tt>.
                 */
                // @ts-ignore
                public close(): void;
            }
        }
    }
}
