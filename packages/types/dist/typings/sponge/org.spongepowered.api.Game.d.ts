declare namespace org {
    namespace spongepowered {
        namespace api {
            // @ts-ignore
            interface Game {
                /**
                 * Gets the current {@link GameState} that this game is currently in.
                 */
                // @ts-ignore
                 getState(): org.spongepowered.api.GameState;
                /**
                 * Gets the directory where the game's files are located.
                 */
                // @ts-ignore
                 getGameDirectory(): java.nio.file.Path;
                /**
                 * Gets the directory where the game will store save files.
                 * <p>This location differs based on the implementation and is therefore
                 * implementation-specific.</p>
                 * <p>To elaborate, this is how it is handled in Minecraft based on side:
                 * </p>
                 * <ul>
                 * <li>Client
                 * <ul>This directory will point to {@link Game#getGameDirectory()}.resolve("saves").resolve(currentSaveName)</ul>
                 * <li>Server
                 * <ul>This directory will be equivalent to {@link Game#getGameDirectory()}.resolve(level-name).</ul>
                 * </ul>
                 * <p>Consult your specific implementation if they support placing this
                 * elsewhere.</p>
                 */
                // @ts-ignore
                 getSavesDirectory(): java.nio.file.Path;
                /**
                 * Returns if the {@link Server} is available for use. The result of this method is entirely
                 * dependent on the implementation.
                 */
                // @ts-ignore
                 isServerAvailable(): boolean;
                /**
                 * Gets the {@link Server}.
                 */
                // @ts-ignore
                 getServer(): org.spongepowered.api.Server;
                /**
                 * Retrieves the GameDictionary (item dictionary) for this {@link Game}.
                 */
                // @ts-ignore
                 getGameDictionary(): java.util.Optional;
                /**
                 * Returns the current platform, or implementation, this {@link Game} is running on.
                 */
                // @ts-ignore
                 getPlatform(): org.spongepowered.api.Platform;
                /**
                 * Gets the {@link GameRegistry}.
                 */
                // @ts-ignore
                 getRegistry(): org.spongepowered.api.GameRegistry;
                /**
                 * Gets the {@link DataManager} instance to register
                 * {@link DataSerializable}s, and get the related {@link DataBuilder}s.
                 */
                // @ts-ignore
                 getDataManager(): org.spongepowered.api.data.DataManager;
                /**
                 * Gets the {@link PropertyRegistry} instance to register
                 * {@link PropertyStore}s.
                 */
                // @ts-ignore
                 getPropertyRegistry(): org.spongepowered.api.data.property.PropertyRegistry;
                /**
                 * Gets the {@link PluginManager}.
                 */
                // @ts-ignore
                 getPluginManager(): org.spongepowered.api.plugin.PluginManager;
                /**
                 * Gets the {@link EventManager}.
                 */
                // @ts-ignore
                 getEventManager(): org.spongepowered.api.event.EventManager;
                /**
                 * Gets the {@link AssetManager}.
                 */
                // @ts-ignore
                 getAssetManager(): org.spongepowered.api.asset.AssetManager;
                /**
                 * Gets the {@link ConfigManager} used to load and manage configuration files
                 * for plugins.
                 */
                // @ts-ignore
                 getConfigManager(): org.spongepowered.api.config.ConfigManager;
                /**
                 * Gets the command dispatcher used for registering and dispatching
                 * registered commands.
                 */
                // @ts-ignore
                 getCommandManager(): org.spongepowered.api.command.CommandManager;
                /**
                 * Gets the game's instance of the service manager, which is the gateway
                 * to various services provided by Sponge (command registration and so on).
                 * <p>Services registered by other plugins may be available too.</p>
                 */
                // @ts-ignore
                 getServiceManager(): org.spongepowered.api.service.ServiceManager;
                /**
                 * Gets the scheduler used to schedule tasks.
                 */
                // @ts-ignore
                 getScheduler(): org.spongepowered.api.scheduler.Scheduler;
                /**
                 * Gets the {@link ChannelRegistrar} for creating network channels.
                 */
                // @ts-ignore
                 getChannelRegistrar(): org.spongepowered.api.network.ChannelRegistrar;
                /**
                 * Gets the {@link TeleportHelper}, used to find safe {@link Location}s.
                 */
                // @ts-ignore
                 getTeleportHelper(): org.spongepowered.api.world.TeleportHelper;
                /**
                 * Gets the {@link CauseStackManager} for handling the current event cause
                 * stack and context information.
                 */
                // @ts-ignore
                 getCauseStackManager(): org.spongepowered.api.event.CauseStackManager;
            }
        }
    }
}
