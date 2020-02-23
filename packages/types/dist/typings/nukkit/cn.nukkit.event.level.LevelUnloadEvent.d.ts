declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace level {
                // @ts-ignore
                 class LevelUnloadEvent extends cn.nukkit.event.level.LevelEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(level: cn.nukkit.level.Level)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
