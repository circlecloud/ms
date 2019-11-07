// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                // @ts-ignore
                abstract class WeatherEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(where: org.bukkit.World)
                    // @ts-ignore
                    protected world: org.bukkit.World;
                    /**
                     * Returns the World where this event is occurring
                     */
                    // @ts-ignore
                    public getWorld(): org.bukkit.World;
                }
            }
        }
    }
}
