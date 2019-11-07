declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface ServerRef {
                // @ts-ignore
                 serialVersionUID: number;
                /**
                 * Creates a client stub object for the supplied Remote object.
                 * If the call completes successfully, the remote object should
                 * be able to accept incoming calls from clients.
                 */
                // @ts-ignore
                 exportObject(obj: java.rmi.Remote, data: java.lang.Object): java.rmi.server.RemoteStub;
                /**
                 * Returns the hostname of the current client.  When called from a
                 * thread actively handling a remote method invocation the
                 * hostname of the client is returned.
                 */
                // @ts-ignore
                 getClientHost(): string;
            }
        }
    }
}
