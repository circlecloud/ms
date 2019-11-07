// @ts-nocheck
declare namespace java {
    namespace util {
        namespace function$ {
            // @ts-ignore
            interface BiPredicate {
                /**
                 * Evaluates this predicate on the given arguments.
                 */
                // @ts-ignore
                 test(t: java.lang.Object, u: java.lang.Object): boolean;
                /**
                 * Returns a composed predicate that represents a short-circuiting logical
                 * AND of this predicate and another.  When evaluating the composed
                 * predicate, if this predicate is {@code false}, then the {@code other}
                 * predicate is not evaluated.
                 * <p>Any exceptions thrown during evaluation of either predicate are relayed
                 * to the caller; if evaluation of this predicate throws an exception, the
                 * {@code other} predicate will not be evaluated.
                 */
                // @ts-ignore
                 and(other: java.util.function$.BiPredicate): java.util.function$.BiPredicate;
                /**
                 * Returns a predicate that represents the logical negation of this
                 * predicate.
                 */
                // @ts-ignore
                 negate(): java.util.function$.BiPredicate;
                /**
                 * Returns a composed predicate that represents a short-circuiting logical
                 * OR of this predicate and another.  When evaluating the composed
                 * predicate, if this predicate is {@code true}, then the {@code other}
                 * predicate is not evaluated.
                 * <p>Any exceptions thrown during evaluation of either predicate are relayed
                 * to the caller; if evaluation of this predicate throws an exception, the
                 * {@code other} predicate will not be evaluated.
                 */
                // @ts-ignore
                 or(other: java.util.function$.BiPredicate): java.util.function$.BiPredicate;
            }
        }
    }
}
