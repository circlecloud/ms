declare namespace java {
    namespace util {
        namespace function$ {
            // @ts-ignore
            interface BiConsumer {
                /**
                 * Performs this operation on the given arguments.
                 */
                // @ts-ignore
                 accept(t: java.lang.Object, u: java.lang.Object): void;
                /**
                 * Returns a composed {@code BiConsumer} that performs, in sequence, this
                 * operation followed by the {@code after} operation. If performing either
                 * operation throws an exception, it is relayed to the caller of the
                 * composed operation.  If performing this operation throws an exception,
                 * the {@code after} operation will not be performed.
                 */
                // @ts-ignore
                 andThen(after: java.util.function$.BiConsumer): java.util.function$.BiConsumer;
            }
        }
    }
}
