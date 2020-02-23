declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace level {
                // @ts-ignore
                abstract class ChunkEvent extends cn.nukkit.event.level.LevelEvent {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk)
                    // @ts-ignore
                    public getChunk(): cn.nukkit.level.format.FullChunk;
                }
            }
        }
    }
}
