declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface MemoryPoolMXBean {
                /**
                 * If supported by the virtual machine, returns a {@link MemoryUsage} which
                 * encapsulates this memory pool's memory usage after the most recent run of
                 * the garbage collector. No garbage collection will be actually occur as a
                 * result of this method getting called.
                 */
                // @ts-ignore
                 getCollectionUsage(): java.lang.management.MemoryUsage;
                /**
                 * Returns this memory pool's collection usage threshold.
                 */
                // @ts-ignore
                 getCollectionUsageThreshold(): number;
                /**
                 * Returns the number of times that the memory usage for this memory pool
                 * has grown to exceed the collection usage threshold.
                 */
                // @ts-ignore
                 getCollectionUsageThresholdCount(): number;
                /**
                 * Returns a string array containing the unique names of each memory manager
                 * that manages this memory pool. A memory pool will always have at least
                 * one memory manager associated with it.
                 */
                // @ts-ignore
                 getMemoryManagerNames(): java.lang.String[];
                /**
                 * Returns the name of this memory pool.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns information on the peak usage of the memory pool. The scope of
                 * this covers all elapsed time since either the start of the virtual
                 * machine or the peak usage was reset.
                 */
                // @ts-ignore
                 getPeakUsage(): java.lang.management.MemoryUsage;
                /**
                 * Returns the memory pool's type.
                 */
                // @ts-ignore
                 getType(): java.lang.management.MemoryType;
                /**
                 * Returns the current memory usage of this memory pool as estimated by the
                 * virtual machine.
                 */
                // @ts-ignore
                 getUsage(): java.lang.management.MemoryUsage;
                /**
                 * Returns this memory pool's usage threshold.
                 */
                // @ts-ignore
                 getUsageThreshold(): number;
                /**
                 * Returns the number of times that the memory usage for this memory pool
                 * has grown to exceed the current usage threshold.
                 */
                // @ts-ignore
                 getUsageThresholdCount(): number;
                /**
                 * Returns a boolean indication of whether or not this memory pool hit or
                 * exceeded the current value of the collection usage threshold after the
                 * latest garbage collection run.
                 */
                // @ts-ignore
                 isCollectionUsageThresholdExceeded(): boolean;
                /**
                 * Returns a boolean indication of whether or not this memory pool supports
                 * a collection usage threshold.
                 */
                // @ts-ignore
                 isCollectionUsageThresholdSupported(): boolean;
                /**
                 * Returns a boolean indication of whether or not this memory pool has hit
                 * or has exceeded the current value of the usage threshold.
                 */
                // @ts-ignore
                 isUsageThresholdExceeded(): boolean;
                /**
                 * Returns a boolean indication of whether or not this memory pool supports
                 * a usage threshold.
                 */
                // @ts-ignore
                 isUsageThresholdSupported(): boolean;
                /**
                 * Returns a boolean indication of whether or not this memory pool may still
                 * be considered valid. A memory pool becomes invalid once it has been
                 * removed by the virtual machine.
                 */
                // @ts-ignore
                 isValid(): boolean;
                /**
                 * Updates this memory pool's memory usage peak value to be whatever the
                 * value of the current memory usage is.
                 */
                // @ts-ignore
                 resetPeakUsage(): void;
                /**
                 * Updates this memory pool to have a new value for its collection usage
                 * threshold. Only values of zero or greater should be supplied. A zero
                 * value effectively turns off any further checking of collection memory
                 * usage by the virtual machine. A value greater than zero establishes the
                 * new threshold which the virtual machine will check against after each run
                 * of the garbage collector in the memory pool.
                 */
                // @ts-ignore
                 setCollectionUsageThreshold(threshold: number): void;
                /**
                 * Updates this memory pool to have a new value for its usage threshold.
                 * Only values of zero or greater should be supplied. A zero value
                 * effectively turns off any further checking of memory usage by the virtual
                 * machine. A value greater than zero establishes the new threshold which
                 * the virtual machine will check against.
                 */
                // @ts-ignore
                 setUsageThreshold(threshold: number): void;
            }
        }
    }
}
