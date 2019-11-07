// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class AtomicMarkableReference extends java.lang.Object {
                    /**
                     * Creates a new {@code AtomicMarkableReference} with the given
                     * initial values.
                     */
                    // @ts-ignore
                    constructor(initialRef: java.lang.Object, initialMark: boolean)
                    /**
                     * Returns the current value of the reference.
                     */
                    // @ts-ignore
                    public getReference(): java.lang.Object;
                    /**
                     * Returns the current value of the mark.
                     */
                    // @ts-ignore
                    public isMarked(): boolean;
                    /**
                     * Returns the current values of both the reference and the mark.
                     * Typical usage is {@code boolean[1] holder; ref = v.get(holder); }.
                     */
                    // @ts-ignore
                    public get(markHolder: boolean): java.lang.Object;
                    /**
                     * Atomically sets the value of both the reference and mark
                     * to the given update values if the
                     * current reference is {@code ==} to the expected reference
                     * and the current mark is equal to the expected mark.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public weakCompareAndSet(expectedReference: java.lang.Object, newReference: java.lang.Object, expectedMark: boolean, newMark: boolean): boolean;
                    /**
                     * Atomically sets the value of both the reference and mark
                     * to the given update values if the
                     * current reference is {@code ==} to the expected reference
                     * and the current mark is equal to the expected mark.
                     */
                    // @ts-ignore
                    public compareAndSet(expectedReference: java.lang.Object, newReference: java.lang.Object, expectedMark: boolean, newMark: boolean): boolean;
                    /**
                     * Unconditionally sets the value of both the reference and mark.
                     */
                    // @ts-ignore
                    public set(newReference: java.lang.Object, newMark: boolean): void;
                    /**
                     * Atomically sets the value of the mark to the given update value
                     * if the current reference is {@code ==} to the expected
                     * reference.  Any given invocation of this operation may fail
                     * (return {@code false}) spuriously, but repeated invocation
                     * when the current value holds the expected value and no other
                     * thread is also attempting to set the value will eventually
                     * succeed.
                     */
                    // @ts-ignore
                    public attemptMark(expectedReference: java.lang.Object, newMark: boolean): boolean;
                }
            }
        }
    }
}
