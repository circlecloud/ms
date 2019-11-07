declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            abstract class AbstractExecutorService extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Returns a {@code RunnableFuture} for the given runnable and default
                 * value.
                 */
                // @ts-ignore
                protected newTaskFor(runnable: java.lang.Runnable, value: java.lang.Object): java.util.concurrent.RunnableFuture;
                /**
                 * Returns a {@code RunnableFuture} for the given callable task.
                 */
                // @ts-ignore
                protected newTaskFor(callable: java.util.concurrent.Callable): java.util.concurrent.RunnableFuture;
                // @ts-ignore
                public submit(task: java.lang.Runnable): java.util.concurrent.Future;
                // @ts-ignore
                public submit(task: java.lang.Runnable, result: java.lang.Object): java.util.concurrent.Future;
                // @ts-ignore
                public submit(task: java.util.concurrent.Callable): java.util.concurrent.Future;
                // @ts-ignore
                public invokeAny(tasks: java.util.Collection): java.lang.Object;
                // @ts-ignore
                public invokeAny(tasks: java.util.Collection, timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                // @ts-ignore
                public invokeAll(tasks: java.util.Collection): java.util.List;
                // @ts-ignore
                public invokeAll(tasks: java.util.Collection, timeout: number, unit: java.util.concurrent.TimeUnit): java.util.List;
            }
        }
    }
}
