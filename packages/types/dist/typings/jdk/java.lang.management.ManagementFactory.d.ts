// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
             class ManagementFactory extends java.lang.Object {
                // @ts-ignore
                public static CLASS_LOADING_MXBEAN_NAME: string;
                // @ts-ignore
                public static COMPILATION_MXBEAN_NAME: string;
                // @ts-ignore
                public static GARBAGE_COLLECTOR_MXBEAN_DOMAIN_TYPE: string;
                // @ts-ignore
                public static MEMORY_MANAGER_MXBEAN_DOMAIN_TYPE: string;
                // @ts-ignore
                public static MEMORY_MXBEAN_NAME: string;
                // @ts-ignore
                public static MEMORY_POOL_MXBEAN_DOMAIN_TYPE: string;
                // @ts-ignore
                public static OPERATING_SYSTEM_MXBEAN_NAME: string;
                // @ts-ignore
                public static RUNTIME_MXBEAN_NAME: string;
                // @ts-ignore
                public static THREAD_MXBEAN_NAME: string;
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * class loading system.
                 */
                // @ts-ignore
                public static getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean;
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * compilation system <i>if and only if the virtual machine has a
                 * compilation system enabled</i>. If no compilation exists for this
                 * virtual machine, a <code>null</code> is returned.
                 */
                // @ts-ignore
                public static getCompilationMXBean(): java.lang.management.CompilationMXBean;
                /**
                 * Returns a list of all of the instances of {@link GarbageCollectorMXBean}
                 * in this virtual machine. Owing to the dynamic nature of this kind of
                 * <code>MXBean</code>, it is possible that instances may be created or
                 * destroyed between the invocation and return of this method.
                 */
                // @ts-ignore
                public static getGarbageCollectorMXBeans(): java.util.List;
                /**
                 * Returns a list of all of the instances of {@link MemoryManagerMXBean} in
                 * this virtual machine. Owing to the dynamic nature of this kind of
                 * <code>MXBean</code>, it is possible that instances may be created or
                 * destroyed between the invocation and return of this method.
                 * <p>
                 * Note that the list of <code>MemoryManagerMXBean</code> instances will
                 * include instances of <code>MemoryManagerMXBean</code> sub-types such as
                 * <code>GarbageCollectorMXBean</code>.
                 * </p>
                 */
                // @ts-ignore
                public static getMemoryManagerMXBeans(): java.util.List;
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * memory system.
                 */
                // @ts-ignore
                public static getMemoryMXBean(): java.lang.management.MemoryMXBean;
                /**
                 * Returns a list of all of the instances of {@link MemoryPoolMXBean} in
                 * this virtual machine. Owing to the dynamic nature of this kind of
                 * <code>MXBean</code>, it is possible that instances may be created or
                 * destroyed between the invocation and return of this method.
                 */
                // @ts-ignore
                public static getMemoryPoolMXBeans(): java.util.List;
                /**
                 * Returns the singleton <code>MXBean</code> for the operating system
                 * which the virtual machine runs on.
                 */
                // @ts-ignore
                public static getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean;
                /**
                 * Returns the virtual machine's platform
                 * <code>MBeanServer</code>. This <code>MBeanServer</code> will have
                 * all of the platform <code>MXBean</code>s registered with it including
                 * any dynamic <code>MXBean</code>s (e.g. instances of
                 * {@link GarbageCollectorMXBean} that may be unregistered and destroyed at
                 * a later time.
                 * <p>
                 * In order to simplify the process of distribution and discovery of managed
                 * beans it is good practice to register all managed beans (in addition to
                 * the platform <code>MXBean</code>s) with this server.
                 * </p>
                 * <p>
                 * A custom <code>MBeanServer</code> can be created by this method if the
                 * System property <code>javax.management.builder.initial</code> has been
                 * set with the fully qualified name of a subclass of
                 * {@link javax.management.MBeanServerBuilder}.
                 * </p>
                 */
                // @ts-ignore
                public static getPlatformMBeanServer(): any /*javax.management.MBeanServer*/;
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * runtime system.
                 */
                // @ts-ignore
                public static getRuntimeMXBean(): java.lang.management.RuntimeMXBean;
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * threading system.
                 */
                // @ts-ignore
                public static getThreadMXBean(): java.lang.management.ThreadMXBean;
                /**
                 * Return a proxy for the named <code>MXBean</code>.
                 */
                // @ts-ignore
                public static newPlatformMXBeanProxy(connection: any /*javax.management.MBeanServerConnection*/, mxbeanName: string, mxbeanInterface: java.lang.Class): java.lang.Object;
                /**
                 * Returns the platform MXBean implementing
                 * the given {@code mxbeanInterface} which is specified
                 * to have one single instance in the Java virtual machine.
                 * This method may return {@code null} if the management interface
                 * is not implemented in the Java virtual machine (for example,
                 * a Java virtual machine with no compilation system does not
                 * implement {@link CompilationMXBean});
                 * otherwise, this method is equivalent to calling:
                 * <pre>
                 * {@link #getPlatformMXBeans(Class)
                 * getPlatformMXBeans(mxbeanInterface)}.get(0);
                 * </pre>
                 */
                // @ts-ignore
                public static getPlatformMXBean(mxbeanInterface: java.lang.Class): java.lang.management.PlatformManagedObject;
                /**
                 * Returns a list of all of the platform <code>MXBean</code>
                 * objects which implement the specified management interface.
                 */
                // @ts-ignore
                public static getPlatformMXBeans(mxbeanInterface: java.lang.Class): java.util.List;
                /**
                 * Returns the platform MXBean proxy for
                 * {@code mxbeanInterface} which is specified to have one single
                 * instance in a Java virtual machine and the proxy will
                 * forward the method calls through the given {@code MBeanServerConnection}.
                 * This method may return {@code null} if the management interface
                 * is not implemented in the Java virtual machine being monitored
                 * (for example, a Java virtual machine with no compilation system
                 * does not implement {@link CompilationMXBean});
                 * otherwise, this method is equivalent to calling:
                 * <pre>
                 * {@link #getPlatformMXBeans(MBeanServerConnection, Class)
                 * getPlatformMXBeans(connection, mxbeanInterface)}.get(0);
                 * </pre>
                 */
                // @ts-ignore
                public static getPlatformMXBean(connection: any /*javax.management.MBeanServerConnection*/, mxbeanInterface: java.lang.Class): java.lang.management.PlatformManagedObject;
                /**
                 * Return a list of MXBean proxies that can proxy the <code>mxbeanInterface</code>
                 * using the specified <code>MBeanServerConnection</code>.
                 */
                // @ts-ignore
                public static getPlatformMXBeans(connection: any /*javax.management.MBeanServerConnection*/, mxbeanInterface: java.lang.Class): java.util.List;
                /**
                 * Return the set of all platform <code>MXBean</code> interface classes.
                 */
                // @ts-ignore
                public static getPlatformManagementInterfaces(): java.util.Set;
            }
        }
    }
}
