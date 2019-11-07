// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class AtomicStampedReference extends java.lang.Object {
                    /**
                     * Creates a new {@code AtomicStampedReference} with the given
                     * initial values.
                     */
                    // @ts-ignore
                    constructor(initialRef: java.lang.Object, initialStamp: number)
                    /**
                     * Returns the current value of the reference.
                     */
                    // @ts-ignore
                    public getReference(): java.lang.Object;
                    /**
                     * Returns the current value of the stamp.
                     */
                    // @ts-ignore
                    public getStamp(): number;
                    /**
                     * Returns the current values of both the reference and the stamp.
                     * Typical usage is {@code int[1] holder; ref = v.get(holder); }.
                     */
                    // @ts-ignore
                    public get(stampHolder: number): java.lang.Object;
                    /**
                     * Atomically sets the value of both the reference and stamp
                     * to the given update values if the
                     * current reference is {@code ==} to the expected reference
                     * and the current stamp is equal to the expected stamp.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public weakCompareAndSet(expectedReference: java.lang.Object, newReference: java.lang.Object, expectedStamp: number, newStamp: number): boolean;
                    /**
                     * Atomically sets the value of both the reference and stamp
                     * to the given update values if the
                     * current reference is {@code ==} to the expected reference
                     * and the current stamp is equal to the expected stamp.
                     */
                    // @ts-ignore
                    public compareAndSet(expectedReference: java.lang.Object, newReference: java.lang.Object, expectedStamp: number, newStamp: number): boolean;
                    /**
                     * Unconditionally sets the value of both the reference and stamp.
                     */
                    // @ts-ignore
                    public set(newReference: java.lang.Object, newStamp: number): void;
                    /**
                     * Atomically sets the value of the stamp to the given update value
                     * if the current reference is {@code ==} to the expected
                     * reference.  Any given invocation of this operation may fail
                     * (return {@code false}) spuriously, but repeated invocation
                     * when the current value holds the expected value and no other
                     * thread is also attempting to set the value will eventually
                     * succeed.
                     */
                    // @ts-ignore
                    public attemptStamp(expectedReference: java.lang.Object, newStamp: number): boolean;
                }
            }
        }
    }
}
