declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                class ServerLoadEvent {
                    /**
                     * Creates a {@code ServerLoadEvent} with a given loading type.
                     */
                    constructor(type: org.bukkit.event.server.ServerLoadEvent.LoadType)
                    /**
                     * Gets the context in which the server was loaded.
                     */
                    public getType(): org.bukkit.event.server.ServerLoadEvent.LoadType;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
