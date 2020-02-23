declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace level {
                // @ts-ignore
                 class SpawnChangeEvent extends cn.nukkit.event.level.LevelEvent {
                    // @ts-ignore
                    constructor(level: cn.nukkit.level.Level, previousSpawn: cn.nukkit.level.Position)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPreviousSpawn(): cn.nukkit.level.Position;
                }
            }
        }
    }
}
