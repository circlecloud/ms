declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                abstract class WorldEvent {
                    constructor(world: org.bukkit.World)
                    /**
                     * Gets the world primarily involved with this event
                     */
                    public getWorld(): org.bukkit.World;
                }
            }
        }
    }
}
