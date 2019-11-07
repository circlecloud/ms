declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
             class RMIClassLoader extends java.lang.Object {
                /**
                 * Loads the class with the specified <code>name</code>.
                 * <p>This method delegates to {@link #loadClass(String,String)},
                 * passing <code>null</code> as the first argument and
                 * <code>name</code> as the second argument.
                 */
                // @ts-ignore
                public static loadClass(name: string): java.lang.Class;
                /**
                 * Loads a class from a codebase URL.
                 * If <code>codebase</code> is <code>null</code>, then this method
                 * will behave the same as {@link #loadClass(String,String)} with a
                 * <code>null</code> <code>codebase</code> and the given class name.
                 * <p>This method delegates to the
                 * {@link RMIClassLoaderSpi#loadClass(String,String,ClassLoader)}
                 * method of the provider instance, passing the result of invoking
                 * {@link URL#toString} on the given URL (or <code>null</code> if
                 * <code>codebase</code> is null) as the first argument,
                 * <code>name</code> as the second argument,
                 * and <code>null</code> as the third argument.
                 */
                // @ts-ignore
                public static loadClass(codebase: java.net.URL, name: string): java.lang.Class;
                /**
                 * Loads a class from a codebase URL path.
                 * <p>This method delegates to the
                 * {@link RMIClassLoaderSpi#loadClass(String,String,ClassLoader)}
                 * method of the provider instance, passing <code>codebase</code>
                 * as the first argument, <code>name</code> as the second argument,
                 * and <code>null</code> as the third argument.
                 */
                // @ts-ignore
                public static loadClass(codebase: string, name: string): java.lang.Class;
                /**
                 * Loads a class from a codebase URL path, optionally using the
                 * supplied loader.
                 * This method should be used when the caller would like to make
                 * available to the provider implementation an additional contextual
                 * class loader to consider, such as the loader of a caller on the
                 * stack.  Typically, a provider implementation will attempt to
                 * resolve the named class using the given <code>defaultLoader</code>,
                 * if specified, before attempting to resolve the class from the
                 * codebase URL path.
                 * <p>This method delegates to the
                 * {@link RMIClassLoaderSpi#loadClass(String,String,ClassLoader)}
                 * method of the provider instance, passing <code>codebase</code>
                 * as the first argument, <code>name</code> as the second argument,
                 * and <code>defaultLoader</code> as the third argument.
                 */
                // @ts-ignore
                public static loadClass(codebase: string, name: string, defaultLoader: java.lang.ClassLoader): java.lang.Class;
                /**
                 * Loads a dynamic proxy class (see {@link java.lang.reflect.Proxy})
                 * that implements a set of interfaces with the given names
                 * from a codebase URL path.
                 * <p>The interfaces will be resolved similar to classes loaded via
                 * the {@link #loadClass(String,String)} method using the given
                 * <code>codebase</code>.
                 * <p>This method delegates to the
                 * {@link RMIClassLoaderSpi#loadProxyClass(String,String[],ClassLoader)}
                 * method of the provider instance, passing <code>codebase</code>
                 * as the first argument, <code>interfaces</code> as the second argument,
                 * and <code>defaultLoader</code> as the third argument.
                 */
                // @ts-ignore
                public static loadProxyClass(codebase: string, interfaces: string, defaultLoader: java.lang.ClassLoader): java.lang.Class;
                /**
                 * Returns a class loader that loads classes from the given codebase
                 * URL path.
                 * <p>The class loader returned is the class loader that the
                 * {@link #loadClass(String,String)} method would use to load classes
                 * for the same <code>codebase</code> argument.
                 * <p>This method delegates to the
                 * {@link RMIClassLoaderSpi#getClassLoader(String)} method
                 * of the provider instance, passing <code>codebase</code> as the argument.
                 * <p>If there is a security manger, its <code>checkPermission</code>
                 * method will be invoked with a
                 * <code>RuntimePermission("getClassLoader")</code> permission;
                 * this could result in a <code>SecurityException</code>.
                 * The provider implementation of this method may also perform further
                 * security checks to verify that the calling context has permission to
                 * connect to all of the URLs in the codebase URL path.
                 */
                // @ts-ignore
                public static getClassLoader(codebase: string): java.lang.ClassLoader;
                /**
                 * Returns the annotation string (representing a location for
                 * the class definition) that RMI will use to annotate the class
                 * descriptor when marshalling objects of the given class.
                 * <p>This method delegates to the
                 * {@link RMIClassLoaderSpi#getClassAnnotation(Class)} method
                 * of the provider instance, passing <code>cl</code> as the argument.
                 */
                // @ts-ignore
                public static getClassAnnotation(cl: java.lang.Class): string;
                /**
                 * Returns the canonical instance of the default provider
                 * for the service provider interface {@link RMIClassLoaderSpi}.
                 * If the system property <code>java.rmi.server.RMIClassLoaderSpi</code>
                 * is not defined, then the <code>RMIClassLoader</code> static
                 * methods
                 * <ul>
                 * <li>{@link #loadClass(URL,String)}
                 * <li>{@link #loadClass(String,String)}
                 * <li>{@link #loadClass(String,String,ClassLoader)}
                 * <li>{@link #loadProxyClass(String,String[],ClassLoader)}
                 * <li>{@link #getClassLoader(String)}
                 * <li>{@link #getClassAnnotation(Class)}
                 * </ul>
                 * will use the canonical instance of the default provider
                 * as the service provider instance.
                 * <p>If there is a security manager, its
                 * <code>checkPermission</code> method will be invoked with a
                 * <code>RuntimePermission("setFactory")</code> permission; this
                 * could result in a <code>SecurityException</code>.
                 * <p>The default service provider instance implements
                 * {@link RMIClassLoaderSpi} as follows:
                 * <blockquote>
                 * <p>The <b>{@link RMIClassLoaderSpi#getClassAnnotation(Class)
                 * getClassAnnotation}</b> method returns a <code>String</code>
                 * representing the codebase URL path that a remote party should
                 * use to download the definition for the specified class.  The
                 * format of the returned string is a path of URLs separated by
                 * spaces.
                 * The codebase string returned depends on the defining class
                 * loader of the specified class:
                 * <ul>
                 * <li><p>If the class loader is the system class loader (see
                 * {@link ClassLoader#getSystemClassLoader}), a parent of the
                 * system class loader such as the loader used for installed
                 * extensions, or the bootstrap class loader (which may be
                 * represented by <code>null</code>), then the value of the
                 * <code>java.rmi.server.codebase</code> property (or possibly an
                 * earlier cached value) is returned, or
                 * <code>null</code> is returned if that property is not set.
                 * <li><p>Otherwise, if the class loader is an instance of
                 * <code>URLClassLoader</code>, then the returned string is a
                 * space-separated list of the external forms of the URLs returned
                 * by invoking the <code>getURLs</code> methods of the loader.  If
                 * the <code>URLClassLoader</code> was created by this provider to
                 * service an invocation of its <code>loadClass</code> or
                 * <code>loadProxyClass</code> methods, then no permissions are
                 * required to get the associated codebase string.  If it is an
                 * arbitrary other <code>URLClassLoader</code> instance, then if
                 * there is a security manager, its <code>checkPermission</code>
                 * method will be invoked once for each URL returned by the
                 * <code>getURLs</code> method, with the permission returned by
                 * invoking <code>openConnection().getPermission()</code> on each
                 * URL; if any of those invocations throws a
                 * <code>SecurityException</code> or an <code>IOException</code>,
                 * then the value of the <code>java.rmi.server.codebase</code>
                 * property (or possibly an earlier cached value) is returned, or
                 * <code>null</code> is returned if that property is not set.
                 * <li><p>Finally, if the class loader is not an instance of
                 * <code>URLClassLoader</code>, then the value of the
                 * <code>java.rmi.server.codebase</code> property (or possibly an
                 * earlier cached value) is returned, or
                 * <code>null</code> is returned if that property is not set.
                 * </ul>
                 * <p>For the implementations of the methods described below,
                 * which all take a <code>String</code> parameter named
                 * <code>codebase</code> that is a space-separated list of URLs,
                 * each invocation has an associated <i>codebase loader</i> that
                 * is identified using the <code>codebase</code> argument in
                 * conjunction with the current thread's context class loader (see
                 * {@link Thread#getContextClassLoader()}).  When there is a
                 * security manager, this provider maintains an internal table of
                 * class loader instances (which are at least instances of {@link
                 * java.net.URLClassLoader}) keyed by the pair of their parent
                 * class loader and their codebase URL path (an ordered list of
                 * URLs).  If the <code>codebase</code> argument is <code>null</code>,
                 * the codebase URL path is the value of the system property
                 * <code>java.rmi.server.codebase</code> or possibly an
                 * earlier cached value.  For a given codebase URL path passed as the
                 * <code>codebase</code> argument to an invocation of one of the
                 * below methods in a given context, the codebase loader is the
                 * loader in the table with the specified codebase URL path and
                 * the current thread's context class loader as its parent.  If no
                 * such loader exists, then one is created and added to the table.
                 * The table does not maintain strong references to its contained
                 * loaders, in order to allow them and their defined classes to be
                 * garbage collected when not otherwise reachable.  In order to
                 * prevent arbitrary untrusted code from being implicitly loaded
                 * into a virtual machine with no security manager, if there is no
                 * security manager set, the codebase loader is just the current
                 * thread's context class loader (the supplied codebase URL path
                 * is ignored, so remote class loading is disabled).
                 * <p>The <b>{@link RMIClassLoaderSpi#getClassLoader(String)
                 * getClassLoader}</b> method returns the codebase loader for the
                 * specified codebase URL path.  If there is a security manager,
                 * then if the calling context does not have permission to connect
                 * to all of the URLs in the codebase URL path, a
                 * <code>SecurityException</code> will be thrown.
                 * <p>The <b>{@link
                 * RMIClassLoaderSpi#loadClass(String,String,ClassLoader)
                 * loadClass}</b> method attempts to load the class with the
                 * specified name as follows:
                 * <blockquote>
                 * If the <code>defaultLoader</code> argument is
                 * non-<code>null</code>, it first attempts to load the class with the
                 * specified <code>name</code> using the
                 * <code>defaultLoader</code>, such as by evaluating
                 * <pre>
                 * Class.forName(name, false, defaultLoader)
                 * </pre>
                 * If the class is successfully loaded from the
                 * <code>defaultLoader</code>, that class is returned.  If an
                 * exception other than <code>ClassNotFoundException</code> is
                 * thrown, that exception is thrown to the caller.
                 * <p>Next, the <code>loadClass</code> method attempts to load the
                 * class with the specified <code>name</code> using the codebase
                 * loader for the specified codebase URL path.
                 * If there is a security manager, then the calling context
                 * must have permission to connect to all of the URLs in the
                 * codebase URL path; otherwise, the current thread's context
                 * class loader will be used instead of the codebase loader.
                 * </blockquote>
                 * <p>The <b>{@link
                 * RMIClassLoaderSpi#loadProxyClass(String,String[],ClassLoader)
                 * loadProxyClass}</b> method attempts to return a dynamic proxy
                 * class with the named interface as follows:
                 * <blockquote>
                 * <p>If the <code>defaultLoader</code> argument is
                 * non-<code>null</code> and all of the named interfaces can be
                 * resolved through that loader, then,
                 * <ul>
                 * <li>if all of the resolved interfaces are <code>public</code>,
                 * then it first attempts to obtain a dynamic proxy class (using
                 * {@link
                 * java.lang.reflect.Proxy#getProxyClass(ClassLoader,Class[])
                 * Proxy.getProxyClass}) for the resolved interfaces defined in
                 * the codebase loader; if that attempt throws an
                 * <code>IllegalArgumentException</code>, it then attempts to
                 * obtain a dynamic proxy class for the resolved interfaces
                 * defined in the <code>defaultLoader</code>.  If both attempts
                 * throw <code>IllegalArgumentException</code>, then this method
                 * throws a <code>ClassNotFoundException</code>.  If any other
                 * exception is thrown, that exception is thrown to the caller.
                 * <li>if all of the non-<code>public</code> resolved interfaces
                 * are defined in the same class loader, then it attempts to
                 * obtain a dynamic proxy class for the resolved interfaces
                 * defined in that loader.
                 * <li>otherwise, a <code>LinkageError</code> is thrown (because a
                 * class that implements all of the specified interfaces cannot be
                 * defined in any loader).
                 * </ul>
                 * <p>Otherwise, if all of the named interfaces can be resolved
                 * through the codebase loader, then,
                 * <ul>
                 * <li>if all of the resolved interfaces are <code>public</code>,
                 * then it attempts to obtain a dynamic proxy class for the
                 * resolved interfaces in the codebase loader.  If the attempt
                 * throws an <code>IllegalArgumentException</code>, then this
                 * method throws a <code>ClassNotFoundException</code>.
                 * <li>if all of the non-<code>public</code> resolved interfaces
                 * are defined in the same class loader, then it attempts to
                 * obtain a dynamic proxy class for the resolved interfaces
                 * defined in that loader.
                 * <li>otherwise, a <code>LinkageError</code> is thrown (because a
                 * class that implements all of the specified interfaces cannot be
                 * defined in any loader).
                 * </ul>
                 * <p>Otherwise, a <code>ClassNotFoundException</code> is thrown
                 * for one of the named interfaces that could not be resolved.
                 * </blockquote>
                 * </blockquote>
                 */
                // @ts-ignore
                public static getDefaultProviderInstance(): java.rmi.server.RMIClassLoaderSpi;
                /**
                 * Returns the security context of the given class loader.
                 */
                // @ts-ignore
                public static getSecurityContext(loader: java.lang.ClassLoader): java.lang.Object;
            }
        }
    }
}
