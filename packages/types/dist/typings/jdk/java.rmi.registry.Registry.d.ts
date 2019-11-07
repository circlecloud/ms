declare namespace java {
    namespace rmi {
        namespace registry {
            // @ts-ignore
            interface Registry {
                // @ts-ignore
                 REGISTRY_PORT: number;
                /**
                 * Returns the remote reference bound to the specified
                 * <code>name</code> in this registry.
                 */
                // @ts-ignore
                 lookup(name: string): java.rmi.Remote;
                /**
                 * Binds a remote reference to the specified <code>name</code> in
                 * this registry.
                 */
                // @ts-ignore
                 bind(name: string, obj: java.rmi.Remote): void;
                /**
                 * Removes the binding for the specified <code>name</code> in
                 * this registry.
                 */
                // @ts-ignore
                 unbind(name: string): void;
                /**
                 * Replaces the binding for the specified <code>name</code> in
                 * this registry with the supplied remote reference.  If there is
                 * an existing binding for the specified <code>name</code>, it is
                 * discarded.
                 */
                // @ts-ignore
                 rebind(name: string, obj: java.rmi.Remote): void;
                /**
                 * Returns an array of the names bound in this registry.  The
                 * array will contain a snapshot of the names bound in this
                 * registry at the time of the given invocation of this method.
                 */
                // @ts-ignore
                 list(): java.lang.String[];
            }
        }
    }
}
