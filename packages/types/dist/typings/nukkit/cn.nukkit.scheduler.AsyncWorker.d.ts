declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
             class AsyncWorker extends java.lang.Thread implements cn.nukkit.InterruptibleThread {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public stack(task: cn.nukkit.scheduler.AsyncTask): void;
                // @ts-ignore
                public unstack(): void;
                // @ts-ignore
                public unstack(task: cn.nukkit.scheduler.AsyncTask): void;
                // @ts-ignore
                public run(): void;
            }
        }
    }
}
