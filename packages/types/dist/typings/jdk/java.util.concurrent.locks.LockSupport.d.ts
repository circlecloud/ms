// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                // @ts-ignore
                 class LockSupport extends java.lang.Object {
                    /**
                     * Makes available the permit for the given thread, if it
                     * was not already available.  If the thread was blocked on
                     * {@code park} then it will unblock.  Otherwise, its next call
                     * to {@code park} is guaranteed not to block. This operation
                     * is not guaranteed to have any effect at all if the given
                     * thread has not been started.
                     */
                    // @ts-ignore
                    public static unpark(thread: java.lang.Thread): void;
                    /**
                     * Disables the current thread for thread scheduling purposes unless the
                     * permit is available.
                     * <p>If the permit is available then it is consumed and the call returns
                     * immediately; otherwise
                     * the current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until one of three things happens:
                     * <ul>
                     * <li>Some other thread invokes {@link #unpark unpark} with the
                     * current thread as the target; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                     * the current thread; or
                     * <li>The call spuriously (that is, for no reason) returns.
                     * </ul>
                     * <p>This method does <em>not</em> report which of these caused the
                     * method to return. Callers should re-check the conditions which caused
                     * the thread to park in the first place. Callers may also determine,
                     * for example, the interrupt status of the thread upon return.
                     */
                    // @ts-ignore
                    public static park(blocker: java.lang.Object): void;
                    /**
                     * Disables the current thread for thread scheduling purposes, for up to
                     * the specified waiting time, unless the permit is available.
                     * <p>If the permit is available then it is consumed and the call
                     * returns immediately; otherwise the current thread becomes disabled
                     * for thread scheduling purposes and lies dormant until one of four
                     * things happens:
                     * <ul>
                     * <li>Some other thread invokes {@link #unpark unpark} with the
                     * current thread as the target; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                     * the current thread; or
                     * <li>The specified waiting time elapses; or
                     * <li>The call spuriously (that is, for no reason) returns.
                     * </ul>
                     * <p>This method does <em>not</em> report which of these caused the
                     * method to return. Callers should re-check the conditions which caused
                     * the thread to park in the first place. Callers may also determine,
                     * for example, the interrupt status of the thread, or the elapsed time
                     * upon return.
                     */
                    // @ts-ignore
                    public static parkNanos(blocker: java.lang.Object, nanos: number): void;
                    /**
                     * Disables the current thread for thread scheduling purposes, until
                     * the specified deadline, unless the permit is available.
                     * <p>If the permit is available then it is consumed and the call
                     * returns immediately; otherwise the current thread becomes disabled
                     * for thread scheduling purposes and lies dormant until one of four
                     * things happens:
                     * <ul>
                     * <li>Some other thread invokes {@link #unpark unpark} with the
                     * current thread as the target; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts} the
                     * current thread; or
                     * <li>The specified deadline passes; or
                     * <li>The call spuriously (that is, for no reason) returns.
                     * </ul>
                     * <p>This method does <em>not</em> report which of these caused the
                     * method to return. Callers should re-check the conditions which caused
                     * the thread to park in the first place. Callers may also determine,
                     * for example, the interrupt status of the thread, or the current time
                     * upon return.
                     */
                    // @ts-ignore
                    public static parkUntil(blocker: java.lang.Object, deadline: number): void;
                    /**
                     * Returns the blocker object supplied to the most recent
                     * invocation of a park method that has not yet unblocked, or null
                     * if not blocked.  The value returned is just a momentary
                     * snapshot -- the thread may have since unblocked or blocked on a
                     * different blocker object.
                     */
                    // @ts-ignore
                    public static getBlocker(t: java.lang.Thread): java.lang.Object;
                    /**
                     * Disables the current thread for thread scheduling purposes unless the
                     * permit is available.
                     * <p>If the permit is available then it is consumed and the call
                     * returns immediately; otherwise the current thread becomes disabled
                     * for thread scheduling purposes and lies dormant until one of three
                     * things happens:
                     * <ul>
                     * <li>Some other thread invokes {@link #unpark unpark} with the
                     * current thread as the target; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                     * the current thread; or
                     * <li>The call spuriously (that is, for no reason) returns.
                     * </ul>
                     * <p>This method does <em>not</em> report which of these caused the
                     * method to return. Callers should re-check the conditions which caused
                     * the thread to park in the first place. Callers may also determine,
                     * for example, the interrupt status of the thread upon return.
                     */
                    // @ts-ignore
                    public static park(): void;
                    /**
                     * Disables the current thread for thread scheduling purposes, for up to
                     * the specified waiting time, unless the permit is available.
                     * <p>If the permit is available then it is consumed and the call
                     * returns immediately; otherwise the current thread becomes disabled
                     * for thread scheduling purposes and lies dormant until one of four
                     * things happens:
                     * <ul>
                     * <li>Some other thread invokes {@link #unpark unpark} with the
                     * current thread as the target; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                     * the current thread; or
                     * <li>The specified waiting time elapses; or
                     * <li>The call spuriously (that is, for no reason) returns.
                     * </ul>
                     * <p>This method does <em>not</em> report which of these caused the
                     * method to return. Callers should re-check the conditions which caused
                     * the thread to park in the first place. Callers may also determine,
                     * for example, the interrupt status of the thread, or the elapsed time
                     * upon return.
                     */
                    // @ts-ignore
                    public static parkNanos(nanos: number): void;
                    /**
                     * Disables the current thread for thread scheduling purposes, until
                     * the specified deadline, unless the permit is available.
                     * <p>If the permit is available then it is consumed and the call
                     * returns immediately; otherwise the current thread becomes disabled
                     * for thread scheduling purposes and lies dormant until one of four
                     * things happens:
                     * <ul>
                     * <li>Some other thread invokes {@link #unpark unpark} with the
                     * current thread as the target; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                     * the current thread; or
                     * <li>The specified deadline passes; or
                     * <li>The call spuriously (that is, for no reason) returns.
                     * </ul>
                     * <p>This method does <em>not</em> report which of these caused the
                     * method to return. Callers should re-check the conditions which caused
                     * the thread to park in the first place. Callers may also determine,
                     * for example, the interrupt status of the thread, or the current time
                     * upon return.
                     */
                    // @ts-ignore
                    public static parkUntil(deadline: number): void;
                }
            }
        }
    }
}
