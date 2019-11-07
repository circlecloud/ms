declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                // @ts-ignore
                interface SpongeExecutorService {
                    // @ts-ignore
                     schedule(command: java.lang.Runnable, delay: number, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture;
                    // @ts-ignore
                     schedule(callable: java.util.concurrent.Callable, delay: number, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture;
                    // @ts-ignore
                     scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number, period: number, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture;
                    // @ts-ignore
                     scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number, delay: number, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture;
                }
            }
        }
    }
}
