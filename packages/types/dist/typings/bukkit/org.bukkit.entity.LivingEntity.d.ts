declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface LivingEntity extends org.bukkit.attribute.Attributable, org.bukkit.entity.Damageable, org.bukkit.projectiles.ProjectileSource {
                /**
                 * Gets the height of the living entity's eyes above its Location.
                 */
                // @ts-ignore
                 getEyeHeight(): number;
                /**
                 * Gets the height of the living entity's eyes above its Location.
                 */
                // @ts-ignore
                 getEyeHeight(ignorePose: boolean): number;
                /**
                 * Get a Location detailing the current eye position of the living entity.
                 */
                // @ts-ignore
                 getEyeLocation(): org.bukkit.Location;
                /**
                 * Gets all blocks along the living entity's line of sight.
                 * <p>
                 * This list contains all blocks from the living entity's eye position to
                 * target inclusive. This method considers all blocks as 1x1x1 in size.
                 */
                // @ts-ignore
                 getLineOfSight(transparent: java.util.Set, maxDistance: number): java.util.List;
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This method considers all blocks as 1x1x1 in size. To take exact block
                 * collision shapes into account, see {@link #getTargetBlockExact(int,
                 * FluidCollisionMode)}.
                 */
                // @ts-ignore
                 getTargetBlock(transparent: java.util.Set, maxDistance: number): org.bukkit.block.Block;
                /**
                 * Gets the last two blocks along the living entity's line of sight.
                 * <p>
                 * The target block will be the last block in the list. This method
                 * considers all blocks as 1x1x1 in size.
                 */
                // @ts-ignore
                 getLastTwoTargetBlocks(transparent: java.util.Set, maxDistance: number): java.util.List;
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This takes the blocks' precise collision shapes into account. Fluids are
                 * ignored.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 */
                // @ts-ignore
                 getTargetBlockExact(maxDistance: number): org.bukkit.block.Block;
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This takes the blocks' precise collision shapes into account.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 */
                // @ts-ignore
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
                // @ts-ignore
                 rayTraceBlocks(maxDistance: number): org.bukkit.util.RayTraceResult;
                /**
                 * Performs a ray trace that provides information on the targeted block.
                 * <p>
                 * This takes the blocks' precise collision shapes into account.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 */
                // @ts-ignore
                 rayTraceBlocks(maxDistance: number, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.util.RayTraceResult;
                /**
                 * Returns the amount of air that the living entity has remaining, in
                 * ticks.
                 */
                // @ts-ignore
                 getRemainingAir(): number;
                /**
                 * Sets the amount of air that the living entity has remaining, in ticks.
                 */
                // @ts-ignore
                 setRemainingAir(ticks: number): void;
                /**
                 * Returns the maximum amount of air the living entity can have, in ticks.
                 */
                // @ts-ignore
                 getMaximumAir(): number;
                /**
                 * Sets the maximum amount of air the living entity can have, in ticks.
                 */
                // @ts-ignore
                 setMaximumAir(ticks: number): void;
                /**
                 * Returns the living entity's current maximum no damage ticks.
                 * <p>
                 * This is the maximum duration in which the living entity will not take
                 * damage.
                 */
                // @ts-ignore
                 getMaximumNoDamageTicks(): number;
                /**
                 * Sets the living entity's current maximum no damage ticks.
                 */
                // @ts-ignore
                 setMaximumNoDamageTicks(ticks: number): void;
                /**
                 * Returns the living entity's last damage taken in the current no damage
                 * ticks time.
                 * <p>
                 * Only damage higher than this amount will further damage the living
                 * entity.
                 */
                // @ts-ignore
                 getLastDamage(): number;
                /**
                 * Sets the damage dealt within the current no damage ticks time period.
                 */
                // @ts-ignore
                 setLastDamage(damage: number): void;
                /**
                 * Returns the living entity's current no damage ticks.
                 */
                // @ts-ignore
                 getNoDamageTicks(): number;
                /**
                 * Sets the living entity's current no damage ticks.
                 */
                // @ts-ignore
                 setNoDamageTicks(ticks: number): void;
                /**
                 * Gets the player identified as the killer of the living entity.
                 * <p>
                 * May be null.
                 */
                // @ts-ignore
                 getKiller(): org.bukkit.entity.Player;
                /**
                 * Adds the given {@link PotionEffect} to the living entity.
                 * <p>
                 * Only one potion effect can be present for a given {@link
                 * PotionEffectType}.
                 */
                // @ts-ignore
                 addPotionEffect(effect: org.bukkit.potion.PotionEffect): boolean;
                /**
                 * Adds the given {@link PotionEffect} to the living entity.
                 * <p>
                 * Only one potion effect can be present for a given {@link
                 * PotionEffectType}.
                 */
                // @ts-ignore
                 addPotionEffect(effect: org.bukkit.potion.PotionEffect, force: boolean): boolean;
                /**
                 * Attempts to add all of the given {@link PotionEffect} to the living
                 * entity.
                 */
                // @ts-ignore
                 addPotionEffects(effects: java.util.Collection): boolean;
                /**
                 * Returns whether the living entity already has an existing effect of
                 * the given {@link PotionEffectType} applied to it.
                 */
                // @ts-ignore
                 hasPotionEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Returns the active {@link PotionEffect} of the specified type.
                 * <p>
                 * If the effect is not present on the entity then null will be returned.
                 */
                // @ts-ignore
                 getPotionEffect(type: org.bukkit.potion.PotionEffectType): org.bukkit.potion.PotionEffect;
                /**
                 * Removes any effects present of the given {@link PotionEffectType}.
                 */
                // @ts-ignore
                 removePotionEffect(type: org.bukkit.potion.PotionEffectType): void;
                /**
                 * Returns all currently active {@link PotionEffect}s on the living
                 * entity.
                 */
                // @ts-ignore
                 getActivePotionEffects(): java.util.Collection;
                /**
                 * Checks whether the living entity has block line of sight to another.
                 * <p>
                 * This uses the same algorithm that hostile mobs use to find the closest
                 * player.
                 */
                // @ts-ignore
                 hasLineOfSight(other: org.bukkit.entity.Entity): boolean;
                /**
                 * Returns if the living entity despawns when away from players or not.
                 * <p>
                 * By default, animals are not removed while other mobs are.
                 */
                // @ts-ignore
                 getRemoveWhenFarAway(): boolean;
                /**
                 * Sets whether or not the living entity despawns when away from players
                 * or not.
                 */
                // @ts-ignore
                 setRemoveWhenFarAway(remove: boolean): void;
                /**
                 * Gets the inventory with the equipment worn by the living entity.
                 */
                // @ts-ignore
                 getEquipment(): org.bukkit.inventory.EntityEquipment;
                /**
                 * Sets whether or not the living entity can pick up items.
                 */
                // @ts-ignore
                 setCanPickupItems(pickup: boolean): void;
                /**
                 * Gets if the living entity can pick up items.
                 */
                // @ts-ignore
                 getCanPickupItems(): boolean;
                /**
                 * Returns whether the entity is currently leashed.
                 */
                // @ts-ignore
                 isLeashed(): boolean;
                /**
                 * Gets the entity that is currently leading this entity.
                 */
                // @ts-ignore
                 getLeashHolder(): org.bukkit.entity.Entity;
                /**
                 * Sets the leash on this entity to be held by the supplied entity.
                 * <p>
                 * This method has no effect on EnderDragons, Withers, Players, or Bats.
                 * Non-living entities excluding leashes will not persist as leash
                 * holders.
                 */
                // @ts-ignore
                 setLeashHolder(holder: org.bukkit.entity.Entity): boolean;
                /**
                 * Checks to see if an entity is gliding, such as using an Elytra.
                 */
                // @ts-ignore
                 isGliding(): boolean;
                /**
                 * Makes entity start or stop gliding. This will work even if an Elytra
                 * is not equipped, but will be reverted by the server immediately after
                 * unless an event-cancelling mechanism is put in place.
                 */
                // @ts-ignore
                 setGliding(gliding: boolean): void;
                /**
                 * Checks to see if an entity is swimming.
                 */
                // @ts-ignore
                 isSwimming(): boolean;
                /**
                 * Makes entity start or stop swimming.
                 * This may have unexpected results if the entity is not in water.
                 */
                // @ts-ignore
                 setSwimming(swimming: boolean): void;
                /**
                 * Checks to see if an entity is currently using the Riptide enchantment.
                 */
                // @ts-ignore
                 isRiptiding(): boolean;
                /**
                 * Returns whether this entity is slumbering.
                 */
                // @ts-ignore
                 isSleeping(): boolean;
                /**
                 * Sets whether an entity will have AI.
                 */
                // @ts-ignore
                 setAI(ai: boolean): void;
                /**
                 * Checks whether an entity has AI.
                 */
                // @ts-ignore
                 hasAI(): boolean;
                /**
                 * Set if this entity will be subject to collisions other entities.
                 * <p>
                 * Note that collisions are bidirectional, so this method would need to be
                 * set to false on both the collidee and the collidant to ensure no
                 * collisions take place.
                 */
                // @ts-ignore
                 setCollidable(collidable: boolean): void;
                /**
                 * Gets if this entity is subject to collisions with other entities.
                 * <p>
                 * Please note that this method returns only the custom collidable state,
                 * not whether the entity is non-collidable for other reasons such as being
                 * dead.
                 */
                // @ts-ignore
                 isCollidable(): boolean;
                /**
                 * Returns the value of the memory specified.
                 * <p>
                 * Note that the value is null when the specific entity does not have that
                 * value by default.
                 */
                // @ts-ignore
                 getMemory(memoryKey: org.bukkit.entity.memory.MemoryKey): java.lang.Object;
                /**
                 * Sets the value of the memory specified.
                 * <p>
                 * Note that the value will not be persisted when the specific entity does
                 * not have that value by default.
                 */
                // @ts-ignore
                 setMemory(memoryKey: org.bukkit.entity.memory.MemoryKey, memoryValue: java.lang.Object): void;
            }
        }
    }
}
