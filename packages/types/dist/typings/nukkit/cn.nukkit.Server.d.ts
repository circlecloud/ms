declare namespace cn {
    namespace nukkit {
        // @ts-ignore
         class Server extends java.lang.Object {
            // @ts-ignore
            public static BROADCAST_CHANNEL_ADMINISTRATIVE: string;
            // @ts-ignore
            public static BROADCAST_CHANNEL_USERS: string;
            // @ts-ignore
            public networkCompressionLevel: number;
            // @ts-ignore
            public broadcastMessage(message: string): number;
            // @ts-ignore
            public broadcastMessage(message: cn.nukkit.lang.TextContainer): number;
            // @ts-ignore
            public broadcastMessage(message: string, recipients: cn.nukkit.command.CommandSender): number;
            // @ts-ignore
            public broadcastMessage(message: string, recipients: java.util.Collection): number;
            // @ts-ignore
            public broadcastMessage(message: cn.nukkit.lang.TextContainer, recipients: java.util.Collection): number;
            // @ts-ignore
            public broadcast(message: string, permissions: string): number;
            // @ts-ignore
            public broadcast(message: cn.nukkit.lang.TextContainer, permissions: string): number;
            // @ts-ignore
            public static broadcastPacket(players: java.util.Collection, packet: cn.nukkit.network.protocol.DataPacket): void;
            // @ts-ignore
            public static broadcastPacket(players: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket): void;
            // @ts-ignore
            public batchPackets(players: cn.nukkit.Player, packets: cn.nukkit.network.protocol.DataPacket): void;
            // @ts-ignore
            public batchPackets(players: cn.nukkit.Player, packets: cn.nukkit.network.protocol.DataPacket, forceSync: boolean): void;
            // @ts-ignore
            public broadcastPacketsCallback(data: number, identifiers: java.util.List): void;
            // @ts-ignore
            public enablePlugins(type: cn.nukkit.plugin.PluginLoadOrder): void;
            // @ts-ignore
            public enablePlugin(plugin: cn.nukkit.plugin.Plugin): void;
            // @ts-ignore
            public disablePlugins(): void;
            // @ts-ignore
            public dispatchCommand(sender: cn.nukkit.command.CommandSender, commandLine: string): boolean;
            // @ts-ignore
            public getConsoleSender(): cn.nukkit.command.ConsoleCommandSender;
            // @ts-ignore
            public reload(): void;
            // @ts-ignore
            public shutdown(): void;
            // @ts-ignore
            public forceShutdown(): void;
            // @ts-ignore
            public start(): void;
            // @ts-ignore
            public handlePacket(address: string, port: number, payload: number): void;
            // @ts-ignore
            public tickProcessor(): void;
            // @ts-ignore
            public onPlayerCompleteLoginSequence(player: cn.nukkit.Player): void;
            // @ts-ignore
            public onPlayerLogin(player: cn.nukkit.Player): void;
            // @ts-ignore
            public addPlayer(identifier: string, player: cn.nukkit.Player): void;
            // @ts-ignore
            public addOnlinePlayer(player: cn.nukkit.Player): void;
            // @ts-ignore
            public removeOnlinePlayer(player: cn.nukkit.Player): void;
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number, name: string, skin: cn.nukkit.entity.data.Skin): void;
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number, name: string, skin: cn.nukkit.entity.data.Skin, xboxUserId: string): void;
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number, name: string, skin: cn.nukkit.entity.data.Skin, players: cn.nukkit.Player): void;
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number, name: string, skin: cn.nukkit.entity.data.Skin, xboxUserId: string, players: cn.nukkit.Player): void;
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number, name: string, skin: cn.nukkit.entity.data.Skin, xboxUserId: string, players: java.util.Collection): void;
            // @ts-ignore
            public removePlayerListData(uuid: java.util.UUID): void;
            // @ts-ignore
            public removePlayerListData(uuid: java.util.UUID, players: cn.nukkit.Player): void;
            // @ts-ignore
            public removePlayerListData(uuid: java.util.UUID, players: java.util.Collection): void;
            // @ts-ignore
            public sendFullPlayerListData(player: cn.nukkit.Player): void;
            // @ts-ignore
            public sendRecipeList(player: cn.nukkit.Player): void;
            // @ts-ignore
            public doAutoSave(): void;
            // @ts-ignore
            public getNextTick(): number;
            // @ts-ignore
            public titleTick(): void;
            // @ts-ignore
            public getQueryInformation(): cn.nukkit.event.server.QueryRegenerateEvent;
            // @ts-ignore
            public getName(): string;
            // @ts-ignore
            public isRunning(): boolean;
            // @ts-ignore
            public getNukkitVersion(): string;
            // @ts-ignore
            public getCodename(): string;
            // @ts-ignore
            public getVersion(): string;
            // @ts-ignore
            public getApiVersion(): string;
            // @ts-ignore
            public getFilePath(): string;
            // @ts-ignore
            public getDataPath(): string;
            // @ts-ignore
            public getPluginPath(): string;
            // @ts-ignore
            public getMaxPlayers(): number;
            // @ts-ignore
            public setMaxPlayers(maxPlayers: number): void;
            // @ts-ignore
            public getPort(): number;
            // @ts-ignore
            public getViewDistance(): number;
            // @ts-ignore
            public getIp(): string;
            // @ts-ignore
            public getServerUniqueId(): java.util.UUID;
            // @ts-ignore
            public getAutoSave(): boolean;
            // @ts-ignore
            public setAutoSave(autoSave: boolean): void;
            // @ts-ignore
            public getLevelType(): string;
            // @ts-ignore
            public getGenerateStructures(): boolean;
            // @ts-ignore
            public getGamemode(): number;
            // @ts-ignore
            public getForceGamemode(): boolean;
            // @ts-ignore
            public static getGamemodeString(mode: number): string;
            // @ts-ignore
            public static getGamemodeString(mode: number, direct: boolean): string;
            // @ts-ignore
            public static getGamemodeFromString(str: string): number;
            // @ts-ignore
            public static getDifficultyFromString(str: string): number;
            // @ts-ignore
            public getDifficulty(): number;
            // @ts-ignore
            public hasWhitelist(): boolean;
            // @ts-ignore
            public getSpawnRadius(): number;
            // @ts-ignore
            public getAllowFlight(): boolean;
            // @ts-ignore
            public isHardcore(): boolean;
            // @ts-ignore
            public getDefaultGamemode(): number;
            // @ts-ignore
            public getMotd(): string;
            // @ts-ignore
            public getSubMotd(): string;
            // @ts-ignore
            public getForceResources(): boolean;
            // @ts-ignore
            public getLogger(): cn.nukkit.utils.MainLogger;
            // @ts-ignore
            public getEntityMetadata(): cn.nukkit.metadata.EntityMetadataStore;
            // @ts-ignore
            public getPlayerMetadata(): cn.nukkit.metadata.PlayerMetadataStore;
            // @ts-ignore
            public getLevelMetadata(): cn.nukkit.metadata.LevelMetadataStore;
            // @ts-ignore
            public getPluginManager(): cn.nukkit.plugin.PluginManager;
            // @ts-ignore
            public getCraftingManager(): cn.nukkit.inventory.CraftingManager;
            // @ts-ignore
            public getResourcePackManager(): cn.nukkit.resourcepacks.ResourcePackManager;
            // @ts-ignore
            public getScheduler(): cn.nukkit.scheduler.ServerScheduler;
            // @ts-ignore
            public getTick(): number;
            // @ts-ignore
            public getTicksPerSecond(): number;
            // @ts-ignore
            public getTicksPerSecondAverage(): number;
            // @ts-ignore
            public getTickUsage(): number;
            // @ts-ignore
            public getTickUsageAverage(): number;
            // @ts-ignore
            public getCommandMap(): cn.nukkit.command.SimpleCommandMap;
            // @ts-ignore
            public getOnlinePlayers(): java.util.Map;
            // @ts-ignore
            public addRecipe(recipe: cn.nukkit.inventory.Recipe): void;
            // @ts-ignore
            public getPlayer(uuid: java.util.UUID): java.util.Optional;
            // @ts-ignore
            public lookupName(name: string): java.util.Optional;
            // @ts-ignore
            public getOfflinePlayer(name: string): cn.nukkit.IPlayer;
            // @ts-ignore
            public getOfflinePlayer(uuid: java.util.UUID): cn.nukkit.IPlayer;
            // @ts-ignore
            public getOfflinePlayerData(uuid: java.util.UUID): cn.nukkit.nbt.tag.CompoundTag;
            // @ts-ignore
            public getOfflinePlayerData(uuid: java.util.UUID, create: boolean): cn.nukkit.nbt.tag.CompoundTag;
            // @ts-ignore
            public getOfflinePlayerData(name: string): cn.nukkit.nbt.tag.CompoundTag;
            // @ts-ignore
            public getOfflinePlayerData(name: string, create: boolean): cn.nukkit.nbt.tag.CompoundTag;
            // @ts-ignore
            public saveOfflinePlayerData(uuid: java.util.UUID, tag: cn.nukkit.nbt.tag.CompoundTag): void;
            // @ts-ignore
            public saveOfflinePlayerData(name: string, tag: cn.nukkit.nbt.tag.CompoundTag): void;
            // @ts-ignore
            public saveOfflinePlayerData(uuid: java.util.UUID, tag: cn.nukkit.nbt.tag.CompoundTag, async: boolean): void;
            // @ts-ignore
            public saveOfflinePlayerData(name: string, tag: cn.nukkit.nbt.tag.CompoundTag, async: boolean): void;
            // @ts-ignore
            public getPlayer(name: string): cn.nukkit.Player;
            // @ts-ignore
            public getPlayerExact(name: string): cn.nukkit.Player;
            // @ts-ignore
            public matchPlayer(partialName: string): cn.nukkit.Player[];
            // @ts-ignore
            public removePlayer(player: cn.nukkit.Player): void;
            // @ts-ignore
            public getLevels(): java.util.Map;
            // @ts-ignore
            public getDefaultLevel(): cn.nukkit.level.Level;
            // @ts-ignore
            public setDefaultLevel(defaultLevel: cn.nukkit.level.Level): void;
            // @ts-ignore
            public isLevelLoaded(name: string): boolean;
            // @ts-ignore
            public getLevel(levelId: number): cn.nukkit.level.Level;
            // @ts-ignore
            public getLevelByName(name: string): cn.nukkit.level.Level;
            // @ts-ignore
            public unloadLevel(level: cn.nukkit.level.Level): boolean;
            // @ts-ignore
            public unloadLevel(level: cn.nukkit.level.Level, forceUnload: boolean): boolean;
            // @ts-ignore
            public loadLevel(name: string): boolean;
            // @ts-ignore
            public generateLevel(name: string): boolean;
            // @ts-ignore
            public generateLevel(name: string, seed: number): boolean;
            // @ts-ignore
            public generateLevel(name: string, seed: number, generator: java.lang.Class): boolean;
            // @ts-ignore
            public generateLevel(name: string, seed: number, generator: java.lang.Class, options: java.util.Map): boolean;
            // @ts-ignore
            public generateLevel(name: string, seed: number, generator: java.lang.Class, options: java.util.Map, provider: java.lang.Class): boolean;
            // @ts-ignore
            public isLevelGenerated(name: string): boolean;
            // @ts-ignore
            public getLanguage(): cn.nukkit.lang.BaseLang;
            // @ts-ignore
            public isLanguageForced(): boolean;
            // @ts-ignore
            public getNetwork(): cn.nukkit.network.Network;
            // @ts-ignore
            public getConfig(): cn.nukkit.utils.Config;
            // @ts-ignore
            public getConfig(variable: string): java.lang.Object;
            // @ts-ignore
            public getConfig(variable: string, defaultValue: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public getProperties(): cn.nukkit.utils.Config;
            // @ts-ignore
            public getProperty(variable: string): java.lang.Object;
            // @ts-ignore
            public getProperty(variable: string, defaultValue: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public setPropertyString(variable: string, value: string): void;
            // @ts-ignore
            public getPropertyString(variable: string): string;
            // @ts-ignore
            public getPropertyString(variable: string, defaultValue: string): string;
            // @ts-ignore
            public getPropertyInt(variable: string): number;
            // @ts-ignore
            public getPropertyInt(variable: string, defaultValue: java.lang.Integer): number;
            // @ts-ignore
            public setPropertyInt(variable: string, value: number): void;
            // @ts-ignore
            public getPropertyBoolean(variable: string): boolean;
            // @ts-ignore
            public getPropertyBoolean(variable: string, defaultValue: java.lang.Object): boolean;
            // @ts-ignore
            public setPropertyBoolean(variable: string, value: boolean): void;
            // @ts-ignore
            public getPluginCommand(name: string): cn.nukkit.command.PluginIdentifiableCommand;
            // @ts-ignore
            public getNameBans(): cn.nukkit.permission.BanList;
            // @ts-ignore
            public getIPBans(): cn.nukkit.permission.BanList;
            // @ts-ignore
            public addOp(name: string): void;
            // @ts-ignore
            public removeOp(name: string): void;
            // @ts-ignore
            public addWhitelist(name: string): void;
            // @ts-ignore
            public removeWhitelist(name: string): void;
            // @ts-ignore
            public isWhitelisted(name: string): boolean;
            // @ts-ignore
            public isOp(name: string): boolean;
            // @ts-ignore
            public getWhitelist(): cn.nukkit.utils.Config;
            // @ts-ignore
            public getOps(): cn.nukkit.utils.Config;
            // @ts-ignore
            public reloadWhitelist(): void;
            // @ts-ignore
            public getServiceManager(): cn.nukkit.plugin.service.ServiceManager;
            // @ts-ignore
            public getCommandAliases(): java.util.Map;
            // @ts-ignore
            public shouldSavePlayerData(): boolean;
            // @ts-ignore
            public getPlayerSkinChangeCooldown(): number;
            /**
             * Checks the current thread against the expected primary thread for the
             * server.
             * <p>
             * <b>Note:</b> this method should not be used to indicate the current
             * synchronized state of the runtime. A current thread matching the main
             * thread indicates that it is synchronized, but a mismatch does not
             * preclude the same assumption.
             */
            // @ts-ignore
            public isPrimaryThread(): boolean;
            // @ts-ignore
            public getPrimaryThread(): java.lang.Thread;
            // @ts-ignore
            public isNetherAllowed(): boolean;
            // @ts-ignore
            public getPlayerDataSerializer(): cn.nukkit.utils.PlayerDataSerializer;
            // @ts-ignore
            public setPlayerDataSerializer(playerDataSerializer: cn.nukkit.utils.PlayerDataSerializer): void;
            // @ts-ignore
            public static getInstance(): cn.nukkit.Server;
        }
    }
}
