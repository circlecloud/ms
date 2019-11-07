// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                // @ts-ignore
                interface Scheduler {
                    /**
                     * Gets a new instance of a {@link Task.Builder}.
                     */
                    // @ts-ignore
                     createTaskBuilder(): org.spongepowered.api.scheduler.Task.Builder;
                    /**
                     * Retrieves a scheduled or running task by its unique ID.
                     */
                    // @ts-ignore
                     getTaskById(id: java.util.UUID): java.util.Optional;
                    /**
                     * Returns a set of {@link Task}s that match the Regular Expression pattern.
                     */
                    // @ts-ignore
                     getTasksByName(pattern: string): java.util.Set;
                    /**
                     * Returns a set of all currently scheduled tasks.
                     */
                    // @ts-ignore
                     getScheduledTasks(): java.util.Set;
                    /**
                     * Returns a set of all currently scheduled tasks for either asynchronous or
                     * synchronous execution.
                     */
                    // @ts-ignore
                     getScheduledTasks(async: boolean): java.util.Set;
                    /**
                     * Returns a set of all currently scheduled tasks owned by the given plugin.
                     */
                    // @ts-ignore
                     getScheduledTasks(plugin: java.lang.Object): java.util.Set;
                    /**
                     * Gets the ideal delay between ticks in milliseconds. The server aims to
                     * stabilise at this value.
                     */
                    // @ts-ignore
                     getPreferredTickInterval(): number;
                    /**
                     * Creates a new {@link ExecutorService} that can be used to schedule
                     * synchronous tasks through the standard Java concurrency interfaces.
                     */
                    // @ts-ignore
                     createSyncExecutor(plugin: java.lang.Object): org.spongepowered.api.scheduler.SpongeExecutorService;
                    /**
                     * Creates a new {@link ExecutorService} that can be used to schedule
                     * asynchronous tasks through the standard Java concurrency interfaces.
                     */
                    // @ts-ignore
                     createAsyncExecutor(plugin: java.lang.Object): org.spongepowered.api.scheduler.SpongeExecutorService;
                }
            }
        }
    }
}
