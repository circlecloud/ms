// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface OperatingSystemMXBean {
                /**
                 * Returns a unique string identifier for the architecture of the underlying
                 * operating system. The identifier value is identical to that which would
                 * be obtained from a call to {@link System#getProperty(java.lang.String)}
                 * supplying the value &quot;os.arch&quot; for the key.
                 */
                // @ts-ignore
                 getArch(): string;
                /**
                 * Returns the number of processors that are available for the virtual
                 * machine to run on. The information returned from this method is identical
                 * to that which would be received from a call to
                 * {@link Runtime#availableProcessors()}.
                 */
                // @ts-ignore
                 getAvailableProcessors(): number;
                /**
                 * Returns the name of the underlying operating system. The value is
                 * identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;os.name&quot; for the key.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns the version string for the underlying operating system. The value
                 * is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;os.version&quot; for the key.
                 */
                // @ts-ignore
                 getVersion(): string;
                /**
                 * Returns a double value which holds the system load average calculated for
                 * the minute preceding the call, where <i>system load average</i> is taken
                 * to mean the following:
                 * <p>
                 * the time-averaged value of the sum of the number of runnable entities
                 * running on the available processors and the number of runnable entities
                 * ready and queued to run on the available processors. The averaging
                 * technique adopted can vary depending on the underlying operating system.
                 */
                // @ts-ignore
                 getSystemLoadAverage(): number;
            }
        }
    }
}
