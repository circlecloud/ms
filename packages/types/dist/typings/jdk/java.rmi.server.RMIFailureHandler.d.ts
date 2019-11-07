declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface RMIFailureHandler {
                /**
                 * The <code>failure</code> callback is invoked when the RMI
                 * runtime is unable to create a <code>ServerSocket</code> via the
                 * <code>RMISocketFactory</code>. An <code>RMIFailureHandler</code>
                 * is registered via a call to
                 * <code>RMISocketFacotry.setFailureHandler</code>.  If no failure
                 * handler is installed, the default behavior is to attempt to
                 * re-create the ServerSocket.
                 */
                // @ts-ignore
                 failure(ex: java.lang.Exception): boolean;
            }
        }
    }
}
