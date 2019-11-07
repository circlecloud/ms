declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
             class FileSystems extends java.lang.Object {
                /**
                 * Returns the default {@code FileSystem}. The default file system creates
                 * objects that provide access to the file systems accessible to the Java
                 * virtual machine. The <em>working directory</em> of the file system is
                 * the current user directory, named by the system property {@code user.dir}.
                 * This allows for interoperability with the {@link java.io.File java.io.File}
                 * class.
                 * <p> The first invocation of any of the methods defined by this class
                 * locates the default {@link FileSystemProvider provider} object. Where the
                 * system property {@code java.nio.file.spi.DefaultFileSystemProvider} is
                 * not defined then the default provider is a system-default provider that
                 * is invoked to create the default file system.
                 * <p> If the system property {@code java.nio.file.spi.DefaultFileSystemProvider}
                 * is defined then it is taken to be a list of one or more fully-qualified
                 * names of concrete provider classes identified by the URI scheme
                 * {@code "file"}. Where the property is a list of more than one name then
                 * the names are separated by a comma. Each class is loaded, using the system
                 * class loader, and instantiated by invoking a one argument constructor
                 * whose formal parameter type is {@code FileSystemProvider}. The providers
                 * are loaded and instantiated in the order they are listed in the property.
                 * If this process fails or a provider's scheme is not equal to {@code "file"}
                 * then an unspecified error is thrown. URI schemes are normally compared
                 * without regard to case but for the default provider, the scheme is
                 * required to be {@code "file"}. The first provider class is instantiated
                 * by invoking it with a reference to the system-default provider.
                 * The second provider class is instantiated by invoking it with a reference
                 * to the first provider instance. The third provider class is instantiated
                 * by invoking it with a reference to the second instance, and so on. The
                 * last provider to be instantiated becomes the default provider; its {@code
                 * getFileSystem} method is invoked with the URI {@code "file:///"} to
                 * get a reference to the default file system.
                 * <p> Subsequent invocations of this method return the file system that was
                 * returned by the first invocation.
                 */
                // @ts-ignore
                public static getDefault(): java.nio.file.FileSystem;
                /**
                 * Returns a reference to an existing {@code FileSystem}.
                 * <p> This method iterates over the {@link FileSystemProvider#installedProviders()
                 * installed} providers to locate the provider that is identified by the URI
                 * {@link URI#getScheme scheme} of the given URI. URI schemes are compared
                 * without regard to case. The exact form of the URI is highly provider
                 * dependent. If found, the provider's {@link FileSystemProvider#getFileSystem
                 * getFileSystem} method is invoked to obtain a reference to the {@code
                 * FileSystem}.
                 * <p> Once a file system created by this provider is {@link FileSystem#close
                 * closed} it is provider-dependent if this method returns a reference to
                 * the closed file system or throws {@link FileSystemNotFoundException}.
                 * If the provider allows a new file system to be created with the same URI
                 * as a file system it previously created then this method throws the
                 * exception if invoked after the file system is closed (and before a new
                 * instance is created by the {@link #newFileSystem newFileSystem} method).
                 * <p> If a security manager is installed then a provider implementation
                 * may require to check a permission before returning a reference to an
                 * existing file system. In the case of the {@link FileSystems#getDefault
                 * default} file system, no permission check is required.
                 */
                // @ts-ignore
                public static getFileSystem(uri: java.net.URI): java.nio.file.FileSystem;
                /**
                 * Constructs a new file system that is identified by a {@link URI}
                 * <p> This method iterates over the {@link FileSystemProvider#installedProviders()
                 * installed} providers to locate the provider that is identified by the URI
                 * {@link URI#getScheme scheme} of the given URI. URI schemes are compared
                 * without regard to case. The exact form of the URI is highly provider
                 * dependent. If found, the provider's {@link FileSystemProvider#newFileSystem(URI,Map)
                 * newFileSystem(URI,Map)} method is invoked to construct the new file system.
                 * <p> Once a file system is {@link FileSystem#close closed} it is
                 * provider-dependent if the provider allows a new file system to be created
                 * with the same URI as a file system it previously created.
                 * <p> <b>Usage Example:</b>
                 * Suppose there is a provider identified by the scheme {@code "memory"}
                 * installed:
                 * <pre>
                 * Map&lt;String,String&gt; env = new HashMap&lt;&gt;();
                 * env.put("capacity", "16G");
                 * env.put("blockSize", "4k");
                 * FileSystem fs = FileSystems.newFileSystem(URI.create("memory:///?name=logfs"), env);
                 * </pre>
                 */
                // @ts-ignore
                public static newFileSystem(uri: java.net.URI, env: java.util.Map): java.nio.file.FileSystem;
                /**
                 * Constructs a new file system that is identified by a {@link URI}
                 * <p> This method first attempts to locate an installed provider in exactly
                 * the same manner as the {@link #newFileSystem(URI,Map) newFileSystem(URI,Map)}
                 * method. If none of the installed providers support the URI scheme then an
                 * attempt is made to locate the provider using the given class loader. If a
                 * provider supporting the URI scheme is located then its {@link
                 * FileSystemProvider#newFileSystem(URI,Map) newFileSystem(URI,Map)} is
                 * invoked to construct the new file system.
                 */
                // @ts-ignore
                public static newFileSystem(uri: java.net.URI, env: java.util.Map, loader: java.lang.ClassLoader): java.nio.file.FileSystem;
                /**
                 * Constructs a new {@code FileSystem} to access the contents of a file as a
                 * file system.
                 * <p> This method makes use of specialized providers that create pseudo file
                 * systems where the contents of one or more files is treated as a file
                 * system.
                 * <p> This method iterates over the {@link FileSystemProvider#installedProviders()
                 * installed} providers. It invokes, in turn, each provider's {@link
                 * FileSystemProvider#newFileSystem(Path,Map) newFileSystem(Path,Map)} method
                 * with an empty map. If a provider returns a file system then the iteration
                 * terminates and the file system is returned. If none of the installed
                 * providers return a {@code FileSystem} then an attempt is made to locate
                 * the provider using the given class loader. If a provider returns a file
                 * system then the lookup terminates and the file system is returned.
                 */
                // @ts-ignore
                public static newFileSystem(path: java.nio.file.Path, loader: java.lang.ClassLoader): java.nio.file.FileSystem;
            }
        }
    }
}
