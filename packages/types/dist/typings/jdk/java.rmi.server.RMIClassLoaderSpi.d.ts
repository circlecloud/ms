declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            abstract class RMIClassLoaderSpi extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Provides the implementation for
                 * {@link RMIClassLoader#loadClass(URL,String)},
                 * {@link RMIClassLoader#loadClass(String,String)}, and
                 * {@link RMIClassLoader#loadClass(String,String,ClassLoader)}.
                 * Loads a class from a codebase URL path, optionally using the
                 * supplied loader.
                 * Typically, a provider implementation will attempt to
                 * resolve the named class using the given <code>defaultLoader</code>,
                 * if specified, before attempting to resolve the class from the
                 * codebase URL path.
                 * <p>An implementation of this method must either return a class
                 * with the given name or throw an exception.
                 */
                // @ts-ignore
                public abstract loadClass(codebase: string, name: string, defaultLoader: java.lang.ClassLoader): java.lang.Class;
                /**
                 * Provides the implementation for
                 * {@link RMIClassLoader#loadProxyClass(String,String[],ClassLoader)}.
                 * Loads a dynamic proxy class (see {@link java.lang.reflect.Proxy}
                 * that implements a set of interfaces with the given names
                 * from a codebase URL path, optionally using the supplied loader.
                 * <p>An implementation of this method must either return a proxy
                 * class that implements the named interfaces or throw an exception.
                 */
                // @ts-ignore
                public abstract loadProxyClass(codebase: string, interfaces: string, defaultLoader: java.lang.ClassLoader): java.lang.Class;
                /**
                 * Provides the implementation for
                 * {@link RMIClassLoader#getClassLoader(String)}.
                 * Returns a class loader that loads classes from the given codebase
                 * URL path.
                 * <p>If there is a security manger, its <code>checkPermission</code>
                 * method will be invoked with a
                 * <code>RuntimePermission("getClassLoader")</code> permission;
                 * this could result in a <code>SecurityException</code>.
                 * The implementation of this method may also perform further security
                 * checks to verify that the calling context has permission to connect
                 * to all of the URLs in the codebase URL path.
                 */
                // @ts-ignore
                public abstract getClassLoader(codebase: string): java.lang.ClassLoader;
                /**
                 * Provides the implementation for
                 * {@link RMIClassLoader#getClassAnnotation(Class)}.
                 * Returns the annotation string (representing a location for
                 * the class definition) that RMI will use to annotate the class
                 * descriptor when marshalling objects of the given class.
                 */
                // @ts-ignore
                public abstract getClassAnnotation(cl: java.lang.Class): string;
            }
        }
    }
}
