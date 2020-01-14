declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace scheduler {
                    // @ts-ignore
                    interface TaskScheduler {
                        /**
                         * Cancel a task to prevent it from executing, or if its a repeating task,
                         * prevent its further execution.
                         */
                        // @ts-ignore
                         cancel(id: number): void;
                        /**
                         * Cancel a task to prevent it from executing, or if its a repeating task,
                         * prevent its further execution.
                         */
                        // @ts-ignore
                         cancel(task: any /*net.md_5.bungee.api.scheduler.ScheduledTask*/): void;
                        /**
                         * Cancel all tasks owned by this plugin, this preventing them from being
                         * executed hereon in.
                         */
                        // @ts-ignore
                         cancel(plugin: any /*net.md_5.bungee.api.plugin.Plugin*/): number;
                        /**
                         * Schedule a task to be executed asynchronously. The task will commence
                         * running as soon as this method returns.
                         */
                        // @ts-ignore
                         runAsync(owner: any /*net.md_5.bungee.api.plugin.Plugin*/, task: java.lang.Runnable): any /*net.md_5.bungee.api.scheduler.ScheduledTask*/;
                        /**
                         * Schedules a task to be executed asynchronously after the specified delay
                         * is up.
                         */
                        // @ts-ignore
                         schedule(owner: any /*net.md_5.bungee.api.plugin.Plugin*/, task: java.lang.Runnable, delay: number, unit: java.util.concurrent.TimeUnit): any /*net.md_5.bungee.api.scheduler.ScheduledTask*/;
                        /**
                         * Schedules a task to be executed asynchronously after the specified delay
                         * is up. The scheduled task will continue running at the specified
                         * interval. The interval will not begin to count down until the last task
                         * invocation is complete.
                         */
                        // @ts-ignore
                         schedule(owner: any /*net.md_5.bungee.api.plugin.Plugin*/, task: java.lang.Runnable, delay: number, period: number, unit: java.util.concurrent.TimeUnit): any /*net.md_5.bungee.api.scheduler.ScheduledTask*/;
                        /**
                         * Get the unsafe methods of this class.
                         */
                        // @ts-ignore
                         unsafe(): any /*net.md_5.bungee.api.scheduler.TaskScheduler.Unsafe*/;
                    }
                }
            }
        }
    }
}
