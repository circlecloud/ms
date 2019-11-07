declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                // @ts-ignore
                 class ReentrantReadWriteLock extends java.lang.Object {
                    /**
                     * Creates a new {@code ReentrantReadWriteLock} with
                     * default (nonfair) ordering properties.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new {@code ReentrantReadWriteLock} with
                     * the given fairness policy.
                     */
                    // @ts-ignore
                    constructor(fair: boolean)
                    // @ts-ignore
                    public writeLock(): java.util.concurrent.locks.ReentrantReadWriteLock.WriteLock;
                    // @ts-ignore
                    public readLock(): java.util.concurrent.locks.ReentrantReadWriteLock.ReadLock;
                    /**
                     * Returns {@code true} if this lock has fairness set true.
                     */
                    // @ts-ignore
                    public isFair(): boolean;
                    /**
                     * Returns the thread that currently owns the write lock, or
                     * {@code null} if not owned. When this method is called by a
                     * thread that is not the owner, the return value reflects a
                     * best-effort approximation of current lock status. For example,
                     * the owner may be momentarily {@code null} even if there are
                     * threads trying to acquire the lock but have not yet done so.
                     * This method is designed to facilitate construction of
                     * subclasses that provide more extensive lock monitoring
                     * facilities.
                     */
                    // @ts-ignore
                    protected getOwner(): java.lang.Thread;
                    /**
                     * Queries the number of read locks held for this lock. This
                     * method is designed for use in monitoring system state, not for
                     * synchronization control.
                     */
                    // @ts-ignore
                    public getReadLockCount(): number;
                    /**
                     * Queries if the write lock is held by any thread. This method is
                     * designed for use in monitoring system state, not for
                     * synchronization control.
                     */
                    // @ts-ignore
                    public isWriteLocked(): boolean;
                    /**
                     * Queries if the write lock is held by the current thread.
                     */
                    // @ts-ignore
                    public isWriteLockedByCurrentThread(): boolean;
                    /**
                     * Queries the number of reentrant write holds on this lock by the
                     * current thread.  A writer thread has a hold on a lock for
                     * each lock action that is not matched by an unlock action.
                     */
                    // @ts-ignore
                    public getWriteHoldCount(): number;
                    /**
                     * Queries the number of reentrant read holds on this lock by the
                     * current thread.  A reader thread has a hold on a lock for
                     * each lock action that is not matched by an unlock action.
                     */
                    // @ts-ignore
                    public getReadHoldCount(): number;
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire the write lock.  Because the actual set of threads may
                     * change dynamically while constructing this result, the returned
                     * collection is only a best-effort estimate.  The elements of the
                     * returned collection are in no particular order.  This method is
                     * designed to facilitate construction of subclasses that provide
                     * more extensive lock monitoring facilities.
                     */
                    // @ts-ignore
                    protected getQueuedWriterThreads(): java.util.Collection;
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire the read lock.  Because the actual set of threads may
                     * change dynamically while constructing this result, the returned
                     * collection is only a best-effort estimate.  The elements of the
                     * returned collection are in no particular order.  This method is
                     * designed to facilitate construction of subclasses that provide
                     * more extensive lock monitoring facilities.
                     */
                    // @ts-ignore
                    protected getQueuedReaderThreads(): java.util.Collection;
                    /**
                     * Queries whether any threads are waiting to acquire the read or
                     * write lock. Note that because cancellations may occur at any
                     * time, a {@code true} return does not guarantee that any other
                     * thread will ever acquire a lock.  This method is designed
                     * primarily for use in monitoring of the system state.
                     */
                    // @ts-ignore
                    public hasQueuedThreads(): boolean;
                    /**
                     * Queries whether the given thread is waiting to acquire either
                     * the read or write lock. Note that because cancellations may
                     * occur at any time, a {@code true} return does not guarantee
                     * that this thread will ever acquire a lock.  This method is
                     * designed primarily for use in monitoring of the system state.
                     */
                    // @ts-ignore
                    public hasQueuedThread(thread: java.lang.Thread): boolean;
                    /**
                     * Returns an estimate of the number of threads waiting to acquire
                     * either the read or write lock.  The value is only an estimate
                     * because the number of threads may change dynamically while this
                     * method traverses internal data structures.  This method is
                     * designed for use in monitoring of the system state, not for
                     * synchronization control.
                     */
                    // @ts-ignore
                    public getQueueLength(): number;
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire either the read or write lock.  Because the actual set
                     * of threads may change dynamically while constructing this
                     * result, the returned collection is only a best-effort estimate.
                     * The elements of the returned collection are in no particular
                     * order.  This method is designed to facilitate construction of
                     * subclasses that provide more extensive monitoring facilities.
                     */
                    // @ts-ignore
                    protected getQueuedThreads(): java.util.Collection;
                    /**
                     * Queries whether any threads are waiting on the given condition
                     * associated with the write lock. Note that because timeouts and
                     * interrupts may occur at any time, a {@code true} return does
                     * not guarantee that a future {@code signal} will awaken any
                     * threads.  This method is designed primarily for use in
                     * monitoring of the system state.
                     */
                    // @ts-ignore
                    public hasWaiters(condition: java.util.concurrent.locks.Condition): boolean;
                    /**
                     * Returns an estimate of the number of threads waiting on the
                     * given condition associated with the write lock. Note that because
                     * timeouts and interrupts may occur at any time, the estimate
                     * serves only as an upper bound on the actual number of waiters.
                     * This method is designed for use in monitoring of the system
                     * state, not for synchronization control.
                     */
                    // @ts-ignore
                    public getWaitQueueLength(condition: java.util.concurrent.locks.Condition): number;
                    /**
                     * Returns a collection containing those threads that may be
                     * waiting on the given condition associated with the write lock.
                     * Because the actual set of threads may change dynamically while
                     * constructing this result, the returned collection is only a
                     * best-effort estimate. The elements of the returned collection
                     * are in no particular order.  This method is designed to
                     * facilitate construction of subclasses that provide more
                     * extensive condition monitoring facilities.
                     */
                    // @ts-ignore
                    protected getWaitingThreads(condition: java.util.concurrent.locks.Condition): java.util.Collection;
                    /**
                     * Returns a string identifying this lock, as well as its lock state.
                     * The state, in brackets, includes the String {@code "Write locks ="}
                     * followed by the number of reentrantly held write locks, and the
                     * String {@code "Read locks ="} followed by the number of held
                     * read locks.
                     */
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
