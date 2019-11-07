declare namespace java {
    namespace util {
        namespace function$ {
            // @ts-ignore
            interface BinaryOperator {
                /**
                 * Returns a {@link BinaryOperator} which returns the lesser of two elements
                 * according to the specified {@code Comparator}.
                 */
                // @ts-ignore
                 minBy(comparator: java.util.Comparator): java.util.function$.BinaryOperator;
                /**
                 * Returns a {@link BinaryOperator} which returns the greater of two elements
                 * according to the specified {@code Comparator}.
                 */
                // @ts-ignore
                 maxBy(comparator: java.util.Comparator): java.util.function$.BinaryOperator;
            }
        }
    }
}
