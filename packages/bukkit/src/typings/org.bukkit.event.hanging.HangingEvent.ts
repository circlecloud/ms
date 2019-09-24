declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                // @ts-ignore
                abstract class HangingEvent extends org.bukkit.event.Event {
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
