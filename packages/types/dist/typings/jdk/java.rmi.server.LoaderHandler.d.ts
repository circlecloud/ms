declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface LoaderHandler {
                // @ts-ignore
                 packagePrefix: string;
                /**
                 * Loads a class from the location specified by the
                 * <code>java.rmi.server.codebase</code> property.
                 */
                // @ts-ignore
                 loadClass(name: string): java.lang.Class;
                /**
                 * Loads a class from a URL.
                 */
                // @ts-ignore
                 loadClass(codebase: java.net.URL, name: string): java.lang.Class;
                /**
                 * Returns the security context of the given class loader.
                 */
                // @ts-ignore
                 getSecurityContext(loader: java.lang.ClassLoader): java.lang.Object;
            }
        }
    }
}
