declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface RMIClientSocketFactory {
                /**
                 * Create a client socket connected to the specified host and port.
                 */
                // @ts-ignore
                 createSocket(host: string, port: number): java.net.Socket;
            }
        }
    }
}
