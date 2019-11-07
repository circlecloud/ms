declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ExpBottleEvent extends org.bukkit.event.entity.ProjectileHitEvent {
                    // @ts-ignore
                    constructor(bottle: org.bukkit.entity.ThrownExpBottle, exp: number)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.ThrownExpBottle;
                    /**
                     * This method indicates if the particle effect should be shown.
                     */
                    // @ts-ignore
                    public getShowEffect(): boolean;
                    /**
                     * This method sets if the particle effect will be shown.
                     * <p>
                     * This does not change the experience created.
                     */
                    // @ts-ignore
                    public setShowEffect(showEffect: boolean): void;
                    /**
                     * This method retrieves the amount of experience to be created.
                     * <p>
                     * The number indicates a total amount to be divided into orbs.
                     */
                    // @ts-ignore
                    public getExperience(): number;
                    /**
                     * This method sets the amount of experience to be created.
                     * <p>
                     * The number indicates a total amount to be divided into orbs.
                     */
                    // @ts-ignore
                    public setExperience(exp: number): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
