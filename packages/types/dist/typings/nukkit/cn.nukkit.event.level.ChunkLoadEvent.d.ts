declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace level {
                // @ts-ignore
                 class ChunkLoadEvent extends cn.nukkit.event.level.ChunkEvent {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, newChunk: boolean)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public isNewChunk(): boolean;
                }
            }
        }
    }
}
