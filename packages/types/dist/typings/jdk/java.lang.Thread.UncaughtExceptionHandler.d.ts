// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace Thread {
            // @ts-ignore
            interface UncaughtExceptionHandler {
                /**
                 * The method invoked when an uncaught exception occurs in a Thread.
                 */
                // @ts-ignore
                 uncaughtException(thread: java.lang.Thread, throwable: java.lang.Throwable): void;
            }
        }
    }
}
