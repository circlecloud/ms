// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            abstract class CountedCompleter extends java.util.concurrent.ForkJoinTask {
                /**
                 * Creates a new CountedCompleter with the given completer
                 * and initial pending count.
                 */
                // @ts-ignore
                constructor(completer: java.util.concurrent.CountedCompleter, initialPendingCount: number)
                /**
                 * Creates a new CountedCompleter with the given completer
                 * and an initial pending count of zero.
                 */
                // @ts-ignore
                constructor(completer: java.util.concurrent.CountedCompleter)
                /**
                 * Creates a new CountedCompleter with no completer
                 * and an initial pending count of zero.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The main computation performed by this task.
                 */
                // @ts-ignore
                public abstract compute(): void;
                /**
                 * Performs an action when method {@link #tryComplete} is invoked
                 * and the pending count is zero, or when the unconditional
                 * method {@link #complete} is invoked.  By default, this method
                 * does nothing. You can distinguish cases by checking the
                 * identity of the given caller argument. If not equal to {@code
                 * this}, then it is typically a subtask that may contain results
                 * (and/or links to other results) to combine.
                 */
                // @ts-ignore
                public onCompletion(caller: java.util.concurrent.CountedCompleter): void;
                /**
                 * Performs an action when method {@link
                 * #completeExceptionally(Throwable)} is invoked or method {@link
                 * #compute} throws an exception, and this task has not already
                 * otherwise completed normally. On entry to this method, this task
                 * {@link ForkJoinTask#isCompletedAbnormally}.  The return value
                 * of this method controls further propagation: If {@code true}
                 * and this task has a completer that has not completed, then that
                 * completer is also completed exceptionally, with the same
                 * exception as this completer.  The default implementation of
                 * this method does nothing except return {@code true}.
                 */
                // @ts-ignore
                public onExceptionalCompletion(ex: java.lang.Throwable, caller: java.util.concurrent.CountedCompleter): boolean;
                /**
                 * Returns the completer established in this task's constructor,
                 * or {@code null} if none.
                 */
                // @ts-ignore
                public getCompleter(): java.util.concurrent.CountedCompleter;
                /**
                 * Returns the current pending count.
                 */
                // @ts-ignore
                public getPendingCount(): number;
                /**
                 * Sets the pending count to the given value.
                 */
                // @ts-ignore
                public setPendingCount(count: number): void;
                /**
                 * Adds (atomically) the given value to the pending count.
                 */
                // @ts-ignore
                public addToPendingCount(delta: number): void;
                /**
                 * Sets (atomically) the pending count to the given count only if
                 * it currently holds the given expected value.
                 */
                // @ts-ignore
                public compareAndSetPendingCount(expected: number, count: number): boolean;
                /**
                 * If the pending count is nonzero, (atomically) decrements it.
                 */
                // @ts-ignore
                public decrementPendingCountUnlessZero(): number;
                /**
                 * Returns the root of the current computation; i.e., this
                 * task if it has no completer, else its completer's root.
                 */
                // @ts-ignore
                public getRoot(): java.util.concurrent.CountedCompleter;
                /**
                 * If the pending count is nonzero, decrements the count;
                 * otherwise invokes {@link #onCompletion(CountedCompleter)}
                 * and then similarly tries to complete this task's completer,
                 * if one exists, else marks this task as complete.
                 */
                // @ts-ignore
                public tryComplete(): void;
                /**
                 * Equivalent to {@link #tryComplete} but does not invoke {@link
                 * #onCompletion(CountedCompleter)} along the completion path:
                 * If the pending count is nonzero, decrements the count;
                 * otherwise, similarly tries to complete this task's completer, if
                 * one exists, else marks this task as complete. This method may be
                 * useful in cases where {@code onCompletion} should not, or need
                 * not, be invoked for each completer in a computation.
                 */
                // @ts-ignore
                public propagateCompletion(): void;
                /**
                 * Regardless of pending count, invokes
                 * {@link #onCompletion(CountedCompleter)}, marks this task as
                 * complete and further triggers {@link #tryComplete} on this
                 * task's completer, if one exists.  The given rawResult is
                 * used as an argument to {@link #setRawResult} before invoking
                 * {@link #onCompletion(CountedCompleter)} or marking this task
                 * as complete; its value is meaningful only for classes
                 * overriding {@code setRawResult}.  This method does not modify
                 * the pending count.
                 * <p>This method may be useful when forcing completion as soon as
                 * any one (versus all) of several subtask results are obtained.
                 * However, in the common (and recommended) case in which {@code
                 * setRawResult} is not overridden, this effect can be obtained
                 * more simply using {@code quietlyCompleteRoot();}.
                 */
                // @ts-ignore
                public complete(rawResult: java.lang.Object): void;
                /**
                 * If this task's pending count is zero, returns this task;
                 * otherwise decrements its pending count and returns {@code
                 * null}. This method is designed to be used with {@link
                 * #nextComplete} in completion traversal loops.
                 */
                // @ts-ignore
                public firstComplete(): java.util.concurrent.CountedCompleter;
                /**
                 * If this task does not have a completer, invokes {@link
                 * ForkJoinTask#quietlyComplete} and returns {@code null}.  Or, if
                 * the completer's pending count is non-zero, decrements that
                 * pending count and returns {@code null}.  Otherwise, returns the
                 * completer.  This method can be used as part of a completion
                 * traversal loop for homogeneous task hierarchies:
                 * <pre> {@code
                 * for (CountedCompleter<?> c = firstComplete();
                 * c != null;
                 * c = c.nextComplete()) {
                 * // ... process c ...
                 * }}</pre>
                 */
                // @ts-ignore
                public nextComplete(): java.util.concurrent.CountedCompleter;
                /**
                 * Equivalent to {@code getRoot().quietlyComplete()}.
                 */
                // @ts-ignore
                public quietlyCompleteRoot(): void;
                /**
                 * If this task has not completed, attempts to process at most the
                 * given number of other unprocessed tasks for which this task is
                 * on the completion path, if any are known to exist.
                 */
                // @ts-ignore
                public helpComplete(maxTasks: number): void;
                /**
                 * Implements execution conventions for CountedCompleters.
                 */
                // @ts-ignore
                protected exec(): boolean;
                /**
                 * Returns the result of the computation. By default
                 * returns {@code null}, which is appropriate for {@code Void}
                 * actions, but in other cases should be overridden, almost
                 * always to return a field or function of a field that
                 * holds the result upon completion.
                 */
                // @ts-ignore
                public getRawResult(): java.lang.Object;
                /**
                 * A method that result-bearing CountedCompleters may optionally
                 * use to help maintain result data.  By default, does nothing.
                 * Overrides are not recommended. However, if this method is
                 * overridden to update existing objects or fields, then it must
                 * in general be defined to be thread-safe.
                 */
                // @ts-ignore
                protected setRawResult(t: java.lang.Object): void;
            }
        }
    }
}
