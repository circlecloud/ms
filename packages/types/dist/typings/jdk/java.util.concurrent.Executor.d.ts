declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface Executor {
                /**
                 * Executes the given command at some time in the future.  The command
                 * may execute in a new thread, in a pooled thread, or in the calling
                 * thread, at the discretion of the {@code Executor} implementation.
                 */
                // @ts-ignore
                 execute(command: java.lang.Runnable): void;
            }
        }
    }
}
