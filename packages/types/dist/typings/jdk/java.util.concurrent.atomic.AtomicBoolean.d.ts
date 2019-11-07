// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                // @ts-ignore
                 class AtomicBoolean extends java.lang.Object {
                    /**
                     * Creates a new {@code AtomicBoolean} with the given initial value.
                     */
                    // @ts-ignore
                    constructor(initialValue: boolean)
                    /**
                     * Creates a new {@code AtomicBoolean} with initial value {@code false}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the current value.
                     */
                    // @ts-ignore
                    public get(): boolean;
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     */
                    // @ts-ignore
                    public compareAndSet(expect: boolean, update: boolean): boolean;
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     */
                    // @ts-ignore
                    public weakCompareAndSet(expect: boolean, update: boolean): boolean;
                    /**
                     * Unconditionally sets to the given value.
                     */
                    // @ts-ignore
                    public set(newValue: boolean): void;
                    /**
                     * Eventually sets to the given value.
                     */
                    // @ts-ignore
                    public lazySet(newValue: boolean): void;
                    /**
                     * Atomically sets to the given value and returns the previous value.
                     */
                    // @ts-ignore
                    public getAndSet(newValue: boolean): boolean;
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
