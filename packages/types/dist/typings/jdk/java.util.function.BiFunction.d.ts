declare namespace java {
    namespace util {
        namespace function$ {
            // @ts-ignore
            interface BiFunction {
                /**
                 * Applies this function to the given arguments.
                 */
                // @ts-ignore
                 apply(t: java.lang.Object, u: java.lang.Object): java.lang.Object;
                /**
                 * Returns a composed function that first applies this function to
                 * its input, and then applies the {@code after} function to the result.
                 * If evaluation of either function throws an exception, it is relayed to
                 * the caller of the composed function.
                 */
                // @ts-ignore
                 andThen(after: java.util.function$.Function): java.util.function$.BiFunction;
            }
        }
    }
}
