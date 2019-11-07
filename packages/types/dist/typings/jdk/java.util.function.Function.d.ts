// @ts-nocheck
declare namespace java {
    namespace util {
        namespace function$ {
            // @ts-ignore
            interface Function {
                /**
                 * Applies this function to the given argument.
                 */
                // @ts-ignore
                 apply(t: java.lang.Object): java.lang.Object;
                /**
                 * Returns a composed function that first applies the {@code before}
                 * function to its input, and then applies this function to the result.
                 * If evaluation of either function throws an exception, it is relayed to
                 * the caller of the composed function.
                 */
                // @ts-ignore
                 compose(before: java.util.function$.Function): java.util.function$.Function;
                /**
                 * Returns a composed function that first applies this function to
                 * its input, and then applies the {@code after} function to the result.
                 * If evaluation of either function throws an exception, it is relayed to
                 * the caller of the composed function.
                 */
                // @ts-ignore
                 andThen(after: java.util.function$.Function): java.util.function$.Function;
                /**
                 * Returns a function that always returns its input argument.
                 */
                // @ts-ignore
                 identity(): java.util.function$.Function;
            }
        }
    }
}
