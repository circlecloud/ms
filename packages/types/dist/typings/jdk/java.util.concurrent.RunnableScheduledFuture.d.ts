// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface RunnableScheduledFuture {
                /**
                 * Returns {@code true} if this task is periodic. A periodic task may
                 * re-run according to some schedule. A non-periodic task can be
                 * run only once.
                 */
                // @ts-ignore
                 isPeriodic(): boolean;
            }
        }
    }
}
