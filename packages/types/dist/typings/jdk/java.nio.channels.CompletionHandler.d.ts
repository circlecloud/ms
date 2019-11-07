declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface CompletionHandler {
                /**
                 * Invoked when an operation has completed.
                 */
                // @ts-ignore
                 completed(result: java.lang.Object, attachment: java.lang.Object): void;
                /**
                 * Invoked when an operation fails.
                 */
                // @ts-ignore
                 failed(exc: java.lang.Throwable, attachment: java.lang.Object): void;
            }
        }
    }
}
