declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                class ThunderChangeEvent {
                    constructor(world: org.bukkit.World, to: boolean)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the state of thunder that the world is being set to
                     */
                    public toThunderState(): boolean;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
