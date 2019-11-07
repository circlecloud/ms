declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class DoubleAdder extends java.util.concurrent.atomic.Striped64 {
                    /**
                     * Creates a new adder with initial sum of zero.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Adds the given value.
                     */
                    // @ts-ignore
                    public add(x: number): void;
                    /**
                     * Returns the current sum.  The returned value is <em>NOT</em> an
                     * atomic snapshot; invocation in the absence of concurrent
                     * updates returns an accurate result, but concurrent updates that
                     * occur while the sum is being calculated might not be
                     * incorporated.  Also, because floating-point arithmetic is not
                     * strictly associative, the returned result need not be identical
                     * to the value that would be obtained in a sequential series of
                     * updates to a single variable.
                     */
                    // @ts-ignore
                    public sum(): number;
                    /**
                     * Resets variables maintaining the sum to zero.  This method may
                     * be a useful alternative to creating a new adder, but is only
                     * effective if there are no concurrent updates.  Because this
                     * method is intrinsically racy, it should only be used when it is
                     * known that no threads are concurrently updating.
                     */
                    // @ts-ignore
                    public reset(): void;
                    /**
                     * Equivalent in effect to {@link #sum} followed by {@link
                     * #reset}. This method may apply for example during quiescent
                     * points between multithreaded computations.  If there are
                     * updates concurrent with this method, the returned value is
                     * <em>not</em> guaranteed to be the final value occurring before
                     * the reset.
                     */
                    // @ts-ignore
                    public sumThenReset(): number;
                    /**
                     * Returns the String representation of the {@link #sum}.
                     */
                    // @ts-ignore
                    public toString(): string;
                    /**
                     * Equivalent to {@link #sum}.
                     */
                    // @ts-ignore
                    public doubleValue(): number;
                    /**
                     * Returns the {@link #sum} as a {@code long} after a
                     * narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public longValue(): number;
                    /**
                     * Returns the {@link #sum} as an {@code int} after a
                     * narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public intValue(): number;
                    /**
                     * Returns the {@link #sum} as a {@code float}
                     * after a narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public floatValue(): number;
                }
            }
        }
    }
}
