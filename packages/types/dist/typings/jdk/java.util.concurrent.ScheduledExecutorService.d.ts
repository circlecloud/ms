declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface ScheduledExecutorService {
                /**
                 * Creates and executes a one-shot action that becomes enabled
                 * after the given delay.
                 */
                // @ts-ignore
                 schedule(command: java.lang.Runnable, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
                /**
                 * Creates and executes a ScheduledFuture that becomes enabled after the
                 * given delay.
                 */
                // @ts-ignore
                 schedule(callable: java.util.concurrent.Callable, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
                /**
                 * Creates and executes a periodic action that becomes enabled first
                 * after the given initial delay, and subsequently with the given
                 * period; that is executions will commence after
                 * {@code initialDelay} then {@code initialDelay+period}, then
                 * {@code initialDelay + 2 * period}, and so on.
                 * If any execution of the task
                 * encounters an exception, subsequent executions are suppressed.
                 * Otherwise, the task will only terminate via cancellation or
                 * termination of the executor.  If any execution of this task
                 * takes longer than its period, then subsequent executions
                 * may start late, but will not concurrently execute.
                 */
                // @ts-ignore
                 scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number, period: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
                /**
                 * Creates and executes a periodic action that becomes enabled first
                 * after the given initial delay, and subsequently with the
                 * given delay between the termination of one execution and the
                 * commencement of the next.  If any execution of the task
                 * encounters an exception, subsequent executions are suppressed.
                 * Otherwise, the task will only terminate via cancellation or
                 * termination of the executor.
                 */
                // @ts-ignore
                 scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
            }
        }
    }
}
