// @ts-nocheck
declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
            interface LoggingMXBean {
                /**
                 * Returns the string name of the specified {@link Logger}instance's
                 * current log level.
                 */
                // @ts-ignore
                 getLoggerLevel(loggerName: string): string;
                /**
                 * Returns a list of the names of all of the currently registered
                 * <code>Logger</code> instances.
                 */
                // @ts-ignore
                 getLoggerNames(): java.util.List;
                /**
                 * Returns the name of the parent {@link Logger}of the specified registered
                 * <code>Logger</code>,<code>loggerName</code>.
                 */
                // @ts-ignore
                 getParentLoggerName(loggerName: string): string;
                /**
                 * Attempts to update the log level of the {@link Logger} with name
                 * <code>loggerName</code> to <code>levelName</code>.
                 * <p>
                 * If <code>levelName</code> is <code>null</code> then the <code>Logger</code>
                 * instance's log level is set to be <code>null</code> with the result that
                 * it will inherit its log level from its nearest parent which does not have
                 * a <code>null</code> log level value.
                 * </p>
                 */
                // @ts-ignore
                 setLoggerLevel(loggerName: string, levelName: string): void;
            }
        }
    }
}
