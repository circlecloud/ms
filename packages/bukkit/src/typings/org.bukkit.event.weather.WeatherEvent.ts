declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                // @ts-ignore
                abstract class WeatherEvent {
                    constructor(where: org.bukkit.World)
                    protected world: org.bukkit.World;
                    /**
                     * Returns the World where this event is occurring
                     */
                    public getWorld(): org.bukkit.World;
                }
            }
        }
    }
}
