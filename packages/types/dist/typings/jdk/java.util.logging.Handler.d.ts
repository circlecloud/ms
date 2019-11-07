declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
            abstract class Handler extends java.lang.Object {
                /**
                 * Default constructor.  The resulting <tt>Handler</tt> has a log
                 * level of <tt>Level.ALL</tt>, no <tt>Formatter</tt>, and no
                 * <tt>Filter</tt>.  A default <tt>ErrorManager</tt> instance is installed
                 * as the <tt>ErrorManager</tt>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Publish a <tt>LogRecord</tt>.
                 * <p>
                 * The logging request was made initially to a <tt>Logger</tt> object,
                 * which initialized the <tt>LogRecord</tt> and forwarded it here.
                 * <p>
                 * The <tt>Handler</tt>  is responsible for formatting the message, when and
                 * if necessary.  The formatting should include localization.
                 */
                // @ts-ignore
                public abstract publish(record: java.util.logging.LogRecord): void;
                /**
                 * Flush any buffered output.
                 */
                // @ts-ignore
                public abstract flush(): void;
                /**
                 * Close the <tt>Handler</tt> and free all associated resources.
                 * <p>
                 * The close method will perform a <tt>flush</tt> and then close the
                 * <tt>Handler</tt>.   After close has been called this <tt>Handler</tt>
                 * should no longer be used.  Method calls may either be silently
                 * ignored or may throw runtime exceptions.
                 */
                // @ts-ignore
                public abstract close(): void;
                /**
                 * Set a <tt>Formatter</tt>.  This <tt>Formatter</tt> will be used
                 * to format <tt>LogRecords</tt> for this <tt>Handler</tt>.
                 * <p>
                 * Some <tt>Handlers</tt> may not use <tt>Formatters</tt>, in
                 * which case the <tt>Formatter</tt> will be remembered, but not used.
                 * <p>
                 */
                // @ts-ignore
                public setFormatter(newFormatter: java.util.logging.Formatter): void;
                /**
                 * Return the <tt>Formatter</tt> for this <tt>Handler</tt>.
                 */
                // @ts-ignore
                public getFormatter(): java.util.logging.Formatter;
                /**
                 * Set the character encoding used by this <tt>Handler</tt>.
                 * <p>
                 * The encoding should be set before any <tt>LogRecords</tt> are written
                 * to the <tt>Handler</tt>.
                 */
                // @ts-ignore
                public setEncoding(encoding: string): void;
                /**
                 * Return the character encoding for this <tt>Handler</tt>.
                 */
                // @ts-ignore
                public getEncoding(): string;
                /**
                 * Set a <tt>Filter</tt> to control output on this <tt>Handler</tt>.
                 * <P>
                 * For each call of <tt>publish</tt> the <tt>Handler</tt> will call
                 * this <tt>Filter</tt> (if it is non-null) to check if the
                 * <tt>LogRecord</tt> should be published or discarded.
                 */
                // @ts-ignore
                public setFilter(newFilter: java.util.logging.Filter): void;
                /**
                 * Get the current <tt>Filter</tt> for this <tt>Handler</tt>.
                 */
                // @ts-ignore
                public getFilter(): java.util.logging.Filter;
                /**
                 * Define an ErrorManager for this Handler.
                 * <p>
                 * The ErrorManager's "error" method will be invoked if any
                 * errors occur while using this Handler.
                 */
                // @ts-ignore
                public setErrorManager(em: java.util.logging.ErrorManager): void;
                /**
                 * Retrieves the ErrorManager for this Handler.
                 */
                // @ts-ignore
                public getErrorManager(): java.util.logging.ErrorManager;
                /**
                 * Protected convenience method to report an error to this Handler's
                 * ErrorManager.  Note that this method retrieves and uses the ErrorManager
                 * without doing a security check.  It can therefore be used in
                 * environments where the caller may be non-privileged.
                 */
                // @ts-ignore
                protected reportError(msg: string, ex: java.lang.Exception, code: number): void;
                /**
                 * Set the log level specifying which message levels will be
                 * logged by this <tt>Handler</tt>.  Message levels lower than this
                 * value will be discarded.
                 * <p>
                 * The intention is to allow developers to turn on voluminous
                 * logging, but to limit the messages that are sent to certain
                 * <tt>Handlers</tt>.
                 */
                // @ts-ignore
                public setLevel(newLevel: java.util.logging.Level): void;
                /**
                 * Get the log level specifying which messages will be
                 * logged by this <tt>Handler</tt>.  Message levels lower
                 * than this level will be discarded.
                 */
                // @ts-ignore
                public getLevel(): java.util.logging.Level;
                /**
                 * Check if this <tt>Handler</tt> would actually log a given <tt>LogRecord</tt>.
                 * <p>
                 * This method checks if the <tt>LogRecord</tt> has an appropriate
                 * <tt>Level</tt> and  whether it satisfies any <tt>Filter</tt>.  It also
                 * may make other <tt>Handler</tt> specific checks that might prevent a
                 * handler from logging the <tt>LogRecord</tt>. It will return false if
                 * the <tt>LogRecord</tt> is null.
                 * <p>
                 */
                // @ts-ignore
                public isLoggable(record: java.util.logging.LogRecord): boolean;
            }
        }
    }
}
