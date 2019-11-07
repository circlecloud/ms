// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerFishEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, entity: org.bukkit.entity.Entity, hookEntity: org.bukkit.entity.FishHook, state: org.bukkit.event.player.PlayerFishEvent.State)
                    /**
                     * Gets the entity caught by the player.
                     * <p>
                     * If player has fished successfully, the result may be cast to {@link
                     * org.bukkit.entity.Item}.
                     */
                    // @ts-ignore
                    public getCaught(): org.bukkit.entity.Entity;
                    /**
                     * Gets the fishing hook.
                     */
                    // @ts-ignore
                    public getHook(): org.bukkit.entity.FishHook;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the amount of experience received when fishing.
                     * <p>
                     * Note: This value has no default effect unless the event state is {@link
                     * State#CAUGHT_FISH}.
                     */
                    // @ts-ignore
                    public getExpToDrop(): number;
                    /**
                     * Sets the amount of experience received when fishing.
                     * <p>
                     * Note: This value has no default effect unless the event state is {@link
                     * State#CAUGHT_FISH}.
                     */
                    // @ts-ignore
                    public setExpToDrop(amount: number): void;
                    /**
                     * Gets the state of the fishing
                     */
                    // @ts-ignore
                    public getState(): org.bukkit.event.player.PlayerFishEvent.State;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
