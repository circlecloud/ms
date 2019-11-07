// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                // @ts-ignore
                abstract class AbstractOwnableSynchronizer extends java.lang.Object {
                    /**
                     * Empty constructor for use by subclasses.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Sets the thread that currently owns exclusive access.
                     * A {@code null} argument indicates that no thread owns access.
                     * This method does not otherwise impose any synchronization or
                     * {@code volatile} field accesses.
                     */
                    // @ts-ignore
                    protected setExclusiveOwnerThread(thread: java.lang.Thread): void;
                    /**
                     * Returns the thread last set by {@code setExclusiveOwnerThread},
                     * or {@code null} if never set.  This method does not otherwise
                     * impose any synchronization or {@code volatile} field accesses.
                     */
                    // @ts-ignore
                    protected getExclusiveOwnerThread(): java.lang.Thread;
                }
            }
        }
    }
}
