declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
            abstract class Entity extends cn.nukkit.level.Location implements cn.nukkit.metadata.Metadatable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public static NETWORK_ID: number;
                // @ts-ignore
                public static DATA_TYPE_BYTE: number;
                // @ts-ignore
                public static DATA_TYPE_SHORT: number;
                // @ts-ignore
                public static DATA_TYPE_INT: number;
                // @ts-ignore
                public static DATA_TYPE_FLOAT: number;
                // @ts-ignore
                public static DATA_TYPE_STRING: number;
                // @ts-ignore
                public static DATA_TYPE_NBT: number;
                // @ts-ignore
                public static DATA_TYPE_POS: number;
                // @ts-ignore
                public static DATA_TYPE_LONG: number;
                // @ts-ignore
                public static DATA_TYPE_VECTOR3F: number;
                // @ts-ignore
                public static DATA_FLAGS: number;
                // @ts-ignore
                public static DATA_HEALTH: number;
                // @ts-ignore
                public static DATA_VARIANT: number;
                // @ts-ignore
                public static DATA_COLOR: number;
                // @ts-ignore
                public static DATA_COLOUR: number;
                // @ts-ignore
                public static DATA_NAMETAG: number;
                // @ts-ignore
                public static DATA_OWNER_EID: number;
                // @ts-ignore
                public static DATA_TARGET_EID: number;
                // @ts-ignore
                public static DATA_AIR: number;
                // @ts-ignore
                public static DATA_POTION_COLOR: number;
                // @ts-ignore
                public static DATA_POTION_AMBIENT: number;
                // @ts-ignore
                public static DATA_JUMP_DURATION: number;
                // @ts-ignore
                public static DATA_HURT_TIME: number;
                // @ts-ignore
                public static DATA_HURT_DIRECTION: number;
                // @ts-ignore
                public static DATA_PADDLE_TIME_LEFT: number;
                // @ts-ignore
                public static DATA_PADDLE_TIME_RIGHT: number;
                // @ts-ignore
                public static DATA_EXPERIENCE_VALUE: number;
                // @ts-ignore
                public static DATA_DISPLAY_ITEM: number;
                // @ts-ignore
                public static DATA_DISPLAY_OFFSET: number;
                // @ts-ignore
                public static DATA_HAS_DISPLAY: number;
                // @ts-ignore
                public static DATA_ENDERMAN_HELD_RUNTIME_ID: number;
                // @ts-ignore
                public static DATA_ENTITY_AGE: number;
                // @ts-ignore
                public static DATA_PLAYER_FLAGS: number;
                // @ts-ignore
                public static DATA_PLAYER_BED_POSITION: number;
                // @ts-ignore
                public static DATA_FIREBALL_POWER_X: number;
                // @ts-ignore
                public static DATA_FIREBALL_POWER_Y: number;
                // @ts-ignore
                public static DATA_FIREBALL_POWER_Z: number;
                // @ts-ignore
                public static DATA_POTION_AUX_VALUE: number;
                // @ts-ignore
                public static DATA_LEAD_HOLDER_EID: number;
                // @ts-ignore
                public static DATA_SCALE: number;
                // @ts-ignore
                public static DATA_INTERACTIVE_TAG: number;
                // @ts-ignore
                public static DATA_NPC_SKIN_ID: number;
                // @ts-ignore
                public static DATA_URL_TAG: number;
                // @ts-ignore
                public static DATA_MAX_AIR: number;
                // @ts-ignore
                public static DATA_MARK_VARIANT: number;
                // @ts-ignore
                public static DATA_CONTAINER_TYPE: number;
                // @ts-ignore
                public static DATA_CONTAINER_BASE_SIZE: number;
                // @ts-ignore
                public static DATA_CONTAINER_EXTRA_SLOTS_PER_STRENGTH: number;
                // @ts-ignore
                public static DATA_BLOCK_TARGET: number;
                // @ts-ignore
                public static DATA_WITHER_INVULNERABLE_TICKS: number;
                // @ts-ignore
                public static DATA_WITHER_TARGET_1: number;
                // @ts-ignore
                public static DATA_WITHER_TARGET_2: number;
                // @ts-ignore
                public static DATA_WITHER_TARGET_3: number;
                // @ts-ignore
                public static DATA_BOUNDING_BOX_WIDTH: number;
                // @ts-ignore
                public static DATA_BOUNDING_BOX_HEIGHT: number;
                // @ts-ignore
                public static DATA_FUSE_LENGTH: number;
                // @ts-ignore
                public static DATA_RIDER_SEAT_POSITION: number;
                // @ts-ignore
                public static DATA_RIDER_ROTATION_LOCKED: number;
                // @ts-ignore
                public static DATA_RIDER_MAX_ROTATION: number;
                // @ts-ignore
                public static DATA_RIDER_MIN_ROTATION: number;
                // @ts-ignore
                public static DATA_AREA_EFFECT_CLOUD_RADIUS: number;
                // @ts-ignore
                public static DATA_AREA_EFFECT_CLOUD_WAITING: number;
                // @ts-ignore
                public static DATA_AREA_EFFECT_CLOUD_PARTICLE_ID: number;
                // @ts-ignore
                public static DATA_SHULKER_ATTACH_FACE: number;
                // @ts-ignore
                public static DATA_SHULKER_ATTACH_POS: number;
                // @ts-ignore
                public static DATA_TRADING_PLAYER_EID: number;
                // @ts-ignore
                public static DATA_COMMAND_BLOCK_COMMAND: number;
                // @ts-ignore
                public static DATA_COMMAND_BLOCK_LAST_OUTPUT: number;
                // @ts-ignore
                public static DATA_COMMAND_BLOCK_TRACK_OUTPUT: number;
                // @ts-ignore
                public static DATA_CONTROLLING_RIDER_SEAT_NUMBER: number;
                // @ts-ignore
                public static DATA_STRENGTH: number;
                // @ts-ignore
                public static DATA_MAX_STRENGTH: number;
                // @ts-ignore
                public static DATA_LIMITED_LIFE: number;
                // @ts-ignore
                public static DATA_ARMOR_STAND_POSE_INDEX: number;
                // @ts-ignore
                public static DATA_ENDER_CRYSTAL_TIME_OFFSET: number;
                // @ts-ignore
                public static DATA_ALWAYS_SHOW_NAMETAG: number;
                // @ts-ignore
                public static DATA_COLOR_2: number;
                // @ts-ignore
                public static DATA_SCORE_TAG: number;
                // @ts-ignore
                public static DATA_BALLOON_ATTACHED_ENTITY: number;
                // @ts-ignore
                public static DATA_PUFFERFISH_SIZE: number;
                // @ts-ignore
                public static DATA_FLAGS_EXTENDED: number;
                // @ts-ignore
                public static DATA_SKIN_ID: number;
                // @ts-ignore
                public static DATA_FLAG_ONFIRE: number;
                // @ts-ignore
                public static DATA_FLAG_SNEAKING: number;
                // @ts-ignore
                public static DATA_FLAG_RIDING: number;
                // @ts-ignore
                public static DATA_FLAG_SPRINTING: number;
                // @ts-ignore
                public static DATA_FLAG_ACTION: number;
                // @ts-ignore
                public static DATA_FLAG_INVISIBLE: number;
                // @ts-ignore
                public static DATA_FLAG_TEMPTED: number;
                // @ts-ignore
                public static DATA_FLAG_INLOVE: number;
                // @ts-ignore
                public static DATA_FLAG_SADDLED: number;
                // @ts-ignore
                public static DATA_FLAG_POWERED: number;
                // @ts-ignore
                public static DATA_FLAG_IGNITED: number;
                // @ts-ignore
                public static DATA_FLAG_BABY: number;
                // @ts-ignore
                public static DATA_FLAG_CONVERTING: number;
                // @ts-ignore
                public static DATA_FLAG_CRITICAL: number;
                // @ts-ignore
                public static DATA_FLAG_CAN_SHOW_NAMETAG: number;
                // @ts-ignore
                public static DATA_FLAG_ALWAYS_SHOW_NAMETAG: number;
                // @ts-ignore
                public static DATA_FLAG_IMMOBILE: number;
                // @ts-ignore
                public static DATA_FLAG_NO_AI: number;
                // @ts-ignore
                public static DATA_FLAG_SILENT: number;
                // @ts-ignore
                public static DATA_FLAG_WALLCLIMBING: number;
                // @ts-ignore
                public static DATA_FLAG_CAN_CLIMB: number;
                // @ts-ignore
                public static DATA_FLAG_SWIMMER: number;
                // @ts-ignore
                public static DATA_FLAG_CAN_FLY: number;
                // @ts-ignore
                public static DATA_FLAG_WALKER: number;
                // @ts-ignore
                public static DATA_FLAG_RESTING: number;
                // @ts-ignore
                public static DATA_FLAG_SITTING: number;
                // @ts-ignore
                public static DATA_FLAG_ANGRY: number;
                // @ts-ignore
                public static DATA_FLAG_INTERESTED: number;
                // @ts-ignore
                public static DATA_FLAG_CHARGED: number;
                // @ts-ignore
                public static DATA_FLAG_TAMED: number;
                // @ts-ignore
                public static DATA_FLAG_ORPHANED: number;
                // @ts-ignore
                public static DATA_FLAG_LEASHED: number;
                // @ts-ignore
                public static DATA_FLAG_SHEARED: number;
                // @ts-ignore
                public static DATA_FLAG_GLIDING: number;
                // @ts-ignore
                public static DATA_FLAG_ELDER: number;
                // @ts-ignore
                public static DATA_FLAG_MOVING: number;
                // @ts-ignore
                public static DATA_FLAG_BREATHING: number;
                // @ts-ignore
                public static DATA_FLAG_CHESTED: number;
                // @ts-ignore
                public static DATA_FLAG_STACKABLE: number;
                // @ts-ignore
                public static DATA_FLAG_SHOWBASE: number;
                // @ts-ignore
                public static DATA_FLAG_REARING: number;
                // @ts-ignore
                public static DATA_FLAG_VIBRATING: number;
                // @ts-ignore
                public static DATA_FLAG_IDLING: number;
                // @ts-ignore
                public static DATA_FLAG_EVOKER_SPELL: number;
                // @ts-ignore
                public static DATA_FLAG_CHARGE_ATTACK: number;
                // @ts-ignore
                public static DATA_FLAG_WASD_CONTROLLED: number;
                // @ts-ignore
                public static DATA_FLAG_CAN_POWER_JUMP: number;
                // @ts-ignore
                public static DATA_FLAG_LINGER: number;
                // @ts-ignore
                public static DATA_FLAG_HAS_COLLISION: number;
                // @ts-ignore
                public static DATA_FLAG_GRAVITY: number;
                // @ts-ignore
                public static DATA_FLAG_FIRE_IMMUNE: number;
                // @ts-ignore
                public static DATA_FLAG_DANCING: number;
                // @ts-ignore
                public static DATA_FLAG_ENCHANTED: number;
                // @ts-ignore
                public static DATA_FLAG_SHOW_TRIDENT_ROPE: number;
                // @ts-ignore
                public static DATA_FLAG_CONTAINER_PRIVATE: number;
                // @ts-ignore
                public static DATA_FLAG_SPIN_ATTACK: number;
                // @ts-ignore
                public static DATA_FLAG_SWIMMING: number;
                // @ts-ignore
                public static DATA_FLAG_BRIBED: number;
                // @ts-ignore
                public static DATA_FLAG_PREGNANT: number;
                // @ts-ignore
                public static DATA_FLAG_LAYING_EGG: number;
                // @ts-ignore
                public static entityCount: number;
                // @ts-ignore
                protected hasSpawned: java.util.Map;
                // @ts-ignore
                protected effects: java.util.Map;
                // @ts-ignore
                protected id: number;
                // @ts-ignore
                protected dataProperties: cn.nukkit.entity.data.EntityMetadata;
                // @ts-ignore
                public passengers: java.util.List;
                // @ts-ignore
                public riding: cn.nukkit.entity.Entity;
                // @ts-ignore
                public chunk: cn.nukkit.level.format.FullChunk;
                // @ts-ignore
                protected lastDamageCause: cn.nukkit.event.entity.EntityDamageEvent;
                // @ts-ignore
                public blocksAround: java.util.List;
                // @ts-ignore
                public collisionBlocks: java.util.List;
                // @ts-ignore
                public lastX: number;
                // @ts-ignore
                public lastY: number;
                // @ts-ignore
                public lastZ: number;
                // @ts-ignore
                public firstMove: boolean;
                // @ts-ignore
                public motionX: number;
                // @ts-ignore
                public motionY: number;
                // @ts-ignore
                public motionZ: number;
                // @ts-ignore
                public temporalVector: cn.nukkit.math.Vector3;
                // @ts-ignore
                public lastMotionX: number;
                // @ts-ignore
                public lastMotionY: number;
                // @ts-ignore
                public lastMotionZ: number;
                // @ts-ignore
                public lastYaw: number;
                // @ts-ignore
                public lastPitch: number;
                // @ts-ignore
                public pitchDelta: number;
                // @ts-ignore
                public yawDelta: number;
                // @ts-ignore
                public entityCollisionReduction: number;
                // @ts-ignore
                public boundingBox: cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public onGround: boolean;
                // @ts-ignore
                public inBlock: boolean;
                // @ts-ignore
                public positionChanged: boolean;
                // @ts-ignore
                public motionChanged: boolean;
                // @ts-ignore
                public deadTicks: number;
                // @ts-ignore
                protected age: number;
                // @ts-ignore
                protected health: number;
                // @ts-ignore
                protected absorption: number;
                // @ts-ignore
                protected ySize: number;
                // @ts-ignore
                public keepMovement: boolean;
                // @ts-ignore
                public fallDistance: number;
                // @ts-ignore
                public ticksLived: number;
                // @ts-ignore
                public lastUpdate: number;
                // @ts-ignore
                public maxFireTicks: number;
                // @ts-ignore
                public fireTicks: number;
                // @ts-ignore
                public inPortalTicks: number;
                // @ts-ignore
                public scale: number;
                // @ts-ignore
                public namedTag: cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                protected isStatic: boolean;
                // @ts-ignore
                public isCollided: boolean;
                // @ts-ignore
                public isCollidedHorizontally: boolean;
                // @ts-ignore
                public isCollidedVertically: boolean;
                // @ts-ignore
                public noDamageTicks: number;
                // @ts-ignore
                public justCreated: boolean;
                // @ts-ignore
                public fireProof: boolean;
                // @ts-ignore
                public invulnerable: boolean;
                // @ts-ignore
                protected server: cn.nukkit.Server;
                // @ts-ignore
                public highestPosition: number;
                // @ts-ignore
                public closed: boolean;
                // @ts-ignore
                protected timing: any /*co.aikar.timings.Timing*/;
                // @ts-ignore
                protected isPlayer: boolean;
                // @ts-ignore
                public abstract getNetworkId(): number;
                // @ts-ignore
                public getHeight(): number;
                // @ts-ignore
                public getEyeHeight(): number;
                // @ts-ignore
                public getWidth(): number;
                // @ts-ignore
                public getLength(): number;
                // @ts-ignore
                protected getStepHeight(): number;
                // @ts-ignore
                public canCollide(): boolean;
                // @ts-ignore
                protected getGravity(): number;
                // @ts-ignore
                protected getDrag(): number;
                // @ts-ignore
                protected getBaseOffset(): number;
                // @ts-ignore
                protected initEntity(): void;
                // @ts-ignore
                protected init(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag): void;
                // @ts-ignore
                public hasCustomName(): boolean;
                // @ts-ignore
                public getNameTag(): string;
                // @ts-ignore
                public isNameTagVisible(): boolean;
                // @ts-ignore
                public isNameTagAlwaysVisible(): boolean;
                // @ts-ignore
                public setNameTag(name: string): void;
                // @ts-ignore
                public setNameTagVisible(): void;
                // @ts-ignore
                public setNameTagVisible(value: boolean): void;
                // @ts-ignore
                public setNameTagAlwaysVisible(): void;
                // @ts-ignore
                public setNameTagAlwaysVisible(value: boolean): void;
                // @ts-ignore
                public setScoreTag(score: string): void;
                // @ts-ignore
                public getScoreTag(): string;
                // @ts-ignore
                public isSneaking(): boolean;
                // @ts-ignore
                public setSneaking(): void;
                // @ts-ignore
                public setSneaking(value: boolean): void;
                // @ts-ignore
                public isSwimming(): boolean;
                // @ts-ignore
                public setSwimming(): void;
                // @ts-ignore
                public setSwimming(value: boolean): void;
                // @ts-ignore
                public isSprinting(): boolean;
                // @ts-ignore
                public setSprinting(): void;
                // @ts-ignore
                public setSprinting(value: boolean): void;
                // @ts-ignore
                public isGliding(): boolean;
                // @ts-ignore
                public setGliding(): void;
                // @ts-ignore
                public setGliding(value: boolean): void;
                // @ts-ignore
                public isImmobile(): boolean;
                // @ts-ignore
                public setImmobile(): void;
                // @ts-ignore
                public setImmobile(value: boolean): void;
                // @ts-ignore
                public canClimb(): boolean;
                // @ts-ignore
                public setCanClimb(): void;
                // @ts-ignore
                public setCanClimb(value: boolean): void;
                // @ts-ignore
                public canClimbWalls(): boolean;
                // @ts-ignore
                public setCanClimbWalls(): void;
                // @ts-ignore
                public setCanClimbWalls(value: boolean): void;
                // @ts-ignore
                public setScale(scale: number): void;
                // @ts-ignore
                public getScale(): number;
                // @ts-ignore
                public getPassengers(): java.util.List;
                // @ts-ignore
                public getPassenger(): cn.nukkit.entity.Entity;
                // @ts-ignore
                public isPassenger(entity: cn.nukkit.entity.Entity): boolean;
                // @ts-ignore
                public isControlling(entity: cn.nukkit.entity.Entity): boolean;
                // @ts-ignore
                public hasControllingPassenger(): boolean;
                // @ts-ignore
                public getRiding(): cn.nukkit.entity.Entity;
                // @ts-ignore
                public getEffects(): java.util.Map;
                // @ts-ignore
                public removeAllEffects(): void;
                // @ts-ignore
                public removeEffect(effectId: number): void;
                // @ts-ignore
                public getEffect(effectId: number): cn.nukkit.potion.Effect;
                // @ts-ignore
                public hasEffect(effectId: number): boolean;
                // @ts-ignore
                public addEffect(effect: cn.nukkit.potion.Effect): void;
                // @ts-ignore
                public recalculateBoundingBox(): void;
                // @ts-ignore
                public recalculateBoundingBox(send: boolean): void;
                // @ts-ignore
                protected recalculateEffectColor(): void;
                // @ts-ignore
                public static createEntity(name: string, pos: cn.nukkit.level.Position, args: java.lang.Object): cn.nukkit.entity.Entity;
                // @ts-ignore
                public static createEntity(type: number, pos: cn.nukkit.level.Position, args: java.lang.Object): cn.nukkit.entity.Entity;
                // @ts-ignore
                public static createEntity(name: string, chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, args: java.lang.Object): cn.nukkit.entity.Entity;
                // @ts-ignore
                public static createEntity(type: number, chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, args: java.lang.Object): cn.nukkit.entity.Entity;
                // @ts-ignore
                public static registerEntity(name: string, clazz: java.lang.Class): boolean;
                // @ts-ignore
                public static registerEntity(name: string, clazz: java.lang.Class, force: boolean): boolean;
                // @ts-ignore
                public static getDefaultNBT(pos: cn.nukkit.math.Vector3): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static getDefaultNBT(pos: cn.nukkit.math.Vector3, motion: cn.nukkit.math.Vector3): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public static getDefaultNBT(pos: cn.nukkit.math.Vector3, motion: cn.nukkit.math.Vector3, yaw: number, pitch: number): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getSaveId(): string;
                // @ts-ignore
                public spawnTo(player: cn.nukkit.Player): void;
                // @ts-ignore
                protected createAddEntityPacket(): cn.nukkit.network.protocol.DataPacket;
                // @ts-ignore
                public getViewers(): java.util.Map;
                // @ts-ignore
                public sendPotionEffects(player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendData(player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendData(player: cn.nukkit.Player, data: cn.nukkit.entity.data.EntityMetadata): void;
                // @ts-ignore
                public sendData(players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendData(players: cn.nukkit.Player, data: cn.nukkit.entity.data.EntityMetadata): void;
                // @ts-ignore
                public despawnFrom(player: cn.nukkit.Player): void;
                // @ts-ignore
                public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                // @ts-ignore
                public attack(damage: number): boolean;
                // @ts-ignore
                public heal(source: cn.nukkit.event.entity.EntityRegainHealthEvent): void;
                // @ts-ignore
                public heal(amount: number): void;
                // @ts-ignore
                public getHealth(): number;
                // @ts-ignore
                public isAlive(): boolean;
                // @ts-ignore
                public isClosed(): boolean;
                // @ts-ignore
                public setHealth(health: number): void;
                // @ts-ignore
                public setLastDamageCause(type: cn.nukkit.event.entity.EntityDamageEvent): void;
                // @ts-ignore
                public getLastDamageCause(): cn.nukkit.event.entity.EntityDamageEvent;
                // @ts-ignore
                public getMaxHealth(): number;
                // @ts-ignore
                public setMaxHealth(maxHealth: number): void;
                // @ts-ignore
                public canCollideWith(entity: cn.nukkit.entity.Entity): boolean;
                // @ts-ignore
                protected checkObstruction(x: number, y: number, z: number): boolean;
                // @ts-ignore
                public entityBaseTick(): boolean;
                // @ts-ignore
                public entityBaseTick(tickDiff: number): boolean;
                // @ts-ignore
                public updateMovement(): void;
                // @ts-ignore
                public addMovement(x: number, y: number, z: number, yaw: number, pitch: number, headYaw: number): void;
                // @ts-ignore
                public addMotion(motionX: number, motionY: number, motionZ: number): void;
                // @ts-ignore
                public getDirectionVector(): cn.nukkit.math.Vector3;
                // @ts-ignore
                public getDirectionPlane(): cn.nukkit.math.Vector2;
                // @ts-ignore
                public getHorizontalFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public onUpdate(currentTick: number): boolean;
                // @ts-ignore
                public mountEntity(entity: cn.nukkit.entity.Entity): boolean;
                /**
                 * Mount or Dismounts an Entity from a/into vehicle
                 */
                // @ts-ignore
                public mountEntity(entity: cn.nukkit.entity.Entity, mode: number): boolean;
                // @ts-ignore
                public dismountEntity(entity: cn.nukkit.entity.Entity): boolean;
                // @ts-ignore
                protected broadcastLinkPacket(rider: cn.nukkit.entity.Entity, type: number): void;
                // @ts-ignore
                public updatePassengers(): void;
                // @ts-ignore
                protected updatePassengerPosition(passenger: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public setSeatPosition(pos: cn.nukkit.math.Vector3f): void;
                // @ts-ignore
                public getSeatPosition(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public getMountedOffset(entity: cn.nukkit.entity.Entity): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public scheduleUpdate(): void;
                // @ts-ignore
                public isOnFire(): boolean;
                // @ts-ignore
                public setOnFire(seconds: number): void;
                // @ts-ignore
                public getAbsorption(): number;
                // @ts-ignore
                public setAbsorption(absorption: number): void;
                // @ts-ignore
                public getDirection(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public extinguish(): void;
                // @ts-ignore
                public canTriggerWalking(): boolean;
                // @ts-ignore
                public resetFallDistance(): void;
                // @ts-ignore
                protected updateFallState(onGround: boolean): void;
                // @ts-ignore
                public getBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public fall(fallDistance: number): void;
                // @ts-ignore
                public handleLavaMovement(): void;
                // @ts-ignore
                public moveFlying(strafe: number, forward: number, friction: number): void;
                // @ts-ignore
                public onCollideWithPlayer(entityPlayer: cn.nukkit.entity.EntityHuman): void;
                // @ts-ignore
                public applyEntityCollision(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public onStruckByLightning(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                protected switchLevel(targetLevel: cn.nukkit.level.Level): boolean;
                // @ts-ignore
                public getPosition(): cn.nukkit.level.Position;
                // @ts-ignore
                public getLocation(): cn.nukkit.level.Location;
                // @ts-ignore
                public isInsideOfWater(): boolean;
                // @ts-ignore
                public isInsideOfSolid(): boolean;
                // @ts-ignore
                public isInsideOfFire(): boolean;
                // @ts-ignore
                public isOnLadder(): boolean;
                // @ts-ignore
                public fastMove(dx: number, dy: number, dz: number): boolean;
                // @ts-ignore
                public move(dx: number, dy: number, dz: number): boolean;
                // @ts-ignore
                protected checkGroundState(movX: number, movY: number, movZ: number, dx: number, dy: number, dz: number): void;
                // @ts-ignore
                public getBlocksAround(): java.util.List;
                // @ts-ignore
                public getCollisionBlocks(): java.util.List;
                /**
                 * Returns whether this entity can be moved by currents in liquids.
                 */
                // @ts-ignore
                public canBeMovedByCurrents(): boolean;
                // @ts-ignore
                protected checkBlockCollision(): void;
                // @ts-ignore
                public setPositionAndRotation(pos: cn.nukkit.math.Vector3, yaw: number, pitch: number): boolean;
                // @ts-ignore
                public setRotation(yaw: number, pitch: number): void;
                /**
                 * Whether the entity can active pressure plates.
                 * Used for {@link cn.nukkit.entity.passive.EntityBat}s only.
                 */
                // @ts-ignore
                public doesTriggerPressurePlate(): boolean;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                protected checkChunks(): void;
                // @ts-ignore
                public setPosition(pos: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public getMotion(): cn.nukkit.math.Vector3;
                // @ts-ignore
                public setMotion(motion: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public isOnGround(): boolean;
                // @ts-ignore
                public kill(): void;
                // @ts-ignore
                public teleport(pos: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public teleport(pos: cn.nukkit.math.Vector3, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean;
                // @ts-ignore
                public teleport(pos: cn.nukkit.level.Position): boolean;
                // @ts-ignore
                public teleport(pos: cn.nukkit.level.Position, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean;
                // @ts-ignore
                public teleport(location: cn.nukkit.level.Location): boolean;
                // @ts-ignore
                public teleport(location: cn.nukkit.level.Location, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public respawnToAll(): void;
                // @ts-ignore
                public spawnToAll(): void;
                // @ts-ignore
                public despawnFromAll(): void;
                // @ts-ignore
                public close(): void;
                // @ts-ignore
                public setDataProperty(data: cn.nukkit.entity.data.EntityData): boolean;
                // @ts-ignore
                public setDataProperty(data: cn.nukkit.entity.data.EntityData, send: boolean): boolean;
                // @ts-ignore
                public getDataProperties(): cn.nukkit.entity.data.EntityMetadata;
                // @ts-ignore
                public getDataProperty(id: number): cn.nukkit.entity.data.EntityData;
                // @ts-ignore
                public getDataPropertyInt(id: number): number;
                // @ts-ignore
                public getDataPropertyShort(id: number): number;
                // @ts-ignore
                public getDataPropertyByte(id: number): number;
                // @ts-ignore
                public getDataPropertyBoolean(id: number): boolean;
                // @ts-ignore
                public getDataPropertyLong(id: number): number;
                // @ts-ignore
                public getDataPropertyString(id: number): string;
                // @ts-ignore
                public getDataPropertyFloat(id: number): number;
                // @ts-ignore
                public getDataPropertyNBT(id: number): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public getDataPropertyPos(id: number): cn.nukkit.math.Vector3;
                // @ts-ignore
                public getDataPropertyVector3f(id: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public getDataPropertyType(id: number): number;
                // @ts-ignore
                public setDataFlag(propertyId: number, id: number): void;
                // @ts-ignore
                public setDataFlag(propertyId: number, id: number, value: boolean): void;
                // @ts-ignore
                public getDataFlag(propertyId: number, id: number): boolean;
                // @ts-ignore
                public setMetadata(metadataKey: string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void;
                // @ts-ignore
                public getMetadata(metadataKey: string): java.util.List;
                // @ts-ignore
                public hasMetadata(metadataKey: string): boolean;
                // @ts-ignore
                public removeMetadata(metadataKey: string, owningPlugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public getServer(): cn.nukkit.Server;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
