// @ts-nocheck
declare namespace java {
    namespace util {
        namespace function$ {
            // @ts-ignore
            interface LongUnaryOperator {
                /**
                 * Applies this operator to the given operand.
                 */
                // @ts-ignore
                 applyAsLong(operand: number): number;
                /**
                 * Returns a composed operator that first applies the {@code before}
                 * operator to its input, and then applies this operator to the result.
                 * If evaluation of either operator throws an exception, it is relayed to
                 * the caller of the composed operator.
                 */
                // @ts-ignore
                 compose(before: java.util.function$.LongUnaryOperator): java.util.function$.LongUnaryOperator;
                /**
                 * Returns a composed operator that first applies this operator to
                 * its input, and then applies the {@code after} operator to the result.
                 * If evaluation of either operator throws an exception, it is relayed to
                 * the caller of the composed operator.
                 */
                // @ts-ignore
                 andThen(after: java.util.function$.LongUnaryOperator): java.util.function$.LongUnaryOperator;
                /**
                 * Returns a unary operator that always returns its input argument.
                 */
                // @ts-ignore
                 identity(): java.util.function$.LongUnaryOperator;
            }
        }
    }
}
