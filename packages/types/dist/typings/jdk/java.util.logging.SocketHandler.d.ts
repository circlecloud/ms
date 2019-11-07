// @ts-nocheck
declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class SocketHandler extends java.util.logging.StreamHandler {
                /**
                 * Create a <tt>SocketHandler</tt>, using only <tt>LogManager</tt> properties
                 * (or their defaults).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a <tt>SocketHandler</tt> using a specified host and port.
                 * The <tt>SocketHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given target host
                 * and port arguments are used. If the host argument is empty, but not
                 * null String then the localhost is used.
                 */
                // @ts-ignore
                constructor(host: string, port: number)
                /**
                 * Close this output stream.
                 */
                // @ts-ignore
                public close(): void;
                /**
                 * Format and publish a <tt>LogRecord</tt>.
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void;
            }
        }
    }
}
