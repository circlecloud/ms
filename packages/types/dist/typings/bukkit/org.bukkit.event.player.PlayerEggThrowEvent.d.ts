// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerEggThrowEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, egg: org.bukkit.entity.Egg, hatching: boolean, numHatches: number, hatchingType: org.bukkit.entity.EntityType)
                    /**
                     * Gets the egg involved in this event.
                     */
                    // @ts-ignore
                    public getEgg(): org.bukkit.entity.Egg;
                    /**
                     * Gets whether the egg is hatching or not. Will be what the server
                     * would've done without interaction.
                     */
                    // @ts-ignore
                    public isHatching(): boolean;
                    /**
                     * Sets whether the egg will hatch or not.
                     */
                    // @ts-ignore
                    public setHatching(hatching: boolean): void;
                    /**
                     * Get the type of the mob being hatched (EntityType.CHICKEN by default)
                     */
                    // @ts-ignore
                    public getHatchingType(): org.bukkit.entity.EntityType;
                    /**
                     * Change the type of mob being hatched by the egg
                     */
                    // @ts-ignore
                    public setHatchingType(hatchType: org.bukkit.entity.EntityType): void;
                    /**
                     * Get the number of mob hatches from the egg. By default the number will
                     * be the number the server would've done
                     * <ul>
                     * <li>7/8 chance of being 0
                     * <li>31/256 ~= 1/8 chance to be 1
                     * <li>1/256 chance to be 4
                     * </ul>
                     */
                    // @ts-ignore
                    public getNumHatches(): number;
                    /**
                     * Change the number of mobs coming out of the hatched egg
                     * <p>
                     * The boolean hatching will override this number. Ie. If hatching =
                     * false, this number will not matter
                     */
                    // @ts-ignore
                    public setNumHatches(numHatches: number): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
