declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface MemoryMXBean {
                /**
                 * Requests the virtual machine to run the system garbage collector.
                 */
                // @ts-ignore
                 gc(): void;
                /**
                 * Returns the current memory usage of the heap for both live objects and
                 * for objects no longer in use which are awaiting garbage collection.
                 */
                // @ts-ignore
                 getHeapMemoryUsage(): java.lang.management.MemoryUsage;
                /**
                 * Returns the current non-heap memory usage for the virtual machine.
                 */
                // @ts-ignore
                 getNonHeapMemoryUsage(): java.lang.management.MemoryUsage;
                /**
                 * Returns the number of objects in the virtual machine that are awaiting
                 * finalization. The returned value should only be used as an approximate
                 * guide.
                 */
                // @ts-ignore
                 getObjectPendingFinalizationCount(): number;
                /**
                 * Returns a boolean indication of whether or not the memory system is
                 * producing verbose output.
                 */
                // @ts-ignore
                 isVerbose(): boolean;
                /**
                 * Updates the verbose output setting of the memory system.
                 */
                // @ts-ignore
                 setVerbose(value: boolean): void;
            }
        }
    }
}
