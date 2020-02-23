declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace level {
                // @ts-ignore
                 class ChunkUnloadEvent extends cn.nukkit.event.level.ChunkEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
