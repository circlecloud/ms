declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class MapInitializeEvent extends org.bukkit.event.server.ServerEvent {
                    constructor(mapView: org.bukkit.map.MapView)
                    /**
                     * Gets the map initialized in this event.
                     */
                    public getMap(): org.bukkit.map.MapView;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
