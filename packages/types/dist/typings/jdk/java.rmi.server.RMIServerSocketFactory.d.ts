declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface RMIServerSocketFactory {
                /**
                 * Create a server socket on the specified port (port 0 indicates
                 * an anonymous port).
                 */
                // @ts-ignore
                 createServerSocket(port: number): java.net.ServerSocket;
            }
        }
    }
}
