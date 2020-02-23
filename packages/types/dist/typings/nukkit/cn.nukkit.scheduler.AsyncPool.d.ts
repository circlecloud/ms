declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
             class AsyncPool extends java.util.concurrent.ThreadPoolExecutor {
                // @ts-ignore
                constructor(server: cn.nukkit.Server, size: number)
                // @ts-ignore
                protected afterExecute(runnable: java.lang.Runnable, throwable: java.lang.Throwable): void;
                // @ts-ignore
                public getServer(): cn.nukkit.Server;
            }
        }
    }
}
