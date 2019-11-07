declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            abstract class RemoteServer extends java.rmi.server.RemoteObject {
                /**
                 * Constructs a <code>RemoteServer</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>RemoteServer</code> with the given reference type.
                 */
                // @ts-ignore
                constructor(ref: java.rmi.server.RemoteRef)
                /**
                 * Returns a string representation of the client host for the
                 * remote method invocation being processed in the current thread.
                 */
                // @ts-ignore
                public static getClientHost(): string;
                /**
                 * Log RMI calls to the output stream <code>out</code>. If
                 * <code>out</code> is <code>null</code>, call logging is turned off.
                 * <p>If there is a security manager, its
                 * <code>checkPermission</code> method will be invoked with a
                 * <code>java.util.logging.LoggingPermission("control")</code>
                 * permission; this could result in a <code>SecurityException</code>.
                 */
                // @ts-ignore
                public static setLog(out: java.io.OutputStream): void;
                /**
                 * Returns stream for the RMI call log.
                 */
                // @ts-ignore
                public static getLog(): java.io.PrintStream;
            }
        }
    }
}
