declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                namespace SpongeExecutorService {
                    // @ts-ignore
                    interface SpongeFuture {
                        /**
                         * Retrieves the {@link Scheduler} {@link Task} instance that
                         * is responsible for the execution of this future.
                         */
                        // @ts-ignore
                         getTask(): org.spongepowered.api.scheduler.Task;
                    }
                }
            }
        }
    }
}
