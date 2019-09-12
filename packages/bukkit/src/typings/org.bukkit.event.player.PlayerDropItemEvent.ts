declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerDropItemEvent {
                    constructor(player: org.bukkit.entity.Player, drop: org.bukkit.entity.Item)
                    /**
                     * Gets the ItemDrop created by the player
                     */
                    public getItemDrop(): org.bukkit.entity.Item;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
