declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                // @ts-ignore
                 class StampedLock extends java.lang.Object {
                    /**
                     * Creates a new lock, initially in unlocked state.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Exclusively acquires the lock, blocking if necessary
                     * until available.
                     */
                    // @ts-ignore
                    public writeLock(): number;
                    /**
                     * Exclusively acquires the lock if it is immediately available.
                     */
                    // @ts-ignore
                    public tryWriteLock(): number;
                    /**
                     * Exclusively acquires the lock if it is available within the
                     * given time and the current thread has not been interrupted.
                     * Behavior under timeout and interruption matches that specified
                     * for method {@link Lock#tryLock(long,TimeUnit)}.
                     */
                    // @ts-ignore
                    public tryWriteLock(time: number, unit: java.util.concurrent.TimeUnit): number;
                    /**
                     * Exclusively acquires the lock, blocking if necessary
                     * until available or the current thread is interrupted.
                     * Behavior under interruption matches that specified
                     * for method {@link Lock#lockInterruptibly()}.
                     */
                    // @ts-ignore
                    public writeLockInterruptibly(): number;
                    /**
                     * Non-exclusively acquires the lock, blocking if necessary
                     * until available.
                     */
                    // @ts-ignore
                    public readLock(): number;
                    /**
                     * Non-exclusively acquires the lock if it is immediately available.
                     */
                    // @ts-ignore
                    public tryReadLock(): number;
                    /**
                     * Non-exclusively acquires the lock if it is available within the
                     * given time and the current thread has not been interrupted.
                     * Behavior under timeout and interruption matches that specified
                     * for method {@link Lock#tryLock(long,TimeUnit)}.
                     */
                    // @ts-ignore
                    public tryReadLock(time: number, unit: java.util.concurrent.TimeUnit): number;
                    /**
                     * Non-exclusively acquires the lock, blocking if necessary
                     * until available or the current thread is interrupted.
                     * Behavior under interruption matches that specified
                     * for method {@link Lock#lockInterruptibly()}.
                     */
                    // @ts-ignore
                    public readLockInterruptibly(): number;
                    /**
                     * Returns a stamp that can later be validated, or zero
                     * if exclusively locked.
                     */
                    // @ts-ignore
                    public tryOptimisticRead(): number;
                    /**
                     * Returns true if the lock has not been exclusively acquired
                     * since issuance of the given stamp. Always returns false if the
                     * stamp is zero. Always returns true if the stamp represents a
                     * currently held lock. Invoking this method with a value not
                     * obtained from {@link #tryOptimisticRead} or a locking method
                     * for this lock has no defined effect or result.
                     */
                    // @ts-ignore
                    public validate(stamp: number): boolean;
                    /**
                     * If the lock state matches the given stamp, releases the
                     * exclusive lock.
                     */
                    // @ts-ignore
                    public unlockWrite(stamp: number): void;
                    /**
                     * If the lock state matches the given stamp, releases the
                     * non-exclusive lock.
                     */
                    // @ts-ignore
                    public unlockRead(stamp: number): void;
                    /**
                     * If the lock state matches the given stamp, releases the
                     * corresponding mode of the lock.
                     */
                    // @ts-ignore
                    public unlock(stamp: number): void;
                    /**
                     * If the lock state matches the given stamp, performs one of
                     * the following actions. If the stamp represents holding a write
                     * lock, returns it.  Or, if a read lock, if the write lock is
                     * available, releases the read lock and returns a write stamp.
                     * Or, if an optimistic read, returns a write stamp only if
                     * immediately available. This method returns zero in all other
                     * cases.
                     */
                    // @ts-ignore
                    public tryConvertToWriteLock(stamp: number): number;
                    /**
                     * If the lock state matches the given stamp, performs one of
                     * the following actions. If the stamp represents holding a write
                     * lock, releases it and obtains a read lock.  Or, if a read lock,
                     * returns it. Or, if an optimistic read, acquires a read lock and
                     * returns a read stamp only if immediately available. This method
                     * returns zero in all other cases.
                     */
                    // @ts-ignore
                    public tryConvertToReadLock(stamp: number): number;
                    /**
                     * If the lock state matches the given stamp then, if the stamp
                     * represents holding a lock, releases it and returns an
                     * observation stamp.  Or, if an optimistic read, returns it if
                     * validated. This method returns zero in all other cases, and so
                     * may be useful as a form of "tryUnlock".
                     */
                    // @ts-ignore
                    public tryConvertToOptimisticRead(stamp: number): number;
                    /**
                     * Releases the write lock if it is held, without requiring a
                     * stamp value. This method may be useful for recovery after
                     * errors.
                     */
                    // @ts-ignore
                    public tryUnlockWrite(): boolean;
                    /**
                     * Releases one hold of the read lock if it is held, without
                     * requiring a stamp value. This method may be useful for recovery
                     * after errors.
                     */
                    // @ts-ignore
                    public tryUnlockRead(): boolean;
                    /**
                     * Returns {@code true} if the lock is currently held exclusively.
                     */
                    // @ts-ignore
                    public isWriteLocked(): boolean;
                    /**
                     * Returns {@code true} if the lock is currently held non-exclusively.
                     */
                    // @ts-ignore
                    public isReadLocked(): boolean;
                    /**
                     * Queries the number of read locks held for this lock. This
                     * method is designed for use in monitoring system state, not for
                     * synchronization control.
                     */
                    // @ts-ignore
                    public getReadLockCount(): number;
                    /**
                     * Returns a string identifying this lock, as well as its lock
                     * state.  The state, in brackets, includes the String {@code
                     * "Unlocked"} or the String {@code "Write-locked"} or the String
                     * {@code "Read-locks:"} followed by the current number of
                     * read-locks held.
                     */
                    // @ts-ignore
                    public toString(): string;
                    /**
                     * Returns a plain {@link Lock} view of this StampedLock in which
                     * the {@link Lock#lock} method is mapped to {@link #readLock},
                     * and similarly for other methods. The returned Lock does not
                     * support a {@link Condition}; method {@link
                     * Lock#newCondition()} throws {@code
                     * UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    public asReadLock(): java.util.concurrent.locks.Lock;
                    /**
                     * Returns a plain {@link Lock} view of this StampedLock in which
                     * the {@link Lock#lock} method is mapped to {@link #writeLock},
                     * and similarly for other methods. The returned Lock does not
                     * support a {@link Condition}; method {@link
                     * Lock#newCondition()} throws {@code
                     * UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    public asWriteLock(): java.util.concurrent.locks.Lock;
                    /**
                     * Returns a {@link ReadWriteLock} view of this StampedLock in
                     * which the {@link ReadWriteLock#readLock()} method is mapped to
                     * {@link #asReadLock()}, and {@link ReadWriteLock#writeLock()} to
                     * {@link #asWriteLock()}.
                     */
                    // @ts-ignore
                    public asReadWriteLock(): java.util.concurrent.locks.ReadWriteLock;
                }
            }
        }
    }
}
