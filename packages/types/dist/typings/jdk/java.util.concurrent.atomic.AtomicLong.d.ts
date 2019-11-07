declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class AtomicLong extends java.lang.Number {
                    /**
                     * Creates a new AtomicLong with the given initial value.
                     */
                    // @ts-ignore
                    constructor(initialValue: number)
                    /**
                     * Creates a new AtomicLong with initial value {@code 0}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the current value.
                     */
                    // @ts-ignore
                    public get(): number;
                    /**
                     * Sets to the given value.
                     */
                    // @ts-ignore
                    public set(newValue: number): void;
                    /**
                     * Eventually sets to the given value.
                     */
                    // @ts-ignore
                    public lazySet(newValue: number): void;
                    /**
                     * Atomically sets to the given value and returns the old value.
                     */
                    // @ts-ignore
                    public getAndSet(newValue: number): number;
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     */
                    // @ts-ignore
                    public compareAndSet(expect: number, update: number): boolean;
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public weakCompareAndSet(expect: number, update: number): boolean;
                    /**
                     * Atomically increments by one the current value.
                     */
                    // @ts-ignore
                    public getAndIncrement(): number;
                    /**
                     * Atomically decrements by one the current value.
                     */
                    // @ts-ignore
                    public getAndDecrement(): number;
                    /**
                     * Atomically adds the given value to the current value.
                     */
                    // @ts-ignore
                    public getAndAdd(delta: number): number;
                    /**
                     * Atomically increments by one the current value.
                     */
                    // @ts-ignore
                    public incrementAndGet(): number;
                    /**
                     * Atomically decrements by one the current value.
                     */
                    // @ts-ignore
                    public decrementAndGet(): number;
                    /**
                     * Atomically adds the given value to the current value.
                     */
                    // @ts-ignore
                    public addAndGet(delta: number): number;
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function, returning the previous value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public getAndUpdate(updateFunction: java.util.function$.LongUnaryOperator): number;
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function, returning the updated value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     */
                    // @ts-ignore
                    public updateAndGet(updateFunction: java.util.function$.LongUnaryOperator): number;
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
                    public getAndAccumulate(x: number, accumulatorFunction: java.util.function$.LongBinaryOperator): number;
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
                    public accumulateAndGet(x: number, accumulatorFunction: java.util.function$.LongBinaryOperator): number;
                    /**
                     * Returns the String representation of the current value.
                     */
                    // @ts-ignore
                    public toString(): string;
                    /**
                     * Returns the value of this {@code AtomicLong} as an {@code int}
                     * after a narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public intValue(): number;
                    /**
                     * Returns the value of this {@code AtomicLong} as a {@code long}.
                     */
                    // @ts-ignore
                    public longValue(): number;
                    /**
                     * Returns the value of this {@code AtomicLong} as a {@code float}
                     * after a widening primitive conversion.
                     */
                    // @ts-ignore
                    public floatValue(): number;
                    /**
                     * Returns the value of this {@code AtomicLong} as a {@code double}
                     * after a widening primitive conversion.
                     */
                    // @ts-ignore
                    public doubleValue(): number;
                }
            }
        }
    }
}
