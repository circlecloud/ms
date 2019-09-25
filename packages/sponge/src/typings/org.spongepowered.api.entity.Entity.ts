declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface Entity extends org.spongepowered.api.util.Identifiable, org.spongepowered.api.world.Locatable, org.spongepowered.api.data.DataHolder, org.spongepowered.api.text.translation.Translatable {
                    /**
                     * Gets the type of entity.
                     */
                    // @ts-ignore
                     getType(): org.spongepowered.api.entity.EntityType;
                    /**
                     * Creates a {@link EntitySnapshot} containing the {@link EntityType} and
                     * data of this entity.
                     */
                    // @ts-ignore
                     createSnapshot(): org.spongepowered.api.entity.EntitySnapshot;
                    /**
                     * Gets the Random Number Generator (RNG) for this entity.
                     */
                    // @ts-ignore
                     getRandom(): any;
                    /**
                     * Sets the location of this entity. This is equivalent to a teleport, and
                     * also moves this entity's passengers.
                     */
                    // @ts-ignore
                     setLocation(location: org.spongepowered.api.world.Location): boolean;
                    /**
                     * Sets the location of this entity using a safe one from
                     * {@link TeleportHelper#getSafeLocation(Location)}. This is equivalent to a
                     * teleport and also moves this entity's passengers.
                     */
                    // @ts-ignore
                     setLocationSafely(location: org.spongepowered.api.world.Location): boolean;
                    /**
                     * Gets the rotation.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     */
                    // @ts-ignore
                     getRotation(): any /*Vector3d*/;
                    /**
                     * Sets the rotation of this entity.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     */
                    // @ts-ignore
                     setRotation(rotation: any /*Vector3d*/): void;
                    /**
                     * Moves the entity to the specified location, and sets the rotation.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     */
                    // @ts-ignore
                     setLocationAndRotation(location: org.spongepowered.api.world.Location, rotation: any /*Vector3d*/): boolean;
                    /**
                     * Moves the entity to the specified location, and sets the rotation.
                     * {@link RelativePositions} listed inside the EnumSet are considered
                     * relative.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     */
                    // @ts-ignore
                     setLocationAndRotation(location: org.spongepowered.api.world.Location, rotation: any /*Vector3d*/, relativePositions: any): boolean;
                    /**
                     * Sets the location using a safe one from
                     * {@link TeleportHelper#getSafeLocation(Location)} and the rotation of this
                     * entity.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     */
                    // @ts-ignore
                     setLocationAndRotationSafely(location: org.spongepowered.api.world.Location, rotation: any /*Vector3d*/): boolean;
                    /**
                     * Sets the location using a safe one from
                     * {@link TeleportHelper#getSafeLocation(Location)} and the rotation of this
                     * entity. {@link RelativePositions} listed inside the EnumSet are
                     * considered relative.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     */
                    // @ts-ignore
                     setLocationAndRotationSafely(location: org.spongepowered.api.world.Location, rotation: any /*Vector3d*/, relativePositions: any): boolean;
                    /**
                     * Gets the entity scale. Not currently used. Returns {@link Vector3d#ONE}.
                     */
                    // @ts-ignore
                     getScale(): any /*Vector3d*/;
                    /**
                     * Sets the entity scale. Not currently used. Does nothing.
                     */
                    // @ts-ignore
                     setScale(scale: any /*Vector3d*/): void;
                    /**
                     * Returns the entity transform as a new copy. Combines the position,
                     * rotation and scale.
                     */
                    // @ts-ignore
                     getTransform(): org.spongepowered.api.entity.Transform;
                    /**
                     * Sets the entity transform. Sets the position, rotation and scale at once.
                     */
                    // @ts-ignore
                     setTransform(transform: org.spongepowered.api.entity.Transform): boolean;
                    /**
                     * Sets the transformation of this entity using a safe location from
                     * {@link TeleportHelper#getSafeLocation(Location)}.
                     */
                    // @ts-ignore
                     setTransformSafely(transform: org.spongepowered.api.entity.Transform): boolean;
                    /**
                     * Sets the {@link Location} of this entity to the {@link World}'s spawn
                     * point.
                     * <p>This is equivalent to setting the location via
                     * {@link TargetedLocationData}.</p>
                     */
                    // @ts-ignore
                     transferToWorld(world: org.spongepowered.api.world.World): boolean;
                    /**
                     * Sets the {@link Location} of this entity to a new position in a world.
                     * <p>This is equivalent to setting the location via
                     * {@link TargetedLocationData}.</p>
                     */
                    // @ts-ignore
                     transferToWorld(world: org.spongepowered.api.world.World, position: any /*Vector3d*/): boolean;
                    /**
                     * Sets the location of this entity to a new position in a world which does
                     * not have to be loaded (but must at least be enabled).
                     * <p>If the target world is loaded then this is equivalent to
                     * setting the location via {@link TargetedLocationData}.</p>
                     * <p>If the target world is unloaded but is enabled according to its
                     * {@link WorldArchetype#isEnabled()} then this will first load the world
                     * before transferring the entity to that world.</p>
                     * <p>If the target world is unloaded and not enabled then the transfer
                     * will fail.</p>
                     */
                    // @ts-ignore
                     transferToWorld(worldName: string, position: any /*Vector3d*/): boolean;
                    /**
                     * Sets the location of this entity to a new position in a world which does
                     * not have to be loaded (but must at least be enabled).
                     * <p>If the target world is loaded then this is equivalent to setting the
                     * location via {@link TargetedLocationData}.</p>
                     * <p>If the target world is unloaded but is enabled according to its
                     * {@link WorldArchetype#isEnabled()} then this will first load the world
                     * before transferring the entity to that world.</p>
                     * <p>If the target world is unloaded and not enabled then the transfer
                     * will fail.</p>
                     */
                    // @ts-ignore
                     transferToWorld(uuid: any, position: any /*Vector3d*/): boolean;
                    /**
                     * Gets the entity's bounding box, usually for collisions and interaction.
                     * The box has an offset matching the entity's positions. That is to say, it
                     * is absolutely positioned and not relative to the entity.
                     */
                    // @ts-ignore
                     getBoundingBox(): any;
                    /**
                     * Gets the entity passenger that rides this entity, if available.
                     */
                    // @ts-ignore
                     getPassengers(): any[] /*java.util.List*/;
                    /**
                     * Checks if the given entity is a passenger.
                     */
                    // @ts-ignore
                     hasPassenger(entity: org.spongepowered.api.entity.Entity): boolean;
                    /**
                     * Sets the passenger entity(the entity that rides this one).
                     */
                    // @ts-ignore
                     addPassenger(entity: org.spongepowered.api.entity.Entity): boolean;
                    /**
                     * Removes the given entity as a passenger.
                     */
                    // @ts-ignore
                     removePassenger(entity: org.spongepowered.api.entity.Entity): void;
                    /**
                     * Removes all currently riding passengers from this entity.
                     */
                    // @ts-ignore
                     clearPassengers(): void;
                    /**
                     * Gets the entity vehicle that this entity is riding, if available.
                     */
                    // @ts-ignore
                     getVehicle(): any;
                    /**
                     * Sets the vehicle entity(the entity that is ridden by this one).
                     */
                    // @ts-ignore
                     setVehicle(entity: org.spongepowered.api.entity.Entity): boolean;
                    /**
                     * Gets the entity vehicle that is the base of what ever stack the current
                     * entity is a part of. This can be the current entity, if it is not riding
                     * any vehicle.
                     * <p>The returned entity can never ride another entity, that would make the
                     * ridden entity the base of the stack.</p>
                     */
                    // @ts-ignore
                     getBaseVehicle(): org.spongepowered.api.entity.Entity;
                    /**
                     * Gets the {@link Vector3d} representation of this entity's current
                     * velocity.
                     */
                    // @ts-ignore
                     getVelocity(): any /*Vector3d*/;
                    /**
                     * Sets the velocity for this entity.
                     */
                    // @ts-ignore
                     setVelocity(vector3d: any /*Vector3d*/): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Returns whether this entity is on the ground (not in the air) or not.
                     */
                    // @ts-ignore
                     isOnGround(): boolean;
                    /**
                     * Returns whether this entity has been removed.
                     */
                    // @ts-ignore
                     isRemoved(): boolean;
                    /**
                     * Returns whether this entity is still loaded in a world/chunk.
                     */
                    // @ts-ignore
                     isLoaded(): boolean;
                    /**
                     * Mark this entity for removal in the very near future, preferably
                     * within one game tick.
                     */
                    // @ts-ignore
                     remove(): void;
                    /**
                     * Damages this {@link Entity} with the given {@link DamageSource}.
                     */
                    // @ts-ignore
                     damage(damage: number, damageSource: org.spongepowered.api.event.cause.entity.damage.source.DamageSource): boolean;
                    /**
                     * Gets the nearby entities within the desired distance.
                     */
                    // @ts-ignore
                     getNearbyEntities(distance: number): any[] /*java.util.Collection*/;
                    /**
                     * Gets the nearby entities that satisfy the desired predicate.
                     */
                    // @ts-ignore
                     getNearbyEntities(predicate: any): any[] /*java.util.Collection*/;
                    /**
                     * Gets the {@link UUID}, if available, of the user who created this
                     * {@link Entity}.
                     */
                    // @ts-ignore
                     getCreator(): any;
                    /**
                     * Gets the {@link UUID}, if available, of the user who last notified this
                     * {@link Entity}.
                     */
                    // @ts-ignore
                     getNotifier(): any;
                    /**
                     * Sets the {@link UUID} of the user who created this {@link Entity}.
                     */
                    // @ts-ignore
                     setCreator(uuid: any): void;
                    /**
                     * Sets the {@link UUID} of the user who last notified this {@link Entity}.
                     */
                    // @ts-ignore
                     setNotifier(uuid: any): void;
                    /**
                     * Returns whether this entity can see the provided {@link Entity}.
                     */
                    // @ts-ignore
                     canSee(entity: org.spongepowered.api.entity.Entity): boolean;
                    /**
                     * Creates a new {@link EntityArchetype} for use with {@link Schematic}s and
                     * placing the archetype in multiple locations.
                     */
                    // @ts-ignore
                     createArchetype(): org.spongepowered.api.entity.EntityArchetype;
                    /**
                     * Returns whether this entity has gravity.
                     */
                    // @ts-ignore
                     gravity(): org.spongepowered.api.data.value.mutable.Value;
                }
            }
        }
    }
}
