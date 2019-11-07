// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ForkJoinPool {
                // @ts-ignore
                interface ManagedBlocker {
                    /**
                     * Possibly blocks the current thread, for example waiting for
                     * a lock or condition.
                     */
                    // @ts-ignore
                     block(): boolean;
                    /**
                     * Returns {@code true} if blocking is unnecessary.
                     */
                    // @ts-ignore
                     isReleasable(): boolean;
                }
            }
        }
    }
}
