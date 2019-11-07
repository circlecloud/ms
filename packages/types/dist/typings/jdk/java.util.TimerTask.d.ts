declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class TimerTask extends java.lang.Object {
            /**
             * Creates a new timer task.
             */
            // @ts-ignore
            constructor()
            /**
             * The action to be performed by this timer task.
             */
            // @ts-ignore
            public abstract run(): void;
            /**
             * Cancels this timer task.  If the task has been scheduled for one-time
             * execution and has not yet run, or has not yet been scheduled, it will
             * never run.  If the task has been scheduled for repeated execution, it
             * will never run again.  (If the task is running when this call occurs,
             * the task will run to completion, but will never run again.)
             * <p>Note that calling this method from within the <tt>run</tt> method of
             * a repeating timer task absolutely guarantees that the timer task will
             * not run again.
             * <p>This method may be called repeatedly; the second and subsequent
             * calls have no effect.
             */
            // @ts-ignore
            public cancel(): boolean;
            /**
             * Returns the <i>scheduled</i> execution time of the most recent
             * <i>actual</i> execution of this task.  (If this method is invoked
             * while task execution is in progress, the return value is the scheduled
             * execution time of the ongoing task execution.)
             * <p>This method is typically invoked from within a task's run method, to
             * determine whether the current execution of the task is sufficiently
             * timely to warrant performing the scheduled activity:
             * <pre>{@code
             * public void run() {
             * if (System.currentTimeMillis() - scheduledExecutionTime() >=
             * MAX_TARDINESS)
             * return;  // Too late; skip this execution.
             * // Perform the task
             * }
             * }</pre>
             * This method is typically <i>not</i> used in conjunction with
             * <i>fixed-delay execution</i> repeating tasks, as their scheduled
             * execution times are allowed to drift over time, and so are not terribly
             * significant.
             */
            // @ts-ignore
            public scheduledExecutionTime(): number;
        }
    }
}
