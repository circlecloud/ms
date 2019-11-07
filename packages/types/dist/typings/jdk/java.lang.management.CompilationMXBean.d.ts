// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface CompilationMXBean {
                /**
                 * Returns the name of the virtual machine's Just In Time (JIT) compiler.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * If supported (see {@link #isCompilationTimeMonitoringSupported()}),
                 * returns the total number of <b>milliseconds </b> spent by the virtual
                 * machine performing compilations. The figure is taken over the lifetime of
                 * the virtual machine.
                 */
                // @ts-ignore
                 getTotalCompilationTime(): number;
                /**
                 * A boolean indication of whether or not the virtual machine supports the
                 * timing of its compilation facilities.
                 */
                // @ts-ignore
                 isCompilationTimeMonitoringSupported(): boolean;
            }
        }
    }
}
