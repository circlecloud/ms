// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface RuntimeMXBean {
                /**
                 * If bootstrap class loading is supported by the virtual machine, returns a
                 * string containing the full bootstrap class path used by the boot class
                 * loader to locate and load class files.
                 * <p>
                 * An indication of whether or not the virtual machine supports a boot class
                 * loader mechanism can be found from invoking the
                 * {@link #isBootClassPathSupported()} method.
                 * </p>
                 */
                // @ts-ignore
                 getBootClassPath(): string;
                /**
                 * Returns the class path string used by the system class loader to locate
                 * and load class files. The value is identical to that which would be
                 * obtained from a call to {@link System#getProperty(java.lang.String)}
                 * supplying the value &quot;java.class.path&quot; for the key.
                 */
                // @ts-ignore
                 getClassPath(): string;
                /**
                 * Returns a list of all of the input arguments passed to the virtual
                 * machine on start-up. This will <i>not </i> include any input arguments
                 * that are passed into the application's <code>main(String[] args)</code>
                 * method.
                 */
                // @ts-ignore
                 getInputArguments(): java.util.List;
                /**
                 * Returns the Java library path that will be used by the virtual machine to
                 * locate and load libraries. The value is identical to that which would be
                 * obtained from a call to {@link System#getProperty(java.lang.String)}
                 * supplying the value &quot;java.library.path&quot; for the key.
                 */
                // @ts-ignore
                 getLibraryPath(): string;
                /**
                 * Returns a string containing the management interface specification
                 * version that the virtual machine meets.
                 */
                // @ts-ignore
                 getManagementSpecVersion(): string;
                /**
                 * Returns the string name of this virtual machine. This value may be
                 * different for each particular running virtual machine.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns the name of the Java virtual machine specification followed by
                 * this virtual machine. The value is identical to that which would be
                 * obtained from a call to {@link System#getProperty(java.lang.String)}
                 * supplying the value &quot;java.vm.specification.name&quot; for the key.
                 */
                // @ts-ignore
                 getSpecName(): string;
                /**
                 * Returns the name of the Java virtual machine specification vendor. The
                 * value is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.specification.vendor&quot; for the key.
                 */
                // @ts-ignore
                 getSpecVendor(): string;
                /**
                 * Returns the name of the Java virtual machine specification version. The
                 * value is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.specification.version&quot; for the key.
                 */
                // @ts-ignore
                 getSpecVersion(): string;
                /**
                 * Returns the time, in milliseconds, when the virtual machine was started.
                 */
                // @ts-ignore
                 getStartTime(): number;
                /**
                 * Returns a map of the names and values of every system property known to
                 * the virtual machine.
                 */
                // @ts-ignore
                 getSystemProperties(): java.util.Map;
                /**
                 * Returns the lifetime of the virtual machine in milliseconds.
                 */
                // @ts-ignore
                 getUptime(): number;
                /**
                 * Returns the name of the Java virtual machine implementation. The value is
                 * identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.name&quot; for the key.
                 */
                // @ts-ignore
                 getVmName(): string;
                /**
                 * Returns the name of the Java virtual machine implementation vendor. The
                 * value is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.vendor&quot; for the key.
                 */
                // @ts-ignore
                 getVmVendor(): string;
                /**
                 * Returns the version of the Java virtual machine implementation. The value
                 * is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.version&quot; for the key.
                 */
                // @ts-ignore
                 getVmVersion(): string;
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports a bootstrap class loading mechanism.
                 */
                // @ts-ignore
                 isBootClassPathSupported(): boolean;
            }
        }
    }
}
