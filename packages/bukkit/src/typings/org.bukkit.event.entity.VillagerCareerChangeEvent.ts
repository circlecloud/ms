declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class VillagerCareerChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.Villager, profession: org.bukkit.entity.Villager.Profession, reason: org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason)
                    public getEntity(): org.bukkit.entity.Villager;
                    /**
                     * Gets the future profession of the villager.
                     */
                    public getProfession(): org.bukkit.entity.Villager.Profession;
                    /**
                     * Sets the profession the villager will become from this event.
                     */
                    public setProfession(profession: org.bukkit.entity.Villager.Profession): void;
                    /**
                     * Gets the reason for why the villager's career is changing.
                     */
                    public getReason(): org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
