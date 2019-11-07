declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                namespace Task {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets whether the task should run asynchronous, outside of the main
                         * loop, and in it's own thread. By default, tasks are synchronous.
                         * <p>A synchronous task is ran in alignment with the game's main loop,
                         * in the same thread. Each synchronous task is ran in series with the
                         * tick cycle. It is safe to manipulate game data when running in this
                         * mode.</p>
                         * <p>In contrast, a task set to run asynchronously will run
                         * independently of the tick cycle and in it's own thread. Therefore the
                         * task is <b>not thread safe</b> with game data and care must be taken.
                         * It is strongly advised to <b>not</b> manipulate game data in
                         * asynchronous tasks.</p>
                         * <p>It is not possible to schedule a task in unit ticks when running
                         * asynchronously. If the delay or interval is specified in ticks, it
                         * will be converted to the equivalent wall clock time by multiplying
                         * the value by {@link Scheduler#getPreferredTickInterval()}.</p>
                         */
                        // @ts-ignore
                         async(): org.spongepowered.api.scheduler.Task.Builder;
                        /**
                         * Sets the {@link Runnable} to run when this task executes.
                         */
                        // @ts-ignore
                         execute(runnable: java.lang.Runnable): org.spongepowered.api.scheduler.Task.Builder;
                        /**
                         * Sets the consumer that runs when this task executes.
                         */
                        // @ts-ignore
                         execute(executor: java.util.function$.Consumer): org.spongepowered.api.scheduler.Task.Builder;
                        /**
                         * Sets the delay before the task runs. This delay is an initial offset,
                         * subsequent runs (when the interval is not 0) will not be offset. By
                         * default, the delay is 0.
                         */
                        // @ts-ignore
                         delay(delay: number, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.Task.Builder;
                        /**
                         * Sets the delay before the task runs, in unit ticks.
                         */
                        // @ts-ignore
                         delayTicks(ticks: number): org.spongepowered.api.scheduler.Task.Builder;
                        /**
                         * Sets the interval between repetitions of the task. The task will not
                         * repeat if the interval is 0. By default, the interval is 0.
                         * <p>If the scheduler detects that two tasks will overlap, the 2nd task
                         * will not be started. The next time the task is due to run, the test
                         * will be made again to determine if the previous occurrence of the
                         * task is still alive (running). As long as a previous occurrence is
                         * running no new occurrences of that specific task will start, although
                         * the scheduler will never cease in trying to start it a 2nd time.</p>
                         */
                        // @ts-ignore
                         interval(interval: number, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.Task.Builder;
                        /**
                         * Sets the interval in unit ticks between repetitions of the task.
                         */
                        // @ts-ignore
                         intervalTicks(ticks: number): org.spongepowered.api.scheduler.Task.Builder;
                        /**
                         * Sets the name of the task, the name cannot be blank.
                         * <p>If the name is not set in the builder, the name of the task
                         * will be the form:<br> <tt>PLUGIN_ID "-" ( "A-" | "S-" ) SERIAL_ID
                         * </tt></p>
                         * <p>Examples of default Task names:<br>
                         * <tt>"FooPlugin-A-12"</tt><br><tt>"BarPlugin-S-4322"</tt></p>
                         * <p>No two active tasks will have the same serial ID for the same
                         * synchronisation type.<br>i.e <tt>APlugin-A-15</tt> and
                         * <tt>BPlugin-A-15</tt> is not possible but <tt>BPlugin-S-15</tt>
                         * is.</p>
                         */
                        // @ts-ignore
                         name(name: string): org.spongepowered.api.scheduler.Task.Builder;
                        /**
                         * Submits the task to the scheduler and returns the task that was
                         * created.
                         */
                        // @ts-ignore
                         submit(plugin: java.lang.Object): org.spongepowered.api.scheduler.Task;
                    }
                }
            }
        }
    }
}
