// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Entity extends org.bukkit.metadata.Metadatable, org.bukkit.command.CommandSender, org.bukkit.Nameable, org.bukkit.persistence.PersistentDataHolder {
                /**
                 * Gets the entity's current position
                 */
                // @ts-ignore
                 getLocation(): org.bukkit.Location;
                /**
                 * Stores the entity's current position in the provided Location object.
                 * <p>
                 * If the provided Location is null this method does nothing and returns
                 * null.
                 */
                // @ts-ignore
                 getLocation(loc: org.bukkit.Location): org.bukkit.Location;
                /**
                 * Sets this entity's velocity
                 */
                // @ts-ignore
                 setVelocity(velocity: org.bukkit.util.Vector): void;
                /**
                 * Gets this entity's current velocity
                 */
                // @ts-ignore
                 getVelocity(): org.bukkit.util.Vector;
                /**
                 * Gets the entity's height
                 */
                // @ts-ignore
                 getHeight(): number;
                /**
                 * Gets the entity's width
                 */
                // @ts-ignore
                 getWidth(): number;
                /**
                 * Gets the entity's current bounding box.
                 * <p>
                 * The returned bounding box reflects the entity's current location and
                 * size.
                 */
                // @ts-ignore
                 getBoundingBox(): org.bukkit.util.BoundingBox;
                /**
                 * Returns true if the entity is supported by a block. This value is a
                 * state updated by the server and is not recalculated unless the entity
                 * moves.
                 */
                // @ts-ignore
                 isOnGround(): boolean;
                /**
                 * Gets the current world this entity resides in
                 */
                // @ts-ignore
                 getWorld(): org.bukkit.World;
                /**
                 * Sets the entity's rotation.
                 * <p>
                 * Note that if the entity is affected by AI, it may override this rotation.
                 */
                // @ts-ignore
                 setRotation(yaw: number, pitch: number): void;
                /**
                 * Teleports this entity to the given location. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 */
                // @ts-ignore
                 teleport(location: org.bukkit.Location): boolean;
                /**
                 * Teleports this entity to the given location. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 */
                // @ts-ignore
                 teleport(location: org.bukkit.Location, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean;
                /**
                 * Teleports this entity to the target Entity. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 */
                // @ts-ignore
                 teleport(destination: org.bukkit.entity.Entity): boolean;
                /**
                 * Teleports this entity to the target Entity. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 */
                // @ts-ignore
                 teleport(destination: org.bukkit.entity.Entity, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean;
                /**
                 * Returns a list of entities within a bounding box centered around this
                 * entity
                 */
                // @ts-ignore
                 getNearbyEntities(x: number, y: number, z: number): java.util.List;
                /**
                 * Returns a unique id for this entity
                 */
                // @ts-ignore
                 getEntityId(): number;
                /**
                 * Returns the entity's current fire ticks (ticks before the entity stops
                 * being on fire).
                 */
                // @ts-ignore
                 getFireTicks(): number;
                /**
                 * Returns the entity's maximum fire ticks.
                 */
                // @ts-ignore
                 getMaxFireTicks(): number;
                /**
                 * Sets the entity's current fire ticks (ticks before the entity stops
                 * being on fire).
                 */
                // @ts-ignore
                 setFireTicks(ticks: number): void;
                /**
                 * Mark the entity's removal.
                 */
                // @ts-ignore
                 remove(): void;
                /**
                 * Returns true if this entity has been marked for removal.
                 */
                // @ts-ignore
                 isDead(): boolean;
                /**
                 * Returns false if the entity has died or been despawned for some other
                 * reason.
                 */
                // @ts-ignore
                 isValid(): boolean;
                /**
                 * Gets the {@link Server} that contains this Entity
                 */
                // @ts-ignore
                 getServer(): org.bukkit.Server;
                /**
                 * Returns true if the entity gets persisted.
                 * <p>
                 * By default all entities are persistent. An entity will also not get
                 * persisted, if it is riding an entity that is not persistent.
                 * <p>
                 * The persistent flag on players controls whether or not to save their
                 * playerdata file when they quit. If a player is directly or indirectly
                 * riding a non-persistent entity, the vehicle at the root and all its
                 * passengers won't get persisted.
                 * <p>
                 * <b>This should not be confused with
                 * {@link LivingEntity#setRemoveWhenFarAway(boolean)} which controls
                 * despawning of living entities. </b>
                 */
                // @ts-ignore
                 isPersistent(): boolean;
                /**
                 * Sets whether or not the entity gets persisted.
                 */
                // @ts-ignore
                 setPersistent(persistent: boolean): void;
                /**
                 * Gets the primary passenger of a vehicle. For vehicles that could have
                 * multiple passengers, this will only return the primary passenger.
                 */
                // @ts-ignore
                 getPassenger(): org.bukkit.entity.Entity;
                /**
                 * Set the passenger of a vehicle.
                 */
                // @ts-ignore
                 setPassenger(passenger: org.bukkit.entity.Entity): boolean;
                /**
                 * Gets a list of passengers of this vehicle.
                 * <p>
                 * The returned list will not be directly linked to the entity's current
                 * passengers, and no guarantees are made as to its mutability.
                 */
                // @ts-ignore
                 getPassengers(): java.util.List;
                /**
                 * Add a passenger to the vehicle.
                 */
                // @ts-ignore
                 addPassenger(passenger: org.bukkit.entity.Entity): boolean;
                /**
                 * Remove a passenger from the vehicle.
                 */
                // @ts-ignore
                 removePassenger(passenger: org.bukkit.entity.Entity): boolean;
                /**
                 * Check if a vehicle has passengers.
                 */
                // @ts-ignore
                 isEmpty(): boolean;
                /**
                 * Eject any passenger.
                 */
                // @ts-ignore
                 eject(): boolean;
                /**
                 * Returns the distance this entity has fallen
                 */
                // @ts-ignore
                 getFallDistance(): number;
                /**
                 * Sets the fall distance for this entity
                 */
                // @ts-ignore
                 setFallDistance(distance: number): void;
                /**
                 * Record the last {@link EntityDamageEvent} inflicted on this entity
                 */
                // @ts-ignore
                 setLastDamageCause(event: org.bukkit.event.entity.EntityDamageEvent): void;
                /**
                 * Retrieve the last {@link EntityDamageEvent} inflicted on this entity.
                 * This event may have been cancelled.
                 */
                // @ts-ignore
                 getLastDamageCause(): org.bukkit.event.entity.EntityDamageEvent;
                /**
                 * Returns a unique and persistent id for this entity
                 */
                // @ts-ignore
                 getUniqueId(): java.util.UUID;
                /**
                 * Gets the amount of ticks this entity has lived for.
                 * <p>
                 * This is the equivalent to "age" in entities.
                 */
                // @ts-ignore
                 getTicksLived(): number;
                /**
                 * Sets the amount of ticks this entity has lived for.
                 * <p>
                 * This is the equivalent to "age" in entities. May not be less than one
                 * tick.
                 */
                // @ts-ignore
                 setTicksLived(value: number): void;
                /**
                 * Performs the specified {@link EntityEffect} for this entity.
                 * <p>
                 * This will be viewable to all players near the entity.
                 * <p>
                 * If the effect is not applicable to this class of entity, it will not play.
                 */
                // @ts-ignore
                 playEffect(type: org.bukkit.EntityEffect): void;
                /**
                 * Get the type of the entity.
                 */
                // @ts-ignore
                 getType(): org.bukkit.entity.EntityType;
                /**
                 * Returns whether this entity is inside a vehicle.
                 */
                // @ts-ignore
                 isInsideVehicle(): boolean;
                /**
                 * Leave the current vehicle. If the entity is currently in a vehicle (and
                 * is removed from it), true will be returned, otherwise false will be
                 * returned.
                 */
                // @ts-ignore
                 leaveVehicle(): boolean;
                /**
                 * Get the vehicle that this player is inside. If there is no vehicle,
                 * null will be returned.
                 */
                // @ts-ignore
                 getVehicle(): org.bukkit.entity.Entity;
                /**
                 * Sets whether or not to display the mob's custom name client side. The
                 * name will be displayed above the mob similarly to a player.
                 * <p>
                 * This value has no effect on players, they will always display their
                 * name.
                 */
                // @ts-ignore
                 setCustomNameVisible(flag: boolean): void;
                /**
                 * Gets whether or not the mob's custom name is displayed client side.
                 * <p>
                 * This value has no effect on players, they will always display their
                 * name.
                 */
                // @ts-ignore
                 isCustomNameVisible(): boolean;
                /**
                 * Sets whether the entity has a team colored (default: white) glow.
                 */
                // @ts-ignore
                 setGlowing(flag: boolean): void;
                /**
                 * Gets whether the entity is glowing or not.
                 */
                // @ts-ignore
                 isGlowing(): boolean;
                /**
                 * Sets whether the entity is invulnerable or not.
                 * <p>
                 * When an entity is invulnerable it can only be damaged by players in
                 * creative mode.
                 */
                // @ts-ignore
                 setInvulnerable(flag: boolean): void;
                /**
                 * Gets whether the entity is invulnerable or not.
                 */
                // @ts-ignore
                 isInvulnerable(): boolean;
                /**
                 * Gets whether the entity is silent or not.
                 */
                // @ts-ignore
                 isSilent(): boolean;
                /**
                 * Sets whether the entity is silent or not.
                 * <p>
                 * When an entity is silent it will not produce any sound.
                 */
                // @ts-ignore
                 setSilent(flag: boolean): void;
                /**
                 * Returns whether gravity applies to this entity.
                 */
                // @ts-ignore
                 hasGravity(): boolean;
                /**
                 * Sets whether gravity applies to this entity.
                 */
                // @ts-ignore
                 setGravity(gravity: boolean): void;
                /**
                 * Gets the period of time (in ticks) before this entity can use a portal.
                 */
                // @ts-ignore
                 getPortalCooldown(): number;
                /**
                 * Sets the period of time (in ticks) before this entity can use a portal.
                 */
                // @ts-ignore
                 setPortalCooldown(cooldown: number): void;
                /**
                 * Returns a set of tags for this entity.
                 * <br>
                 * Entities can have no more than 1024 tags.
                 */
                // @ts-ignore
                 getScoreboardTags(): java.util.Set;
                /**
                 * Add a tag to this entity.
                 * <br>
                 * Entities can have no more than 1024 tags.
                 */
                // @ts-ignore
                 addScoreboardTag(tag: string): boolean;
                /**
                 * Removes a given tag from this entity.
                 */
                // @ts-ignore
                 removeScoreboardTag(tag: string): boolean;
                /**
                 * Returns the reaction of the entity when moved by a piston.
                 */
                // @ts-ignore
                 getPistonMoveReaction(): org.bukkit.block.PistonMoveReaction;
                /**
                 * Get the closest cardinal {@link BlockFace} direction an entity is
                 * currently facing.
                 * <br>
                 * This will not return any non-cardinal directions such as
                 * {@link BlockFace#UP} or {@link BlockFace#DOWN}.
                 * <br>
                 * {@link Hanging} entities will override this call and thus their behavior
                 * may be different.
                 */
                // @ts-ignore
                 getFacing(): org.bukkit.block.BlockFace;
                /**
                 * Gets the entity's current pose.
                 * <b>Note that the pose is only updated at the end of a tick, so may be
                 * inconsistent with other methods. eg {@link Player#isSneaking()} being
                 * true does not imply the current pose will be {@link Pose#SNEAKING}</b>
                 */
                // @ts-ignore
                 getPose(): org.bukkit.entity.Pose;
            }
        }
    }
}
