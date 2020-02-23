declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace task {
                    // @ts-ignore
                     class PopulationTask extends cn.nukkit.scheduler.AsyncTask {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.Level, chunk: cn.nukkit.level.format.generic.BaseFullChunk)
                        // @ts-ignore
                        public chunks: cn.nukkit.level.format.generic.BaseFullChunk[];
                        // @ts-ignore
                        public onRun(): void;
                        // @ts-ignore
                        public onCompletion(server: cn.nukkit.Server): void;
                    }
                }
            }
        }
    }
}
