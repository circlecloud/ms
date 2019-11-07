declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                // @ts-ignore
                abstract class AbstractQueuedLongSynchronizer extends java.util.concurrent.locks.AbstractOwnableSynchronizer {
                    /**
                     * Creates a new {@code AbstractQueuedLongSynchronizer} instance
                     * with initial synchronization state of zero.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the current value of synchronization state.
                     * This operation has memory semantics of a {@code volatile} read.
                     */
                    // @ts-ignore
                    protected getState(): number;
                    /**
                     * Sets the value of synchronization state.
                     * This operation has memory semantics of a {@code volatile} write.
                     */
                    // @ts-ignore
                    protected setState(newState: number): void;
                    /**
                     * Atomically sets synchronization state to the given updated
                     * value if the current state value equals the expected value.
                     * This operation has memory semantics of a {@code volatile} read
                     * and write.
                     */
                    // @ts-ignore
                    protected compareAndSetState(expect: number, update: number): boolean;
                    /**
                     * Attempts to acquire in exclusive mode. This method should query
                     * if the state of the object permits it to be acquired in the
                     * exclusive mode, and if so to acquire it.
                     * <p>This method is always invoked by the thread performing
                     * acquire.  If this method reports failure, the acquire method
                     * may queue the thread, if it is not already queued, until it is
                     * signalled by a release from some other thread. This can be used
                     * to implement method {@link Lock#tryLock()}.
                     * <p>The default
                     * implementation throws {@link UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    protected tryAcquire(arg: number): boolean;
                    /**
                     * Attempts to set the state to reflect a release in exclusive
                     * mode.
                     * <p>This method is always invoked by the thread performing release.
                     * <p>The default implementation throws
                     * {@link UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    protected tryRelease(arg: number): boolean;
                    /**
                     * Attempts to acquire in shared mode. This method should query if
                     * the state of the object permits it to be acquired in the shared
                     * mode, and if so to acquire it.
                     * <p>This method is always invoked by the thread performing
                     * acquire.  If this method reports failure, the acquire method
                     * may queue the thread, if it is not already queued, until it is
                     * signalled by a release from some other thread.
                     * <p>The default implementation throws {@link
                     * UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    protected tryAcquireShared(arg: number): number;
                    /**
                     * Attempts to set the state to reflect a release in shared mode.
                     * <p>This method is always invoked by the thread performing release.
                     * <p>The default implementation throws
                     * {@link UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    protected tryReleaseShared(arg: number): boolean;
                    /**
                     * Returns {@code true} if synchronization is held exclusively with
                     * respect to the current (calling) thread.  This method is invoked
                     * upon each call to a non-waiting {@link ConditionObject} method.
                     * (Waiting methods instead invoke {@link #release}.)
                     * <p>The default implementation throws {@link
                     * UnsupportedOperationException}. This method is invoked
                     * internally only within {@link ConditionObject} methods, so need
                     * not be defined if conditions are not used.
                     */
                    // @ts-ignore
                    protected isHeldExclusively(): boolean;
                    /**
                     * Acquires in exclusive mode, ignoring interrupts.  Implemented
                     * by invoking at least once {@link #tryAcquire},
                     * returning on success.  Otherwise the thread is queued, possibly
                     * repeatedly blocking and unblocking, invoking {@link
                     * #tryAcquire} until success.  This method can be used
                     * to implement method {@link Lock#lock}.
                     */
                    // @ts-ignore
                    public acquire(arg: number): void;
                    /**
                     * Acquires in exclusive mode, aborting if interrupted.
                     * Implemented by first checking interrupt status, then invoking
                     * at least once {@link #tryAcquire}, returning on
                     * success.  Otherwise the thread is queued, possibly repeatedly
                     * blocking and unblocking, invoking {@link #tryAcquire}
                     * until success or the thread is interrupted.  This method can be
                     * used to implement method {@link Lock#lockInterruptibly}.
                     */
                    // @ts-ignore
                    public acquireInterruptibly(arg: number): void;
                    /**
                     * Attempts to acquire in exclusive mode, aborting if interrupted,
                     * and failing if the given timeout elapses.  Implemented by first
                     * checking interrupt status, then invoking at least once {@link
                     * #tryAcquire}, returning on success.  Otherwise, the thread is
                     * queued, possibly repeatedly blocking and unblocking, invoking
                     * {@link #tryAcquire} until success or the thread is interrupted
                     * or the timeout elapses.  This method can be used to implement
                     * method {@link Lock#tryLock(long, TimeUnit)}.
                     */
                    // @ts-ignore
                    public tryAcquireNanos(arg: number, nanosTimeout: number): boolean;
                    /**
                     * Releases in exclusive mode.  Implemented by unblocking one or
                     * more threads if {@link #tryRelease} returns true.
                     * This method can be used to implement method {@link Lock#unlock}.
                     */
                    // @ts-ignore
                    public release(arg: number): boolean;
                    /**
                     * Acquires in shared mode, ignoring interrupts.  Implemented by
                     * first invoking at least once {@link #tryAcquireShared},
                     * returning on success.  Otherwise the thread is queued, possibly
                     * repeatedly blocking and unblocking, invoking {@link
                     * #tryAcquireShared} until success.
                     */
                    // @ts-ignore
                    public acquireShared(arg: number): void;
                    /**
                     * Acquires in shared mode, aborting if interrupted.  Implemented
                     * by first checking interrupt status, then invoking at least once
                     * {@link #tryAcquireShared}, returning on success.  Otherwise the
                     * thread is queued, possibly repeatedly blocking and unblocking,
                     * invoking {@link #tryAcquireShared} until success or the thread
                     * is interrupted.
                     */
                    // @ts-ignore
                    public acquireSharedInterruptibly(arg: number): void;
                    /**
                     * Attempts to acquire in shared mode, aborting if interrupted, and
                     * failing if the given timeout elapses.  Implemented by first
                     * checking interrupt status, then invoking at least once {@link
                     * #tryAcquireShared}, returning on success.  Otherwise, the
                     * thread is queued, possibly repeatedly blocking and unblocking,
                     * invoking {@link #tryAcquireShared} until success or the thread
                     * is interrupted or the timeout elapses.
                     */
                    // @ts-ignore
                    public tryAcquireSharedNanos(arg: number, nanosTimeout: number): boolean;
                    /**
                     * Releases in shared mode.  Implemented by unblocking one or more
                     * threads if {@link #tryReleaseShared} returns true.
                     */
                    // @ts-ignore
                    public releaseShared(arg: number): boolean;
                    /**
                     * Queries whether any threads are waiting to acquire. Note that
                     * because cancellations due to interrupts and timeouts may occur
                     * at any time, a {@code true} return does not guarantee that any
                     * other thread will ever acquire.
                     * <p>In this implementation, this operation returns in
                     * constant time.
                     */
                    // @ts-ignore
                    public hasQueuedThreads(): boolean;
                    /**
                     * Queries whether any threads have ever contended to acquire this
                     * synchronizer; that is if an acquire method has ever blocked.
                     * <p>In this implementation, this operation returns in
                     * constant time.
                     */
                    // @ts-ignore
                    public hasContended(): boolean;
                    /**
                     * Returns the first (longest-waiting) thread in the queue, or
                     * {@code null} if no threads are currently queued.
                     * <p>In this implementation, this operation normally returns in
                     * constant time, but may iterate upon contention if other threads are
                     * concurrently modifying the queue.
                     */
                    // @ts-ignore
                    public getFirstQueuedThread(): java.lang.Thread;
                    /**
                     * Returns true if the given thread is currently queued.
                     * <p>This implementation traverses the queue to determine
                     * presence of the given thread.
                     */
                    // @ts-ignore
                    public isQueued(thread: java.lang.Thread): boolean;
                    /**
                     * Queries whether any threads have been waiting to acquire longer
                     * than the current thread.
                     * <p>An invocation of this method is equivalent to (but may be
                     * more efficient than):
                     * <pre> {@code
                     * getFirstQueuedThread() != Thread.currentThread() &&
                     * hasQueuedThreads()}</pre>
                     * <p>Note that because cancellations due to interrupts and
                     * timeouts may occur at any time, a {@code true} return does not
                     * guarantee that some other thread will acquire before the current
                     * thread.  Likewise, it is possible for another thread to win a
                     * race to enqueue after this method has returned {@code false},
                     * due to the queue being empty.
                     * <p>This method is designed to be used by a fair synchronizer to
                     * avoid <a href="AbstractQueuedSynchronizer.html#barging">barging</a>.
                     * Such a synchronizer's {@link #tryAcquire} method should return
                     * {@code false}, and its {@link #tryAcquireShared} method should
                     * return a negative value, if this method returns {@code true}
                     * (unless this is a reentrant acquire).  For example, the {@code
                     * tryAcquire} method for a fair, reentrant, exclusive mode
                     * synchronizer might look like this:
                     * <pre> {@code
                     * protected boolean tryAcquire(int arg) {
                     * if (isHeldExclusively()) {
                     * // A reentrant acquire; increment hold count
                     * return true;
                     * } else if (hasQueuedPredecessors()) {
                     * return false;
                     * } else {
                     * // try to acquire normally
                     * }
                     * }}</pre>
                     */
                    // @ts-ignore
                    public hasQueuedPredecessors(): boolean;
                    /**
                     * Returns an estimate of the number of threads waiting to
                     * acquire.  The value is only an estimate because the number of
                     * threads may change dynamically while this method traverses
                     * internal data structures.  This method is designed for use in
                     * monitoring system state, not for synchronization
                     * control.
                     */
                    // @ts-ignore
                    public getQueueLength(): number;
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire.  Because the actual set of threads may change
                     * dynamically while constructing this result, the returned
                     * collection is only a best-effort estimate.  The elements of the
                     * returned collection are in no particular order.  This method is
                     * designed to facilitate construction of subclasses that provide
                     * more extensive monitoring facilities.
                     */
                    // @ts-ignore
                    public getQueuedThreads(): java.util.Collection;
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire in exclusive mode. This has the same properties
                     * as {@link #getQueuedThreads} except that it only returns
                     * those threads waiting due to an exclusive acquire.
                     */
                    // @ts-ignore
                    public getExclusiveQueuedThreads(): java.util.Collection;
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire in shared mode. This has the same properties
                     * as {@link #getQueuedThreads} except that it only returns
                     * those threads waiting due to a shared acquire.
                     */
                    // @ts-ignore
                    public getSharedQueuedThreads(): java.util.Collection;
                    /**
                     * Returns a string identifying this synchronizer, as well as its state.
                     * The state, in brackets, includes the String {@code "State ="}
                     * followed by the current value of {@link #getState}, and either
                     * {@code "nonempty"} or {@code "empty"} depending on whether the
                     * queue is empty.
                     */
                    // @ts-ignore
                    public toString(): string;
                    /**
                     * Queries whether the given ConditionObject
                     * uses this synchronizer as its lock.
                     */
                    // @ts-ignore
                    public owns(condition: java.util.concurrent.locks.AbstractQueuedLongSynchronizer.ConditionObject): boolean;
                    /**
                     * Queries whether any threads are waiting on the given condition
                     * associated with this synchronizer. Note that because timeouts
                     * and interrupts may occur at any time, a {@code true} return
                     * does not guarantee that a future {@code signal} will awaken
                     * any threads.  This method is designed primarily for use in
                     * monitoring of the system state.
                     */
                    // @ts-ignore
                    public hasWaiters(condition: java.util.concurrent.locks.AbstractQueuedLongSynchronizer.ConditionObject): boolean;
                    /**
                     * Returns an estimate of the number of threads waiting on the
                     * given condition associated with this synchronizer. Note that
                     * because timeouts and interrupts may occur at any time, the
                     * estimate serves only as an upper bound on the actual number of
                     * waiters.  This method is designed for use in monitoring of the
                     * system state, not for synchronization control.
                     */
                    // @ts-ignore
                    public getWaitQueueLength(condition: java.util.concurrent.locks.AbstractQueuedLongSynchronizer.ConditionObject): number;
                    /**
                     * Returns a collection containing those threads that may be
                     * waiting on the given condition associated with this
                     * synchronizer.  Because the actual set of threads may change
                     * dynamically while constructing this result, the returned
                     * collection is only a best-effort estimate. The elements of the
                     * returned collection are in no particular order.
                     */
                    // @ts-ignore
                    public getWaitingThreads(condition: java.util.concurrent.locks.AbstractQueuedLongSynchronizer.ConditionObject): java.util.Collection;
                }
            }
        }
    }
}
