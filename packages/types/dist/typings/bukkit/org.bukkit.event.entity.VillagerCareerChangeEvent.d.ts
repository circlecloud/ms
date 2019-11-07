declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class VillagerCareerChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Villager, profession: org.bukkit.entity.Villager.Profession, reason: org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Villager;
                    /**
                     * Gets the future profession of the villager.
                     */
                    // @ts-ignore
                    public getProfession(): org.bukkit.entity.Villager.Profession;
                    /**
                     * Sets the profession the villager will become from this event.
                     */
                    // @ts-ignore
                    public setProfession(profession: org.bukkit.entity.Villager.Profession): void;
                    /**
                     * Gets the reason for why the villager's career is changing.
                     */
                    // @ts-ignore
                    public getReason(): org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
