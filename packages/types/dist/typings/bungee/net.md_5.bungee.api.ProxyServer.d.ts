declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                abstract class ProxyServer extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Sets the proxy instance. This method may only be called once per an
                     * application.
                     */
                    // @ts-ignore
                    public static setInstance(instance: any /*net.md_5.bungee.api.ProxyServer*/): void;
                    /**
                     * Gets the name of the currently running proxy software.
                     */
                    // @ts-ignore
                    public abstract getName(): string;
                    /**
                     * Gets the version of the currently running proxy software.
                     */
                    // @ts-ignore
                    public abstract getVersion(): string;
                    /**
                     * Gets a localized string from the .properties file.
                     */
                    // @ts-ignore
                    public abstract getTranslation(name: string, args: java.lang.Object): string;
                    /**
                     * Gets the main logger which can be used as a suitable replacement for
                     * {@link System#out} and {@link System#err}.
                     */
                    // @ts-ignore
                    public abstract getLogger(): java.util.logging.Logger;
                    /**
                     * Return all players currently connected.
                     */
                    // @ts-ignore
                    public abstract getPlayers(): java.util.Collection;
                    /**
                     * Gets a connected player via their unique username.
                     */
                    // @ts-ignore
                    public abstract getPlayer(name: string): any /*net.md_5.bungee.api.connection.ProxiedPlayer*/;
                    /**
                     * Return all servers registered to this proxy, keyed by name. Unlike the
                     * methods in {@link ConfigurationAdapter#getServers()}, this will not
                     * return a fresh map each time.
                     */
                    // @ts-ignore
                    public abstract getServers(): java.util.Map;
                    /**
                     * Gets the server info of a server.
                     */
                    // @ts-ignore
                    public abstract getServerInfo(name: string): any /*net.md_5.bungee.api.config.ServerInfo*/;
                    /**
                     * Get the {@link PluginManager} associated with loading plugins and
                     * dispatching events. It is recommended that implementations use the
                     * provided PluginManager class.
                     */
                    // @ts-ignore
                    public abstract getPluginManager(): any /*net.md_5.bungee.api.plugin.PluginManager*/;
                    /**
                     * Returns the currently in use configuration adapter.
                     */
                    // @ts-ignore
                    public abstract getConfigurationAdapter(): any /*net.md_5.bungee.api.config.ConfigurationAdapter*/;
                    /**
                     * Set the configuration adapter to be used. Must be called from
                     * {@link Plugin#onLoad()}.
                     */
                    // @ts-ignore
                    public abstract setConfigurationAdapter(adapter: any /*net.md_5.bungee.api.config.ConfigurationAdapter*/): void;
                    /**
                     * Get the currently in use reconnect handler.
                     */
                    // @ts-ignore
                    public abstract getReconnectHandler(): any /*net.md_5.bungee.api.ReconnectHandler*/;
                    /**
                     * Sets the reconnect handler to be used for subsequent connections.
                     */
                    // @ts-ignore
                    public abstract setReconnectHandler(handler: any /*net.md_5.bungee.api.ReconnectHandler*/): void;
                    /**
                     * Gracefully mark this instance for shutdown.
                     */
                    // @ts-ignore
                    public abstract stop(): void;
                    /**
                     * Register a channel for use with plugin messages. This is required by some
                     * server / client implementations.
                     */
                    // @ts-ignore
                    public abstract registerChannel(channel: string): void;
                    /**
                     * Unregister a previously registered channel.
                     */
                    // @ts-ignore
                    public abstract unregisterChannel(channel: string): void;
                    /**
                     * Get an immutable set of all registered plugin channels.
                     */
                    // @ts-ignore
                    public abstract getChannels(): java.util.Collection;
                    /**
                     * Get the Minecraft version supported by this proxy.
                     */
                    // @ts-ignore
                    public abstract getGameVersion(): string;
                    /**
                     * Get the Minecraft protocol version supported by this proxy.
                     */
                    // @ts-ignore
                    public abstract getProtocolVersion(): number;
                    /**
                     * Factory method to construct an implementation specific server info
                     * instance.
                     */
                    // @ts-ignore
                    public abstract constructServerInfo(name: string, address: java.net.InetSocketAddress, motd: string, restricted: boolean): any /*net.md_5.bungee.api.config.ServerInfo*/;
                    /**
                     * Returns the console overlord for this proxy. Being the console, this
                     * command server cannot have permissions or groups, and will be able to
                     * execute anything.
                     */
                    // @ts-ignore
                    public abstract getConsole(): any /*net.md_5.bungee.api.CommandSender*/;
                    /**
                     * Return the folder used to load plugins from.
                     */
                    // @ts-ignore
                    public abstract getPluginsFolder(): java.io.File;
                    /**
                     * Get the scheduler instance for this proxy.
                     */
                    // @ts-ignore
                    public abstract getScheduler(): any /*net.md_5.bungee.api.scheduler.TaskScheduler*/;
                    /**
                     * Get the current number of connected users. The default implementation is
                     * more efficient than {@link #getPlayers()} as it does not take a lock or
                     * make a copy.
                     */
                    // @ts-ignore
                    public abstract getOnlineCount(): number;
                    /**
                     * Send the specified message to the console and all connected players.
                     */
                    // @ts-ignore
                    public abstract broadcast(message: string): void;
                    /**
                     * Gets the commands which are disabled and will not be run on this proxy.
                     */
                    // @ts-ignore
                    public abstract getDisabledCommands(): java.util.Collection;
                    /**
                     * Gets BungeeCord's core config.
                     */
                    // @ts-ignore
                    public abstract getConfig(): any /*net.md_5.bungee.api.ProxyConfig*/;
                    /**
                     * Attempts to match any players with the given name, and returns a list of
                     * all possible matches.
                     * The exact algorithm to use to match players is implementation specific,
                     * but in general you can expect this method to return player's whose names
                     * begin with the specified prefix.
                     */
                    // @ts-ignore
                    public abstract matchPlayer(match: string): java.util.Collection;
                    /**
                     * Creates a new empty title configuration. In most cases you will want to
                     * {@link Title#reset()} the current title first so your title won't be
                     * affected by a previous one.
                     */
                    // @ts-ignore
                    public abstract createTitle(): any /*net.md_5.bungee.api.Title*/;
                }
            }
        }
    }
}
