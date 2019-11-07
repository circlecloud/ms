// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface CompletionStage {
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed with this stage's result as the argument
                 * to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenApply(fn: java.util.function$.Function): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using this stage's default asynchronous
                 * execution facility, with this stage's result as the argument to
                 * the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenApplyAsync(fn: java.util.function$.Function): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using the supplied Executor, with this
                 * stage's result as the argument to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenApplyAsync(fn: java.util.function$.Function, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed with this stage's result as the argument
                 * to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenAccept(action: java.util.function$.Consumer): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using this stage's default asynchronous
                 * execution facility, with this stage's result as the argument to
                 * the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenAcceptAsync(action: java.util.function$.Consumer): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using the supplied Executor, with this
                 * stage's result as the argument to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenAcceptAsync(action: java.util.function$.Consumer, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, executes the given action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenRun(action: java.lang.Runnable): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, executes the given action using this stage's default
                 * asynchronous execution facility.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenRunAsync(action: java.lang.Runnable): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, executes the given action using the supplied Executor.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenRunAsync(action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage both complete normally, is executed with the two
                 * results as arguments to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenCombine(other: java.util.concurrent.CompletionStage, fn: java.util.function$.BiFunction): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, is executed using this stage's
                 * default asynchronous execution facility, with the two results
                 * as arguments to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenCombineAsync(other: java.util.concurrent.CompletionStage, fn: java.util.function$.BiFunction): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, is executed using the supplied
                 * executor, with the two results as arguments to the supplied
                 * function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenCombineAsync(other: java.util.concurrent.CompletionStage, fn: java.util.function$.BiFunction, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage both complete normally, is executed with the two
                 * results as arguments to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenAcceptBoth(other: java.util.concurrent.CompletionStage, action: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, is executed using this stage's
                 * default asynchronous execution facility, with the two results
                 * as arguments to the supplied action.
                 */
                // @ts-ignore
                 thenAcceptBothAsync(other: java.util.concurrent.CompletionStage, action: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, is executed using the supplied
                 * executor, with the two results as arguments to the supplied
                 * function.
                 */
                // @ts-ignore
                 thenAcceptBothAsync(other: java.util.concurrent.CompletionStage, action: java.util.function$.BiConsumer, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage both complete normally, executes the given action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 runAfterBoth(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, executes the given action using
                 * this stage's default asynchronous execution facility.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 runAfterBothAsync(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, executes the given action using
                 * the supplied executor.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 runAfterBothAsync(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed with the
                 * corresponding result as argument to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 applyToEither(other: java.util.concurrent.CompletionStage, fn: java.util.function$.Function): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed using this
                 * stage's default asynchronous execution facility, with the
                 * corresponding result as argument to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 applyToEitherAsync(other: java.util.concurrent.CompletionStage, fn: java.util.function$.Function): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed using the
                 * supplied executor, with the corresponding result as argument to
                 * the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 applyToEitherAsync(other: java.util.concurrent.CompletionStage, fn: java.util.function$.Function, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed with the
                 * corresponding result as argument to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 acceptEither(other: java.util.concurrent.CompletionStage, action: java.util.function$.Consumer): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed using this
                 * stage's default asynchronous execution facility, with the
                 * corresponding result as argument to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 acceptEitherAsync(other: java.util.concurrent.CompletionStage, action: java.util.function$.Consumer): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed using the
                 * supplied executor, with the corresponding result as argument to
                 * the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 acceptEitherAsync(other: java.util.concurrent.CompletionStage, action: java.util.function$.Consumer, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, executes the given action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 runAfterEither(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, executes the given action
                 * using this stage's default asynchronous execution facility.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 runAfterEitherAsync(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, executes the given action
                 * using the supplied executor.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 runAfterEitherAsync(other: java.util.concurrent.CompletionStage, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed with this stage as the argument
                 * to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenCompose(fn: java.util.function$.Function): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using this stage's default asynchronous
                 * execution facility, with this stage as the argument to the
                 * supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenComposeAsync(fn: java.util.function$.Function): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using the supplied Executor, with this
                 * stage's result as the argument to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 */
                // @ts-ignore
                 thenComposeAsync(fn: java.util.function$.Function, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * exceptionally, is executed with this stage's exception as the
                 * argument to the supplied function.  Otherwise, if this stage
                 * completes normally, then the returned stage also completes
                 * normally with the same value.
                 */
                // @ts-ignore
                 exceptionally(fn: java.util.function$.Function): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage with the same result or exception as
                 * this stage, that executes the given action when this stage completes.
                 * <p>When this stage is complete, the given action is invoked with the
                 * result (or {@code null} if none) and the exception (or {@code null}
                 * if none) of this stage as arguments.  The returned stage is completed
                 * when the action returns.  If the supplied action itself encounters an
                 * exception, then the returned stage exceptionally completes with this
                 * exception unless this stage also completed exceptionally.
                 */
                // @ts-ignore
                 whenComplete(action: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage with the same result or exception as
                 * this stage, that executes the given action using this stage's
                 * default asynchronous execution facility when this stage completes.
                 * <p>When this stage is complete, the given action is invoked with the
                 * result (or {@code null} if none) and the exception (or {@code null}
                 * if none) of this stage as arguments.  The returned stage is completed
                 * when the action returns.  If the supplied action itself encounters an
                 * exception, then the returned stage exceptionally completes with this
                 * exception unless this stage also completed exceptionally.
                 */
                // @ts-ignore
                 whenCompleteAsync(action: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage with the same result or exception as
                 * this stage, that executes the given action using the supplied
                 * Executor when this stage completes.
                 * <p>When this stage is complete, the given action is invoked with the
                 * result (or {@code null} if none) and the exception (or {@code null}
                 * if none) of this stage as arguments.  The returned stage is completed
                 * when the action returns.  If the supplied action itself encounters an
                 * exception, then the returned stage exceptionally completes with this
                 * exception unless this stage also completed exceptionally.
                 */
                // @ts-ignore
                 whenCompleteAsync(action: java.util.function$.BiConsumer, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * either normally or exceptionally, is executed with this stage's
                 * result and exception as arguments to the supplied function.
                 * <p>When this stage is complete, the given function is invoked
                 * with the result (or {@code null} if none) and the exception (or
                 * {@code null} if none) of this stage as arguments, and the
                 * function's result is used to complete the returned stage.
                 */
                // @ts-ignore
                 handle(fn: java.util.function$.BiFunction): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * either normally or exceptionally, is executed using this stage's
                 * default asynchronous execution facility, with this stage's
                 * result and exception as arguments to the supplied function.
                 * <p>When this stage is complete, the given function is invoked
                 * with the result (or {@code null} if none) and the exception (or
                 * {@code null} if none) of this stage as arguments, and the
                 * function's result is used to complete the returned stage.
                 */
                // @ts-ignore
                 handleAsync(fn: java.util.function$.BiFunction): java.util.concurrent.CompletionStage;
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * either normally or exceptionally, is executed using the
                 * supplied executor, with this stage's result and exception as
                 * arguments to the supplied function.
                 * <p>When this stage is complete, the given function is invoked
                 * with the result (or {@code null} if none) and the exception (or
                 * {@code null} if none) of this stage as arguments, and the
                 * function's result is used to complete the returned stage.
                 */
                // @ts-ignore
                 handleAsync(fn: java.util.function$.BiFunction, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
                /**
                 * Returns a {@link CompletableFuture} maintaining the same
                 * completion properties as this stage. If this stage is already a
                 * CompletableFuture, this method may return this stage itself.
                 * Otherwise, invocation of this method may be equivalent in
                 * effect to {@code thenApply(x -> x)}, but returning an instance
                 * of type {@code CompletableFuture}. A CompletionStage
                 * implementation that does not choose to interoperate with others
                 * may throw {@code UnsupportedOperationException}.
                 */
                // @ts-ignore
                 toCompletableFuture(): java.util.concurrent.CompletableFuture;
            }
        }
    }
}
