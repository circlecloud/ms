// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface CompletionService {
                /**
                 * Submits a value-returning task for execution and returns a Future
                 * representing the pending results of the task.  Upon completion,
                 * this task may be taken or polled.
                 */
                // @ts-ignore
                 submit(task: java.util.concurrent.Callable): java.util.concurrent.Future;
                /**
                 * Submits a Runnable task for execution and returns a Future
                 * representing that task.  Upon completion, this task may be
                 * taken or polled.
                 */
                // @ts-ignore
                 submit(task: java.lang.Runnable, result: java.lang.Object): java.util.concurrent.Future;
                /**
                 * Retrieves and removes the Future representing the next
                 * completed task, waiting if none are yet present.
                 */
                // @ts-ignore
                 take(): java.util.concurrent.Future;
                /**
                 * Retrieves and removes the Future representing the next
                 * completed task, or {@code null} if none are present.
                 */
                // @ts-ignore
                 poll(): java.util.concurrent.Future;
                /**
                 * Retrieves and removes the Future representing the next
                 * completed task, waiting if necessary up to the specified wait
                 * time if none are yet present.
                 */
                // @ts-ignore
                 poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.Future;
            }
        }
    }
}
