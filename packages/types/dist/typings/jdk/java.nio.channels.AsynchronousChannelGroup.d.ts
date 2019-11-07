declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class AsynchronousChannelGroup extends java.lang.Object {
                /**
                 * Initialize a new instance of this class.
                 */
                // @ts-ignore
                constructor(provider: java.nio.channels.spi.AsynchronousChannelProvider)
                /**
                 * Returns the provider that created this channel group.
                 */
                // @ts-ignore
                public provider(): java.nio.channels.spi.AsynchronousChannelProvider;
                /**
                 * Creates an asynchronous channel group with a fixed thread pool.
                 * <p> The resulting asynchronous channel group reuses a fixed number of
                 * threads. At any point, at most {@code nThreads} threads will be active
                 * processing tasks that are submitted to handle I/O events and dispatch
                 * completion results for operations initiated on asynchronous channels in
                 * the group.
                 * <p> The group is created by invoking the {@link
                 * AsynchronousChannelProvider#openAsynchronousChannelGroup(int,ThreadFactory)
                 * openAsynchronousChannelGroup(int,ThreadFactory)} method of the system-wide
                 * default {@link AsynchronousChannelProvider} object.
                 */
                // @ts-ignore
                public static withFixedThreadPool(nThreads: number, threadFactory: java.util.concurrent.ThreadFactory): java.nio.channels.AsynchronousChannelGroup;
                /**
                 * Creates an asynchronous channel group with a given thread pool that
                 * creates new threads as needed.
                 * <p> The {@code executor} parameter is an {@code ExecutorService} that
                 * creates new threads as needed to execute tasks that are submitted to
                 * handle I/O events and dispatch completion results for operations initiated
                 * on asynchronous channels in the group. It may reuse previously constructed
                 * threads when they are available.
                 * <p> The {@code initialSize} parameter may be used by the implementation
                 * as a <em>hint</em> as to the initial number of tasks it may submit. For
                 * example, it may be used to indicate the initial number of threads that
                 * wait on I/O events.
                 * <p> The executor is intended to be used exclusively by the resulting
                 * asynchronous channel group. Termination of the group results in the
                 * orderly  {@link ExecutorService#shutdown shutdown} of the executor
                 * service. Shutting down the executor service by other means results in
                 * unspecified behavior.
                 * <p> The group is created by invoking the {@link
                 * AsynchronousChannelProvider#openAsynchronousChannelGroup(ExecutorService,int)
                 * openAsynchronousChannelGroup(ExecutorService,int)} method of the system-wide
                 * default {@link AsynchronousChannelProvider} object.
                 */
                // @ts-ignore
                public static withCachedThreadPool(executor: java.util.concurrent.ExecutorService, initialSize: number): java.nio.channels.AsynchronousChannelGroup;
                /**
                 * Creates an asynchronous channel group with a given thread pool.
                 * <p> The {@code executor} parameter is an {@code ExecutorService} that
                 * executes tasks submitted to dispatch completion results for operations
                 * initiated on asynchronous channels in the group.
                 * <p> Care should be taken when configuring the executor service. It
                 * should support <em>direct handoff</em> or <em>unbounded queuing</em> of
                 * submitted tasks, and the thread that invokes the {@link
                 * ExecutorService#execute execute} method should never invoke the task
                 * directly. An implementation may mandate additional constraints.
                 * <p> The executor is intended to be used exclusively by the resulting
                 * asynchronous channel group. Termination of the group results in the
                 * orderly  {@link ExecutorService#shutdown shutdown} of the executor
                 * service. Shutting down the executor service by other means results in
                 * unspecified behavior.
                 * <p> The group is created by invoking the {@link
                 * AsynchronousChannelProvider#openAsynchronousChannelGroup(ExecutorService,int)
                 * openAsynchronousChannelGroup(ExecutorService,int)} method of the system-wide
                 * default {@link AsynchronousChannelProvider} object with an {@code
                 * initialSize} of {@code 0}.
                 */
                // @ts-ignore
                public static withThreadPool(executor: java.util.concurrent.ExecutorService): java.nio.channels.AsynchronousChannelGroup;
                /**
                 * Tells whether or not this asynchronous channel group is shutdown.
                 */
                // @ts-ignore
                public abstract isShutdown(): boolean;
                /**
                 * Tells whether or not this group has terminated.
                 * <p> Where this method returns {@code true}, then the associated thread
                 * pool has also {@link ExecutorService#isTerminated terminated}.
                 */
                // @ts-ignore
                public abstract isTerminated(): boolean;
                /**
                 * Initiates an orderly shutdown of the group.
                 * <p> This method marks the group as shutdown. Further attempts to construct
                 * channel that binds to this group will throw {@link ShutdownChannelGroupException}.
                 * The group terminates when all asynchronous channels in the group are
                 * closed, all actively executing completion handlers have run to completion,
                 * and all resources have been released. This method has no effect if the
                 * group is already shutdown.
                 */
                // @ts-ignore
                public abstract shutdown(): void;
                /**
                 * Shuts down the group and closes all open channels in the group.
                 * <p> In addition to the actions performed by the {@link #shutdown() shutdown}
                 * method, this method invokes the {@link AsynchronousChannel#close close}
                 * method on all open channels in the group. This method does not attempt to
                 * stop or interrupt threads that are executing completion handlers. The
                 * group terminates when all actively executing completion handlers have run
                 * to completion and all resources have been released. This method may be
                 * invoked at any time. If some other thread has already invoked it, then
                 * another invocation will block until the first invocation is complete,
                 * after which it will return without effect.
                 */
                // @ts-ignore
                public abstract shutdownNow(): void;
                /**
                 * Awaits termination of the group.
                 * <p> This method blocks until the group has terminated, or the timeout
                 * occurs, or the current thread is interrupted, whichever happens first.
                 */
                // @ts-ignore
                public abstract awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
            }
        }
    }
}
