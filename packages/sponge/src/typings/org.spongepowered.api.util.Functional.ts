declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Functional {
                    /**
                     * Perform an AND using an array of predicates.
                     */
                    // @ts-ignore
                    public static predicateAnd(predicates: any): any;
                    /**
                     * Perform an AND using an iterable of predicates.
                     */
                    // @ts-ignore
                    public static predicateAnd(predicates: any): any;
                    /**
                     * Perform an AND using an array of bi-predicates.
                     */
                    // @ts-ignore
                    public static biPredicateAnd(predicates: any): any;
                    /**
                     * Perform an AND using an iterable of bi-predicates.
                     */
                    // @ts-ignore
                    public static biPredicateAnd(predicates: any): any;
                    /**
                     * Creates a new {@link Predicate} defining whether an {@link Object}
                     * is contained within the provided {@link Collection}.
                     */
                    // @ts-ignore
                    public static predicateIn(collection: any[] /*java.util.Collection*/): any;
                    /**
                     * Creates a {@link com.google.common.base.Predicate} based on the provided {@link Predicate}, used
                     * to transform between Java 8 specific code to those from the guava
                     * library.
                     */
                    // @ts-ignore
                    public static java8ToGuava(predicate: any): any;
                    /**
                     * Creates a new {@link Predicate} based on the provided {@link com.google.common.base.Predicate},
                     * used to transform between Java 8 specific code to those from the guava
                     * library.
                     */
                    // @ts-ignore
                    public static guavaToJava8(p: any): any;
                    /**
                     * Gets the value of an {@link Optional} as either a zero- or one-element immutable set.
                     */
                    // @ts-ignore
                    public static optionalAsSet(value: any): any[] /*java.util.Set*/;
                    /**
                     * Execute a callable on <strong>the current thread</strong>, capturing the result or any exceptions that may be thrown into a {@link
                     * CompletableFuture}.
                     */
                    // @ts-ignore
                    public static failableFuture(call: any): any;
                    /**
                     * Execute a callable on the provided executor, capturing the result or any exceptions that may be thrown into a {@link
                     * CompletableFuture}.
                     */
                    // @ts-ignore
                    public static asyncFailableFuture(call: any, exec: any): any;
                }
            }
        }
    }
}
