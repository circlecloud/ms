declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                // @ts-ignore
                interface SpongeExecutorService {
                    // @ts-ignore
                     schedule(command: any, delay: number, unit: any): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture;
                    // @ts-ignore
                     schedule(callable: any, delay: number, unit: any): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture;
                    // @ts-ignore
                     scheduleAtFixedRate(command: any, initialDelay: number, period: number, unit: any): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture;
                    // @ts-ignore
                     scheduleWithFixedDelay(command: any, initialDelay: number, delay: number, unit: any): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture;
                }
            }
        }
    }
}
