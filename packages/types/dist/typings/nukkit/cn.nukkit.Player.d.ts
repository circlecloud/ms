declare namespace cn {
    namespace nukkit {
        // @ts-ignore
         class Player extends cn.nukkit.entity.EntityHuman implements cn.nukkit.command.CommandSender, cn.nukkit.inventory.InventoryHolder, cn.nukkit.level.ChunkLoader, cn.nukkit.IPlayer {
            // @ts-ignore
            constructor(interfaz: cn.nukkit.network.SourceInterface, clientID: java.lang.Long, ip: string, port: number)
            // @ts-ignore
            public static SURVIVAL: number;
            // @ts-ignore
            public static CREATIVE: number;
            // @ts-ignore
            public static ADVENTURE: number;
            // @ts-ignore
            public static SPECTATOR: number;
            // @ts-ignore
            public static VIEW: number;
            // @ts-ignore
            public static SURVIVAL_SLOTS: number;
            // @ts-ignore
            public static CREATIVE_SLOTS: number;
            // @ts-ignore
            public static CRAFTING_SMALL: number;
            // @ts-ignore
            public static CRAFTING_BIG: number;
            // @ts-ignore
            public static CRAFTING_ANVIL: number;
            // @ts-ignore
            public static CRAFTING_ENCHANT: number;
            // @ts-ignore
            public static CRAFTING_BEACON: number;
            // @ts-ignore
            public static DEFAULT_SPEED: number;
            // @ts-ignore
            public static MAXIMUM_SPEED: number;
            // @ts-ignore
            public static PERMISSION_CUSTOM: number;
            // @ts-ignore
            public static PERMISSION_OPERATOR: number;
            // @ts-ignore
            public static PERMISSION_MEMBER: number;
            // @ts-ignore
            public static PERMISSION_VISITOR: number;
            // @ts-ignore
            public static ANVIL_WINDOW_ID: number;
            // @ts-ignore
            public static ENCHANT_WINDOW_ID: number;
            // @ts-ignore
            public static BEACON_WINDOW_ID: number;
            // @ts-ignore
            protected interfaz: cn.nukkit.network.SourceInterface;
            // @ts-ignore
            public playedBefore: boolean;
            // @ts-ignore
            public spawned: boolean;
            // @ts-ignore
            public loggedIn: boolean;
            // @ts-ignore
            public gamemode: number;
            // @ts-ignore
            public lastBreak: number;
            // @ts-ignore
            protected windowCnt: number;
            // @ts-ignore
            protected windows: any;
            // @ts-ignore
            protected windowIndex: any;
            // @ts-ignore
            protected permanentWindows: java.util.Set;
            // @ts-ignore
            protected messageCounter: number;
            // @ts-ignore
            public speed: cn.nukkit.math.Vector3;
            // @ts-ignore
            public achievements: java.util.HashSet;
            // @ts-ignore
            public craftingType: number;
            // @ts-ignore
            protected playerUIInventory: cn.nukkit.inventory.PlayerUIInventory;
            // @ts-ignore
            protected craftingGrid: cn.nukkit.inventory.CraftingGrid;
            // @ts-ignore
            protected craftingTransaction: cn.nukkit.inventory.transaction.CraftingTransaction;
            // @ts-ignore
            public creationTime: number;
            // @ts-ignore
            protected randomClientId: number;
            // @ts-ignore
            protected forceMovement: cn.nukkit.math.Vector3;
            // @ts-ignore
            protected teleportPosition: cn.nukkit.math.Vector3;
            // @ts-ignore
            protected connected: boolean;
            // @ts-ignore
            protected ip: string;
            // @ts-ignore
            protected removeFormat: boolean;
            // @ts-ignore
            protected port: number;
            // @ts-ignore
            protected username: string;
            // @ts-ignore
            protected iusername: string;
            // @ts-ignore
            protected displayName: string;
            // @ts-ignore
            protected sleeping: cn.nukkit.math.Vector3;
            // @ts-ignore
            protected clientID: java.lang.Long;
            // @ts-ignore
            protected stepHeight: number;
            // @ts-ignore
            public usedChunks: java.util.Map;
            // @ts-ignore
            protected chunkLoadCount: number;
            // @ts-ignore
            protected loadQueue: any;
            // @ts-ignore
            protected nextChunkOrderRun: number;
            // @ts-ignore
            protected hiddenPlayers: java.util.Map;
            // @ts-ignore
            protected newPosition: cn.nukkit.math.Vector3;
            // @ts-ignore
            protected chunkRadius: number;
            // @ts-ignore
            protected viewDistance: number;
            // @ts-ignore
            protected chunksPerTick: number;
            // @ts-ignore
            protected spawnThreshold: number;
            // @ts-ignore
            protected spawnPosition: cn.nukkit.level.Position;
            // @ts-ignore
            protected inAirTicks: number;
            // @ts-ignore
            protected startAirTicks: number;
            // @ts-ignore
            protected adventureSettings: cn.nukkit.AdventureSettings;
            // @ts-ignore
            protected checkMovement: boolean;
            // @ts-ignore
            protected foodData: cn.nukkit.PlayerFood;
            // @ts-ignore
            protected enableClientCommand: boolean;
            // @ts-ignore
            protected lastEnderPearl: number;
            // @ts-ignore
            protected lastChorusFruitTeleport: number;
            // @ts-ignore
            public breakingBlock: cn.nukkit.block.Block;
            // @ts-ignore
            public pickedXPOrb: number;
            // @ts-ignore
            protected formWindowCount: number;
            // @ts-ignore
            protected formWindows: java.util.Map;
            // @ts-ignore
            protected serverSettings: java.util.Map;
            // @ts-ignore
            protected dummyBossBars: java.util.Map;
            // @ts-ignore
            protected shouldLogin: boolean;
            // @ts-ignore
            public fishing: cn.nukkit.entity.item.EntityFishingHook;
            // @ts-ignore
            public lastSkinChange: number;
            // @ts-ignore
            protected lastRightClickTime: number;
            // @ts-ignore
            protected lastRightClickPos: cn.nukkit.math.Vector3;
            // @ts-ignore
            public getStartActionTick(): number;
            // @ts-ignore
            public startAction(): void;
            // @ts-ignore
            public stopAction(): void;
            // @ts-ignore
            public getLastEnderPearlThrowingTick(): number;
            // @ts-ignore
            public onThrowEnderPearl(): void;
            // @ts-ignore
            public getLastChorusFruitTeleport(): number;
            // @ts-ignore
            public onChorusFruitTeleport(): void;
            // @ts-ignore
            public getViewingEnderChest(): cn.nukkit.block.BlockEnderChest;
            // @ts-ignore
            public setViewingEnderChest(chest: cn.nukkit.block.BlockEnderChest): void;
            // @ts-ignore
            public getLeaveMessage(): cn.nukkit.lang.TranslationContainer;
            // @ts-ignore
            public getClientSecret(): string;
            /**
             * This might disappear in the future.
             * Please use getUniqueId() instead (IP + clientId + name combo, in the future it'll change to real UUID for online auth)
             */
            // @ts-ignore
            public getClientId(): java.lang.Long;
            // @ts-ignore
            public isBanned(): boolean;
            // @ts-ignore
            public setBanned(value: boolean): void;
            // @ts-ignore
            public isWhitelisted(): boolean;
            // @ts-ignore
            public setWhitelisted(value: boolean): void;
            // @ts-ignore
            public getPlayer(): cn.nukkit.Player;
            // @ts-ignore
            public getFirstPlayed(): java.lang.Long;
            // @ts-ignore
            public getLastPlayed(): java.lang.Long;
            // @ts-ignore
            public hasPlayedBefore(): boolean;
            // @ts-ignore
            public getAdventureSettings(): cn.nukkit.AdventureSettings;
            // @ts-ignore
            public setAdventureSettings(adventureSettings: cn.nukkit.AdventureSettings): void;
            // @ts-ignore
            public resetInAirTicks(): void;
            // @ts-ignore
            public setAllowFlight(value: boolean): void;
            // @ts-ignore
            public getAllowFlight(): boolean;
            // @ts-ignore
            public setAllowModifyWorld(value: boolean): void;
            // @ts-ignore
            public setAllowInteract(value: boolean): void;
            // @ts-ignore
            public setAllowInteract(value: boolean, containers: boolean): void;
            // @ts-ignore
            public setAutoJump(value: boolean): void;
            // @ts-ignore
            public hasAutoJump(): boolean;
            // @ts-ignore
            public spawnTo(player: cn.nukkit.Player): void;
            // @ts-ignore
            public getServer(): cn.nukkit.Server;
            // @ts-ignore
            public getRemoveFormat(): boolean;
            // @ts-ignore
            public setRemoveFormat(): void;
            // @ts-ignore
            public setRemoveFormat(remove: boolean): void;
            // @ts-ignore
            public canSee(player: cn.nukkit.Player): boolean;
            // @ts-ignore
            public hidePlayer(player: cn.nukkit.Player): void;
            // @ts-ignore
            public showPlayer(player: cn.nukkit.Player): void;
            // @ts-ignore
            public canCollideWith(entity: cn.nukkit.entity.Entity): boolean;
            // @ts-ignore
            public resetFallDistance(): void;
            // @ts-ignore
            public isOnline(): boolean;
            // @ts-ignore
            public isOp(): boolean;
            // @ts-ignore
            public setOp(value: boolean): void;
            // @ts-ignore
            public isPermissionSet(name: string): boolean;
            // @ts-ignore
            public isPermissionSet(permission: cn.nukkit.permission.Permission): boolean;
            // @ts-ignore
            public hasPermission(name: string): boolean;
            // @ts-ignore
            public hasPermission(permission: cn.nukkit.permission.Permission): boolean;
            // @ts-ignore
            public addAttachment(plugin: cn.nukkit.plugin.Plugin): cn.nukkit.permission.PermissionAttachment;
            // @ts-ignore
            public addAttachment(plugin: cn.nukkit.plugin.Plugin, name: string): cn.nukkit.permission.PermissionAttachment;
            // @ts-ignore
            public addAttachment(plugin: cn.nukkit.plugin.Plugin, name: string, value: java.lang.Boolean): cn.nukkit.permission.PermissionAttachment;
            // @ts-ignore
            public removeAttachment(attachment: cn.nukkit.permission.PermissionAttachment): void;
            // @ts-ignore
            public recalculatePermissions(): void;
            // @ts-ignore
            public isEnableClientCommand(): boolean;
            // @ts-ignore
            public setEnableClientCommand(enable: boolean): void;
            // @ts-ignore
            public sendCommandData(): void;
            // @ts-ignore
            public getEffectivePermissions(): java.util.Map;
            // @ts-ignore
            protected initEntity(): void;
            // @ts-ignore
            public isPlayer(): boolean;
            // @ts-ignore
            public removeAchievement(achievementId: string): void;
            // @ts-ignore
            public hasAchievement(achievementId: string): boolean;
            // @ts-ignore
            public isConnected(): boolean;
            // @ts-ignore
            public getDisplayName(): string;
            // @ts-ignore
            public setDisplayName(displayName: string): void;
            // @ts-ignore
            public setSkin(skin: cn.nukkit.entity.data.Skin): void;
            // @ts-ignore
            public getAddress(): string;
            // @ts-ignore
            public getPort(): number;
            // @ts-ignore
            public getNextPosition(): cn.nukkit.level.Position;
            // @ts-ignore
            public isSleeping(): boolean;
            // @ts-ignore
            public getInAirTicks(): number;
            /**
             * Returns whether the player is currently using an item (right-click and hold).
             */
            // @ts-ignore
            public isUsingItem(): boolean;
            // @ts-ignore
            public setUsingItem(value: boolean): void;
            // @ts-ignore
            public getButtonText(): string;
            // @ts-ignore
            public setButtonText(text: string): void;
            // @ts-ignore
            public unloadChunk(x: number, z: number): void;
            // @ts-ignore
            public unloadChunk(x: number, z: number, level: cn.nukkit.level.Level): void;
            // @ts-ignore
            public getSpawn(): cn.nukkit.level.Position;
            // @ts-ignore
            public sendChunk(x: number, z: number, packet: cn.nukkit.network.protocol.DataPacket): void;
            // @ts-ignore
            public sendChunk(x: number, z: number, subChunkCount: number, payload: number): void;
            // @ts-ignore
            protected sendNextChunk(): void;
            // @ts-ignore
            protected doFirstSpawn(): void;
            // @ts-ignore
            protected orderChunks(): boolean;
            // @ts-ignore
            public batchDataPacket(packet: cn.nukkit.network.protocol.DataPacket): boolean;
            /**
             * 0 is true
             * -1 is false
             * other is identifer
             */
            // @ts-ignore
            public dataPacket(packet: cn.nukkit.network.protocol.DataPacket): boolean;
            // @ts-ignore
            public dataPacket(packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean): number;
            /**
             * 0 is true
             * -1 is false
             * other is identifer
             */
            // @ts-ignore
            public directDataPacket(packet: cn.nukkit.network.protocol.DataPacket): boolean;
            // @ts-ignore
            public directDataPacket(packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean): number;
            // @ts-ignore
            public getPing(): number;
            // @ts-ignore
            public sleepOn(pos: cn.nukkit.math.Vector3): boolean;
            // @ts-ignore
            public setSpawn(pos: cn.nukkit.math.Vector3): void;
            // @ts-ignore
            public stopSleep(): void;
            // @ts-ignore
            public awardAchievement(achievementId: string): boolean;
            // @ts-ignore
            public getGamemode(): number;
            // @ts-ignore
            public setGamemode(gamemode: number): boolean;
            // @ts-ignore
            public setGamemode(gamemode: number, clientSide: boolean): boolean;
            // @ts-ignore
            public setGamemode(gamemode: number, clientSide: boolean, newSettings: cn.nukkit.AdventureSettings): boolean;
            // @ts-ignore
            public sendSettings(): void;
            // @ts-ignore
            public isSurvival(): boolean;
            // @ts-ignore
            public isCreative(): boolean;
            // @ts-ignore
            public isSpectator(): boolean;
            // @ts-ignore
            public isAdventure(): boolean;
            // @ts-ignore
            public getDrops(): cn.nukkit.item.Item[];
            // @ts-ignore
            public setDataProperty(data: cn.nukkit.entity.data.EntityData): boolean;
            // @ts-ignore
            public setDataProperty(data: cn.nukkit.entity.data.EntityData, send: boolean): boolean;
            // @ts-ignore
            protected checkGroundState(movX: number, movY: number, movZ: number, dx: number, dy: number, dz: number): void;
            // @ts-ignore
            protected checkBlockCollision(): void;
            // @ts-ignore
            protected checkNearEntities(): void;
            // @ts-ignore
            protected processMovement(tickDiff: number): void;
            // @ts-ignore
            public addMovement(x: number, y: number, z: number, yaw: number, pitch: number, headYaw: number): void;
            // @ts-ignore
            public setMotion(motion: cn.nukkit.math.Vector3): boolean;
            // @ts-ignore
            public sendAttributes(): void;
            // @ts-ignore
            public onUpdate(currentTick: number): boolean;
            // @ts-ignore
            public checkInteractNearby(): void;
            /**
             * Returns the Entity the player is looking at currently
             */
            // @ts-ignore
            public getEntityPlayerLookingAt(maxDistance: number): cn.nukkit.entity.EntityInteractable;
            // @ts-ignore
            public checkNetwork(): void;
            // @ts-ignore
            public canInteract(pos: cn.nukkit.math.Vector3, maxDistance: number): boolean;
            // @ts-ignore
            public canInteract(pos: cn.nukkit.math.Vector3, maxDistance: number, maxDiff: number): boolean;
            // @ts-ignore
            protected processLogin(): void;
            // @ts-ignore
            protected completeLoginSequence(): void;
            // @ts-ignore
            public handleDataPacket(packet: cn.nukkit.network.protocol.DataPacket): void;
            /**
             * Sends a chat message as this player. If the message begins with a / (forward-slash) it will be treated
             * as a command.
             */
            // @ts-ignore
            public chat(message: string): boolean;
            // @ts-ignore
            public kick(): boolean;
            // @ts-ignore
            public kick(reason: string, isAdmin: boolean): boolean;
            // @ts-ignore
            public kick(reason: string): boolean;
            // @ts-ignore
            public kick(reason: cn.nukkit.event.player.PlayerKickEvent.Reason): boolean;
            // @ts-ignore
            public kick(reason: cn.nukkit.event.player.PlayerKickEvent.Reason, reasonString: string): boolean;
            // @ts-ignore
            public kick(reason: cn.nukkit.event.player.PlayerKickEvent.Reason, isAdmin: boolean): boolean;
            // @ts-ignore
            public kick(reason: cn.nukkit.event.player.PlayerKickEvent.Reason, reasonString: string, isAdmin: boolean): boolean;
            // @ts-ignore
            public setViewDistance(distance: number): void;
            // @ts-ignore
            public getViewDistance(): number;
            // @ts-ignore
            public sendMessage(message: string): void;
            // @ts-ignore
            public sendMessage(message: cn.nukkit.lang.TextContainer): void;
            // @ts-ignore
            public sendTranslation(message: string): void;
            // @ts-ignore
            public sendTranslation(message: string, parameters: string): void;
            // @ts-ignore
            public sendChat(message: string): void;
            // @ts-ignore
            public sendChat(source: string, message: string): void;
            // @ts-ignore
            public sendPopup(message: string): void;
            // @ts-ignore
            public sendPopup(message: string, subtitle: string): void;
            // @ts-ignore
            public sendTip(message: string): void;
            // @ts-ignore
            public clearTitle(): void;
            /**
             * Resets both title animation times and subtitle for the next shown title
             */
            // @ts-ignore
            public resetTitleSettings(): void;
            // @ts-ignore
            public setSubtitle(subtitle: string): void;
            // @ts-ignore
            public setTitleAnimationTimes(fadein: number, duration: number, fadeout: number): void;
            // @ts-ignore
            public sendTitle(title: string): void;
            // @ts-ignore
            public sendTitle(title: string, subtitle: string): void;
            // @ts-ignore
            public sendTitle(title: string, subtitle: string, fadeIn: number, stay: number, fadeOut: number): void;
            // @ts-ignore
            public sendActionBar(title: string): void;
            // @ts-ignore
            public sendActionBar(title: string, fadein: number, duration: number, fadeout: number): void;
            // @ts-ignore
            public close(): void;
            // @ts-ignore
            public close(message: string): void;
            // @ts-ignore
            public close(message: string, reason: string): void;
            // @ts-ignore
            public close(message: string, reason: string, notify: boolean): void;
            // @ts-ignore
            public close(message: cn.nukkit.lang.TextContainer): void;
            // @ts-ignore
            public close(message: cn.nukkit.lang.TextContainer, reason: string): void;
            // @ts-ignore
            public close(message: cn.nukkit.lang.TextContainer, reason: string, notify: boolean): void;
            // @ts-ignore
            public save(): void;
            // @ts-ignore
            public save(async: boolean): void;
            // @ts-ignore
            public getName(): string;
            // @ts-ignore
            public kill(): void;
            // @ts-ignore
            protected respawn(): void;
            // @ts-ignore
            public setHealth(health: number): void;
            // @ts-ignore
            public setMaxHealth(maxHealth: number): void;
            // @ts-ignore
            public getExperience(): number;
            // @ts-ignore
            public getExperienceLevel(): number;
            // @ts-ignore
            public addExperience(add: number): void;
            // @ts-ignore
            public static calculateRequireExperience(level: number): number;
            // @ts-ignore
            public setExperience(exp: number): void;
            // @ts-ignore
            public setExperience(exp: number, level: number): void;
            // @ts-ignore
            public sendExperience(): void;
            // @ts-ignore
            public sendExperience(exp: number): void;
            // @ts-ignore
            public sendExperienceLevel(): void;
            // @ts-ignore
            public sendExperienceLevel(level: number): void;
            // @ts-ignore
            public setAttribute(attribute: cn.nukkit.entity.Attribute): void;
            // @ts-ignore
            public setMovementSpeed(speed: number): void;
            // @ts-ignore
            public setMovementSpeed(speed: number, send: boolean): void;
            // @ts-ignore
            public getKiller(): cn.nukkit.entity.Entity;
            // @ts-ignore
            public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
            /**
             * Drops an item on the ground in front of the player. Returns if the item drop was successful.
             */
            // @ts-ignore
            public dropItem(item: cn.nukkit.item.Item): boolean;
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3): void;
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3, yaw: number): void;
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3, yaw: number, pitch: number): void;
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3, yaw: number, pitch: number, mode: number): void;
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3, yaw: number, pitch: number, mode: number, targets: cn.nukkit.Player): void;
            // @ts-ignore
            protected checkChunks(): void;
            // @ts-ignore
            protected checkTeleportPosition(): boolean;
            // @ts-ignore
            protected sendPlayStatus(status: number): void;
            // @ts-ignore
            protected sendPlayStatus(status: number, immediate: boolean): void;
            // @ts-ignore
            public teleport(location: cn.nukkit.level.Location, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean;
            // @ts-ignore
            protected forceSendEmptyChunks(): void;
            // @ts-ignore
            public teleportImmediate(location: cn.nukkit.level.Location): void;
            // @ts-ignore
            public teleportImmediate(location: cn.nukkit.level.Location, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): void;
            /**
             * Shows a new FormWindow to the player
             * You can find out FormWindow result by listening to PlayerFormRespondedEvent
             */
            // @ts-ignore
            public showFormWindow(window: cn.nukkit.form.window.FormWindow): number;
            /**
             * Shows a new FormWindow to the player
             * You can find out FormWindow result by listening to PlayerFormRespondedEvent
             */
            // @ts-ignore
            public showFormWindow(window: cn.nukkit.form.window.FormWindow, id: number): number;
            /**
             * Shows a new setting page in game settings
             * You can find out settings result by listening to PlayerFormRespondedEvent
             */
            // @ts-ignore
            public addServerSettings(window: cn.nukkit.form.window.FormWindow): number;
            /**
             * Creates and sends a BossBar to the player
             */
            // @ts-ignore
            public createBossBar(text: string, length: number): number;
            /**
             * Creates and sends a BossBar to the player
             */
            // @ts-ignore
            public createBossBar(dummyBossBar: cn.nukkit.utils.DummyBossBar): number;
            /**
             * Get a DummyBossBar object
             */
            // @ts-ignore
            public getDummyBossBar(bossBarId: number): cn.nukkit.utils.DummyBossBar;
            /**
             * Get all DummyBossBar objects
             */
            // @ts-ignore
            public getDummyBossBars(): java.util.Map;
            /**
             * Updates a BossBar
             */
            // @ts-ignore
            public updateBossBar(text: string, length: number, bossBarId: number): void;
            /**
             * Removes a BossBar
             */
            // @ts-ignore
            public removeBossBar(bossBarId: number): void;
            // @ts-ignore
            public getWindowId(inventory: cn.nukkit.inventory.Inventory): number;
            // @ts-ignore
            public getWindowById(id: number): cn.nukkit.inventory.Inventory;
            // @ts-ignore
            public addWindow(inventory: cn.nukkit.inventory.Inventory): number;
            // @ts-ignore
            public addWindow(inventory: cn.nukkit.inventory.Inventory, forceId: java.lang.Integer): number;
            // @ts-ignore
            public addWindow(inventory: cn.nukkit.inventory.Inventory, forceId: java.lang.Integer, isPermanent: boolean): number;
            // @ts-ignore
            public getTopWindow(): java.util.Optional;
            // @ts-ignore
            public removeWindow(inventory: cn.nukkit.inventory.Inventory): void;
            // @ts-ignore
            public sendAllInventories(): void;
            // @ts-ignore
            protected addDefaultWindows(): void;
            // @ts-ignore
            public getUIInventory(): cn.nukkit.inventory.PlayerUIInventory;
            // @ts-ignore
            public getCursorInventory(): cn.nukkit.inventory.PlayerCursorInventory;
            // @ts-ignore
            public getCraftingGrid(): cn.nukkit.inventory.CraftingGrid;
            // @ts-ignore
            public setCraftingGrid(grid: cn.nukkit.inventory.CraftingGrid): void;
            // @ts-ignore
            public resetCraftingGridType(): void;
            // @ts-ignore
            public removeAllWindows(): void;
            // @ts-ignore
            public removeAllWindows(permanent: boolean): void;
            // @ts-ignore
            public setMetadata(metadataKey: string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void;
            // @ts-ignore
            public getMetadata(metadataKey: string): java.util.List;
            // @ts-ignore
            public hasMetadata(metadataKey: string): boolean;
            // @ts-ignore
            public removeMetadata(metadataKey: string, owningPlugin: cn.nukkit.plugin.Plugin): void;
            // @ts-ignore
            public onChunkChanged(chunk: cn.nukkit.level.format.FullChunk): void;
            // @ts-ignore
            public onChunkLoaded(chunk: cn.nukkit.level.format.FullChunk): void;
            // @ts-ignore
            public onChunkPopulated(chunk: cn.nukkit.level.format.FullChunk): void;
            // @ts-ignore
            public onChunkUnloaded(chunk: cn.nukkit.level.format.FullChunk): void;
            // @ts-ignore
            public onBlockChanged(block: cn.nukkit.math.Vector3): void;
            // @ts-ignore
            public getLoaderId(): number;
            // @ts-ignore
            public isLoaderActive(): boolean;
            // @ts-ignore
            public static getChunkCacheFromData(chunkX: number, chunkZ: number, subChunkCount: number, payload: number): cn.nukkit.network.protocol.BatchPacket;
            // @ts-ignore
            public isFoodEnabled(): boolean;
            // @ts-ignore
            public setFoodEnabled(foodEnabled: boolean): void;
            // @ts-ignore
            public getFoodData(): cn.nukkit.PlayerFood;
            // @ts-ignore
            public switchLevel(level: cn.nukkit.level.Level): boolean;
            // @ts-ignore
            public setCheckMovement(checkMovement: boolean): void;
            // @ts-ignore
            public setLocale(locale: java.util.Locale): void;
            // @ts-ignore
            public getLocale(): java.util.Locale;
            // @ts-ignore
            public setSprinting(value: boolean): void;
            // @ts-ignore
            public transfer(address: java.net.InetSocketAddress): void;
            // @ts-ignore
            public getLoginChainData(): cn.nukkit.utils.LoginChainData;
            // @ts-ignore
            public pickupEntity(entity: cn.nukkit.entity.Entity, near: boolean): boolean;
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Notifies an ACK response from the client
             */
            // @ts-ignore
            public notifyACK(identification: number): void;
            // @ts-ignore
            public isBreakingBlock(): boolean;
            /**
             * Show a window of a XBOX account's profile
             */
            // @ts-ignore
            public showXboxProfile(xuid: string): void;
            // @ts-ignore
            public startFishing(fishingRod: cn.nukkit.item.Item): void;
            // @ts-ignore
            public stopFishing(click: boolean): void;
            // @ts-ignore
            public toString(): string;
        }
    }
}
