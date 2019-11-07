declare namespace java {
    namespace rmi {
        namespace registry {
            // @ts-ignore
             class LocateRegistry extends java.lang.Object {
                /**
                 * Returns a reference to the the remote object <code>Registry</code> for
                 * the local host on the default registry port of 1099.
                 */
                // @ts-ignore
                public static getRegistry(): java.rmi.registry.Registry;
                /**
                 * Returns a reference to the the remote object <code>Registry</code> for
                 * the local host on the specified <code>port</code>.
                 */
                // @ts-ignore
                public static getRegistry(port: number): java.rmi.registry.Registry;
                /**
                 * Returns a reference to the remote object <code>Registry</code> on the
                 * specified <code>host</code> on the default registry port of 1099.  If
                 * <code>host</code> is <code>null</code>, the local host is used.
                 */
                // @ts-ignore
                public static getRegistry(host: string): java.rmi.registry.Registry;
                /**
                 * Returns a reference to the remote object <code>Registry</code> on the
                 * specified <code>host</code> and <code>port</code>. If <code>host</code>
                 * is <code>null</code>, the local host is used.
                 */
                // @ts-ignore
                public static getRegistry(host: string, port: number): java.rmi.registry.Registry;
                /**
                 * Returns a locally created remote reference to the remote object
                 * <code>Registry</code> on the specified <code>host</code> and
                 * <code>port</code>.  Communication with this remote registry will
                 * use the supplied <code>RMIClientSocketFactory</code> <code>csf</code>
                 * to create <code>Socket</code> connections to the registry on the
                 * remote <code>host</code> and <code>port</code>.
                 */
                // @ts-ignore
                public static getRegistry(host: string, port: number, csf: java.rmi.server.RMIClientSocketFactory): java.rmi.registry.Registry;
                /**
                 * Creates and exports a <code>Registry</code> instance on the local
                 * host that accepts requests on the specified <code>port</code>.
                 * <p>The <code>Registry</code> instance is exported as if the static
                 * {@link UnicastRemoteObject#exportObject(Remote,int)
                 * UnicastRemoteObject.exportObject} method is invoked, passing the
                 * <code>Registry</code> instance and the specified <code>port</code> as
                 * arguments, except that the <code>Registry</code> instance is
                 * exported with a well-known object identifier, an {@link ObjID}
                 * instance constructed with the value {@link ObjID#REGISTRY_ID}.
                 */
                // @ts-ignore
                public static createRegistry(port: number): java.rmi.registry.Registry;
                /**
                 * Creates and exports a <code>Registry</code> instance on the local
                 * host that uses custom socket factories for communication with that
                 * instance.  The registry that is created listens for incoming
                 * requests on the given <code>port</code> using a
                 * <code>ServerSocket</code> created from the supplied
                 * <code>RMIServerSocketFactory</code>.
                 * <p>The <code>Registry</code> instance is exported as if
                 * the static {@link
                 * UnicastRemoteObject#exportObject(Remote,int,RMIClientSocketFactory,RMIServerSocketFactory)
                 * UnicastRemoteObject.exportObject} method is invoked, passing the
                 * <code>Registry</code> instance, the specified <code>port</code>, the
                 * specified <code>RMIClientSocketFactory</code>, and the specified
                 * <code>RMIServerSocketFactory</code> as arguments, except that the
                 * <code>Registry</code> instance is exported with a well-known object
                 * identifier, an {@link ObjID} instance constructed with the value
                 * {@link ObjID#REGISTRY_ID}.
                 */
                // @ts-ignore
                public static createRegistry(port: number, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): java.rmi.registry.Registry;
            }
        }
    }
}
