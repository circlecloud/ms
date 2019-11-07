// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class CompletableFuture extends java.lang.Object {
                /**
                 * Creates a new incomplete CompletableFuture.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new CompletableFuture that is asynchronously completed
                 * by a task running in the {@link ForkJoinPool#commonPool()} with
                 * the value obtained by calling the given Supplier.
                 */
                // @ts-ignore
                public static supplyAsync(supplier: java.util.function$.Supplier): java.util.concurrent.CompletableFuture;
                /**
                 * Returns a new CompletableFuture that is asynchronously completed
                 * by a task running in the given executor with the value obtained
                 * by calling the given Supplier.
                 */
                // @ts-ignore
                public static supplyAsync(supplier: java.util.function$.Supplier, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                /**
                 * Returns a new CompletableFuture that is asynchronously completed
                 * by a task running in the {@link ForkJoinPool#commonPool()} after
                 * it runs the given action.
                 */
                // @ts-ignore
                public static runAsync(runnable: java.lang.Runnable): java.util.concurrent.CompletableFuture;
                /**
                 * Returns a new CompletableFuture that is asynchronously completed
                 * by a task running in the given executor after it runs the given
                 * action.
                 */
                // @ts-ignore
                public static runAsync(runnable: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                /**
                 * Returns a new CompletableFuture that is already completed with
                 * the given value.
                 */
                // @ts-ignore
                public static completedFuture(value: java.lang.Object): java.util.concurrent.CompletableFuture;
                /**
                 * Returns {@code true} if completed in any fashion: normally,
                 * exceptionally, or via cancellation.
                 */
                // @ts-ignore
                public isDone(): boolean;
                /**
                 * Waits if necessary for this future to complete, and then
                 * returns its result.
                 */
                // @ts-ignore
                public get(): java.lang.Object;
                /**
                 * Waits if necessary for at most the given time for this future
                 * to complete, and then returns its result, if available.
                 */
                // @ts-ignore
                public get(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Returns the result value when complete, or throws an
                 * (unchecked) exception if completed exceptionally. To better
                 * conform with the use of common functional forms, if a
                 * computation involved in the completion of this
                 * CompletableFuture threw an exception, this method throws an
                 * (unchecked) {@link CompletionException} with the underlying
                 * exception as its cause.
                 */
                // @ts-ignore
                public join(): java.lang.Object;
                /**
                 * Returns the result value (or throws any encountered exception)
                 * if completed, else returns the given valueIfAbsent.
                 */
                // @ts-ignore
                public getNow(valueIfAbsent: java.lang.Object): java.lang.Object;
                /**
                 * If not already completed, sets the value returned by {@link
                 * #get()} and related methods to the given value.
                 */
                // @ts-ignore
                public complete(value: java.lang.Object): boolean;
                /**
                 * If not already completed, causes invocations of {@link #get()}
                 * and related methods to throw the given exception.
                 */
                // @ts-ignore
                public completeExceptionally(ex: java.lang.Throwable): boolean;
                // @ts-ignore
                public thenApply(fn: java.util.function$.Function): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenApplyAsync(fn: java.util.function$.Function): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenApplyAsync(fn: java.util.function$.Function, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenAccept(action: java.util.function$.Consumer): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenAcceptAsync(action: java.util.function$.Consumer): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenAcceptAsync(action: java.util.function$.Consumer, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenRun(action: java.lang.Runnable): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenRunAsync(action: java.lang.Runnable): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenRunAsync(action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenCombine(other: java.util.concurrent.CompletionStage, fn: java.util.function$.BiFunction): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenCombineAsync(other: java.util.concurrent.CompletionStage, fn: java.util.function$.BiFunction): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenCombineAsync(other: java.util.concurrent.CompletionStage, fn: java.util.function$.BiFunction, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenAcceptBoth(other: java.util.concurrent.CompletionStage, action: java.util.function$.BiConsumer): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenAcceptBothAsync(other: java.util.concurrent.CompletionStage, action: java.util.function$.BiConsumer): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenAcceptBothAsync(other: java.util.concurrent.CompletionStage, action: java.util.function$.BiConsumer, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public runAfterBoth(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public runAfterBothAsync(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public runAfterBothAsync(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public applyToEither(other: java.util.concurrent.CompletionStage, fn: java.util.function$.Function): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public applyToEitherAsync(other: java.util.concurrent.CompletionStage, fn: java.util.function$.Function): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public applyToEitherAsync(other: java.util.concurrent.CompletionStage, fn: java.util.function$.Function, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public acceptEither(other: java.util.concurrent.CompletionStage, action: java.util.function$.Consumer): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public acceptEitherAsync(other: java.util.concurrent.CompletionStage, action: java.util.function$.Consumer): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public acceptEitherAsync(other: java.util.concurrent.CompletionStage, action: java.util.function$.Consumer, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public runAfterEither(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public runAfterEitherAsync(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public runAfterEitherAsync(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenCompose(fn: java.util.function$.Function): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenComposeAsync(fn: java.util.function$.Function): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public thenComposeAsync(fn: java.util.function$.Function, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public whenComplete(action: java.util.function$.BiConsumer): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public whenCompleteAsync(action: java.util.function$.BiConsumer): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public whenCompleteAsync(action: java.util.function$.BiConsumer, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public handle(fn: java.util.function$.BiFunction): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public handleAsync(fn: java.util.function$.BiFunction): java.util.concurrent.CompletableFuture;
                // @ts-ignore
                public handleAsync(fn: java.util.function$.BiFunction, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
                /**
                 * Returns this CompletableFuture.
                 */
                // @ts-ignore
                public toCompletableFuture(): java.util.concurrent.CompletableFuture;
                /**
                 * Returns a new CompletableFuture that is completed when this
                 * CompletableFuture completes, with the result of the given
                 * function of the exception triggering this CompletableFuture's
                 * completion when it completes exceptionally; otherwise, if this
                 * CompletableFuture completes normally, then the returned
                 * CompletableFuture also completes normally with the same value.
                 * Note: More flexible versions of this functionality are
                 * available using methods {@code whenComplete} and {@code handle}.
                 */
                // @ts-ignore
                public exceptionally(fn: java.util.function$.Function): java.util.concurrent.CompletableFuture;
                /**
                 * Returns a new CompletableFuture that is completed when all of
                 * the given CompletableFutures complete.  If any of the given
                 * CompletableFutures complete exceptionally, then the returned
                 * CompletableFuture also does so, with a CompletionException
                 * holding this exception as its cause.  Otherwise, the results,
                 * if any, of the given CompletableFutures are not reflected in
                 * the returned CompletableFuture, but may be obtained by
                 * inspecting them individually. If no CompletableFutures are
                 * provided, returns a CompletableFuture completed with the value
                 * {@code null}.
                 * <p>Among the applications of this method is to await completion
                 * of a set of independent CompletableFutures before continuing a
                 * program, as in: {@code CompletableFuture.allOf(c1, c2,
                 * c3).join();}.
                 */
                // @ts-ignore
                public static allOf(cfs: java.util.concurrent.CompletableFuture): java.util.concurrent.CompletableFuture;
                /**
                 * Returns a new CompletableFuture that is completed when any of
                 * the given CompletableFutures complete, with the same result.
                 * Otherwise, if it completed exceptionally, the returned
                 * CompletableFuture also does so, with a CompletionException
                 * holding this exception as its cause.  If no CompletableFutures
                 * are provided, returns an incomplete CompletableFuture.
                 */
                // @ts-ignore
                public static anyOf(cfs: java.util.concurrent.CompletableFuture): java.util.concurrent.CompletableFuture;
                /**
                 * If not already completed, completes this CompletableFuture with
                 * a {@link CancellationException}. Dependent CompletableFutures
                 * that have not already completed will also complete
                 * exceptionally, with a {@link CompletionException} caused by
                 * this {@code CancellationException}.
                 */
                // @ts-ignore
                public cancel(mayInterruptIfRunning: boolean): boolean;
                /**
                 * Returns {@code true} if this CompletableFuture was cancelled
                 * before it completed normally.
                 */
                // @ts-ignore
                public isCancelled(): boolean;
                /**
                 * Returns {@code true} if this CompletableFuture completed
                 * exceptionally, in any way. Possible causes include
                 * cancellation, explicit invocation of {@code
                 * completeExceptionally}, and abrupt termination of a
                 * CompletionStage action.
                 */
                // @ts-ignore
                public isCompletedExceptionally(): boolean;
                /**
                 * Forcibly sets or resets the value subsequently returned by
                 * method {@link #get()} and related methods, whether or not
                 * already completed. This method is designed for use only in
                 * error recovery actions, and even in such situations may result
                 * in ongoing dependent completions using established versus
                 * overwritten outcomes.
                 */
                // @ts-ignore
                public obtrudeValue(value: java.lang.Object): void;
                /**
                 * Forcibly causes subsequent invocations of method {@link #get()}
                 * and related methods to throw the given exception, whether or
                 * not already completed. This method is designed for use only in
                 * error recovery actions, and even in such situations may result
                 * in ongoing dependent completions using established versus
                 * overwritten outcomes.
                 */
                // @ts-ignore
                public obtrudeException(ex: java.lang.Throwable): void;
                /**
                 * Returns the estimated number of CompletableFutures whose
                 * completions are awaiting completion of this CompletableFuture.
                 * This method is designed for use in monitoring system state, not
                 * for synchronization control.
                 */
                // @ts-ignore
                public getNumberOfDependents(): number;
                /**
                 * Returns a string identifying this CompletableFuture, as well as
                 * its completion state.  The state, in brackets, contains the
                 * String {@code "Completed Normally"} or the String {@code
                 * "Completed Exceptionally"}, or the String {@code "Not
                 * completed"} followed by the number of CompletableFutures
                 * dependent upon its completion, if any.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
