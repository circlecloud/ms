// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class AtomicIntegerArray extends java.lang.Object {
                    /**
                     * Creates a new AtomicIntegerArray of the given length, with all
                     * elements initially zero.
                     */
                    // @ts-ignore
                    constructor(length: number)
                    /**
                     * Creates a new AtomicIntegerArray with the same length as, and
                     * all elements copied from, the given array.
                     */
                    // @ts-ignore
                    constructor(array: number)
                    /**
                     * Returns the length of the array.
                     */
                    // @ts-ignore
                    public length(): number;
                    /**
                     * Gets the current value at position {@code i}.
                     */
                    // @ts-ignore
                    public get(i: number): number;
                    /**
                     * Sets the element at position {@code i} to the given value.
                     */
                    // @ts-ignore
                    public set(i: number, newValue: number): void;
                    /**
                     * Eventually sets the element at position {@code i} to the given value.
                     */
                    // @ts-ignore
                    public lazySet(i: number, newValue: number): void;
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * value and returns the old value.
                     */
                    // @ts-ignore
                    public getAndSet(i: number, newValue: number): number;
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * updated value if the current value {@code ==} the expected value.
                     */
                    // @ts-ignore
                    public compareAndSet(i: number, expect: number, update: number): boolean;
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * updated value if the current value {@code ==} the expected value.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public weakCompareAndSet(i: number, expect: number, update: number): boolean;
                    /**
                     * Atomically increments by one the element at index {@code i}.
                     */
                    // @ts-ignore
                    public getAndIncrement(i: number): number;
                    /**
                     * Atomically decrements by one the element at index {@code i}.
                     */
                    // @ts-ignore
                    public getAndDecrement(i: number): number;
                    /**
                     * Atomically adds the given value to the element at index {@code i}.
                     */
                    // @ts-ignore
                    public getAndAdd(i: number, delta: number): number;
                    /**
                     * Atomically increments by one the element at index {@code i}.
                     */
                    // @ts-ignore
                    public incrementAndGet(i: number): number;
                    /**
                     * Atomically decrements by one the element at index {@code i}.
                     */
                    // @ts-ignore
                    public decrementAndGet(i: number): number;
                    /**
                     * Atomically adds the given value to the element at index {@code i}.
                     */
                    // @ts-ignore
                    public addAndGet(i: number, delta: number): number;
                    /**
                     * Atomically updates the element at index {@code i} with the results
                     * of applying the given function, returning the previous value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public getAndUpdate(i: number, updateFunction: java.util.function$.IntUnaryOperator): number;
                    /**
                     * Atomically updates the element at index {@code i} with the results
                     * of applying the given function, returning the updated value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public updateAndGet(i: number, updateFunction: java.util.function$.IntUnaryOperator): number;
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
                    public getAndAccumulate(i: number, x: number, accumulatorFunction: java.util.function$.IntBinaryOperator): number;
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
                    public accumulateAndGet(i: number, x: number, accumulatorFunction: java.util.function$.IntBinaryOperator): number;
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
