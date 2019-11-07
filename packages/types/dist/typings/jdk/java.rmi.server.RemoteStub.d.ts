// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            abstract class RemoteStub extends java.rmi.server.RemoteObject {
                /**
                 * Constructs a {@code RemoteStub}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a {@code RemoteStub} with the specified remote
                 * reference.
                 */
                // @ts-ignore
                constructor(ref: java.rmi.server.RemoteRef)
                /**
                 * Throws {@link UnsupportedOperationException}.
                 */
                // @ts-ignore
                protected static setRef(stub: java.rmi.server.RemoteStub, ref: java.rmi.server.RemoteRef): void;
            }
        }
    }
}
