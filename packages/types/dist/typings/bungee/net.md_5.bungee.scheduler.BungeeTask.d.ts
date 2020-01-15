declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace scheduler {
                // @ts-ignore
                 class BungeeTask extends java.lang.Object {
                    // @ts-ignore
                    constructor(sched: net.md_5.bungee.scheduler.BungeeScheduler, id: number, owner: Plugin, task: java.lang.Runnable, delay: number, period: number, unit: java.util.concurrent.TimeUnit)
                    // @ts-ignore
                    public cancel(): void;
                    // @ts-ignore
                    public run(): void;
                    // @ts-ignore
                    public getSched(): net.md_5.bungee.scheduler.BungeeScheduler;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public getOwner(): Plugin;
                    // @ts-ignore
                    public getTask(): java.lang.Runnable;
                    // @ts-ignore
                    public getDelay(): number;
                    // @ts-ignore
                    public getPeriod(): number;
                    // @ts-ignore
                    public getRunning(): java.util.concurrent.atomic.AtomicBoolean;
                    // @ts-ignore
                    public equals(o: java.lang.Object): boolean;
                    // @ts-ignore
                    protected canEqual(other: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
