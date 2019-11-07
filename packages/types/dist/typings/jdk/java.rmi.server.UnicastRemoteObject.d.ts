declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
             class UnicastRemoteObject extends java.rmi.server.RemoteServer {
                /**
                 * Creates and exports a new UnicastRemoteObject object using an
                 * anonymous port.
                 * <p>The object is exported with a server socket
                 * created using the {@link RMISocketFactory} class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates and exports a new UnicastRemoteObject object using the
                 * particular supplied port.
                 * <p>The object is exported with a server socket
                 * created using the {@link RMISocketFactory} class.
                 */
                // @ts-ignore
                constructor(port: number)
                /**
                 * Creates and exports a new UnicastRemoteObject object using the
                 * particular supplied port and socket factories.
                 * <p>Either socket factory may be {@code null}, in which case
                 * the corresponding client or server socket creation method of
                 * {@link RMISocketFactory} is used instead.
                 */
                // @ts-ignore
                constructor(port: number, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory)
                /**
                 * Returns a clone of the remote object that is distinct from
                 * the original.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Exports the remote object to make it available to receive incoming
                 * calls using an anonymous port. This method will always return a
                 * statically generated stub.
                 * <p>The object is exported with a server socket
                 * created using the {@link RMISocketFactory} class.
                 */
                // @ts-ignore
                public static exportObject(obj: java.rmi.Remote): java.rmi.server.RemoteStub;
                /**
                 * Exports the remote object to make it available to receive incoming
                 * calls, using the particular supplied port.
                 * <p>The object is exported with a server socket
                 * created using the {@link RMISocketFactory} class.
                 */
                // @ts-ignore
                public static exportObject(obj: java.rmi.Remote, port: number): java.rmi.Remote;
                /**
                 * Exports the remote object to make it available to receive incoming
                 * calls, using a transport specified by the given socket factory.
                 * <p>Either socket factory may be {@code null}, in which case
                 * the corresponding client or server socket creation method of
                 * {@link RMISocketFactory} is used instead.
                 */
                // @ts-ignore
                public static exportObject(obj: java.rmi.Remote, port: number, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): java.rmi.Remote;
                /**
                 * Removes the remote object, obj, from the RMI runtime. If
                 * successful, the object can no longer accept incoming RMI calls.
                 * If the force parameter is true, the object is forcibly unexported
                 * even if there are pending calls to the remote object or the
                 * remote object still has calls in progress.  If the force
                 * parameter is false, the object is only unexported if there are
                 * no pending or in progress calls to the object.
                 */
                // @ts-ignore
                public static unexportObject(obj: java.rmi.Remote, force: boolean): boolean;
            }
        }
    }
}
