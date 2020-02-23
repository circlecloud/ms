declare namespace cn {
    namespace nukkit {
        namespace network {
            // @ts-ignore
             class CompressBatchedPacket extends cn.nukkit.scheduler.AsyncTask {
                // @ts-ignore
                constructor(data: number, targets: java.util.List)
                // @ts-ignore
                constructor(data: number, targets: java.util.List, level: number)
                // @ts-ignore
                constructor(data: number, targets: java.util.List, level: number, channel: number)
                // @ts-ignore
                public level: number;
                // @ts-ignore
                public data: number[];
                // @ts-ignore
                public finalData: number[];
                // @ts-ignore
                public channel: number;
                // @ts-ignore
                public targets: java.util.List;
                // @ts-ignore
                public onRun(): void;
                // @ts-ignore
                public onCompletion(server: cn.nukkit.Server): void;
            }
        }
    }
}
