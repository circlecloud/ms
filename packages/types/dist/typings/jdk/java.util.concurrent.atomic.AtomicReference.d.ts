// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class AtomicReference extends java.lang.Object {
                    /**
                     * Creates a new AtomicReference with the given initial value.
                     */
                    // @ts-ignore
                    constructor(initialValue: java.lang.Object)
                    /**
                     * Creates a new AtomicReference with null initial value.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the current value.
                     */
                    // @ts-ignore
                    public get(): java.lang.Object;
                    /**
                     * Sets to the given value.
                     */
                    // @ts-ignore
                    public set(newValue: java.lang.Object): void;
                    /**
                     * Eventually sets to the given value.
                     */
                    // @ts-ignore
                    public lazySet(newValue: java.lang.Object): void;
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     */
                    // @ts-ignore
                    public compareAndSet(expect: java.lang.Object, update: java.lang.Object): boolean;
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public weakCompareAndSet(expect: java.lang.Object, update: java.lang.Object): boolean;
                    /**
                     * Atomically sets to the given value and returns the old value.
                     */
                    // @ts-ignore
                    public getAndSet(newValue: java.lang.Object): java.lang.Object;
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function, returning the previous value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public getAndUpdate(updateFunction: java.util.function$.UnaryOperator): java.lang.Object;
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function, returning the updated value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public updateAndGet(updateFunction: java.util.function$.UnaryOperator): java.lang.Object;
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function to the current and given values,
                     * returning the previous value. The function should be
                     * side-effect-free, since it may be re-applied when attempted
                     * updates fail due to contention among threads.  The function
                     * is applied with the current value as its first argument,
                     * and the given update as the second argument.
                     */
                    // @ts-ignore
                    public getAndAccumulate(x: java.lang.Object, accumulatorFunction: java.util.function$.BinaryOperator): java.lang.Object;
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function to the current and given values,
                     * returning the updated value. The function should be
                     * side-effect-free, since it may be re-applied when attempted
                     * updates fail due to contention among threads.  The function
                     * is applied with the current value as its first argument,
                     * and the given update as the second argument.
                     */
                    // @ts-ignore
                    public accumulateAndGet(x: java.lang.Object, accumulatorFunction: java.util.function$.BinaryOperator): java.lang.Object;
                    /**
                     * Returns the String representation of the current value.
                     */
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
