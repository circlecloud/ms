// @ts-nocheck
declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
            interface Filter {
                /**
                 * Check if a given log record should be published.
                 */
                // @ts-ignore
                 isLoggable(record: java.util.logging.LogRecord): boolean;
            }
        }
    }
}
