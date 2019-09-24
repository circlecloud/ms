declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class SlimeSplitEvent implements org.bukkit.event.Cancellable {
                    constructor(slime: org.bukkit.entity.Slime, count: number)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Slime;
                    /**
                     * Gets the amount of smaller slimes to spawn
                     */
                    public getCount(): number;
                    /**
                     * Sets how many smaller slimes will spawn on the split
                     */
                    public setCount(count: number): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
