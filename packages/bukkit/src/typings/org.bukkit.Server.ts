declare namespace org {
    namespace bukkit {
        class Server {
            public static BROADCAST_CHANNEL_ADMINISTRATIVE: string;
            public static BROADCAST_CHANNEL_USERS: string;
            /**
             * Gets the name of this server implementation.
             */
            public getName(): string;
            /**
             * Gets the version string of this server implementation.
             */
            public getVersion(): string;
            /**
             * Gets the Bukkit version that this server is running.
             */
            public getBukkitVersion(): string;
            /**
             * Gets a view of all currently logged in players. This {@linkplain
             * Collections#unmodifiableCollection(Collection) view} is a reused
             * object, making some operations like {@link Collection#size()}
             * zero-allocation.
             * <p>
             * The collection is a view backed by the internal representation, such
             * that, changes to the internal state of the server will be reflected
             * immediately. However, the reuse of the returned collection (identity)
             * is not strictly guaranteed for future or all implementations. Casting
             * the collection, or relying on interface implementations (like {@link
             * Serializable} or {@link List}), is deprecated.
             * <p>
             * Iteration behavior is undefined outside of self-contained main-thread
             * uses. Normal and immediate iterator use without consequences that
             * affect the collection are fully supported. The effects following
             * (non-exhaustive) {@link Entity#teleport(Location) teleportation},
             * {@link Player#setHealth(double) death}, and {@link Player#kickPlayer(
             * String) kicking} are undefined. Any use of this collection from
             * asynchronous threads is unsafe.
             * <p>
             * For safe consequential iteration or mimicking the old array behavior,
             * using {@link Collection#toArray(Object[])} is recommended. For making
             * snapshots, {@link ImmutableList#copyOf(Collection)} is recommended.
             */
            public getOnlinePlayers(): any[] /*java.util.Collection*/;
            /**
             * Get the maximum amount of players which can login to this server.
             */
            public getMaxPlayers(): number;
            /**
             * Get the game port that the server runs on.
             */
            public getPort(): number;
            /**
             * Get the view distance from this server.
             */
            public getViewDistance(): number;
            /**
             * Get the IP that this server is bound to, or empty string if not
             * specified.
             */
            public getIp(): string;
            /**
             * Get world type (level-type setting) for default world.
             */
            public getWorldType(): string;
            /**
             * Get generate-structures setting.
             */
            public getGenerateStructures(): boolean;
            /**
             * Gets whether this server allows the End or not.
             */
            public getAllowEnd(): boolean;
            /**
             * Gets whether this server allows the Nether or not.
             */
            public getAllowNether(): boolean;
            /**
             * Gets whether this server has a whitelist or not.
             */
            public hasWhitelist(): boolean;
            /**
             * Sets if the server is whitelisted.
             */
            public setWhitelist(value: boolean): void;
            /**
             * Gets a list of whitelisted players.
             */
            public getWhitelistedPlayers(): any[] /*java.util.Set*/;
            /**
             * Reloads the whitelist from disk.
             */
            public reloadWhitelist(): void;
            /**
             * Broadcast a message to all players.
             * <p>
             * This is the same as calling {@link #broadcast(java.lang.String,
             * java.lang.String)} to {@link #BROADCAST_CHANNEL_USERS}
             */
            public broadcastMessage(message: string): number;
            /**
             * Gets the name of the update folder. The update folder is used to safely
             * update plugins at the right moment on a plugin load.
             * <p>
             * The update folder name is relative to the plugins folder.
             */
            public getUpdateFolder(): string;
            /**
             * Gets the update folder. The update folder is used to safely update
             * plugins at the right moment on a plugin load.
             */
            public getUpdateFolderFile(): any;
            /**
             * Gets the value of the connection throttle setting.
             */
            public getConnectionThrottle(): number;
            /**
             * Gets default ticks per animal spawns value.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn monsters
             * every tick.
             * <li>A value of 400 will mean the server will attempt to spawn monsters
             * every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b> If set to 0, animal spawning will be disabled. We
             * recommend using spawn-animals to control this instead.
             * <p>
             * Minecraft default: 400.
             */
            public getTicksPerAnimalSpawns(): number;
            /**
             * Gets the default ticks per monster spawns value.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn monsters
             * every tick.
             * <li>A value of 400 will mean the server will attempt to spawn monsters
             * every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b> If set to 0, monsters spawning will be disabled. We
             * recommend using spawn-monsters to control this instead.
             * <p>
             * Minecraft default: 1.
             */
            public getTicksPerMonsterSpawns(): number;
            /**
             * Gets a player object by the given username.
             * <p>
             * This method may not return objects for offline players.
             */
            public getPlayer(name: string): org.bukkit.entity.Player;
            /**
             * Gets the player with the exact given name, case insensitive.
             */
            public getPlayerExact(name: string): org.bukkit.entity.Player;
            /**
             * Attempts to match any players with the given name, and returns a list
             * of all possibly matches.
             * <p>
             * This list is not sorted in any particular order. If an exact match is
             * found, the returned list will only contain a single result.
             */
            public matchPlayer(name: string): any[] /*java.util.List*/;
            /**
             * Gets the player with the given UUID.
             */
            public getPlayer(id: any): org.bukkit.entity.Player;
            /**
             * Gets the plugin manager for interfacing with plugins.
             */
            public getPluginManager(): org.bukkit.plugin.PluginManager;
            /**
             * Gets the scheduler for managing scheduled events.
             */
            public getScheduler(): org.bukkit.scheduler.BukkitScheduler;
            /**
             * Gets a services manager.
             */
            public getServicesManager(): org.bukkit.plugin.ServicesManager;
            /**
             * Gets a list of all worlds on this server.
             */
            public getWorlds(): any[] /*java.util.List*/;
            /**
             * Creates or loads a world with the given name using the specified
             * options.
             * <p>
             * If the world is already loaded, it will just return the equivalent of
             * getWorld(creator.name()).
             */
            public createWorld(creator: org.bukkit.WorldCreator): org.bukkit.World;
            /**
             * Unloads a world with the given name.
             */
            public unloadWorld(name: string, save: boolean): boolean;
            /**
             * Unloads the given world.
             */
            public unloadWorld(world: org.bukkit.World, save: boolean): boolean;
            /**
             * Gets the world with the given name.
             */
            public getWorld(name: string): org.bukkit.World;
            /**
             * Gets the world from the given Unique ID.
             */
            public getWorld(uid: any): org.bukkit.World;
            /**
             * Gets the map from the given item ID.
             */
            public getMap(id: number): org.bukkit.map.MapView;
            /**
             * Create a new map with an automatically assigned ID.
             */
            public createMap(world: org.bukkit.World): org.bukkit.map.MapView;
            /**
             * Create a new explorer map targeting the closest nearby structure of a
             * given {@link StructureType}.
             * <br>
             * This method uses implementation default values for radius and
             * findUnexplored (usually 100, true).
             */
            public createExplorerMap(world: org.bukkit.World, location: org.bukkit.Location, structureType: org.bukkit.StructureType): org.bukkit.inventory.ItemStack;
            /**
             * Create a new explorer map targeting the closest nearby structure of a
             * given {@link StructureType}.
             * <br>
             * This method uses implementation default values for radius and
             * findUnexplored (usually 100, true).
             */
            public createExplorerMap(world: org.bukkit.World, location: org.bukkit.Location, structureType: org.bukkit.StructureType, radius: number, findUnexplored: boolean): org.bukkit.inventory.ItemStack;
            /**
             * Reloads the server, refreshing settings and plugin information.
             */
            public reload(): void;
            /**
             * Reload only the Minecraft data for the server. This includes custom
             * advancements and loot tables.
             */
            public reloadData(): void;
            /**
             * Returns the primary logger associated with this server instance.
             */
            public getLogger(): any;
            /**
             * Gets a {@link PluginCommand} with the given name or alias.
             */
            public getPluginCommand(name: string): org.bukkit.command.PluginCommand;
            /**
             * Writes loaded players to disk.
             */
            public savePlayers(): void;
            /**
             * Dispatches a command on this server, and executes it if found.
             */
            public dispatchCommand(sender: org.bukkit.command.CommandSender, commandLine: string): boolean;
            /**
             * Adds a recipe to the crafting manager.
             */
            public addRecipe(recipe: org.bukkit.inventory.Recipe): boolean;
            /**
             * Get a list of all recipes for a given item. The stack size is ignored
             * in comparisons. If the durability is -1, it will match any data value.
             */
            public getRecipesFor(result: org.bukkit.inventory.ItemStack): any[] /*java.util.List*/;
            /**
             * Get an iterator through the list of crafting recipes.
             */
            public recipeIterator(): any;
            /**
             * Clears the list of crafting recipes.
             */
            public clearRecipes(): void;
            /**
             * Resets the list of crafting recipes to the default.
             */
            public resetRecipes(): void;
            /**
             * Gets a list of command aliases defined in the server properties.
             */
            public getCommandAliases(): Map<any, any> /*java.util.Map*/;
            /**
             * Gets the radius, in blocks, around each worlds spawn point to protect.
             */
            public getSpawnRadius(): number;
            /**
             * Sets the radius, in blocks, around each worlds spawn point to protect.
             */
            public setSpawnRadius(value: number): void;
            /**
             * Gets whether the Server is in online mode or not.
             */
            public getOnlineMode(): boolean;
            /**
             * Gets whether this server allows flying or not.
             */
            public getAllowFlight(): boolean;
            /**
             * Gets whether the server is in hardcore mode or not.
             */
            public isHardcore(): boolean;
            /**
             * Shutdowns the server, stopping everything.
             */
            public shutdown(): void;
            /**
             * Broadcasts the specified message to every user with the given
             * permission name.
             */
            public broadcast(message: string, permission: string): number;
            /**
             * Gets the player by the given name, regardless if they are offline or
             * online.
             * <p>
             * This method may involve a blocking web request to get the UUID for the
             * given name.
             * <p>
             * This will return an object even if the player does not exist. To this
             * method, all players will exist.
             */
            public getOfflinePlayer(name: string): org.bukkit.OfflinePlayer;
            /**
             * Gets the player by the given UUID, regardless if they are offline or
             * online.
             * <p>
             * This will return an object even if the player does not exist. To this
             * method, all players will exist.
             */
            public getOfflinePlayer(id: any): org.bukkit.OfflinePlayer;
            /**
             * Gets a set containing all current IPs that are banned.
             */
            public getIPBans(): any[] /*java.util.Set*/;
            /**
             * Bans the specified address from the server.
             */
            public banIP(address: string): void;
            /**
             * Unbans the specified address from the server.
             */
            public unbanIP(address: string): void;
            /**
             * Gets a set containing all banned players.
             */
            public getBannedPlayers(): any[] /*java.util.Set*/;
            /**
             * Gets a ban list for the supplied type.
             * <p>
             * Bans by name are no longer supported and this method will return
             * null when trying to request them. The replacement is bans by UUID.
             */
            public getBanList(type: org.bukkit.BanList.Type): org.bukkit.BanList;
            /**
             * Gets a set containing all player operators.
             */
            public getOperators(): any[] /*java.util.Set*/;
            /**
             * Gets the default {@link GameMode} for new players.
             */
            public getDefaultGameMode(): org.bukkit.GameMode;
            /**
             * Sets the default {@link GameMode} for new players.
             */
            public setDefaultGameMode(mode: org.bukkit.GameMode): void;
            /**
             * Gets a {@link ConsoleCommandSender} that may be used as an input source
             * for this server.
             */
            public getConsoleSender(): org.bukkit.command.ConsoleCommandSender;
            /**
             * Gets the folder that contains all of the various {@link World}s.
             */
            public getWorldContainer(): any;
            /**
             * Gets every player that has ever played on this server.
             */
            public getOfflinePlayers(): org.bukkit.OfflinePlayer[];
            /**
             * Gets the {@link Messenger} responsible for this server.
             */
            public getMessenger(): org.bukkit.plugin.messaging.Messenger;
            /**
             * Gets the {@link HelpMap} providing help topics for this server.
             */
            public getHelpMap(): org.bukkit.help.HelpMap;
            /**
             * Creates an empty inventory with the specified type. If the type
             * is {@link InventoryType#CHEST}, the new inventory has a size of 27;
             * otherwise the new inventory has the normal size for its type.
             * <br>
             * {@link InventoryType#WORKBENCH} will not process crafting recipes if
             * created with this method. Use
             * {@link Player#openWorkbench(Location, boolean)} instead.
             * <br>
             * {@link InventoryType#ENCHANTING} will not process {@link ItemStack}s
             * for possible enchanting results. Use
             * {@link Player#openEnchanting(Location, boolean)} instead.
             */
            public createInventory(owner: org.bukkit.inventory.InventoryHolder, type: org.bukkit.event.inventory.InventoryType): org.bukkit.inventory.Inventory;
            /**
             * Creates an empty inventory with the specified type and title. If the type
             * is {@link InventoryType#CHEST}, the new inventory has a size of 27;
             * otherwise the new inventory has the normal size for its type.<br>
             * It should be noted that some inventory types do not support titles and
             * may not render with said titles on the Minecraft client.
             * <br>
             * {@link InventoryType#WORKBENCH} will not process crafting recipes if
             * created with this method. Use
             * {@link Player#openWorkbench(Location, boolean)} instead.
             * <br>
             * {@link InventoryType#ENCHANTING} will not process {@link ItemStack}s
             * for possible enchanting results. Use
             * {@link Player#openEnchanting(Location, boolean)} instead.
             */
            public createInventory(owner: org.bukkit.inventory.InventoryHolder, type: org.bukkit.event.inventory.InventoryType, title: string): org.bukkit.inventory.Inventory;
            /**
             * Creates an empty inventory of type {@link InventoryType#CHEST} with the
             * specified size.
             */
            public createInventory(owner: org.bukkit.inventory.InventoryHolder, size: number): org.bukkit.inventory.Inventory;
            /**
             * Creates an empty inventory of type {@link InventoryType#CHEST} with the
             * specified size and title.
             */
            public createInventory(owner: org.bukkit.inventory.InventoryHolder, size: number, title: string): org.bukkit.inventory.Inventory;
            /**
             * Creates an empty merchant.
             */
            public createMerchant(title: string): org.bukkit.inventory.Merchant;
            /**
             * Gets user-specified limit for number of monsters that can spawn in a
             * chunk.
             */
            public getMonsterSpawnLimit(): number;
            /**
             * Gets user-specified limit for number of animals that can spawn in a
             * chunk.
             */
            public getAnimalSpawnLimit(): number;
            /**
             * Gets user-specified limit for number of water animals that can spawn in
             * a chunk.
             */
            public getWaterAnimalSpawnLimit(): number;
            /**
             * Gets user-specified limit for number of ambient mobs that can spawn in
             * a chunk.
             */
            public getAmbientSpawnLimit(): number;
            /**
             * Checks the current thread against the expected primary thread for the
             * server.
             * <p>
             * <b>Note:</b> this method should not be used to indicate the current
             * synchronized state of the runtime. A current thread matching the main
             * thread indicates that it is synchronized, but a mismatch <b>does not
             * preclude</b> the same assumption.
             */
            public isPrimaryThread(): boolean;
            /**
             * Gets the message that is displayed on the server list.
             */
            public getMotd(): string;
            /**
             * Gets the default message that is displayed when the server is stopped.
             */
            public getShutdownMessage(): string;
            /**
             * Gets the current warning state for the server.
             */
            public getWarningState(): org.bukkit.Warning.WarningState;
            /**
             * Gets the instance of the item factory (for {@link ItemMeta}).
             */
            public getItemFactory(): org.bukkit.inventory.ItemFactory;
            /**
             * Gets the instance of the scoreboard manager.
             * <p>
             * This will only exist after the first world has loaded.
             */
            public getScoreboardManager(): org.bukkit.scoreboard.ScoreboardManager;
            /**
             * Gets an instance of the server's default server-icon.
             */
            public getServerIcon(): org.bukkit.util.CachedServerIcon;
            /**
             * Loads an image from a file, and returns a cached image for the specific
             * server-icon.
             * <p>
             * Size and type are implementation defined. An incompatible file is
             * guaranteed to throw an implementation-defined {@link Exception}.
             */
            public loadServerIcon(file: any): org.bukkit.util.CachedServerIcon;
            /**
             * Creates a cached server-icon for the specific image.
             * <p>
             * Size and type are implementation defined. An incompatible file is
             * guaranteed to throw an implementation-defined {@link Exception}.
             */
            public loadServerIcon(image: any): org.bukkit.util.CachedServerIcon;
            /**
             * Set the idle kick timeout. Any players idle for the specified amount of
             * time will be automatically kicked.
             * <p>
             * A value of 0 will disable the idle kick timeout.
             */
            public setIdleTimeout(threshold: number): void;
            /**
             * Gets the idle kick timeout.
             */
            public getIdleTimeout(): number;
            /**
             * Create a ChunkData for use in a generator.
             * See {@link ChunkGenerator#generateChunkData(org.bukkit.World, java.util.Random, int, int, org.bukkit.generator.ChunkGenerator.BiomeGrid)}
             */
            public createChunkData(world: org.bukkit.World): org.bukkit.generator.ChunkGenerator.ChunkData;
            /**
             * Creates a boss bar instance to display to players. The progress
             * defaults to 1.0
             */
            public createBossBar(title: string, color: org.bukkit.boss.BarColor, style: org.bukkit.boss.BarStyle, flags: org.bukkit.boss.BarFlag): org.bukkit.boss.BossBar;
            /**
             * Creates a boss bar instance to display to players. The progress defaults
             * to 1.0.
             * <br>
             * This instance is added to the persistent storage of the server and will
             * be editable by commands and restored after restart.
             */
            public createBossBar(key: org.bukkit.NamespacedKey, title: string, color: org.bukkit.boss.BarColor, style: org.bukkit.boss.BarStyle, flags: org.bukkit.boss.BarFlag): org.bukkit.boss.KeyedBossBar;
            /**
             * Gets an unmodifiable iterator through all persistent bossbars.
             * <ul>
             * <li><b>not</b> bound to a {@link org.bukkit.entity.Boss}</li>
             * <li>
             * <b>not</b> created using
             * {@link #createBossBar(String, BarColor, BarStyle, BarFlag...)}
             * </li>
             * </ul>
             * e.g. bossbars created using the bossbar command
             */
            public getBossBars(): any;
            /**
             * Gets the {@link KeyedBossBar} specified by this key.
             * <ul>
             * <li><b>not</b> bound to a {@link org.bukkit.entity.Boss}</li>
             * <li>
             * <b>not</b> created using
             * {@link #createBossBar(String, BarColor, BarStyle, BarFlag...)}
             * </li>
             * </ul>
             * e.g. bossbars created using the bossbar command
             */
            public getBossBar(key: org.bukkit.NamespacedKey): org.bukkit.boss.KeyedBossBar;
            /**
             * Removes a {@link KeyedBossBar} specified by this key.
             * <ul>
             * <li><b>not</b> bound to a {@link org.bukkit.entity.Boss}</li>
             * <li>
             * <b>not</b> created using
             * {@link #createBossBar(String, BarColor, BarStyle, BarFlag...)}
             * </li>
             * </ul>
             * e.g. bossbars created using the bossbar command
             */
            public removeBossBar(key: org.bukkit.NamespacedKey): boolean;
            /**
             * Gets an entity on the server by its UUID
             */
            public getEntity(uuid: any): org.bukkit.entity.Entity;
            /**
             * Get the advancement specified by this key.
             */
            public getAdvancement(key: org.bukkit.NamespacedKey): org.bukkit.advancement.Advancement;
            /**
             * Get an iterator through all advancements. Advancements cannot be removed
             * from this iterator,
             */
            public advancementIterator(): any;
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults.
             */
            public createBlockData(material: org.bukkit.Material): org.bukkit.block.data.BlockData;
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults.
             */
            public createBlockData(material: org.bukkit.Material, consumer: any): org.bukkit.block.data.BlockData;
            /**
             * Creates a new {@link BlockData} instance with material and properties
             * parsed from provided data.
             */
            public createBlockData(data: string): org.bukkit.block.data.BlockData;
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults, except for those
             * provided in data.
             * <br>
             * If <code>material</code> is specified, then the data string must not also
             * contain the material.
             */
            public createBlockData(material: org.bukkit.Material, data: string): org.bukkit.block.data.BlockData;
            /**
             * Gets a tag which has already been defined within the server. Plugins are
             * suggested to use the concrete tags in {@link Tag} rather than this method
             * which makes no guarantees about which tags are available, and may also be
             * less performant due to lack of caching.
             * <br>
             * Tags will be searched for in an implementation specific manner, but a
             * path consisting of namespace/tags/registry/key is expected.
             * <br>
             * Server implementations are allowed to handle only the registries
             * indicated in {@link Tag}.
             */
            public getTag(registry: string, tag: org.bukkit.NamespacedKey, clazz: any): org.bukkit.Tag;
            /**
             * Gets a all tags which have been defined within the server.
             * <br>
             * Server implementations are allowed to handle only the registries
             * indicated in {@link Tag}.
             * <br>
             * No guarantees are made about the mutability of the returned iterator.
             */
            public getTags(registry: string, clazz: any): any;
            /**
             * Gets the specified {@link LootTable}.
             */
            public getLootTable(key: org.bukkit.NamespacedKey): org.bukkit.loot.LootTable;
            /**
             * Selects entities using the given Vanilla selector.
             * <br>
             * No guarantees are made about the selector format, other than they match
             * the Vanilla format for the active Minecraft version.
             * <br>
             * Usually a selector will start with '@', unless selecting a Player in
             * which case it may simply be the Player's name or UUID.
             * <br>
             * Note that in Vanilla, elevated permissions are usually required to use
             * '@' selectors, but this method should not check such permissions from the
             * sender.
             */
            public selectEntities(sender: org.bukkit.command.CommandSender, selector: string): any[] /*java.util.List*/;
            public getUnsafe(): org.bukkit.UnsafeValues;
        }
    }
}
