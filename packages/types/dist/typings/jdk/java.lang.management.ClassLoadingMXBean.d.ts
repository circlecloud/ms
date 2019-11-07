declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface ClassLoadingMXBean {
                /**
                 * Returns the number of classes currently loaded by the virtual machine.
                 */
                // @ts-ignore
                 getLoadedClassCount(): number;
                /**
                 * Returns a figure for the total number of classes that have been
                 * loaded by the virtual machine during its lifetime.
                 */
                // @ts-ignore
                 getTotalLoadedClassCount(): number;
                /**
                 * Returns a figure for the total number of classes that have
                 * been unloaded by the virtual machine over its lifetime.
                 */
                // @ts-ignore
                 getUnloadedClassCount(): number;
                /**
                 * Returns a boolean indication of whether the virtual
                 * machine's class loading system is producing verbose output.
                 */
                // @ts-ignore
                 isVerbose(): boolean;
                /**
                 * Updates the virtual machine's class loading system to
                 * operate in verbose or non-verbose mode.
                 */
                // @ts-ignore
                 setVerbose(value: boolean): void;
            }
        }
    }
}
