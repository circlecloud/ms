// @ts-nocheck
declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class MemoryHandler extends java.util.logging.Handler {
                /**
                 * Create a <tt>MemoryHandler</tt> and configure it based on
                 * <tt>LogManager</tt> configuration properties.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a <tt>MemoryHandler</tt>.
                 * <p>
                 * The <tt>MemoryHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given <tt>pushLevel</tt>
                 * argument and buffer size argument are used.
                 */
                // @ts-ignore
                constructor(target: java.util.logging.Handler, size: number, pushLevel: java.util.logging.Level)
                /**
                 * Store a <tt>LogRecord</tt> in an internal buffer.
                 * <p>
                 * If there is a <tt>Filter</tt>, its <tt>isLoggable</tt>
                 * method is called to check if the given log record is loggable.
                 * If not we return.  Otherwise the given record is copied into
                 * an internal circular buffer.  Then the record's level property is
                 * compared with the <tt>pushLevel</tt>. If the given level is
                 * greater than or equal to the <tt>pushLevel</tt> then <tt>push</tt>
                 * is called to write all buffered records to the target output
                 * <tt>Handler</tt>.
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void;
                /**
                 * Push any buffered output to the target <tt>Handler</tt>.
                 * <p>
                 * The buffer is then cleared.
                 */
                // @ts-ignore
                public push(): void;
                /**
                 * Causes a flush on the target <tt>Handler</tt>.
                 * <p>
                 * Note that the current contents of the <tt>MemoryHandler</tt>
                 * buffer are <b>not</b> written out.  That requires a "push".
                 */
                // @ts-ignore
                public flush(): void;
                /**
                 * Close the <tt>Handler</tt> and free all associated resources.
                 * This will also close the target <tt>Handler</tt>.
                 */
                // @ts-ignore
                public close(): void;
                /**
                 * Set the <tt>pushLevel</tt>.  After a <tt>LogRecord</tt> is copied
                 * into our internal buffer, if its level is greater than or equal to
                 * the <tt>pushLevel</tt>, then <tt>push</tt> will be called.
                 */
                // @ts-ignore
                public setPushLevel(newLevel: java.util.logging.Level): void;
                /**
                 * Get the <tt>pushLevel</tt>.
                 */
                // @ts-ignore
                public getPushLevel(): java.util.logging.Level;
                /**
                 * Check if this <tt>Handler</tt> would actually log a given
                 * <tt>LogRecord</tt> into its internal buffer.
                 * <p>
                 * This method checks if the <tt>LogRecord</tt> has an appropriate level and
                 * whether it satisfies any <tt>Filter</tt>.  However it does <b>not</b>
                 * check whether the <tt>LogRecord</tt> would result in a "push" of the
                 * buffer contents. It will return false if the <tt>LogRecord</tt> is null.
                 * <p>
                 */
                // @ts-ignore
                public isLoggable(record: java.util.logging.LogRecord): boolean;
            }
        }
    }
}
