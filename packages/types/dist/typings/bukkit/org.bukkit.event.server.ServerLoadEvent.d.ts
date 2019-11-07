// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class ServerLoadEvent extends org.bukkit.event.server.ServerEvent {
                    /**
                     * Creates a {@code ServerLoadEvent} with a given loading type.
                     */
                    // @ts-ignore
                    constructor(type: org.bukkit.event.server.ServerLoadEvent.LoadType)
                    /**
                     * Gets the context in which the server was loaded.
                     */
                    // @ts-ignore
                    public getType(): org.bukkit.event.server.ServerLoadEvent.LoadType;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
