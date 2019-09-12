declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                abstract class HangingEvent {
                    constructor(painting: org.bukkit.entity.Hanging)
                    protected hanging: org.bukkit.entity.Hanging;
                    /**
                     * Gets the hanging entity involved in this event.
                     */
                    public getEntity(): org.bukkit.entity.Hanging;
                }
            }
        }
    }
}
