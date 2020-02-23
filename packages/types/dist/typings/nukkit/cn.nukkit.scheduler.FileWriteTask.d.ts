declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
             class FileWriteTask extends cn.nukkit.scheduler.AsyncTask {
                // @ts-ignore
                constructor(path: string, contents: string)
                // @ts-ignore
                constructor(path: string, contents: number)
                // @ts-ignore
                constructor(path: string, contents: java.io.InputStream)
                // @ts-ignore
                constructor(file: java.io.File, contents: string)
                // @ts-ignore
                constructor(file: java.io.File, contents: number)
                // @ts-ignore
                constructor(file: java.io.File, contents: java.io.InputStream)
                // @ts-ignore
                public onRun(): void;
            }
        }
    }
}
