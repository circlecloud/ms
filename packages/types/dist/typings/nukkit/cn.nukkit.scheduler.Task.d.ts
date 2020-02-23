declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
            abstract class Task extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getHandler(): cn.nukkit.scheduler.TaskHandler;
                // @ts-ignore
                public getTaskId(): number;
                // @ts-ignore
                public setHandler(taskHandler: cn.nukkit.scheduler.TaskHandler): void;
                /**
                 * 这个任务被执行时，会调用的过程。<br>
                 * What will be called when the task is executed.
                 */
                // @ts-ignore
                public abstract onRun(currentTick: number): void;
                // @ts-ignore
                public run(): void;
                // @ts-ignore
                public onCancel(): void;
                // @ts-ignore
                public cancel(): void;
            }
        }
    }
}
