declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace WorldArchetype {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets enabled status. Built worlds who are enabled but unloaded may
                         * be loaded automatically if an attempt is made to transfer an entity
                         * to the world using {@link Entity#transferToWorld} .
                         */
                        // @ts-ignore
                         enabled(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets whether to load when the server starts.
                         */
                        // @ts-ignore
                         loadsOnStartup(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets whether the spawn chunks should remain loaded when
                         * no players are present.
                         */
                        // @ts-ignore
                         keepsSpawnLoaded(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets whether the spawn chunks generate on load.
                         */
                        // @ts-ignore
                         generateSpawnOnLoad(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the seed. See {@link #randomSeed()} if a random seed is desired.
                         */
                        // @ts-ignore
                         seed(seed: number): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the seed to be randomized for each world created.
                         */
                        // @ts-ignore
                         randomSeed(): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the default {@link GameMode}. If not specified this
                         * will default to {@link GameModes#SURVIVAL}.
                         */
                        // @ts-ignore
                         gameMode(gameMode: org.spongepowered.api.entity.living.player.gamemode.GameMode): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the generator type. If not specified this will default
                         * to {@link GeneratorTypes#DEFAULT}
                         */
                        // @ts-ignore
                         generator(type: org.spongepowered.api.world.GeneratorType): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the generator modifiers.
                         */
                        // @ts-ignore
                         generatorModifiers(modifier: org.spongepowered.api.world.gen.WorldGeneratorModifier): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the dimension type.
                         */
                        // @ts-ignore
                         dimension(type: org.spongepowered.api.world.DimensionType): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the difficulty.
                         */
                        // @ts-ignore
                         difficulty(difficulty: org.spongepowered.api.world.difficulty.Difficulty): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets whether this should generate map features such as villages
                         * and strongholds. If not specified this will default to true.
                         */
                        // @ts-ignore
                         usesMapFeatures(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets whether hardcore mode is enabled. On servers this will cause
                         * players to be banned upon death, on clients the world will be
                         * deleted! If not specified this will default to false.
                         */
                        // @ts-ignore
                         hardcore(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets any extra settings required by the {@link GeneratorType} or by
                         * the {@link WorldGeneratorModifier}s. If not specified these will
                         * default to the settings within {@link GeneratorType#getGeneratorSettings()}.
                         */
                        // @ts-ignore
                         generatorSettings(settings: org.spongepowered.api.data.DataContainer): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the desired {@link PortalAgentType} for the world.
                         */
                        // @ts-ignore
                         portalAgent(type: org.spongepowered.api.world.PortalAgentType): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets whether PVP combat is enabled in this world.
                         */
                        // @ts-ignore
                         pvp(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets whether commands are allowed to be executed.
                         */
                        // @ts-ignore
                         commandsAllowed(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets whether the bonus chest should be created.
                         */
                        // @ts-ignore
                         generateBonusChest(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Sets the serialization behavior that will be used when saving.
                         */
                        // @ts-ignore
                         serializationBehavior(behavior: org.spongepowered.api.world.SerializationBehavior): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Fills this {@link Builder} for creating {@link WorldArchetype}s,
                         * the builder is then seeded with the values from the given
                         * {@link WorldProperties} object.
                         */
                        // @ts-ignore
                         from(properties: org.spongepowered.api.world.storage.WorldProperties): org.spongepowered.api.world.WorldArchetype.Builder;
                        /**
                         * Builds the {@link WorldArchetype} which can be used to create
                         * a {@link World} in {@link Server#createWorldProperties(String, WorldArchetype)}.
                         * <p>This will also register the settings as a new type in the
                         * {@link GameRegistry}.</p>
                         */
                        // @ts-ignore
                         build(id: string, name: string): org.spongepowered.api.world.WorldArchetype;
                    }
                }
            }
        }
    }
}
