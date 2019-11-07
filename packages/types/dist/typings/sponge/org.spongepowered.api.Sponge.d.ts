// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            // @ts-ignore
             class Sponge extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Gets the {@link Game} instance. There is ever only going
                 * to be a single game instance at any given time, except during
                 * the various extraneous {@link GameState}s that the game instance
                 * is otherwise unavailable.
                 */
                // @ts-ignore
                public static getGame(): org.spongepowered.api.Game;
                /**
                 * Returns the current platform, or implementation, this {@link Game}
                 * is running on.
                 */
                // @ts-ignore
                public static getPlatform(): org.spongepowered.api.Platform;
                /**
                 * Gets the {@link GameRegistry} instance.
                 */
                // @ts-ignore
                public static getRegistry(): org.spongepowered.api.GameRegistry;
                /**
                 * Gets the {@link DataManager} instance.
                 */
                // @ts-ignore
                public static getDataManager(): org.spongepowered.api.data.DataManager;
                /**
                 * Gets the {@link PropertyRegistry} instance to register
                 * {@link PropertyStore}s.
                 */
                // @ts-ignore
                public static getPropertyRegistry(): org.spongepowered.api.data.property.PropertyRegistry;
                /**
                 * Gets the {@link PluginManager} instance.
                 */
                // @ts-ignore
                public static getPluginManager(): org.spongepowered.api.plugin.PluginManager;
                /**
                 * Gets the {@link EventManager} instance.
                 */
                // @ts-ignore
                public static getEventManager(): org.spongepowered.api.event.EventManager;
                /**
                 * Gets the {@link AssetManager} instance.
                 */
                // @ts-ignore
                public static getAssetManager(): org.spongepowered.api.asset.AssetManager;
                /**
                 * Gets the {@link ConfigManager} used to load and manage configuration files
                 * for plugins.
                 */
                // @ts-ignore
                public static getConfigManager(): org.spongepowered.api.config.ConfigManager;
                /**
                 * Gets the {@link CommandManager} instance.
                 */
                // @ts-ignore
                public static getCommandManager(): org.spongepowered.api.command.CommandManager;
                /**
                 * Gets the game's instance of the service manager, which is the gateway
                 * to various services provided by Sponge (command registration and so on).
                 * <p>Services registered by other plugins may be available too.</p>
                 */
                // @ts-ignore
                public static getServiceManager(): org.spongepowered.api.service.ServiceManager;
                /**
                 * Gets the scheduler used to schedule tasks.
                 */
                // @ts-ignore
                public static getScheduler(): org.spongepowered.api.scheduler.Scheduler;
                /**
                 * Gets the {@link ChannelRegistrar} for creating network channels.
                 */
                // @ts-ignore
                public static getChannelRegistrar(): org.spongepowered.api.network.ChannelRegistrar;
                /**
                 * Gets the {@link TeleportHelper}, used to find safe {@link Location}s.
                 */
                // @ts-ignore
                public static getTeleportHelper(): org.spongepowered.api.world.TeleportHelper;
                /**
                 * Gets whether a {@link Server} instance is available without throwing an
                 * exception from calling {@link #getServer()}.
                 */
                // @ts-ignore
                public static isServerAvailable(): boolean;
                /**
                 * Gets the {@link Server} instance from the
                 * {@link Game} instance.
                 * <p>Note: During various {@link GameState}s, a {@link Server} instance
                 * may <strong>NOT</strong> be available. During these specific states,
                 * calling {@link Game#getServer()} will throw an exception. To double
                 * check, call {@link #isServerAvailable()}</p>
                 */
                // @ts-ignore
                public static getServer(): org.spongepowered.api.Server;
                /**
                 * Gets the {@link GameDictionary} instance from the
                 * {@link Game} instance.
                 */
                // @ts-ignore
                public static getDictionary(): java.util.Optional;
                /**
                 * Gets the {@link CauseStackManager} instance from the
                 * {@link Game} instance.
                 */
                // @ts-ignore
                public static getCauseStackManager(): org.spongepowered.api.event.CauseStackManager;
                /**
                 * Gets the {@link MetricsConfigManager} instance, allowing data/metric gathering
                 * systems to determine whether they have permission to gather server
                 * metrics.
                 */
                // @ts-ignore
                public static getMetricsConfigManager(): org.spongepowered.api.util.metric.MetricsConfigManager;
            }
        }
    }
}
