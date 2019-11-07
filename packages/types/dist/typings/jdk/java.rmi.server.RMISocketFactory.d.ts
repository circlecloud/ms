// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            abstract class RMISocketFactory extends java.lang.Object {
                /**
                 * Constructs an <code>RMISocketFactory</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a client socket connected to the specified host and port.
                 */
                // @ts-ignore
                public abstract createSocket(host: string, port: number): java.net.Socket;
                /**
                 * Create a server socket on the specified port (port 0 indicates
                 * an anonymous port).
                 */
                // @ts-ignore
                public abstract createServerSocket(port: number): java.net.ServerSocket;
                /**
                 * Set the global socket factory from which RMI gets sockets (if the
                 * remote object is not associated with a specific client and/or server
                 * socket factory). The RMI socket factory can only be set once. Note: The
                 * RMISocketFactory may only be set if the current security manager allows
                 * setting a socket factory; if disallowed, a SecurityException will be
                 * thrown.
                 */
                // @ts-ignore
                public static setSocketFactory(fac: java.rmi.server.RMISocketFactory): void;
                /**
                 * Returns the socket factory set by the <code>setSocketFactory</code>
                 * method. Returns <code>null</code> if no socket factory has been
                 * set.
                 */
                // @ts-ignore
                public static getSocketFactory(): java.rmi.server.RMISocketFactory;
                /**
                 * Returns a reference to the default socket factory used
                 * by this RMI implementation.  This will be the factory used
                 * by the RMI runtime when <code>getSocketFactory</code>
                 * returns <code>null</code>.
                 */
                // @ts-ignore
                public static getDefaultSocketFactory(): java.rmi.server.RMISocketFactory;
                /**
                 * Sets the failure handler to be called by the RMI runtime if server
                 * socket creation fails.  By default, if no failure handler is installed
                 * and server socket creation fails, the RMI runtime does attempt to
                 * recreate the server socket.
                 * <p>If there is a security manager, this method first calls
                 * the security manager's <code>checkSetFactory</code> method
                 * to ensure the operation is allowed.
                 * This could result in a <code>SecurityException</code>.
                 */
                // @ts-ignore
                public static setFailureHandler(fh: java.rmi.server.RMIFailureHandler): void;
                /**
                 * Returns the handler for socket creation failure set by the
                 * <code>setFailureHandler</code> method.
                 */
                // @ts-ignore
                public static getFailureHandler(): java.rmi.server.RMIFailureHandler;
            }
        }
    }
}
