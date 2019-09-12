declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                class WorldUnloadEvent {
                    constructor(world: org.bukkit.World)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
