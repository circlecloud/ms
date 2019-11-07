declare namespace java {
    namespace util {
        // @ts-ignore
         class Timer extends java.lang.Object {
            /**
             * Creates a new timer.  The associated thread does <i>not</i>
             * {@linkplain Thread#setDaemon run as a daemon}.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new timer whose associated thread may be specified to
             * {@linkplain Thread#setDaemon run as a daemon}.
             * A daemon thread is called for if the timer will be used to
             * schedule repeating "maintenance activities", which must be
             * performed as long as the application is running, but should not
             * prolong the lifetime of the application.
             */
            // @ts-ignore
            constructor(isDaemon: boolean)
            /**
             * Creates a new timer whose associated thread has the specified name.
             * The associated thread does <i>not</i>
             * {@linkplain Thread#setDaemon run as a daemon}.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a new timer whose associated thread has the specified name,
             * and may be specified to
             * {@linkplain Thread#setDaemon run as a daemon}.
             */
            // @ts-ignore
            constructor(name: string, isDaemon: boolean)
            /**
             * Schedules the specified task for execution after the specified delay.
             */
            // @ts-ignore
            public schedule(task: java.util.TimerTask, delay: number): void;
            /**
             * Schedules the specified task for execution at the specified time.  If
             * the time is in the past, the task is scheduled for immediate execution.
             */
            // @ts-ignore
            public schedule(task: java.util.TimerTask, time: java.util.Date): void;
            /**
             * Schedules the specified task for repeated <i>fixed-delay execution</i>,
             * beginning after the specified delay.  Subsequent executions take place
             * at approximately regular intervals separated by the specified period.
             * <p>In fixed-delay execution, each execution is scheduled relative to
             * the actual execution time of the previous execution.  If an execution
             * is delayed for any reason (such as garbage collection or other
             * background activity), subsequent executions will be delayed as well.
             * In the long run, the frequency of execution will generally be slightly
             * lower than the reciprocal of the specified period (assuming the system
             * clock underlying <tt>Object.wait(long)</tt> is accurate).
             * <p>Fixed-delay execution is appropriate for recurring activities
             * that require "smoothness."  In other words, it is appropriate for
             * activities where it is more important to keep the frequency accurate
             * in the short run than in the long run.  This includes most animation
             * tasks, such as blinking a cursor at regular intervals.  It also includes
             * tasks wherein regular activity is performed in response to human
             * input, such as automatically repeating a character as long as a key
             * is held down.
             */
            // @ts-ignore
            public schedule(task: java.util.TimerTask, delay: number, period: number): void;
            /**
             * Schedules the specified task for repeated <i>fixed-delay execution</i>,
             * beginning at the specified time. Subsequent executions take place at
             * approximately regular intervals, separated by the specified period.
             * <p>In fixed-delay execution, each execution is scheduled relative to
             * the actual execution time of the previous execution.  If an execution
             * is delayed for any reason (such as garbage collection or other
             * background activity), subsequent executions will be delayed as well.
             * In the long run, the frequency of execution will generally be slightly
             * lower than the reciprocal of the specified period (assuming the system
             * clock underlying <tt>Object.wait(long)</tt> is accurate).  As a
             * consequence of the above, if the scheduled first time is in the past,
             * it is scheduled for immediate execution.
             * <p>Fixed-delay execution is appropriate for recurring activities
             * that require "smoothness."  In other words, it is appropriate for
             * activities where it is more important to keep the frequency accurate
             * in the short run than in the long run.  This includes most animation
             * tasks, such as blinking a cursor at regular intervals.  It also includes
             * tasks wherein regular activity is performed in response to human
             * input, such as automatically repeating a character as long as a key
             * is held down.
             */
            // @ts-ignore
            public schedule(task: java.util.TimerTask, firstTime: java.util.Date, period: number): void;
            /**
             * Schedules the specified task for repeated <i>fixed-rate execution</i>,
             * beginning after the specified delay.  Subsequent executions take place
             * at approximately regular intervals, separated by the specified period.
             * <p>In fixed-rate execution, each execution is scheduled relative to the
             * scheduled execution time of the initial execution.  If an execution is
             * delayed for any reason (such as garbage collection or other background
             * activity), two or more executions will occur in rapid succession to
             * "catch up."  In the long run, the frequency of execution will be
             * exactly the reciprocal of the specified period (assuming the system
             * clock underlying <tt>Object.wait(long)</tt> is accurate).
             * <p>Fixed-rate execution is appropriate for recurring activities that
             * are sensitive to <i>absolute</i> time, such as ringing a chime every
             * hour on the hour, or running scheduled maintenance every day at a
             * particular time.  It is also appropriate for recurring activities
             * where the total time to perform a fixed number of executions is
             * important, such as a countdown timer that ticks once every second for
             * ten seconds.  Finally, fixed-rate execution is appropriate for
             * scheduling multiple repeating timer tasks that must remain synchronized
             * with respect to one another.
             */
            // @ts-ignore
            public scheduleAtFixedRate(task: java.util.TimerTask, delay: number, period: number): void;
            /**
             * Schedules the specified task for repeated <i>fixed-rate execution</i>,
             * beginning at the specified time. Subsequent executions take place at
             * approximately regular intervals, separated by the specified period.
             * <p>In fixed-rate execution, each execution is scheduled relative to the
             * scheduled execution time of the initial execution.  If an execution is
             * delayed for any reason (such as garbage collection or other background
             * activity), two or more executions will occur in rapid succession to
             * "catch up."  In the long run, the frequency of execution will be
             * exactly the reciprocal of the specified period (assuming the system
             * clock underlying <tt>Object.wait(long)</tt> is accurate).  As a
             * consequence of the above, if the scheduled first time is in the past,
             * then any "missed" executions will be scheduled for immediate "catch up"
             * execution.
             * <p>Fixed-rate execution is appropriate for recurring activities that
             * are sensitive to <i>absolute</i> time, such as ringing a chime every
             * hour on the hour, or running scheduled maintenance every day at a
             * particular time.  It is also appropriate for recurring activities
             * where the total time to perform a fixed number of executions is
             * important, such as a countdown timer that ticks once every second for
             * ten seconds.  Finally, fixed-rate execution is appropriate for
             * scheduling multiple repeating timer tasks that must remain synchronized
             * with respect to one another.
             */
            // @ts-ignore
            public scheduleAtFixedRate(task: java.util.TimerTask, firstTime: java.util.Date, period: number): void;
            /**
             * Terminates this timer, discarding any currently scheduled tasks.
             * Does not interfere with a currently executing task (if it exists).
             * Once a timer has been terminated, its execution thread terminates
             * gracefully, and no more tasks may be scheduled on it.
             * <p>Note that calling this method from within the run method of a
             * timer task that was invoked by this timer absolutely guarantees that
             * the ongoing task execution is the last task execution that will ever
             * be performed by this timer.
             * <p>This method may be called repeatedly; the second and subsequent
             * calls have no effect.
             */
            // @ts-ignore
            public cancel(): void;
            /**
             * Removes all cancelled tasks from this timer's task queue.  <i>Calling
             * this method has no effect on the behavior of the timer</i>, but
             * eliminates the references to the cancelled tasks from the queue.
             * If there are no external references to these tasks, they become
             * eligible for garbage collection.
             * <p>Most programs will have no need to call this method.
             * It is designed for use by the rare application that cancels a large
             * number of tasks.  Calling this method trades time for space: the
             * runtime of the method may be proportional to n + c log n, where n
             * is the number of tasks in the queue and c is the number of cancelled
             * tasks.
             * <p>Note that it is permissible to call this method from within a
             * a task scheduled on this timer.
             */
            // @ts-ignore
            public purge(): number;
        }
    }
}
