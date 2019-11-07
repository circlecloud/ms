declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface WorldArchetype extends org.spongepowered.api.CatalogType {
                    /**
                     * Gets a new Builder instance for {@link WorldArchetype}.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.world.WorldArchetype.Builder;
                    /**
                     * Gets enabled status. Built worlds who are enabled but unloaded may
                     * be loaded automatically if an attempt is made to transfer an entity
                     * to the world using {@link Entity#transferToWorld} .
                     */
                    // @ts-ignore
                     isEnabled(): boolean;
                    /**
                     * Gets whether to load when the server starts.
                     */
                    // @ts-ignore
                     loadOnStartup(): boolean;
                    /**
                     * Gets whether spawn chunks remain loaded when no players are present.
                     */
                    // @ts-ignore
                     doesKeepSpawnLoaded(): boolean;
                    /**
                     * Gets whether spawn chunks will generate on load.
                     */
                    // @ts-ignore
                     doesGenerateSpawnOnLoad(): boolean;
                    /**
                     * Gets the seed.
                     */
                    // @ts-ignore
                     getSeed(): number;
                    /**
                     * Gets if the seed will be randomized for each world generated.
                     */
                    // @ts-ignore
                     isSeedRandomized(): boolean;
                    /**
                     * Gets the gamemode.
                     */
                    // @ts-ignore
                     getGameMode(): org.spongepowered.api.entity.living.player.gamemode.GameMode;
                    /**
                     * Gets the generator type.
                     */
                    // @ts-ignore
                     getGeneratorType(): org.spongepowered.api.world.GeneratorType;
                    /**
                     * Gets an immutable collection of the world generator modifiers.
                     */
                    // @ts-ignore
                     getGeneratorModifiers(): java.util.Collection;
                    /**
                     * Gets whether map features are enabled.
                     * <p>Examples include Villages, Temples, etc.</p>
                     */
                    // @ts-ignore
                     usesMapFeatures(): boolean;
                    /**
                     * Gets whether hardcore mode is enabled.
                     */
                    // @ts-ignore
                     isHardcore(): boolean;
                    /**
                     * Gets whether commands are allowed.
                     */
                    // @ts-ignore
                     areCommandsAllowed(): boolean;
                    /**
                     * Gets whether the bonus chest should be generated.
                     * <p>This only applies on the initial load of the {@link World}
                     * created via the {@link WorldProperties} created from this settings.</p>
                     */
                    // @ts-ignore
                     doesGenerateBonusChest(): boolean;
                    /**
                     * Gets the dimension type.
                     */
                    // @ts-ignore
                     getDimensionType(): org.spongepowered.api.world.DimensionType;
                    /**
                     * Gets the {@link PortalAgentType} for the world.
                     */
                    // @ts-ignore
                     getPortalAgentType(): org.spongepowered.api.world.PortalAgentType;
                    /**
                     * Gets the difficulty.
                     */
                    // @ts-ignore
                     getDifficulty(): org.spongepowered.api.world.difficulty.Difficulty;
                    /**
                     * Gets whether PVP combat is enabled.
                     */
                    // @ts-ignore
                     isPVPEnabled(): boolean;
                    /**
                     * Gets a {@link DataContainer} of any extra settings required by the
                     * generator.
                     */
                    // @ts-ignore
                     getGeneratorSettings(): org.spongepowered.api.data.DataContainer;
                    /**
                     * Gets the {@link SerializationBehavior} that worlds built from this will use.
                     */
                    // @ts-ignore
                     getSerializationBehavior(): org.spongepowered.api.world.SerializationBehavior;
                }
            }
        }
    }
}
