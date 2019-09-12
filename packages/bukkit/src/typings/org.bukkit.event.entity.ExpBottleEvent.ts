declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class ExpBottleEvent {
                    constructor(bottle: org.bukkit.entity.ThrownExpBottle, exp: number)
                    public getEntity(): org.bukkit.entity.ThrownExpBottle;
                    /**
                     * This method indicates if the particle effect should be shown.
                     */
                    public getShowEffect(): boolean;
                    /**
                     * This method sets if the particle effect will be shown.
                     * <p>
                     * This does not change the experience created.
                     */
                    public setShowEffect(showEffect: boolean): void;
                    /**
                     * This method retrieves the amount of experience to be created.
                     * <p>
                     * The number indicates a total amount to be divided into orbs.
                     */
                    public getExperience(): number;
                    /**
                     * This method sets the amount of experience to be created.
                     * <p>
                     * The number indicates a total amount to be divided into orbs.
                     */
                    public setExperience(exp: number): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
