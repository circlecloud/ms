declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Bukkit {
            /**
             * Gets the current {@link Server} singleton
             */
            public static getServer(): org.bukkit.Server;
            /**
             * Attempts to set the {@link Server} singleton.
             * <p>
             * This cannot be done if the Server is already set.
             */
            public static setServer(server: org.bukkit.Server): void;
            /**
             * Gets the name of this server implementation.
             */
            public static getName(): string;
            /**
             * Gets the version string of this server implementation.
             */
            public static getVersion(): string;
            /**
             * Gets the Bukkit version that this server is running.
             */
            public static getBukkitVersion(): string;
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
            public static getOnlinePlayers(): any[] /*java.util.Collection*/;
            /**
             * Get the maximum amount of players which can login to this server.
             */
            public static getMaxPlayers(): number;
            /**
             * Get the game port that the server runs on.
             */
            public static getPort(): number;
            /**
             * Get the view distance from this server.
             */
            public static getViewDistance(): number;
            /**
             * Get the IP that this server is bound to, or empty string if not
             * specified.
             */
            public static getIp(): string;
            /**
             * Get world type (level-type setting) for default world.
             */
            public static getWorldType(): string;
            /**
             * Get generate-structures setting.
             */
            public static getGenerateStructures(): boolean;
            /**
             * Gets whether this server allows the End or not.
             */
            public static getAllowEnd(): boolean;
            /**
             * Gets whether this server allows the Nether or not.
             */
            public static getAllowNether(): boolean;
            /**
             * Gets whether this server has a whitelist or not.
             */
            public static hasWhitelist(): boolean;
            /**
             * Sets if the server is whitelisted.
             */
            public static setWhitelist(value: boolean): void;
            /**
             * Gets a list of whitelisted players.
             */
            public static getWhitelistedPlayers(): any[] /*java.util.Set*/;
            /**
             * Reloads the whitelist from disk.
             */
            public static reloadWhitelist(): void;
            /**
             * Broadcast a message to all players.
             * <p>
             * This is the same as calling {@link #broadcast(java.lang.String,
             * java.lang.String)} to {@link Server#BROADCAST_CHANNEL_USERS}
             */
            public static broadcastMessage(message: string): number;
            /**
             * Gets the name of the update folder. The update folder is used to safely
             * update plugins at the right moment on a plugin load.
             * <p>
             * The update folder name is relative to the plugins folder.
             */
            public static getUpdateFolder(): string;
            /**
             * Gets the update folder. The update folder is used to safely update
             * plugins at the right moment on a plugin load.
             */
            public static getUpdateFolderFile(): any;
            /**
             * Gets the value of the connection throttle setting.
             */
            public static getConnectionThrottle(): number;
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
            public static getTicksPerAnimalSpawns(): number;
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
            public static getTicksPerMonsterSpawns(): number;
            /**
             * Gets a player object by the given username.
             * <p>
             * This method may not return objects for offline players.
             */
            public static getPlayer(name: string): org.bukkit.entity.Player;
            /**
             * Gets the player with the exact given name, case insensitive.
             */
            public static getPlayerExact(name: string): org.bukkit.entity.Player;
            /**
             * Attempts to match any players with the given name, and returns a list
             * of all possibly matches.
             * <p>
             * This list is not sorted in any particular order. If an exact match is
             * found, the returned list will only contain a single result.
             */
            public static matchPlayer(name: string): any[] /*java.util.List*/;
            /**
             * Gets the player with the given UUID.
             */
            public static getPlayer(id: any): org.bukkit.entity.Player;
            /**
             * Gets the plugin manager for interfacing with plugins.
             */
            public static getPluginManager(): org.bukkit.plugin.PluginManager;
            /**
             * Gets the scheduler for managing scheduled events.
             */
            public static getScheduler(): org.bukkit.scheduler.BukkitScheduler;
            /**
             * Gets a services manager.
             */
            public static getServicesManager(): org.bukkit.plugin.ServicesManager;
            /**
             * Gets a list of all worlds on this server.
             */
            public static getWorlds(): any[] /*java.util.List*/;
            /**
             * Creates or loads a world with the given name using the specified
             * options.
             * <p>
             * If the world is already loaded, it will just return the equivalent of
             * getWorld(creator.name()).
             */
            public static createWorld(creator: org.bukkit.WorldCreator): org.bukkit.World;
            /**
             * Unloads a world with the given name.
             */
            public static unloadWorld(name: string, save: boolean): boolean;
            /**
             * Unloads the given world.
             */
            public static unloadWorld(world: org.bukkit.World, save: boolean): boolean;
            /**
             * Gets the world with the given name.
             */
            public static getWorld(name: string): org.bukkit.World;
            /**
             * Gets the world from the given Unique ID.
             */
            public static getWorld(uid: any): org.bukkit.World;
            /**
             * Gets the map from the given item ID.
             */
            public static getMap(id: number): org.bukkit.map.MapView;
            /**
             * Create a new map with an automatically assigned ID.
             */
            public static createMap(world: org.bukkit.World): org.bukkit.map.MapView;
            /**
             * Create a new explorer map targeting the closest nearby structure of a
             * given {@link StructureType}.
             * <br>
             * This method uses implementation default values for radius and
             * findUnexplored (usually 100, true).
             */
            public static createExplorerMap(world: org.bukkit.World, location: org.bukkit.Location, structureType: org.bukkit.StructureType): org.bukkit.inventory.ItemStack;
            /**
             * Create a new explorer map targeting the closest nearby structure of a
             * given {@link StructureType}.
             * <br>
             * This method uses implementation default values for radius and
             * findUnexplored (usually 100, true).
             */
            public static createExplorerMap(world: org.bukkit.World, location: org.bukkit.Location, structureType: org.bukkit.StructureType, radius: number, findUnexplored: boolean): org.bukkit.inventory.ItemStack;
            /**
             * Reloads the server, refreshing settings and plugin information.
             */
            public static reload(): void;
            /**
             * Reload only the Minecraft data for the server. This includes custom
             * advancements and loot tables.
             */
            public static reloadData(): void;
            /**
             * Returns the primary logger associated with this server instance.
             */
            public static getLogger(): any;
            /**
             * Gets a {@link PluginCommand} with the given name or alias.
             */
            public static getPluginCommand(name: string): org.bukkit.command.PluginCommand;
            /**
             * Writes loaded players to disk.
             */
            public static savePlayers(): void;
            /**
             * Dispatches a command on this server, and executes it if found.
             */
            public static dispatchCommand(sender: org.bukkit.command.CommandSender, commandLine: string): boolean;
            /**
             * Adds a recipe to the crafting manager.
             */
            public static addRecipe(recipe: org.bukkit.inventory.Recipe): boolean;
            /**
             * Get a list of all recipes for a given item. The stack size is ignored
             * in comparisons. If the durability is -1, it will match any data value.
             */
            public static getRecipesFor(result: org.bukkit.inventory.ItemStack): any[] /*java.util.List*/;
            /**
             * Get an iterator through the list of crafting recipes.
             */
            public static recipeIterator(): any;
            /**
             * Clears the list of crafting recipes.
             */
            public static clearRecipes(): void;
            /**
             * Resets the list of crafting recipes to the default.
             */
            public static resetRecipes(): void;
            /**
             * Gets a list of command aliases defined in the server properties.
             */
            public static getCommandAliases(): Map<any, any> /*java.util.Map*/;
            /**
             * Gets the radius, in blocks, around each worlds spawn point to protect.
             */
            public static getSpawnRadius(): number;
            /**
             * Sets the radius, in blocks, around each worlds spawn point to protect.
             */
            public static setSpawnRadius(value: number): void;
            /**
             * Gets whether the Server is in online mode or not.
             */
            public static getOnlineMode(): boolean;
            /**
             * Gets whether this server allows flying or not.
             */
            public static getAllowFlight(): boolean;
            /**
             * Gets whether the server is in hardcore mode or not.
             */
            public static isHardcore(): boolean;
            /**
             * Shutdowns the server, stopping everything.
             */
            public static shutdown(): void;
            /**
             * Broadcasts the specified message to every user with the given
             * permission name.
             */
            public static broadcast(message: string, permission: string): number;
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
            public static getOfflinePlayer(name: string): org.bukkit.OfflinePlayer;
            /**
             * Gets the player by the given UUID, regardless if they are offline or
             * online.
             * <p>
             * This will return an object even if the player does not exist. To this
             * method, all players will exist.
             */
            public static getOfflinePlayer(id: any): org.bukkit.OfflinePlayer;
            /**
             * Gets a set containing all current IPs that are banned.
             */
            public static getIPBans(): any[] /*java.util.Set*/;
            /**
             * Bans the specified address from the server.
             */
            public static banIP(address: string): void;
            /**
             * Unbans the specified address from the server.
             */
            public static unbanIP(address: string): void;
            /**
             * Gets a set containing all banned players.
             */
            public static getBannedPlayers(): any[] /*java.util.Set*/;
            /**
             * Gets a ban list for the supplied type.
             * <p>
             * Bans by name are no longer supported and this method will return
             * null when trying to request them. The replacement is bans by UUID.
             */
            public static getBanList(type: org.bukkit.BanList.Type): org.bukkit.BanList;
            /**
             * Gets a set containing all player operators.
             */
            public static getOperators(): any[] /*java.util.Set*/;
            /**
             * Gets the default {@link GameMode} for new players.
             */
            public static getDefaultGameMode(): org.bukkit.GameMode;
            /**
             * Sets the default {@link GameMode} for new players.
             */
            public static setDefaultGameMode(mode: org.bukkit.GameMode): void;
            /**
             * Gets a {@link ConsoleCommandSender} that may be used as an input source
             * for this server.
             */
            public static getConsoleSender(): org.bukkit.command.ConsoleCommandSender;
            /**
             * Gets the folder that contains all of the various {@link World}s.
             */
            public static getWorldContainer(): any;
            /**
             * Gets every player that has ever played on this server.
             */
            public static getOfflinePlayers(): org.bukkit.OfflinePlayer[];
            /**
             * Gets the {@link Messenger} responsible for this server.
             */
            public static getMessenger(): org.bukkit.plugin.messaging.Messenger;
            /**
             * Gets the {@link HelpMap} providing help topics for this server.
             */
            public static getHelpMap(): org.bukkit.help.HelpMap;
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
            public static createInventory(owner: org.bukkit.inventory.InventoryHolder, type: org.bukkit.event.inventory.InventoryType): org.bukkit.inventory.Inventory;
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
            public static createInventory(owner: org.bukkit.inventory.InventoryHolder, type: org.bukkit.event.inventory.InventoryType, title: string): org.bukkit.inventory.Inventory;
            /**
             * Creates an empty inventory of type {@link InventoryType#CHEST} with the
             * specified size.
             */
            public static createInventory(owner: org.bukkit.inventory.InventoryHolder, size: number): org.bukkit.inventory.Inventory;
            /**
             * Creates an empty inventory of type {@link InventoryType#CHEST} with the
             * specified size and title.
             */
            public static createInventory(owner: org.bukkit.inventory.InventoryHolder, size: number, title: string): org.bukkit.inventory.Inventory;
            /**
             * Creates an empty merchant.
             */
            public static createMerchant(title: string): org.bukkit.inventory.Merchant;
            /**
             * Gets user-specified limit for number of monsters that can spawn in a
             * chunk.
             */
            public static getMonsterSpawnLimit(): number;
            /**
             * Gets user-specified limit for number of animals that can spawn in a
             * chunk.
             */
            public static getAnimalSpawnLimit(): number;
            /**
             * Gets user-specified limit for number of water animals that can spawn in
             * a chunk.
             */
            public static getWaterAnimalSpawnLimit(): number;
            /**
             * Gets user-specified limit for number of ambient mobs that can spawn in
             * a chunk.
             */
            public static getAmbientSpawnLimit(): number;
            /**
             * Checks the current thread against the expected primary thread for the
             * server.
             * <p>
             * <b>Note:</b> this method should not be used to indicate the current
             * synchronized state of the runtime. A current thread matching the main
             * thread indicates that it is synchronized, but a mismatch <b>does not
             * preclude</b> the same assumption.
             */
            public static isPrimaryThread(): boolean;
            /**
             * Gets the message that is displayed on the server list.
             */
            public static getMotd(): string;
            /**
             * Gets the default message that is displayed when the server is stopped.
             */
            public static getShutdownMessage(): string;
            /**
             * Gets the current warning state for the server.
             */
            public static getWarningState(): org.bukkit.Warning.WarningState;
            /**
             * Gets the instance of the item factory (for {@link ItemMeta}).
             */
            public static getItemFactory(): org.bukkit.inventory.ItemFactory;
            /**
             * Gets the instance of the scoreboard manager.
             * <p>
             * This will only exist after the first world has loaded.
             */
            public static getScoreboardManager(): org.bukkit.scoreboard.ScoreboardManager;
            /**
             * Gets an instance of the server's default server-icon.
             */
            public static getServerIcon(): org.bukkit.util.CachedServerIcon;
            /**
             * Loads an image from a file, and returns a cached image for the specific
             * server-icon.
             * <p>
             * Size and type are implementation defined. An incompatible file is
             * guaranteed to throw an implementation-defined {@link Exception}.
             */
            public static loadServerIcon(file: any): org.bukkit.util.CachedServerIcon;
            /**
             * Creates a cached server-icon for the specific image.
             * <p>
             * Size and type are implementation defined. An incompatible file is
             * guaranteed to throw an implementation-defined {@link Exception}.
             */
            public static loadServerIcon(image: any): org.bukkit.util.CachedServerIcon;
            /**
             * Set the idle kick timeout. Any players idle for the specified amount of
             * time will be automatically kicked.
             * <p>
             * A value of 0 will disable the idle kick timeout.
             */
            public static setIdleTimeout(threshold: number): void;
            /**
             * Gets the idle kick timeout.
             */
            public static getIdleTimeout(): number;
            /**
             * Create a ChunkData for use in a generator.
             * See {@link ChunkGenerator#generateChunkData(org.bukkit.World, java.util.Random, int, int, org.bukkit.generator.ChunkGenerator.BiomeGrid)}
             */
            public static createChunkData(world: org.bukkit.World): org.bukkit.generator.ChunkGenerator.ChunkData;
            /**
             * Creates a boss bar instance to display to players. The progress
             * defaults to 1.0
             */
            public static createBossBar(title: string, color: org.bukkit.boss.BarColor, style: org.bukkit.boss.BarStyle, flags: org.bukkit.boss.BarFlag): org.bukkit.boss.BossBar;
            /**
             * Creates a boss bar instance to display to players. The progress defaults
             * to 1.0.
             * <br>
             * This instance is added to the persistent storage of the server and will
             * be editable by commands and restored after restart.
             */
            public static createBossBar(key: org.bukkit.NamespacedKey, title: string, color: org.bukkit.boss.BarColor, style: org.bukkit.boss.BarStyle, flags: org.bukkit.boss.BarFlag): org.bukkit.boss.KeyedBossBar;
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
            public static getBossBars(): any;
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
            public static getBossBar(key: org.bukkit.NamespacedKey): org.bukkit.boss.KeyedBossBar;
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
            public static removeBossBar(key: org.bukkit.NamespacedKey): boolean;
            /**
             * Gets an entity on the server by its UUID
             */
            public static getEntity(uuid: any): org.bukkit.entity.Entity;
            /**
             * Get the advancement specified by this key.
             */
            public static getAdvancement(key: org.bukkit.NamespacedKey): org.bukkit.advancement.Advancement;
            /**
             * Get an iterator through all advancements. Advancements cannot be removed
             * from this iterator,
             */
            public static advancementIterator(): any;
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults.
             */
            public static createBlockData(material: org.bukkit.Material): org.bukkit.block.data.BlockData;
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults.
             */
            public static createBlockData(material: org.bukkit.Material, consumer: any): org.bukkit.block.data.BlockData;
            /**
             * Creates a new {@link BlockData} instance with material and properties
             * parsed from provided data.
             */
            public static createBlockData(data: string): org.bukkit.block.data.BlockData;
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults, except for those
             * provided in data.
             */
            public static createBlockData(material: org.bukkit.Material, data: string): org.bukkit.block.data.BlockData;
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
            public static getTag(registry: string, tag: org.bukkit.NamespacedKey, clazz: any): org.bukkit.Tag;
            /**
             * Gets a all tags which have been defined within the server.
             * <br>
             * Server implementations are allowed to handle only the registries
             * indicated in {@link Tag}.
             * <br>
             * No guarantees are made about the mutability of the returned iterator.
             */
            public static getTags(registry: string, clazz: any): any;
            /**
             * Gets the specified {@link LootTable}.
             */
            public static getLootTable(key: org.bukkit.NamespacedKey): org.bukkit.loot.LootTable;
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
            public static selectEntities(sender: org.bukkit.command.CommandSender, selector: string): any[] /*java.util.List*/;
            public static getUnsafe(): org.bukkit.UnsafeValues;
        }
    }
}
