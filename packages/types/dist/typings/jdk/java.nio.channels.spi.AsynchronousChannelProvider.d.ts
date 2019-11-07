// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                // @ts-ignore
                abstract class AsynchronousChannelProvider extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the system-wide default asynchronous channel provider for this
                     * invocation of the Java virtual machine.
                     * <p> The first invocation of this method locates the default provider
                     * object as follows: </p>
                     * <ol>
                     * <li><p> If the system property
                     * <tt>java.nio.channels.spi.AsynchronousChannelProvider</tt> is defined
                     * then it is taken to be the fully-qualified name of a concrete provider class.
                     * The class is loaded and instantiated; if this process fails then an
                     * unspecified error is thrown.  </p></li>
                     * <li><p> If a provider class has been installed in a jar file that is
                     * visible to the system class loader, and that jar file contains a
                     * provider-configuration file named
                     * <tt>java.nio.channels.spi.AsynchronousChannelProvider</tt> in the resource
                     * directory <tt>META-INF/services</tt>, then the first class name
                     * specified in that file is taken.  The class is loaded and
                     * instantiated; if this process fails then an unspecified error is
                     * thrown.  </p></li>
                     * <li><p> Finally, if no provider has been specified by any of the above
                     * means then the system-default provider class is instantiated and the
                     * result is returned.  </p></li>
                     * </ol>
                     * <p> Subsequent invocations of this method return the provider that was
                     * returned by the first invocation.  </p>
                     */
                    // @ts-ignore
                    public static provider(): java.nio.channels.spi.AsynchronousChannelProvider;
                    /**
                     * Constructs a new asynchronous channel group with a fixed thread pool.
                     */
                    // @ts-ignore
                    public abstract openAsynchronousChannelGroup(nThreads: number, threadFactory: java.util.concurrent.ThreadFactory): java.nio.channels.AsynchronousChannelGroup;
                    /**
                     * Opens an asynchronous server-socket channel.
                     */
                    // @ts-ignore
                    public abstract openAsynchronousServerSocketChannel(group: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousServerSocketChannel;
                    /**
                     * Opens an asynchronous socket channel.
                     */
                    // @ts-ignore
                    public abstract openAsynchronousSocketChannel(group: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousSocketChannel;
                }
            }
        }
    }
}
