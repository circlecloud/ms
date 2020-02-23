declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
             class TaskHandler extends java.lang.Object {
                // @ts-ignore
                constructor(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, taskId: number, asynchronous: boolean)
                // @ts-ignore
                public timing: any /*co.aikar.timings.Timing*/;
                // @ts-ignore
                public isCancelled(): boolean;
                // @ts-ignore
                public getNextRunTick(): number;
                // @ts-ignore
                public setNextRunTick(nextRunTick: number): void;
                // @ts-ignore
                public getTaskId(): number;
                // @ts-ignore
                public getTask(): java.lang.Runnable;
                // @ts-ignore
                public getDelay(): number;
                // @ts-ignore
                public isDelayed(): boolean;
                // @ts-ignore
                public isRepeating(): boolean;
                // @ts-ignore
                public getPeriod(): number;
                // @ts-ignore
                public getPlugin(): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public getLastRunTick(): number;
                // @ts-ignore
                public setLastRunTick(lastRunTick: number): void;
                // @ts-ignore
                public cancel(): void;
                // @ts-ignore
                public remove(): void;
                // @ts-ignore
                public run(currentTick: number): void;
                // @ts-ignore
                public getTaskName(): string;
                // @ts-ignore
                public isAsynchronous(): boolean;
                // @ts-ignore
                public setDelay(delay: number): void;
                // @ts-ignore
                public setPeriod(period: number): void;
            }
        }
    }
}
