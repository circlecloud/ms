declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityBreedEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(child: org.bukkit.entity.LivingEntity, mother: org.bukkit.entity.LivingEntity, father: org.bukkit.entity.LivingEntity, breeder: org.bukkit.entity.LivingEntity, bredWith: org.bukkit.inventory.ItemStack, experience: number)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the parent creating this entity.
                     */
                    // @ts-ignore
                    public getMother(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the other parent of the newly born entity.
                     */
                    // @ts-ignore
                    public getFather(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the Entity responsible for breeding. Breeder is null for spontaneous
                     * conception.
                     */
                    // @ts-ignore
                    public getBreeder(): org.bukkit.entity.LivingEntity;
                    /**
                     * The ItemStack that was used to initiate breeding, if present.
                     */
                    // @ts-ignore
                    public getBredWith(): org.bukkit.inventory.ItemStack;
                    /**
                     * Get the amount of experience granted by breeding.
                     */
                    // @ts-ignore
                    public getExperience(): number;
                    /**
                     * Set the amount of experience granted by breeding.
                     */
                    // @ts-ignore
                    public setExperience(experience: number): void;
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
