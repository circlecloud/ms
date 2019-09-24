declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Entity extends org.bukkit.metadata.Metadatable, org.bukkit.command.CommandSender, org.bukkit.Nameable, org.bukkit.persistence.PersistentDataHolder {
                /**
                 * Gets the entity's current position
                 */
                 getLocation(): org.bukkit.Location;
                /**
                 * Stores the entity's current position in the provided Location object.
                 * <p>
                 * If the provided Location is null this method does nothing and returns
                 * null.
                 */
                 getLocation(loc: org.bukkit.Location): org.bukkit.Location;
                /**
                 * Sets this entity's velocity
                 */
                 setVelocity(velocity: org.bukkit.util.Vector): void;
                /**
                 * Gets this entity's current velocity
                 */
                 getVelocity(): org.bukkit.util.Vector;
                /**
                 * Gets the entity's height
                 */
                 getHeight(): number;
                /**
                 * Gets the entity's width
                 */
                 getWidth(): number;
                /**
                 * Gets the entity's current bounding box.
                 * <p>
                 * The returned bounding box reflects the entity's current location and
                 * size.
                 */
                 getBoundingBox(): org.bukkit.util.BoundingBox;
                /**
                 * Returns true if the entity is supported by a block. This value is a
                 * state updated by the server and is not recalculated unless the entity
                 * moves.
                 */
                 isOnGround(): boolean;
                /**
                 * Gets the current world this entity resides in
                 */
                 getWorld(): org.bukkit.World;
                /**
                 * Sets the entity's rotation.
                 * <p>
                 * Note that if the entity is affected by AI, it may override this rotation.
                 */
                 setRotation(yaw: number, pitch: number): void;
                /**
                 * Teleports this entity to the given location. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 */
                 teleport(location: org.bukkit.Location): boolean;
                /**
                 * Teleports this entity to the given location. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 */
                 teleport(location: org.bukkit.Location, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean;
                /**
                 * Teleports this entity to the target Entity. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 */
                 teleport(destination: org.bukkit.entity.Entity): boolean;
                /**
                 * Teleports this entity to the target Entity. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 */
                 teleport(destination: org.bukkit.entity.Entity, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean;
                /**
                 * Returns a list of entities within a bounding box centered around this
                 * entity
                 */
                 getNearbyEntities(x: number, y: number, z: number): any[] /*java.util.List*/;
                /**
                 * Returns a unique id for this entity
                 */
                 getEntityId(): number;
                /**
                 * Returns the entity's current fire ticks (ticks before the entity stops
                 * being on fire).
                 */
                 getFireTicks(): number;
                /**
                 * Returns the entity's maximum fire ticks.
                 */
                 getMaxFireTicks(): number;
                /**
                 * Sets the entity's current fire ticks (ticks before the entity stops
                 * being on fire).
                 */
                 setFireTicks(ticks: number): void;
                /**
                 * Mark the entity's removal.
                 */
                 remove(): void;
                /**
                 * Returns true if this entity has been marked for removal.
                 */
                 isDead(): boolean;
                /**
                 * Returns false if the entity has died or been despawned for some other
                 * reason.
                 */
                 isValid(): boolean;
                /**
                 * Gets the {@link Server} that contains this Entity
                 */
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
                 isPersistent(): boolean;
                /**
                 * Sets whether or not the entity gets persisted.
                 */
                 setPersistent(persistent: boolean): void;
                /**
                 * Gets the primary passenger of a vehicle. For vehicles that could have
                 * multiple passengers, this will only return the primary passenger.
                 */
                 getPassenger(): org.bukkit.entity.Entity;
                /**
                 * Set the passenger of a vehicle.
                 */
                 setPassenger(passenger: org.bukkit.entity.Entity): boolean;
                /**
                 * Gets a list of passengers of this vehicle.
                 * <p>
                 * The returned list will not be directly linked to the entity's current
                 * passengers, and no guarantees are made as to its mutability.
                 */
                 getPassengers(): any[] /*java.util.List*/;
                /**
                 * Add a passenger to the vehicle.
                 */
                 addPassenger(passenger: org.bukkit.entity.Entity): boolean;
                /**
                 * Remove a passenger from the vehicle.
                 */
                 removePassenger(passenger: org.bukkit.entity.Entity): boolean;
                /**
                 * Check if a vehicle has passengers.
                 */
                 isEmpty(): boolean;
                /**
                 * Eject any passenger.
                 */
                 eject(): boolean;
                /**
                 * Returns the distance this entity has fallen
                 */
                 getFallDistance(): number;
                /**
                 * Sets the fall distance for this entity
                 */
                 setFallDistance(distance: number): void;
                /**
                 * Record the last {@link EntityDamageEvent} inflicted on this entity
                 */
                 setLastDamageCause(event: org.bukkit.event.entity.EntityDamageEvent): void;
                /**
                 * Retrieve the last {@link EntityDamageEvent} inflicted on this entity.
                 * This event may have been cancelled.
                 */
                 getLastDamageCause(): org.bukkit.event.entity.EntityDamageEvent;
                /**
                 * Returns a unique and persistent id for this entity
                 */
                 getUniqueId(): any;
                /**
                 * Gets the amount of ticks this entity has lived for.
                 * <p>
                 * This is the equivalent to "age" in entities.
                 */
                 getTicksLived(): number;
                /**
                 * Sets the amount of ticks this entity has lived for.
                 * <p>
                 * This is the equivalent to "age" in entities. May not be less than one
                 * tick.
                 */
                 setTicksLived(value: number): void;
                /**
                 * Performs the specified {@link EntityEffect} for this entity.
                 * <p>
                 * This will be viewable to all players near the entity.
                 * <p>
                 * If the effect is not applicable to this class of entity, it will not play.
                 */
                 playEffect(type: org.bukkit.EntityEffect): void;
                /**
                 * Get the type of the entity.
                 */
                 getType(): org.bukkit.entity.EntityType;
                /**
                 * Returns whether this entity is inside a vehicle.
                 */
                 isInsideVehicle(): boolean;
                /**
                 * Leave the current vehicle. If the entity is currently in a vehicle (and
                 * is removed from it), true will be returned, otherwise false will be
                 * returned.
                 */
                 leaveVehicle(): boolean;
                /**
                 * Get the vehicle that this player is inside. If there is no vehicle,
                 * null will be returned.
                 */
                 getVehicle(): org.bukkit.entity.Entity;
                /**
                 * Sets whether or not to display the mob's custom name client side. The
                 * name will be displayed above the mob similarly to a player.
                 * <p>
                 * This value has no effect on players, they will always display their
                 * name.
                 */
                 setCustomNameVisible(flag: boolean): void;
                /**
                 * Gets whether or not the mob's custom name is displayed client side.
                 * <p>
                 * This value has no effect on players, they will always display their
                 * name.
                 */
                 isCustomNameVisible(): boolean;
                /**
                 * Sets whether the entity has a team colored (default: white) glow.
                 */
                 setGlowing(flag: boolean): void;
                /**
                 * Gets whether the entity is glowing or not.
                 */
                 isGlowing(): boolean;
                /**
                 * Sets whether the entity is invulnerable or not.
                 * <p>
                 * When an entity is invulnerable it can only be damaged by players in
                 * creative mode.
                 */
                 setInvulnerable(flag: boolean): void;
                /**
                 * Gets whether the entity is invulnerable or not.
                 */
                 isInvulnerable(): boolean;
                /**
                 * Gets whether the entity is silent or not.
                 */
                 isSilent(): boolean;
                /**
                 * Sets whether the entity is silent or not.
                 * <p>
                 * When an entity is silent it will not produce any sound.
                 */
                 setSilent(flag: boolean): void;
                /**
                 * Returns whether gravity applies to this entity.
                 */
                 hasGravity(): boolean;
                /**
                 * Sets whether gravity applies to this entity.
                 */
                 setGravity(gravity: boolean): void;
                /**
                 * Gets the period of time (in ticks) before this entity can use a portal.
                 */
                 getPortalCooldown(): number;
                /**
                 * Sets the period of time (in ticks) before this entity can use a portal.
                 */
                 setPortalCooldown(cooldown: number): void;
                /**
                 * Returns a set of tags for this entity.
                 * <br>
                 * Entities can have no more than 1024 tags.
                 */
                 getScoreboardTags(): any[] /*java.util.Set*/;
                /**
                 * Add a tag to this entity.
                 * <br>
                 * Entities can have no more than 1024 tags.
                 */
                 addScoreboardTag(tag: string): boolean;
                /**
                 * Removes a given tag from this entity.
                 */
                 removeScoreboardTag(tag: string): boolean;
                /**
                 * Returns the reaction of the entity when moved by a piston.
                 */
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
                 getFacing(): org.bukkit.block.BlockFace;
                /**
                 * Gets the entity's current pose.
                 * <b>Note that the pose is only updated at the end of a tick, so may be
                 * inconsistent with other methods. eg {@link Player#isSneaking()} being
                 * true does not imply the current pose will be {@link Pose#SNEAKING}</b>
                 */
                 getPose(): org.bukkit.entity.Pose;
            }
        }
    }
}
