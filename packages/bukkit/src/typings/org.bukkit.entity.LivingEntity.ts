declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface LivingEntity extends org.bukkit.attribute.Attributable, org.bukkit.entity.Damageable, org.bukkit.projectiles.ProjectileSource {
                /**
                 * Gets the height of the living entity's eyes above its Location.
                 */
                 getEyeHeight(): number;
                /**
                 * Gets the height of the living entity's eyes above its Location.
                 */
                 getEyeHeight(ignorePose: boolean): number;
                /**
                 * Get a Location detailing the current eye position of the living entity.
                 */
                 getEyeLocation(): org.bukkit.Location;
                /**
                 * Gets all blocks along the living entity's line of sight.
                 * <p>
                 * This list contains all blocks from the living entity's eye position to
                 * target inclusive. This method considers all blocks as 1x1x1 in size.
                 */
                 getLineOfSight(transparent: any[] /*java.util.Set*/, maxDistance: number): any[] /*java.util.List*/;
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This method considers all blocks as 1x1x1 in size. To take exact block
                 * collision shapes into account, see {@link #getTargetBlockExact(int,
                 * FluidCollisionMode)}.
                 */
                 getTargetBlock(transparent: any[] /*java.util.Set*/, maxDistance: number): org.bukkit.block.Block;
                /**
                 * Gets the last two blocks along the living entity's line of sight.
                 * <p>
                 * The target block will be the last block in the list. This method
                 * considers all blocks as 1x1x1 in size.
                 */
                 getLastTwoTargetBlocks(transparent: any[] /*java.util.Set*/, maxDistance: number): any[] /*java.util.List*/;
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This takes the blocks' precise collision shapes into account. Fluids are
                 * ignored.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 */
                 getTargetBlockExact(maxDistance: number): org.bukkit.block.Block;
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This takes the blocks' precise collision shapes into account.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 */
                 getTargetBlockExact(maxDistance: number, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.block.Block;
                /**
                 * Performs a ray trace that provides information on the targeted block.
                 * <p>
                 * This takes the blocks' precise collision shapes into account. Fluids are
                 * ignored.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 */
                 rayTraceBlocks(maxDistance: number): org.bukkit.util.RayTraceResult;
                /**
                 * Performs a ray trace that provides information on the targeted block.
                 * <p>
                 * This takes the blocks' precise collision shapes into account.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 */
                 rayTraceBlocks(maxDistance: number, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.util.RayTraceResult;
                /**
                 * Returns the amount of air that the living entity has remaining, in
                 * ticks.
                 */
                 getRemainingAir(): number;
                /**
                 * Sets the amount of air that the living entity has remaining, in ticks.
                 */
                 setRemainingAir(ticks: number): void;
                /**
                 * Returns the maximum amount of air the living entity can have, in ticks.
                 */
                 getMaximumAir(): number;
                /**
                 * Sets the maximum amount of air the living entity can have, in ticks.
                 */
                 setMaximumAir(ticks: number): void;
                /**
                 * Returns the living entity's current maximum no damage ticks.
                 * <p>
                 * This is the maximum duration in which the living entity will not take
                 * damage.
                 */
                 getMaximumNoDamageTicks(): number;
                /**
                 * Sets the living entity's current maximum no damage ticks.
                 */
                 setMaximumNoDamageTicks(ticks: number): void;
                /**
                 * Returns the living entity's last damage taken in the current no damage
                 * ticks time.
                 * <p>
                 * Only damage higher than this amount will further damage the living
                 * entity.
                 */
                 getLastDamage(): number;
                /**
                 * Sets the damage dealt within the current no damage ticks time period.
                 */
                 setLastDamage(damage: number): void;
                /**
                 * Returns the living entity's current no damage ticks.
                 */
                 getNoDamageTicks(): number;
                /**
                 * Sets the living entity's current no damage ticks.
                 */
                 setNoDamageTicks(ticks: number): void;
                /**
                 * Gets the player identified as the killer of the living entity.
                 * <p>
                 * May be null.
                 */
                 getKiller(): org.bukkit.entity.Player;
                /**
                 * Adds the given {@link PotionEffect} to the living entity.
                 * <p>
                 * Only one potion effect can be present for a given {@link
                 * PotionEffectType}.
                 */
                 addPotionEffect(effect: org.bukkit.potion.PotionEffect): boolean;
                /**
                 * Adds the given {@link PotionEffect} to the living entity.
                 * <p>
                 * Only one potion effect can be present for a given {@link
                 * PotionEffectType}.
                 */
                 addPotionEffect(effect: org.bukkit.potion.PotionEffect, force: boolean): boolean;
                /**
                 * Attempts to add all of the given {@link PotionEffect} to the living
                 * entity.
                 */
                 addPotionEffects(effects: any[] /*java.util.Collection*/): boolean;
                /**
                 * Returns whether the living entity already has an existing effect of
                 * the given {@link PotionEffectType} applied to it.
                 */
                 hasPotionEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Returns the active {@link PotionEffect} of the specified type.
                 * <p>
                 * If the effect is not present on the entity then null will be returned.
                 */
                 getPotionEffect(type: org.bukkit.potion.PotionEffectType): org.bukkit.potion.PotionEffect;
                /**
                 * Removes any effects present of the given {@link PotionEffectType}.
                 */
                 removePotionEffect(type: org.bukkit.potion.PotionEffectType): void;
                /**
                 * Returns all currently active {@link PotionEffect}s on the living
                 * entity.
                 */
                 getActivePotionEffects(): any[] /*java.util.Collection*/;
                /**
                 * Checks whether the living entity has block line of sight to another.
                 * <p>
                 * This uses the same algorithm that hostile mobs use to find the closest
                 * player.
                 */
                 hasLineOfSight(other: org.bukkit.entity.Entity): boolean;
                /**
                 * Returns if the living entity despawns when away from players or not.
                 * <p>
                 * By default, animals are not removed while other mobs are.
                 */
                 getRemoveWhenFarAway(): boolean;
                /**
                 * Sets whether or not the living entity despawns when away from players
                 * or not.
                 */
                 setRemoveWhenFarAway(remove: boolean): void;
                /**
                 * Gets the inventory with the equipment worn by the living entity.
                 */
                 getEquipment(): org.bukkit.inventory.EntityEquipment;
                /**
                 * Sets whether or not the living entity can pick up items.
                 */
                 setCanPickupItems(pickup: boolean): void;
                /**
                 * Gets if the living entity can pick up items.
                 */
                 getCanPickupItems(): boolean;
                /**
                 * Returns whether the entity is currently leashed.
                 */
                 isLeashed(): boolean;
                /**
                 * Gets the entity that is currently leading this entity.
                 */
                 getLeashHolder(): org.bukkit.entity.Entity;
                /**
                 * Sets the leash on this entity to be held by the supplied entity.
                 * <p>
                 * This method has no effect on EnderDragons, Withers, Players, or Bats.
                 * Non-living entities excluding leashes will not persist as leash
                 * holders.
                 */
                 setLeashHolder(holder: org.bukkit.entity.Entity): boolean;
                /**
                 * Checks to see if an entity is gliding, such as using an Elytra.
                 */
                 isGliding(): boolean;
                /**
                 * Makes entity start or stop gliding. This will work even if an Elytra
                 * is not equipped, but will be reverted by the server immediately after
                 * unless an event-cancelling mechanism is put in place.
                 */
                 setGliding(gliding: boolean): void;
                /**
                 * Checks to see if an entity is swimming.
                 */
                 isSwimming(): boolean;
                /**
                 * Makes entity start or stop swimming.
                 * This may have unexpected results if the entity is not in water.
                 */
                 setSwimming(swimming: boolean): void;
                /**
                 * Checks to see if an entity is currently using the Riptide enchantment.
                 */
                 isRiptiding(): boolean;
                /**
                 * Returns whether this entity is slumbering.
                 */
                 isSleeping(): boolean;
                /**
                 * Sets whether an entity will have AI.
                 */
                 setAI(ai: boolean): void;
                /**
                 * Checks whether an entity has AI.
                 */
                 hasAI(): boolean;
                /**
                 * Set if this entity will be subject to collisions other entities.
                 * <p>
                 * Note that collisions are bidirectional, so this method would need to be
                 * set to false on both the collidee and the collidant to ensure no
                 * collisions take place.
                 */
                 setCollidable(collidable: boolean): void;
                /**
                 * Gets if this entity is subject to collisions with other entities.
                 * <p>
                 * Please note that this method returns only the custom collidable state,
                 * not whether the entity is non-collidable for other reasons such as being
                 * dead.
                 */
                 isCollidable(): boolean;
                /**
                 * Returns the value of the memory specified.
                 * <p>
                 * Note that the value is null when the specific entity does not have that
                 * value by default.
                 */
                 getMemory(memoryKey: org.bukkit.entity.memory.MemoryKey): any;
                /**
                 * Sets the value of the memory specified.
                 * <p>
                 * Note that the value will not be persisted when the specific entity does
                 * not have that value by default.
                 */
                 setMemory(memoryKey: org.bukkit.entity.memory.MemoryKey, memoryValue: any): void;
            }
        }
    }
}
