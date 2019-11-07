declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                // @ts-ignore
                abstract class HangingEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(painting: org.bukkit.entity.Hanging)
                    // @ts-ignore
                    protected hanging: org.bukkit.entity.Hanging;
                    /**
                     * Gets the hanging entity involved in this event.
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Hanging;
                }
            }
        }
    }
}
