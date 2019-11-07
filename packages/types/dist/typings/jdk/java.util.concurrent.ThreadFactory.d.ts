declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface ThreadFactory {
                /**
                 * Constructs a new {@code Thread}.  Implementations may also initialize
                 * priority, name, daemon status, {@code ThreadGroup}, etc.
                 */
                // @ts-ignore
                 newThread(r: java.lang.Runnable): java.lang.Thread;
            }
        }
    }
}
