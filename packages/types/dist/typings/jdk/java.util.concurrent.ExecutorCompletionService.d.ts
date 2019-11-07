// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ExecutorCompletionService extends java.lang.Object {
                /**
                 * Creates an ExecutorCompletionService using the supplied
                 * executor for base task execution and a
                 * {@link LinkedBlockingQueue} as a completion queue.
                 */
                // @ts-ignore
                constructor(executor: java.util.concurrent.Executor)
                /**
                 * Creates an ExecutorCompletionService using the supplied
                 * executor for base task execution and the supplied queue as its
                 * completion queue.
                 */
                // @ts-ignore
                constructor(executor: java.util.concurrent.Executor, completionQueue: java.util.concurrent.BlockingQueue)
                // @ts-ignore
                public submit(task: java.util.concurrent.Callable): java.util.concurrent.Future;
                // @ts-ignore
                public submit(task: java.lang.Runnable, result: java.lang.Object): java.util.concurrent.Future;
                // @ts-ignore
                public take(): java.util.concurrent.Future;
                // @ts-ignore
                public poll(): java.util.concurrent.Future;
                // @ts-ignore
                public poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.Future;
            }
        }
    }
}
