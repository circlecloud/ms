declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerRecipeDiscoverEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(who: org.bukkit.entity.Player, recipe: org.bukkit.NamespacedKey)
                    /**
                     * Get the namespaced key of the discovered recipe.
                     */
                    public getRecipe(): org.bukkit.NamespacedKey;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
