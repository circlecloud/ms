declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
            abstract class AsyncTask extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static FINISHED_LIST: java.util.Queue;
                // @ts-ignore
                public run(): void;
                // @ts-ignore
                public isFinished(): boolean;
                // @ts-ignore
                public getResult(): java.lang.Object;
                // @ts-ignore
                public hasResult(): boolean;
                // @ts-ignore
                public setResult(result: java.lang.Object): void;
                // @ts-ignore
                public setTaskId(taskId: number): void;
                // @ts-ignore
                public getTaskId(): number;
                // @ts-ignore
                public getFromThreadStore(identifier: string): java.lang.Object;
                // @ts-ignore
                public saveToThreadStore(identifier: string, value: java.lang.Object): void;
                // @ts-ignore
                public abstract onRun(): void;
                // @ts-ignore
                public onCompletion(server: cn.nukkit.Server): void;
                // @ts-ignore
                public cleanObject(): void;
                // @ts-ignore
                public static collectTask(): void;
            }
        }
    }
}
