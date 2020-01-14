declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace scheduler {
                // @ts-ignore
                 class BungeeScheduler extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public cancel(id: number): void;
                    // @ts-ignore
                    public cancel(task: ScheduledTask): void;
                    // @ts-ignore
                    public cancel(plugin: Plugin): number;
                    // @ts-ignore
                    public runAsync(owner: Plugin, task: java.lang.Runnable): ScheduledTask;
                    // @ts-ignore
                    public schedule(owner: Plugin, task: java.lang.Runnable, delay: number, unit: java.util.concurrent.TimeUnit): ScheduledTask;
                    // @ts-ignore
                    public schedule(owner: Plugin, task: java.lang.Runnable, delay: number, period: number, unit: java.util.concurrent.TimeUnit): ScheduledTask;
                    // @ts-ignore
                    public unsafe(): Unsafe;
                }
            }
        }
    }
}
