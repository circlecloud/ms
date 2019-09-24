declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityBreedEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    constructor(child: org.bukkit.entity.LivingEntity, mother: org.bukkit.entity.LivingEntity, father: org.bukkit.entity.LivingEntity, breeder: org.bukkit.entity.LivingEntity, bredWith: org.bukkit.inventory.ItemStack, experience: number)
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the parent creating this entity.
                     */
                    public getMother(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the other parent of the newly born entity.
                     */
                    public getFather(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the Entity responsible for breeding. Breeder is null for spontaneous
                     * conception.
                     */
                    public getBreeder(): org.bukkit.entity.LivingEntity;
                    /**
                     * The ItemStack that was used to initiate breeding, if present.
                     */
                    public getBredWith(): org.bukkit.inventory.ItemStack;
                    /**
                     * Get the amount of experience granted by breeding.
                     */
                    public getExperience(): number;
                    /**
                     * Set the amount of experience granted by breeding.
                     */
                    public setExperience(experience: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
