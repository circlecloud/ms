declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Functional extends java.lang.Object {
                    /**
                     * Perform an AND using an array of predicates.
                     */
                    // @ts-ignore
                    public static predicateAnd(predicates: java.util.function$.Predicate): java.util.function$.Predicate;
                    /**
                     * Perform an AND using an iterable of predicates.
                     */
                    // @ts-ignore
                    public static predicateAnd(predicates: java.lang.Iterable): java.util.function$.Predicate;
                    /**
                     * Perform an AND using an array of bi-predicates.
                     */
                    // @ts-ignore
                    public static biPredicateAnd(predicates: java.util.function$.BiPredicate): java.util.function$.BiPredicate;
                    /**
                     * Perform an AND using an iterable of bi-predicates.
                     */
                    // @ts-ignore
                    public static biPredicateAnd(predicates: java.lang.Iterable): java.util.function$.BiPredicate;
                    /**
                     * Creates a new {@link Predicate} defining whether an {@link Object}
                     * is contained within the provided {@link Collection}.
                     */
                    // @ts-ignore
                    public static predicateIn(collection: java.util.Collection): java.util.function$.Predicate;
                    /**
                     * Creates a {@link com.google.common.base.Predicate} based on the provided {@link Predicate}, used
                     * to transform between Java 8 specific code to those from the guava
                     * library.
                     */
                    // @ts-ignore
                    public static java8ToGuava(predicate: java.util.function$.Predicate): any;
                    /**
                     * Creates a new {@link Predicate} based on the provided {@link com.google.common.base.Predicate},
                     * used to transform between Java 8 specific code to those from the guava
                     * library.
                     */
                    // @ts-ignore
                    public static guavaToJava8(p: any): java.util.function$.Predicate;
                    /**
                     * Gets the value of an {@link Optional} as either a zero- or one-element immutable set.
                     */
                    // @ts-ignore
                    public static optionalAsSet(value: java.util.Optional): java.util.Set;
                    /**
                     * Execute a callable on <strong>the current thread</strong>, capturing the result or any exceptions that may be thrown into a {@link
                     * CompletableFuture}.
                     */
                    // @ts-ignore
                    public static failableFuture(call: java.util.concurrent.Callable): java.util.concurrent.CompletableFuture;
                    /**
                     * Execute a callable on the provided executor, capturing the result or any exceptions that may be thrown into a {@link
                     * CompletableFuture}.
                     */
                    // @ts-ignore
                    public static asyncFailableFuture(call: java.util.concurrent.Callable, exec: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                }
            }
        }
    }
}
