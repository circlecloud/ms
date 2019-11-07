declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                abstract class AtomicLongFieldUpdater extends java.lang.Object {
                    /**
                     * Protected do-nothing constructor for use by subclasses.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates and returns an updater for objects with the given field.
                     * The Class argument is needed to check that reflective types and
                     * generic types match.
                     */
                    // @ts-ignore
                    public static newUpdater(tclass: java.lang.Class, fieldName: string): java.util.concurrent.atomic.AtomicLongFieldUpdater;
                    /**
                     * Atomically sets the field of the given object managed by this updater
                     * to the given updated value if the current value {@code ==} the
                     * expected value. This method is guaranteed to be atomic with respect to
                     * other calls to {@code compareAndSet} and {@code set}, but not
                     * necessarily with respect to other changes in the field.
                     */
                    // @ts-ignore
                    public abstract compareAndSet(obj: java.lang.Object, expect: number, update: number): boolean;
                    /**
                     * Atomically sets the field of the given object managed by this updater
                     * to the given updated value if the current value {@code ==} the
                     * expected value. This method is guaranteed to be atomic with respect to
                     * other calls to {@code compareAndSet} and {@code set}, but not
                     * necessarily with respect to other changes in the field.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public abstract weakCompareAndSet(obj: java.lang.Object, expect: number, update: number): boolean;
                    /**
                     * Sets the field of the given object managed by this updater to the
                     * given updated value. This operation is guaranteed to act as a volatile
                     * store with respect to subsequent invocations of {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public abstract set(obj: java.lang.Object, newValue: number): void;
                    /**
                     * Eventually sets the field of the given object managed by this
                     * updater to the given updated value.
                     */
                    // @ts-ignore
                    public abstract lazySet(obj: java.lang.Object, newValue: number): void;
                    /**
                     * Gets the current value held in the field of the given object managed
                     * by this updater.
                     */
                    // @ts-ignore
                    public abstract get(obj: java.lang.Object): number;
                    /**
                     * Atomically sets the field of the given object managed by this updater
                     * to the given value and returns the old value.
                     */
                    // @ts-ignore
                    public getAndSet(obj: java.lang.Object, newValue: number): number;
                    /**
                     * Atomically increments by one the current value of the field of the
                     * given object managed by this updater.
                     */
                    // @ts-ignore
                    public getAndIncrement(obj: java.lang.Object): number;
                    /**
                     * Atomically decrements by one the current value of the field of the
                     * given object managed by this updater.
                     */
                    // @ts-ignore
                    public getAndDecrement(obj: java.lang.Object): number;
                    /**
                     * Atomically adds the given value to the current value of the field of
                     * the given object managed by this updater.
                     */
                    // @ts-ignore
                    public getAndAdd(obj: java.lang.Object, delta: number): number;
                    /**
                     * Atomically increments by one the current value of the field of the
                     * given object managed by this updater.
                     */
                    // @ts-ignore
                    public incrementAndGet(obj: java.lang.Object): number;
                    /**
                     * Atomically decrements by one the current value of the field of the
                     * given object managed by this updater.
                     */
                    // @ts-ignore
                    public decrementAndGet(obj: java.lang.Object): number;
                    /**
                     * Atomically adds the given value to the current value of the field of
                     * the given object managed by this updater.
                     */
                    // @ts-ignore
                    public addAndGet(obj: java.lang.Object, delta: number): number;
                    /**
                     * Atomically updates the field of the given object managed by this updater
                     * with the results of applying the given function, returning the previous
                     * value. The function should be side-effect-free, since it may be
                     * re-applied when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public getAndUpdate(obj: java.lang.Object, updateFunction: java.util.function$.LongUnaryOperator): number;
                    /**
                     * Atomically updates the field of the given object managed by this updater
                     * with the results of applying the given function, returning the updated
                     * value. The function should be side-effect-free, since it may be
                     * re-applied when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public updateAndGet(obj: java.lang.Object, updateFunction: java.util.function$.LongUnaryOperator): number;
                    /**
                     * Atomically updates the field of the given object managed by this
                     * updater with the results of applying the given function to the
                     * current and given values, returning the previous value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.  The
                     * function is applied with the current value as its first argument,
                     * and the given update as the second argument.
                     */
                    // @ts-ignore
                    public getAndAccumulate(obj: java.lang.Object, x: number, accumulatorFunction: java.util.function$.LongBinaryOperator): number;
                    /**
                     * Atomically updates the field of the given object managed by this
                     * updater with the results of applying the given function to the
                     * current and given values, returning the updated value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.  The
                     * function is applied with the current value as its first argument,
                     * and the given update as the second argument.
                     */
                    // @ts-ignore
                    public accumulateAndGet(obj: java.lang.Object, x: number, accumulatorFunction: java.util.function$.LongBinaryOperator): number;
                }
            }
        }
    }
}
