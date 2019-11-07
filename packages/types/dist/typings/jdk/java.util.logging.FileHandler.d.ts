declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class FileHandler extends java.util.logging.StreamHandler {
                /**
                 * Construct a default <tt>FileHandler</tt>.  This will be configured
                 * entirely from <tt>LogManager</tt> properties (or their default values).
                 * <p>
                 */
                // @ts-ignore
                constructor()
                /**
                 * Initialize a <tt>FileHandler</tt> to write to the given filename.
                 * <p>
                 * The <tt>FileHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given pattern
                 * argument is used as the filename pattern, the file limit is
                 * set to no limit, and the file count is set to one.
                 * <p>
                 * There is no limit on the amount of data that may be written,
                 * so use this with care.
                 */
                // @ts-ignore
                constructor(pattern: string)
                /**
                 * Initialize a <tt>FileHandler</tt> to write to the given filename,
                 * with optional append.
                 * <p>
                 * The <tt>FileHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given pattern
                 * argument is used as the filename pattern, the file limit is
                 * set to no limit, the file count is set to one, and the append
                 * mode is set to the given <tt>append</tt> argument.
                 * <p>
                 * There is no limit on the amount of data that may be written,
                 * so use this with care.
                 */
                // @ts-ignore
                constructor(pattern: string, append: boolean)
                /**
                 * Initialize a <tt>FileHandler</tt> to write to a set of files.  When
                 * (approximately) the given limit has been written to one file,
                 * another file will be opened.  The output will cycle through a set
                 * of count files.
                 * <p>
                 * The <tt>FileHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given pattern
                 * argument is used as the filename pattern, the file limit is
                 * set to the limit argument, and the file count is set to the
                 * given count argument.
                 * <p>
                 * The count must be at least 1.
                 */
                // @ts-ignore
                constructor(pattern: string, limit: number, count: number)
                /**
                 * Initialize a <tt>FileHandler</tt> to write to a set of files
                 * with optional append.  When (approximately) the given limit has
                 * been written to one file, another file will be opened.  The
                 * output will cycle through a set of count files.
                 * <p>
                 * The <tt>FileHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given pattern
                 * argument is used as the filename pattern, the file limit is
                 * set to the limit argument, and the file count is set to the
                 * given count argument, and the append mode is set to the given
                 * <tt>append</tt> argument.
                 * <p>
                 * The count must be at least 1.
                 */
                // @ts-ignore
                constructor(pattern: string, limit: number, count: number, append: boolean)
                /**
                 * Format and publish a <tt>LogRecord</tt>.
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void;
                /**
                 * Close all the files.
                 */
                // @ts-ignore
                public close(): void;
            }
        }
    }
}
