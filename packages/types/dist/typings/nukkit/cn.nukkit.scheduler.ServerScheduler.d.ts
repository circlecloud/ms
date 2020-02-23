declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
             class ServerScheduler extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static WORKERS: number;
                // @ts-ignore
                public scheduleTask(task: cn.nukkit.scheduler.Task): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleTask(task: java.lang.Runnable): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleTask(task: java.lang.Runnable, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleAsyncTask(task: cn.nukkit.scheduler.AsyncTask): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleAsyncTask(plugin: cn.nukkit.plugin.Plugin, task: cn.nukkit.scheduler.AsyncTask): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleAsyncTaskToWorker(task: cn.nukkit.scheduler.AsyncTask, worker: number): void;
                // @ts-ignore
                public getAsyncTaskPoolSize(): number;
                // @ts-ignore
                public increaseAsyncTaskPoolSize(newSize: number): void;
                // @ts-ignore
                public scheduleDelayedTask(task: cn.nukkit.scheduler.Task, delay: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedTask(task: cn.nukkit.scheduler.Task, delay: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedTask(task: java.lang.Runnable, delay: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, delay: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedTask(task: java.lang.Runnable, delay: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, delay: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleRepeatingTask(task: java.lang.Runnable, period: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleRepeatingTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, period: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleRepeatingTask(task: java.lang.Runnable, period: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleRepeatingTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, period: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleRepeatingTask(task: cn.nukkit.scheduler.Task, period: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleRepeatingTask(task: cn.nukkit.scheduler.Task, period: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedRepeatingTask(task: cn.nukkit.scheduler.Task, delay: number, period: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedRepeatingTask(task: cn.nukkit.scheduler.Task, delay: number, period: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedRepeatingTask(task: java.lang.Runnable, delay: number, period: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedRepeatingTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, delay: number, period: number): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedRepeatingTask(task: java.lang.Runnable, delay: number, period: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public scheduleDelayedRepeatingTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, delay: number, period: number, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public cancelTask(taskId: number): void;
                // @ts-ignore
                public cancelTask(plugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public cancelAllTasks(): void;
                // @ts-ignore
                public isQueued(taskId: number): boolean;
                // @ts-ignore
                public mainThreadHeartbeat(currentTick: number): void;
                // @ts-ignore
                public getQueueSize(): number;
            }
        }
    }
}
