declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerFishEvent {
                    constructor(player: org.bukkit.entity.Player, entity: org.bukkit.entity.Entity, hookEntity: org.bukkit.entity.FishHook, state: org.bukkit.event.player.PlayerFishEvent.State)
                    /**
                     * Gets the entity caught by the player.
                     * <p>
                     * If player has fished successfully, the result may be cast to {@link
                     * org.bukkit.entity.Item}.
                     */
                    public getCaught(): org.bukkit.entity.Entity;
                    /**
                     * Gets the fishing hook.
                     */
                    public getHook(): org.bukkit.entity.FishHook;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the amount of experience received when fishing.
                     * <p>
                     * Note: This value has no default effect unless the event state is {@link
                     * State#CAUGHT_FISH}.
                     */
                    public getExpToDrop(): number;
                    /**
                     * Sets the amount of experience received when fishing.
                     * <p>
                     * Note: This value has no default effect unless the event state is {@link
                     * State#CAUGHT_FISH}.
                     */
                    public setExpToDrop(amount: number): void;
                    /**
                     * Gets the state of the fishing
                     */
                    public getState(): org.bukkit.event.player.PlayerFishEvent.State;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
