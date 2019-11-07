// @ts-nocheck
declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class StreamHandler extends java.util.logging.Handler {
                /**
                 * Create a <tt>StreamHandler</tt>, with no current output stream.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a <tt>StreamHandler</tt> with a given <tt>Formatter</tt>
                 * and output stream.
                 * <p>
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, formatter: java.util.logging.Formatter)
                /**
                 * Change the output stream.
                 * <P>
                 * If there is a current output stream then the <tt>Formatter</tt>'s
                 * tail string is written and the stream is flushed and closed.
                 * Then the output stream is replaced with the new output stream.
                 */
                // @ts-ignore
                protected setOutputStream(out: java.io.OutputStream): void;
                /**
                 * Set (or change) the character encoding used by this <tt>Handler</tt>.
                 * <p>
                 * The encoding should be set before any <tt>LogRecords</tt> are written
                 * to the <tt>Handler</tt>.
                 */
                // @ts-ignore
                public setEncoding(encoding: string): void;
                /**
                 * Format and publish a <tt>LogRecord</tt>.
                 * <p>
                 * The <tt>StreamHandler</tt> first checks if there is an <tt>OutputStream</tt>
                 * and if the given <tt>LogRecord</tt> has at least the required log level.
                 * If not it silently returns.  If so, it calls any associated
                 * <tt>Filter</tt> to check if the record should be published.  If so,
                 * it calls its <tt>Formatter</tt> to format the record and then writes
                 * the result to the current output stream.
                 * <p>
                 * If this is the first <tt>LogRecord</tt> to be written to a given
                 * <tt>OutputStream</tt>, the <tt>Formatter</tt>'s "head" string is
                 * written to the stream before the <tt>LogRecord</tt> is written.
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void;
                /**
                 * Check if this <tt>Handler</tt> would actually log a given <tt>LogRecord</tt>.
                 * <p>
                 * This method checks if the <tt>LogRecord</tt> has an appropriate level and
                 * whether it satisfies any <tt>Filter</tt>.  It will also return false if
                 * no output stream has been assigned yet or the LogRecord is null.
                 * <p>
                 */
                // @ts-ignore
                public isLoggable(record: java.util.logging.LogRecord): boolean;
                /**
                 * Flush any buffered messages.
                 */
                // @ts-ignore
                public flush(): void;
                /**
                 * Close the current output stream.
                 * <p>
                 * The <tt>Formatter</tt>'s "tail" string is written to the stream before it
                 * is closed.  In addition, if the <tt>Formatter</tt>'s "head" string has not
                 * yet been written to the stream, it will be written before the
                 * "tail" string.
                 */
                // @ts-ignore
                public close(): void;
            }
        }
    }
}
