declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace level {
                // @ts-ignore
                 class ChunkPopulateEvent extends cn.nukkit.event.level.ChunkEvent {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
