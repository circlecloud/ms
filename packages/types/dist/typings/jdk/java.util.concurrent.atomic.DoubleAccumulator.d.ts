// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class DoubleAccumulator extends java.util.concurrent.atomic.Striped64 {
                    /**
                     * Creates a new instance using the given accumulator function
                     * and identity element.
                     */
                    // @ts-ignore
                    constructor(accumulatorFunction: java.util.function$.DoubleBinaryOperator, identity: number)
                    /**
                     * Updates with the given value.
                     */
                    // @ts-ignore
                    public accumulate(x: number): void;
                    /**
                     * Returns the current value.  The returned value is <em>NOT</em>
                     * an atomic snapshot; invocation in the absence of concurrent
                     * updates returns an accurate result, but concurrent updates that
                     * occur while the value is being calculated might not be
                     * incorporated.
                     */
                    // @ts-ignore
                    public get(): number;
                    /**
                     * Resets variables maintaining updates to the identity value.
                     * This method may be a useful alternative to creating a new
                     * updater, but is only effective if there are no concurrent
                     * updates.  Because this method is intrinsically racy, it should
                     * only be used when it is known that no threads are concurrently
                     * updating.
                     */
                    // @ts-ignore
                    public reset(): void;
                    /**
                     * Equivalent in effect to {@link #get} followed by {@link
                     * #reset}. This method may apply for example during quiescent
                     * points between multithreaded computations.  If there are
                     * updates concurrent with this method, the returned value is
                     * <em>not</em> guaranteed to be the final value occurring before
                     * the reset.
                     */
                    // @ts-ignore
                    public getThenReset(): number;
                    /**
                     * Returns the String representation of the current value.
                     */
                    // @ts-ignore
                    public toString(): string;
                    /**
                     * Equivalent to {@link #get}.
                     */
                    // @ts-ignore
                    public doubleValue(): number;
                    /**
                     * Returns the {@linkplain #get current value} as a {@code long}
                     * after a narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public longValue(): number;
                    /**
                     * Returns the {@linkplain #get current value} as an {@code int}
                     * after a narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public intValue(): number;
                    /**
                     * Returns the {@linkplain #get current value} as a {@code float}
                     * after a narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public floatValue(): number;
                }
            }
        }
    }
}
