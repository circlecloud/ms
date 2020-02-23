declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace level {
                // @ts-ignore
                abstract class WeatherEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(level: cn.nukkit.level.Level)
                    // @ts-ignore
                    public getLevel(): cn.nukkit.level.Level;
                }
            }
        }
    }
}
