// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace storage {
                    // @ts-ignore
                    interface WorldProperties extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Gets whether this world has been initialized.
                         */
                        // @ts-ignore
                         isInitialized(): boolean;
                        /**
                         * Gets the name of this world.
                         */
                        // @ts-ignore
                         getWorldName(): string;
                        /**
                         * Gets the {@link UUID} of the world.
                         */
                        // @ts-ignore
                         getUniqueId(): java.util.UUID;
                        /**
                         * Gets whether this world is enabled. A world which is enabled but unloaded
                         * may be loaded automatically if an attempt is made to transfer an entity
                         * to the world using {@link Entity#transferToWorld} .
                         */
                        // @ts-ignore
                         isEnabled(): boolean;
                        /**
                         * Sets this world as enabled. A world which is enabled but unloaded may be
                         * loaded automatically if an attempt is made to transfer an entity to the
                         * world using {@link Entity#transferToWorld} .
                         */
                        // @ts-ignore
                         setEnabled(state: boolean): void;
                        /**
                         * Gets whether this world will load when the server starts up.
                         */
                        // @ts-ignore
                         loadOnStartup(): boolean;
                        /**
                         * Sets whether this world should load when the server starts up.
                         */
                        // @ts-ignore
                         setLoadOnStartup(state: boolean): void;
                        /**
                         * Gets whether spawn chunks of this world remain loaded when no players are
                         * present.
                         */
                        // @ts-ignore
                         doesKeepSpawnLoaded(): boolean;
                        /**
                         * Sets whether the spawn chunks of the world should remain loaded when no
                         * players are present.
                         */
                        // @ts-ignore
                         setKeepSpawnLoaded(state: boolean): void;
                        /**
                         * Gets whether spawn chunks of this world will generate on load.
                         */
                        // @ts-ignore
                         doesGenerateSpawnOnLoad(): boolean;
                        /**
                         * Sets whether the spawn chunks of the world will generate on load.
                         */
                        // @ts-ignore
                         setGenerateSpawnOnLoad(state: boolean): void;
                        /**
                         * Gets the default spawn position of this world.
                         */
                        // @ts-ignore
                         getSpawnPosition(): any /*Vector3i*/;
                        /**
                         * Sets the default spawn position of this world.
                         */
                        // @ts-ignore
                         setSpawnPosition(position: any /*Vector3i*/): void;
                        /**
                         * Gets the {@link GeneratorType} of this world.
                         */
                        // @ts-ignore
                         getGeneratorType(): org.spongepowered.api.world.GeneratorType;
                        /**
                         * Sets the {@link GeneratorType} of this world.
                         */
                        // @ts-ignore
                         setGeneratorType(type: org.spongepowered.api.world.GeneratorType): void;
                        /**
                         * Gets the seed of this world.
                         */
                        // @ts-ignore
                         getSeed(): number;
                        /**
                         * Sets the seed of this world.
                         * <p>Warning: this may cause the edge of currently generated chunks to no
                         * longer align with newly generated chunks.</p>
                         */
                        // @ts-ignore
                         setSeed(seed: number): void;
                        /**
                         * Gets the number of ticks which have occurred since the world was created.
                         */
                        // @ts-ignore
                         getTotalTime(): number;
                        /**
                         * Gets the time of day, in ticks. The total number of ticks in a day is
                         * 24000, however this value does not reset to zero at the start of each day
                         * but rather keeps counting passed 24000.
                         */
                        // @ts-ignore
                         getWorldTime(): number;
                        /**
                         * Sets the time of day, in ticks. The total number of ticks in a day is
                         * 24000, however this value does not reset to zero at the start of each day
                         * but rather keeps counting passed 24000.
                         */
                        // @ts-ignore
                         setWorldTime(time: number): void;
                        /**
                         * Gets the {@link DimensionType} of this world.
                         */
                        // @ts-ignore
                         getDimensionType(): org.spongepowered.api.world.DimensionType;
                        /**
                         * Gets the {@link PortalAgentType} for the world.
                         */
                        // @ts-ignore
                         getPortalAgentType(): org.spongepowered.api.world.PortalAgentType;
                        /**
                         * Gets whether PVP combat is enabled in this world.
                         */
                        // @ts-ignore
                         isPVPEnabled(): boolean;
                        /**
                         * Sets whether PVP combat is enabled in this world.
                         */
                        // @ts-ignore
                         setPVPEnabled(enabled: boolean): void;
                        /**
                         * Gets whether this world is currently experiencing rain/snow/cloud-cover
                         * (depending on the biome of a specific location).
                         */
                        // @ts-ignore
                         isRaining(): boolean;
                        /**
                         * Sets whether this world is currently experiencing rain/snow/cloud-cover
                         * (depending on the biome of a specific location).
                         */
                        // @ts-ignore
                         setRaining(state: boolean): void;
                        /**
                         * Gets the number of ticks until the weather is next toggled to a new
                         * random value.
                         */
                        // @ts-ignore
                         getRainTime(): number;
                        /**
                         * Sets the number of ticks until the weather is next toggled to a new
                         * random value.
                         */
                        // @ts-ignore
                         setRainTime(time: number): void;
                        /**
                         * Gets whether this world is currently experiencing a lightning storm.
                         */
                        // @ts-ignore
                         isThundering(): boolean;
                        /**
                         * Sets whether this world is currently experiencing a lightning storm.
                         */
                        // @ts-ignore
                         setThundering(state: boolean): void;
                        /**
                         * Gets the number of ticks until the {@link #isThundering()} state is
                         * toggled to a new random value.
                         */
                        // @ts-ignore
                         getThunderTime(): number;
                        /**
                         * Sets the number of ticks until the {@link #isThundering()} state is
                         * toggled to a new random value.
                         */
                        // @ts-ignore
                         setThunderTime(time: number): void;
                        /**
                         * Gets the default {@link GameMode} of this world.
                         */
                        // @ts-ignore
                         getGameMode(): org.spongepowered.api.entity.living.player.gamemode.GameMode;
                        /**
                         * Sets the default {@link GameMode} of this world.
                         */
                        // @ts-ignore
                         setGameMode(gamemode: org.spongepowered.api.entity.living.player.gamemode.GameMode): void;
                        /**
                         * Gets whether this world will generate map features such as villages and
                         * strongholds.
                         */
                        // @ts-ignore
                         usesMapFeatures(): boolean;
                        /**
                         * Sets whether this world will generate map features such as villages and
                         * strongholds.
                         */
                        // @ts-ignore
                         setMapFeaturesEnabled(state: boolean): void;
                        /**
                         * Gets whether this world is set to hardcore mode.
                         */
                        // @ts-ignore
                         isHardcore(): boolean;
                        /**
                         * Sets whether this world is set to hardcore mode.
                         */
                        // @ts-ignore
                         setHardcore(state: boolean): void;
                        /**
                         * Gets whether commands are allowed within this world. May not be respected
                         * when not in single player.
                         */
                        // @ts-ignore
                         areCommandsAllowed(): boolean;
                        /**
                         * Sets whether commands are allowed within this world. May not be respected
                         * when not in single player.
                         */
                        // @ts-ignore
                         setCommandsAllowed(state: boolean): void;
                        /**
                         * Gets the difficulty of this world.
                         */
                        // @ts-ignore
                         getDifficulty(): org.spongepowered.api.world.difficulty.Difficulty;
                        /**
                         * Sets the difficulty of this world.
                         */
                        // @ts-ignore
                         setDifficulty(difficulty: org.spongepowered.api.world.difficulty.Difficulty): void;
                        /**
                         * Gets whether the bonus chest should be generated.
                         * <p>This only applies on the initial load of the {@link World}
                         * created via this properties.</p>
                         */
                        // @ts-ignore
                         doesGenerateBonusChest(): boolean;
                        /**
                         * Gets the center of the world border.
                         * <p>The returned position is three-dimensional. As the world border
                         * extends over the entire y-axis, the returned position will always have a
                         * {@code y} set to 0.</p>
                         */
                        // @ts-ignore
                         getWorldBorderCenter(): any /*Vector3d*/;
                        /**
                         * Sets the center of the world border.
                         */
                        // @ts-ignore
                         setWorldBorderCenter(x: number, z: number): void;
                        /**
                         * Gets the diameter of the world border.
                         * <p>The returned diameter applies to the x and z axis. The world border
                         * extends over the entire y-axis.</p>
                         */
                        // @ts-ignore
                         getWorldBorderDiameter(): number;
                        /**
                         * Sets the diameter of the world border.
                         * <p>The specified diameter applies to the x and z axis. The world border
                         * extends over the entire y-axis.</p>
                         */
                        // @ts-ignore
                         setWorldBorderDiameter(diameter: number): void;
                        /**
                         * Gets the time remaining until the world border stops expanding or
                         * contracting.
                         */
                        // @ts-ignore
                         getWorldBorderTimeRemaining(): number;
                        /**
                         * Sets the time remaining until the world border stops expanding or
                         * contracting.
                         */
                        // @ts-ignore
                         setWorldBorderTimeRemaining(time: number): void;
                        /**
                         * Gets the diameter the world border is expanding or contracting to.
                         * <p>This will return the same value as {@link #getWorldBorderDiameter}
                         * unless {@link #getWorldBorderTimeRemaining} is greater than 0.</p>
                         */
                        // @ts-ignore
                         getWorldBorderTargetDiameter(): number;
                        /**
                         * Sets the target diameter of the world border.
                         * <p>The world border diameter increases/decrease linearly over time
                         * specified in {@link #getWorldBorderTimeRemaining()}. The specified
                         * diameter applies to the x and z axis. The world border extends over the
                         * entire y-axis.</p>
                         */
                        // @ts-ignore
                         setWorldBorderTargetDiameter(diameter: number): void;
                        /**
                         * Gets the distance a player may be outside the world border before taking
                         * damage.
                         */
                        // @ts-ignore
                         getWorldBorderDamageThreshold(): number;
                        /**
                         * Sets the distance a player may be be outside the world border before
                         * taking damage.
                         */
                        // @ts-ignore
                         setWorldBorderDamageThreshold(distance: number): void;
                        /**
                         * Gets the damage done to a player per block per tick when outside the
                         * buffer.
                         */
                        // @ts-ignore
                         getWorldBorderDamageAmount(): number;
                        /**
                         * Sets the damage done to a player per block per tick when outside the
                         * buffer.
                         */
                        // @ts-ignore
                         setWorldBorderDamageAmount(damage: number): void;
                        /**
                         * Gets the time when a contracting world border will warn a player for whom
                         * the world border will reach in {@code time} seconds.
                         * <p>In Minecraft, the warning is displayed in the form of a reddish
                         * tint.</p>
                         */
                        // @ts-ignore
                         getWorldBorderWarningTime(): number;
                        /**
                         * Sets the time when a contracting world border will warn a player for whom
                         * the world border will reach in {@code time} seconds.
                         * <p>In Minecraft, the warning is displayed in the form of a reddish
                         * tint.</p>
                         */
                        // @ts-ignore
                         setWorldBorderWarningTime(time: number): void;
                        /**
                         * Gets the distance when a contracting world border will warn a player for
                         * whom the world border is {@code distance} blocks away.
                         * <p>In Minecraft, the warning is displayed in the form of a reddish
                         * tint.</p>
                         */
                        // @ts-ignore
                         getWorldBorderWarningDistance(): number;
                        /**
                         * Sets the distance when a contracting world border will warn a player for
                         * whom the world border is {@code distance} blocks away.
                         * <p>In Minecraft, the warning is displayed in the form of a reddish
                         * tint.</p>
                         */
                        // @ts-ignore
                         setWorldBorderWarningDistance(distance: number): void;
                        /**
                         * Gets the specified GameRule value.
                         */
                        // @ts-ignore
                         getGameRule(gameRule: string): java.util.Optional;
                        /**
                         * Gets a map of the currently set game rules and their values.
                         */
                        // @ts-ignore
                         getGameRules(): java.util.Map;
                        /**
                         * Sets the specified GameRule value. If one with this name does not exist,
                         * it will be created.
                         */
                        // @ts-ignore
                         setGameRule(gameRule: string, value: string): void;
                        /**
                         * Removes custom GameRule.
                         */
                        // @ts-ignore
                         removeGameRule(gameRule: string): boolean;
                        /**
                         * Gets a {@link DataContainer} containing any additional properties for
                         * this world. The returned data is a snapshot of the data and is not live.
                         */
                        // @ts-ignore
                         getAdditionalProperties(): org.spongepowered.api.data.DataContainer;
                        /**
                         * Gets a section of the additional properties returned by
                         * {@link #getAdditionalProperties()}. The returned data is a snapshot of
                         * the data and is not live.
                         */
                        // @ts-ignore
                         getPropertySection(path: org.spongepowered.api.data.DataQuery): java.util.Optional;
                        /**
                         * Sets a path within the additional data to the given {@link DataView}. If
                         * you are using this to store data related to your mod/plugin is is HIGHLY
                         * recommended that the identifier you pass in be your mod/plugin id.
                         */
                        // @ts-ignore
                         setPropertySection(path: org.spongepowered.api.data.DataQuery, data: org.spongepowered.api.data.DataView): void;
                        /**
                         * Gets an immutable collection of the world generator modifiers currently
                         * in use.
                         */
                        // @ts-ignore
                         getGeneratorModifiers(): java.util.Collection;
                        /**
                         * Sets the given world generator modifiers to be used.
                         */
                        // @ts-ignore
                         setGeneratorModifiers(modifiers: java.util.Collection): void;
                        /**
                         * Gets the generator settings. These can be used by the generator type
                         * and/or by the generator modifiers.
                         */
                        // @ts-ignore
                         getGeneratorSettings(): org.spongepowered.api.data.DataContainer;
                        /**
                         * Gets the {@link SerializationBehavior} in use.
                         */
                        // @ts-ignore
                         getSerializationBehavior(): org.spongepowered.api.world.SerializationBehavior;
                        /**
                         * Sets the {@link SerializationBehavior} for use.
                         */
                        // @ts-ignore
                         setSerializationBehavior(behavior: org.spongepowered.api.world.SerializationBehavior): void;
                    }
                }
            }
        }
    }
}
