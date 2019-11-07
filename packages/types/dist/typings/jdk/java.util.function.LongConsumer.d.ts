declare namespace java {
    namespace util {
        namespace function$ {
            // @ts-ignore
            interface LongConsumer {
                /**
                 * Performs this operation on the given argument.
                 */
                // @ts-ignore
                 accept(value: number): void;
                /**
                 * Returns a composed {@code LongConsumer} that performs, in sequence, this
                 * operation followed by the {@code after} operation. If performing either
                 * operation throws an exception, it is relayed to the caller of the
                 * composed operation.  If performing this operation throws an exception,
                 * the {@code after} operation will not be performed.
                 */
                // @ts-ignore
                 andThen(after: java.util.function$.LongConsumer): java.util.function$.LongConsumer;
            }
        }
    }
}
