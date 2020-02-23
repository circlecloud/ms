declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace weather {
                // @ts-ignore
                 class ThunderChangeEvent extends cn.nukkit.event.weather.WeatherEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(level: cn.nukkit.level.Level, to: boolean)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    /**
                     * Gets the state of thunder that the world is being set to
                     */
                    // @ts-ignore
                    public toThunderState(): boolean;
                }
            }
        }
    }
}
