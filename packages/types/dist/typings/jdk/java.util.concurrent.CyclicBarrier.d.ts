declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class CyclicBarrier extends java.lang.Object {
                /**
                 * Creates a new {@code CyclicBarrier} that will trip when the
                 * given number of parties (threads) are waiting upon it, and which
                 * will execute the given barrier action when the barrier is tripped,
                 * performed by the last thread entering the barrier.
                 */
                // @ts-ignore
                constructor(parties: number, barrierAction: java.lang.Runnable)
                /**
                 * Creates a new {@code CyclicBarrier} that will trip when the
                 * given number of parties (threads) are waiting upon it, and
                 * does not perform a predefined action when the barrier is tripped.
                 */
                // @ts-ignore
                constructor(parties: number)
                /**
                 * Returns the number of parties required to trip this barrier.
                 */
                // @ts-ignore
                public getParties(): number;
                /**
                 * Waits until all {@linkplain #getParties parties} have invoked
                 * {@code await} on this barrier.
                 * <p>If the current thread is not the last to arrive then it is
                 * disabled for thread scheduling purposes and lies dormant until
                 * one of the following things happens:
                 * <ul>
                 * <li>The last thread arrives; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * one of the other waiting threads; or
                 * <li>Some other thread times out while waiting for barrier; or
                 * <li>Some other thread invokes {@link #reset} on this barrier.
                 * </ul>
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 * <p>If the barrier is {@link #reset} while any thread is waiting,
                 * or if the barrier {@linkplain #isBroken is broken} when
                 * {@code await} is invoked, or while any thread is waiting, then
                 * {@link BrokenBarrierException} is thrown.
                 * <p>If any thread is {@linkplain Thread#interrupt interrupted} while waiting,
                 * then all other waiting threads will throw
                 * {@link BrokenBarrierException} and the barrier is placed in the broken
                 * state.
                 * <p>If the current thread is the last thread to arrive, and a
                 * non-null barrier action was supplied in the constructor, then the
                 * current thread runs the action before allowing the other threads to
                 * continue.
                 * If an exception occurs during the barrier action then that exception
                 * will be propagated in the current thread and the barrier is placed in
                 * the broken state.
                 */
                // @ts-ignore
                public await(): number;
                /**
                 * Waits until all {@linkplain #getParties parties} have invoked
                 * {@code await} on this barrier, or the specified waiting time elapses.
                 * <p>If the current thread is not the last to arrive then it is
                 * disabled for thread scheduling purposes and lies dormant until
                 * one of the following things happens:
                 * <ul>
                 * <li>The last thread arrives; or
                 * <li>The specified timeout elapses; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * one of the other waiting threads; or
                 * <li>Some other thread times out while waiting for barrier; or
                 * <li>Some other thread invokes {@link #reset} on this barrier.
                 * </ul>
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 * <p>If the specified waiting time elapses then {@link TimeoutException}
                 * is thrown. If the time is less than or equal to zero, the
                 * method will not wait at all.
                 * <p>If the barrier is {@link #reset} while any thread is waiting,
                 * or if the barrier {@linkplain #isBroken is broken} when
                 * {@code await} is invoked, or while any thread is waiting, then
                 * {@link BrokenBarrierException} is thrown.
                 * <p>If any thread is {@linkplain Thread#interrupt interrupted} while
                 * waiting, then all other waiting threads will throw {@link
                 * BrokenBarrierException} and the barrier is placed in the broken
                 * state.
                 * <p>If the current thread is the last thread to arrive, and a
                 * non-null barrier action was supplied in the constructor, then the
                 * current thread runs the action before allowing the other threads to
                 * continue.
                 * If an exception occurs during the barrier action then that exception
                 * will be propagated in the current thread and the barrier is placed in
                 * the broken state.
                 */
                // @ts-ignore
                public await(timeout: number, unit: java.util.concurrent.TimeUnit): number;
                /**
                 * Queries if this barrier is in a broken state.
                 */
                // @ts-ignore
                public isBroken(): boolean;
                /**
                 * Resets the barrier to its initial state.  If any parties are
                 * currently waiting at the barrier, they will return with a
                 * {@link BrokenBarrierException}. Note that resets <em>after</em>
                 * a breakage has occurred for other reasons can be complicated to
                 * carry out; threads need to re-synchronize in some other way,
                 * and choose one to perform the reset.  It may be preferable to
                 * instead create a new barrier for subsequent use.
                 */
                // @ts-ignore
                public reset(): void;
                /**
                 * Returns the number of parties currently waiting at the barrier.
                 * This method is primarily useful for debugging and assertions.
                 */
                // @ts-ignore
                public getNumberWaiting(): number;
            }
        }
    }
}
