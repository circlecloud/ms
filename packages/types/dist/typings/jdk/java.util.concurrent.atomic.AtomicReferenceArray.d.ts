// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class AtomicReferenceArray extends java.lang.Object {
                    /**
                     * Creates a new AtomicReferenceArray of the given length, with all
                     * elements initially null.
                     */
                    // @ts-ignore
                    constructor(length: number)
                    /**
                     * Creates a new AtomicReferenceArray with the same length as, and
                     * all elements copied from, the given array.
                     */
                    // @ts-ignore
                    constructor(array: java.lang.Object)
                    /**
                     * Returns the length of the array.
                     */
                    // @ts-ignore
                    public length(): number;
                    /**
                     * Gets the current value at position {@code i}.
                     */
                    // @ts-ignore
                    public get(i: number): java.lang.Object;
                    /**
                     * Sets the element at position {@code i} to the given value.
                     */
                    // @ts-ignore
                    public set(i: number, newValue: java.lang.Object): void;
                    /**
                     * Eventually sets the element at position {@code i} to the given value.
                     */
                    // @ts-ignore
                    public lazySet(i: number, newValue: java.lang.Object): void;
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * value and returns the old value.
                     */
                    // @ts-ignore
                    public getAndSet(i: number, newValue: java.lang.Object): java.lang.Object;
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * updated value if the current value {@code ==} the expected value.
                     */
                    // @ts-ignore
                    public compareAndSet(i: number, expect: java.lang.Object, update: java.lang.Object): boolean;
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * updated value if the current value {@code ==} the expected value.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public weakCompareAndSet(i: number, expect: java.lang.Object, update: java.lang.Object): boolean;
                    /**
                     * Atomically updates the element at index {@code i} with the results
                     * of applying the given function, returning the previous value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public getAndUpdate(i: number, updateFunction: java.util.function$.UnaryOperator): java.lang.Object;
                    /**
                     * Atomically updates the element at index {@code i} with the results
                     * of applying the given function, returning the updated value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public updateAndGet(i: number, updateFunction: java.util.function$.UnaryOperator): java.lang.Object;
                    /**
                     * Atomically updates the element at index {@code i} with the
                     * results of applying the given function to the current and
                     * given values, returning the previous value. The function should
                     * be side-effect-free, since it may be re-applied when attempted
                     * updates fail due to contention among threads.  The function is
                     * applied with the current value at index {@code i} as its first
                     * argument, and the given update as the second argument.
                     */
                    // @ts-ignore
                    public getAndAccumulate(i: number, x: java.lang.Object, accumulatorFunction: java.util.function$.BinaryOperator): java.lang.Object;
                    /**
                     * Atomically updates the element at index {@code i} with the
                     * results of applying the given function to the current and
                     * given values, returning the updated value. The function should
                     * be side-effect-free, since it may be re-applied when attempted
                     * updates fail due to contention among threads.  The function is
                     * applied with the current value at index {@code i} as its first
                     * argument, and the given update as the second argument.
                     */
                    // @ts-ignore
                    public accumulateAndGet(i: number, x: java.lang.Object, accumulatorFunction: java.util.function$.BinaryOperator): java.lang.Object;
                    /**
                     * Returns the String representation of the current values of array.
                     */
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
