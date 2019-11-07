// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            // @ts-ignore
            interface Server {
                /**
                 * Gets the {@link Player}s currently online.
                 */
                // @ts-ignore
                 getOnlinePlayers(): java.util.Collection;
                /**
                 * Gets the max players allowed on this server.
                 */
                // @ts-ignore
                 getMaxPlayers(): number;
                /**
                 * Gets a {@link Player} by their UUID.
                 */
                // @ts-ignore
                 getPlayer(uniqueId: java.util.UUID): java.util.Optional;
                /**
                 * Gets a {@link Player} by their name.
                 * <p>This only works for online players.</p>
                 * <p><b>Note: Do not use names for persistent storage, the
                 * Notch of today may not be the Notch of yesterday.</b></p>
                 */
                // @ts-ignore
                 getPlayer(name: string): java.util.Optional;
                /**
                 * Gets all currently loaded {@link World}s.
                 */
                // @ts-ignore
                 getWorlds(): java.util.Collection;
                /**
                 * Gets the properties of all unloaded worlds.
                 */
                // @ts-ignore
                 getUnloadedWorlds(): java.util.Collection;
                /**
                 * Gets the properties of all worlds, loaded or otherwise.
                 */
                // @ts-ignore
                 getAllWorldProperties(): java.util.Collection;
                /**
                 * Gets a loaded {@link World} by its unique id ({@link UUID}), if it
                 * exists.
                 */
                // @ts-ignore
                 getWorld(uniqueId: java.util.UUID): java.util.Optional;
                /**
                 * Gets a loaded {@link World} by name, if it exists.
                 */
                // @ts-ignore
                 getWorld(worldName: string): java.util.Optional;
                /**
                 * Gets the properties of default world.
                 */
                // @ts-ignore
                 getDefaultWorld(): java.util.Optional;
                /**
                 * Gets the default {@link World} name that the server creates and loads.
                 */
                // @ts-ignore
                 getDefaultWorldName(): string;
                /**
                 * Loads a {@link World} from the default storage container. If a world with
                 * the given name is already loaded then it is returned instead.
                 */
                // @ts-ignore
                 loadWorld(worldName: string): java.util.Optional;
                /**
                 * Loads a {@link World} from the default storage container. If a world with
                 * the given UUID is already loaded then it is returned instead.
                 */
                // @ts-ignore
                 loadWorld(uniqueId: java.util.UUID): java.util.Optional;
                /**
                 * Loads a {@link World} from the default storage container. If the world
                 * associated with the given properties is already loaded then it is
                 * returned instead.
                 */
                // @ts-ignore
                 loadWorld(properties: org.spongepowered.api.world.storage.WorldProperties): java.util.Optional;
                /**
                 * Gets the {@link WorldProperties} of a world. If a world with the given
                 * name is loaded then this is equivalent to calling
                 * {@link World#getProperties()}. However, if no loaded world is found then
                 * an attempt will be made to match unloaded worlds.
                 */
                // @ts-ignore
                 getWorldProperties(worldName: string): java.util.Optional;
                /**
                 * Gets the {@link WorldProperties} of a world. If a world with the given
                 * UUID is loaded then this is equivalent to calling
                 * {@link World#getProperties()}. However, if no loaded world is found then
                 * an attempt will be made to match unloaded worlds.
                 */
                // @ts-ignore
                 getWorldProperties(uniqueId: java.util.UUID): java.util.Optional;
                /**
                 * Unloads a {@link World}, if there are any connected players in the given
                 * world then no operation will occur.
                 * <p>A world which is unloaded will be removed from memory. However if it
                 * is still enabled according to {@link WorldProperties#isEnabled()} then it
                 * will be loaded again if the server is restarted.</p>
                 */
                // @ts-ignore
                 unloadWorld(world: org.spongepowered.api.world.World): boolean;
                /**
                 * Creates a new {@link WorldProperties} from the given
                 * {@link WorldArchetype}. For the creation of the WorldArchetype please see
                 * {@link org.spongepowered.api.world.WorldArchetype.Builder}.
                 * <p>If the {@link World} exists at the folder name given, the properties
                 * representing that folder name are returned instead.</p>
                 * <p>Although the world is created it is not loaded at this time. Please
                 * see one of the following methods for loading the world.</p>
                 * <ul> <li>{@link #loadWorld(String)}</li> <li>{@link #loadWorld(UUID)}
                 * </li> <li>{@link #loadWorld(WorldProperties)}</li> </ul>
                 */
                // @ts-ignore
                 createWorldProperties(folderName: string, archetype: org.spongepowered.api.world.WorldArchetype): org.spongepowered.api.world.storage.WorldProperties;
                /**
                 * Creates a world copy asynchronously using the new name given and returns
                 * the new world properties if the copy was possible.
                 * <p>If the world is already loaded then the following will occur:</p>
                 * <ul>
                 * <li>World is saved.</li>
                 * <li>World saving is disabled.</li>
                 * <li>World is copied. </li>
                 * <li>World saving is enabled.</li>
                 * </ul>
                 */
                // @ts-ignore
                 copyWorld(worldProperties: org.spongepowered.api.world.storage.WorldProperties, copyName: string): java.util.concurrent.CompletableFuture;
                /**
                 * Renames an unloaded world.
                 */
                // @ts-ignore
                 renameWorld(worldProperties: org.spongepowered.api.world.storage.WorldProperties, newName: string): java.util.Optional;
                /**
                 * Deletes the provided world's files asynchronously from the disk.
                 */
                // @ts-ignore
                 deleteWorld(worldProperties: org.spongepowered.api.world.storage.WorldProperties): java.util.concurrent.CompletableFuture;
                /**
                 * Persists the given {@link WorldProperties} to the world storage for it,
                 * updating any modified values.
                 */
                // @ts-ignore
                 saveWorldProperties(properties: org.spongepowered.api.world.storage.WorldProperties): boolean;
                /**
                 * Gets the 'server' scoreboard. In Vanilla, this is the scoreboard of
                 * dimension 0 (the overworld).
                 * <p>The sever scoreboard is used with the Vanilla /scoreboard command,
                 * automatic score updating through criteria, and other things.</p>
                 * <p>The server scoreboard may not be available if dimension 0
                 * is not yet loaded. In Vanilla, this will only occur when the
                 * server is first starting, as dimension 0 is normally always loaded.</p>
                 */
                // @ts-ignore
                 getServerScoreboard(): java.util.Optional;
                /**
                 * Returns information about the chunk layout used by this server
                 * implementation.
                 */
                // @ts-ignore
                 getChunkLayout(): org.spongepowered.api.world.storage.ChunkLayout;
                /**
                 * Gets the time, in ticks, since this server began running for the current
                 * session.
                 * <p>This value is not persisted across server restarts, it is set to zero
                 * each time the server starts.</p>
                 */
                // @ts-ignore
                 getRunningTimeTicks(): number;
                /**
                 * Gets the message channel that server-wide messages are sent through.
                 */
                // @ts-ignore
                 getBroadcastChannel(): org.spongepowered.api.text.channel.MessageChannel;
                /**
                 * Sets the channel that server-wide messages should be sent through.
                 */
                // @ts-ignore
                 setBroadcastChannel(channel: org.spongepowered.api.text.channel.MessageChannel): void;
                /**
                 * Gets the bound {@link InetSocketAddress} from where this server is
                 * accepting connections.
                 */
                // @ts-ignore
                 getBoundAddress(): java.util.Optional;
                /**
                 * Tests if the server has a whitelist enabled.
                 */
                // @ts-ignore
                 hasWhitelist(): boolean;
                /**
                 * Sets whether the server is utilizing a whitelist.
                 */
                // @ts-ignore
                 setHasWhitelist(enabled: boolean): void;
                /**
                 * Tests if this server is set to online mode.
                 * <b>Online mode authenticates users against Minecraft's servers, false
                 * performs no validity checks.</b>
                 */
                // @ts-ignore
                 getOnlineMode(): boolean;
                /**
                 * Gets the default message that is displayed in the server list of the
                 * client.
                 */
                // @ts-ignore
                 getMotd(): org.spongepowered.api.text.Text;
                /**
                 * Shuts down the server, and kicks all players with the default kic
                 * k message.
                 * <p>For the Sponge implementation on the client, this will trigger the
                 * Integrated Server to shutdown a tick later.</p>
                 */
                // @ts-ignore
                 shutdown(): void;
                /**
                 * Shuts down the server, and kicks all players with the given message.
                 */
                // @ts-ignore
                 shutdown(kickMessage: org.spongepowered.api.text.Text): void;
                /**
                 * Gets the command source used for commands coming from this server's
                 * console.
                 */
                // @ts-ignore
                 getConsole(): org.spongepowered.api.command.source.ConsoleSource;
                /**
                 * Gets the ChunkTicketManager used for requesting tickets to force load
                 * chunks.
                 */
                // @ts-ignore
                 getChunkTicketManager(): org.spongepowered.api.world.ChunkTicketManager;
                /**
                 * Gets the {@link GameProfileManager} for resolving game profiles.
                 */
                // @ts-ignore
                 getGameProfileManager(): org.spongepowered.api.profile.GameProfileManager;
                /**
                 * Gets the current ticks per second. A tick represents one cycle of the
                 * game loop.
                 * <p>Note: The server aims to limit itself at 20 ticks per second. Lower
                 * ticks per second may elude to the server taking more time to process
                 * information per tick. Examples of overburdening the server per tick
                 * include spawning 10,000 cows in a small area.</p>
                 */
                // @ts-ignore
                 getTicksPerSecond(): number;
                /**
                 * Gets the default resource pack. The default resource pack is sent to
                 * players when they join the server.
                 */
                // @ts-ignore
                 getDefaultResourcePack(): java.util.Optional;
                /**
                 * Gets the player idle timeout, in minutes.
                 * <p>A return value of {@code 0} disables the player idle timeout.</p>
                 */
                // @ts-ignore
                 getPlayerIdleTimeout(): number;
                /**
                 * Sets the player idle timeout, in minutes.
                 * <p>A value of {@code 0} disables the player idle timeout.</p>
                 */
                // @ts-ignore
                 setPlayerIdleTimeout(timeout: number): void;
                /**
                 * Checks if the current thread matches the main thread of the server.
                 */
                // @ts-ignore
                 isMainThread(): boolean;
            }
        }
    }
}
