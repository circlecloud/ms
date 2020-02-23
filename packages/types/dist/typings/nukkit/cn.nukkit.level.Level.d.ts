declare namespace cn {
    namespace nukkit {
        namespace level {
            // @ts-ignore
             class Level extends java.lang.Object implements cn.nukkit.level.ChunkManager, cn.nukkit.metadata.Metadatable {
                // @ts-ignore
                constructor(server: cn.nukkit.Server, name: string, path: string, provider: java.lang.Class)
                // @ts-ignore
                public static COMPRESSION_LEVEL: number;
                // @ts-ignore
                public static BLOCK_UPDATE_NORMAL: number;
                // @ts-ignore
                public static BLOCK_UPDATE_RANDOM: number;
                // @ts-ignore
                public static BLOCK_UPDATE_SCHEDULED: number;
                // @ts-ignore
                public static BLOCK_UPDATE_WEAK: number;
                // @ts-ignore
                public static BLOCK_UPDATE_TOUCH: number;
                // @ts-ignore
                public static BLOCK_UPDATE_REDSTONE: number;
                // @ts-ignore
                public static BLOCK_UPDATE_TICK: number;
                // @ts-ignore
                public static TIME_DAY: number;
                // @ts-ignore
                public static TIME_NOON: number;
                // @ts-ignore
                public static TIME_SUNSET: number;
                // @ts-ignore
                public static TIME_NIGHT: number;
                // @ts-ignore
                public static TIME_MIDNIGHT: number;
                // @ts-ignore
                public static TIME_SUNRISE: number;
                // @ts-ignore
                public static TIME_FULL: number;
                // @ts-ignore
                public static DIMENSION_OVERWORLD: number;
                // @ts-ignore
                public static DIMENSION_NETHER: number;
                // @ts-ignore
                public static DIMENSION_THE_END: number;
                // @ts-ignore
                public static MAX_BLOCK_CACHE: number;
                // @ts-ignore
                public updateEntities: any;
                // @ts-ignore
                public skyLightSubtracted: number;
                // @ts-ignore
                public sleepTicks: number;
                // @ts-ignore
                public timings: cn.nukkit.timings.LevelTimings;
                // @ts-ignore
                public tickRateTime: number;
                // @ts-ignore
                public tickRateCounter: number;
                // @ts-ignore
                public gameRules: cn.nukkit.level.GameRules;
                // @ts-ignore
                public static chunkHash(x: number, z: number): number;
                // @ts-ignore
                public static blockHash(x: number, y: number, z: number): number;
                // @ts-ignore
                public static localBlockHash(x: number, y: number, z: number): string;
                // @ts-ignore
                public static getBlockXYZ(chunkHash: number, blockHash: string): cn.nukkit.math.Vector3;
                // @ts-ignore
                public static chunkBlockHash(x: number, y: number, z: number): number;
                // @ts-ignore
                public static getHashX(hash: number): number;
                // @ts-ignore
                public static getHashZ(hash: number): number;
                // @ts-ignore
                public static getBlockXYZ(hash: cn.nukkit.math.BlockVector3): cn.nukkit.math.Vector3;
                // @ts-ignore
                public static getChunkXZ(hash: number): cn.nukkit.level.format.Chunk.Entry;
                // @ts-ignore
                public static generateChunkLoaderId(loader: cn.nukkit.level.ChunkLoader): number;
                // @ts-ignore
                public getTickRate(): number;
                // @ts-ignore
                public getTickRateTime(): number;
                // @ts-ignore
                public setTickRate(tickRate: number): void;
                // @ts-ignore
                public initLevel(): void;
                // @ts-ignore
                public getGenerator(): cn.nukkit.level.generator.Generator;
                // @ts-ignore
                public getBlockMetadata(): cn.nukkit.metadata.BlockMetadataStore;
                // @ts-ignore
                public getServer(): cn.nukkit.Server;
                // @ts-ignore
                public getProvider(): cn.nukkit.level.format.LevelProvider;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public close(): void;
                // @ts-ignore
                public addSound(pos: cn.nukkit.math.Vector3, sound: cn.nukkit.level.Sound): void;
                // @ts-ignore
                public addSound(pos: cn.nukkit.math.Vector3, sound: cn.nukkit.level.Sound, volume: number, pitch: number): void;
                // @ts-ignore
                public addSound(pos: cn.nukkit.math.Vector3, sound: cn.nukkit.level.Sound, volume: number, pitch: number, players: java.util.Collection): void;
                // @ts-ignore
                public addSound(pos: cn.nukkit.math.Vector3, sound: cn.nukkit.level.Sound, volume: number, pitch: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public addLevelEvent(pos: cn.nukkit.math.Vector3, event: number): void;
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number, data: number, entityType: number): void;
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number, data: number, entityType: number, isBaby: boolean, isGlobal: boolean): void;
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number): void;
                /**
                 * Broadcasts sound to players
                 */
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number, data: number): void;
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number, data: number, identifier: string, isBaby: boolean, isGlobal: boolean): void;
                // @ts-ignore
                public addParticle(particle: cn.nukkit.level.particle.Particle): void;
                // @ts-ignore
                public addParticle(particle: cn.nukkit.level.particle.Particle, player: cn.nukkit.Player): void;
                // @ts-ignore
                public addParticle(particle: cn.nukkit.level.particle.Particle, players: cn.nukkit.Player): void;
                // @ts-ignore
                public addParticle(particle: cn.nukkit.level.particle.Particle, players: java.util.Collection): void;
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect): void;
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect, uniqueEntityId: number): void;
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect, uniqueEntityId: number, dimensionId: number): void;
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect, uniqueEntityId: number, dimensionId: number, players: java.util.Collection): void;
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect, uniqueEntityId: number, dimensionId: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3f, identifier: string, uniqueEntityId: number, dimensionId: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public getAutoSave(): boolean;
                // @ts-ignore
                public setAutoSave(autoSave: boolean): void;
                // @ts-ignore
                public unload(): boolean;
                // @ts-ignore
                public unload(force: boolean): boolean;
                // @ts-ignore
                public getChunkPlayers(chunkX: number, chunkZ: number): java.util.Map;
                // @ts-ignore
                public getChunkLoaders(chunkX: number, chunkZ: number): cn.nukkit.level.ChunkLoader[];
                // @ts-ignore
                public addChunkPacket(chunkX: number, chunkZ: number, packet: cn.nukkit.network.protocol.DataPacket): void;
                // @ts-ignore
                public registerChunkLoader(loader: cn.nukkit.level.ChunkLoader, chunkX: number, chunkZ: number): void;
                // @ts-ignore
                public registerChunkLoader(loader: cn.nukkit.level.ChunkLoader, chunkX: number, chunkZ: number, autoLoad: boolean): void;
                // @ts-ignore
                public unregisterChunkLoader(loader: cn.nukkit.level.ChunkLoader, chunkX: number, chunkZ: number): void;
                // @ts-ignore
                public checkTime(): void;
                // @ts-ignore
                public sendTime(players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendTime(): void;
                // @ts-ignore
                public getGameRules(): cn.nukkit.level.GameRules;
                // @ts-ignore
                public doTick(currentTick: number): void;
                // @ts-ignore
                public adjustPosToNearbyEntity(pos: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3;
                // @ts-ignore
                public checkSleep(): void;
                // @ts-ignore
                public sendBlockExtraData(x: number, y: number, z: number, id: number, data: number): void;
                // @ts-ignore
                public sendBlockExtraData(x: number, y: number, z: number, id: number, data: number, players: java.util.Collection): void;
                // @ts-ignore
                public sendBlockExtraData(x: number, y: number, z: number, id: number, data: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player, blocks: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player, blocks: cn.nukkit.math.Vector3, flags: number): void;
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player, blocks: cn.nukkit.math.Vector3, flags: number, optimizeRebuilds: boolean): void;
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player, blocks: cn.nukkit.math.Vector3, flags: number, dataLayer: number): void;
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player, blocks: cn.nukkit.math.Vector3, flags: number, dataLayer: number, optimizeRebuilds: boolean): void;
                // @ts-ignore
                public save(): boolean;
                // @ts-ignore
                public save(force: boolean): boolean;
                // @ts-ignore
                public saveChunks(): void;
                // @ts-ignore
                public updateAroundRedstone(pos: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace): void;
                // @ts-ignore
                public updateComparatorOutputLevel(v: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public updateAround(pos: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public updateAround(x: number, y: number, z: number): void;
                // @ts-ignore
                public scheduleUpdate(pos: cn.nukkit.block.Block, delay: number): void;
                // @ts-ignore
                public scheduleUpdate(block: cn.nukkit.block.Block, pos: cn.nukkit.math.Vector3, delay: number): void;
                // @ts-ignore
                public scheduleUpdate(block: cn.nukkit.block.Block, pos: cn.nukkit.math.Vector3, delay: number, priority: number): void;
                // @ts-ignore
                public scheduleUpdate(block: cn.nukkit.block.Block, pos: cn.nukkit.math.Vector3, delay: number, priority: number, checkArea: boolean): void;
                // @ts-ignore
                public cancelSheduledUpdate(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public isUpdateScheduled(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public isBlockTickPending(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public getPendingBlockUpdates(chunk: cn.nukkit.level.format.FullChunk): java.util.Set;
                // @ts-ignore
                public getPendingBlockUpdates(boundingBox: cn.nukkit.math.AxisAlignedBB): java.util.Set;
                // @ts-ignore
                public getCollisionBlocks(bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.block.Block[];
                // @ts-ignore
                public getCollisionBlocks(bb: cn.nukkit.math.AxisAlignedBB, targetFirst: boolean): cn.nukkit.block.Block[];
                // @ts-ignore
                public isFullBlock(pos: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public getCollisionCubes(entity: cn.nukkit.entity.Entity, bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.math.AxisAlignedBB[];
                // @ts-ignore
                public getCollisionCubes(entity: cn.nukkit.entity.Entity, bb: cn.nukkit.math.AxisAlignedBB, entities: boolean): cn.nukkit.math.AxisAlignedBB[];
                // @ts-ignore
                public getCollisionCubes(entity: cn.nukkit.entity.Entity, bb: cn.nukkit.math.AxisAlignedBB, entities: boolean, solidEntities: boolean): cn.nukkit.math.AxisAlignedBB[];
                // @ts-ignore
                public hasCollision(entity: cn.nukkit.entity.Entity, bb: cn.nukkit.math.AxisAlignedBB, entities: boolean): boolean;
                // @ts-ignore
                public getFullLight(pos: cn.nukkit.math.Vector3): number;
                // @ts-ignore
                public calculateSkylightSubtracted(tickDiff: number): number;
                // @ts-ignore
                public calculateCelestialAngle(time: number, tickDiff: number): number;
                // @ts-ignore
                public getMoonPhase(worldTime: number): number;
                // @ts-ignore
                public getFullBlock(x: number, y: number, z: number): number;
                // @ts-ignore
                public getBlock(pos: cn.nukkit.math.Vector3): cn.nukkit.block.Block;
                // @ts-ignore
                public getBlock(pos: cn.nukkit.math.Vector3, load: boolean): cn.nukkit.block.Block;
                // @ts-ignore
                public getBlock(x: number, y: number, z: number): cn.nukkit.block.Block;
                // @ts-ignore
                public getBlock(x: number, y: number, z: number, load: boolean): cn.nukkit.block.Block;
                // @ts-ignore
                public updateAllLight(pos: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public updateBlockSkyLight(x: number, y: number, z: number): void;
                // @ts-ignore
                public updateBlockLight(map: java.util.Map): void;
                // @ts-ignore
                public addLightUpdate(x: number, y: number, z: number): void;
                // @ts-ignore
                public setBlockFullIdAt(x: number, y: number, z: number, fullId: number): void;
                // @ts-ignore
                public setBlock(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public setBlock(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block, direct: boolean): boolean;
                // @ts-ignore
                public setBlock(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block, direct: boolean, update: boolean): boolean;
                // @ts-ignore
                public setBlock(x: number, y: number, z: number, block: cn.nukkit.block.Block, direct: boolean, update: boolean): boolean;
                // @ts-ignore
                public dropItem(source: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item): void;
                // @ts-ignore
                public dropItem(source: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, motion: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public dropItem(source: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, motion: cn.nukkit.math.Vector3, delay: number): void;
                // @ts-ignore
                public dropItem(source: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, motion: cn.nukkit.math.Vector3, dropAround: boolean, delay: number): void;
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3): cn.nukkit.item.Item;
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item): cn.nukkit.item.Item;
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, player: cn.nukkit.Player): cn.nukkit.item.Item;
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, player: cn.nukkit.Player, createParticles: boolean): cn.nukkit.item.Item;
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace, item: cn.nukkit.item.Item, player: cn.nukkit.Player, createParticles: boolean): cn.nukkit.item.Item;
                // @ts-ignore
                public dropExpOrb(source: cn.nukkit.math.Vector3, exp: number): void;
                // @ts-ignore
                public dropExpOrb(source: cn.nukkit.math.Vector3, exp: number, motion: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public dropExpOrb(source: cn.nukkit.math.Vector3, exp: number, motion: cn.nukkit.math.Vector3, delay: number): void;
                // @ts-ignore
                public useItemOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number): cn.nukkit.item.Item;
                // @ts-ignore
                public useItemOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): cn.nukkit.item.Item;
                // @ts-ignore
                public useItemOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player, playSound: boolean): cn.nukkit.item.Item;
                // @ts-ignore
                public isInSpawnRadius(vector3: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public getEntity(entityId: number): cn.nukkit.entity.Entity;
                // @ts-ignore
                public getEntities(): cn.nukkit.entity.Entity[];
                // @ts-ignore
                public getCollidingEntities(bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.entity.Entity[];
                // @ts-ignore
                public getCollidingEntities(bb: cn.nukkit.math.AxisAlignedBB, entity: cn.nukkit.entity.Entity): cn.nukkit.entity.Entity[];
                // @ts-ignore
                public getNearbyEntities(bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.entity.Entity[];
                // @ts-ignore
                public getNearbyEntities(bb: cn.nukkit.math.AxisAlignedBB, entity: cn.nukkit.entity.Entity): cn.nukkit.entity.Entity[];
                // @ts-ignore
                public getNearbyEntities(bb: cn.nukkit.math.AxisAlignedBB, entity: cn.nukkit.entity.Entity, loadChunks: boolean): cn.nukkit.entity.Entity[];
                // @ts-ignore
                public getBlockEntities(): java.util.Map;
                // @ts-ignore
                public getBlockEntityById(blockEntityId: number): cn.nukkit.blockentity.BlockEntity;
                // @ts-ignore
                public getPlayers(): java.util.Map;
                // @ts-ignore
                public getLoaders(): java.util.Map;
                // @ts-ignore
                public getBlockEntity(pos: cn.nukkit.math.Vector3): cn.nukkit.blockentity.BlockEntity;
                // @ts-ignore
                public getBlockEntityIfLoaded(pos: cn.nukkit.math.Vector3): cn.nukkit.blockentity.BlockEntity;
                // @ts-ignore
                public getChunkEntities(X: number, Z: number): java.util.Map;
                // @ts-ignore
                public getChunkEntities(X: number, Z: number, loadChunks: boolean): java.util.Map;
                // @ts-ignore
                public getChunkBlockEntities(X: number, Z: number): java.util.Map;
                // @ts-ignore
                public getBlockIdAt(x: number, y: number, z: number): number;
                // @ts-ignore
                public setBlockIdAt(x: number, y: number, z: number, id: number): void;
                // @ts-ignore
                public setBlockAt(x: number, y: number, z: number, id: number, data: number): void;
                // @ts-ignore
                public getBlockExtraDataAt(x: number, y: number, z: number): number;
                // @ts-ignore
                public setBlockExtraDataAt(x: number, y: number, z: number, id: number, data: number): void;
                // @ts-ignore
                public getBlockDataAt(x: number, y: number, z: number): number;
                // @ts-ignore
                public setBlockDataAt(x: number, y: number, z: number, data: number): void;
                // @ts-ignore
                public getBlockSkyLightAt(x: number, y: number, z: number): number;
                // @ts-ignore
                public setBlockSkyLightAt(x: number, y: number, z: number, level: number): void;
                // @ts-ignore
                public getBlockLightAt(x: number, y: number, z: number): number;
                // @ts-ignore
                public setBlockLightAt(x: number, y: number, z: number, level: number): void;
                // @ts-ignore
                public getBiomeId(x: number, z: number): number;
                // @ts-ignore
                public setBiomeId(x: number, z: number, biomeId: number): void;
                // @ts-ignore
                public getHeightMap(x: number, z: number): number;
                // @ts-ignore
                public setHeightMap(x: number, z: number, value: number): void;
                // @ts-ignore
                public getChunks(): java.util.Map;
                // @ts-ignore
                public getChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.generic.BaseFullChunk;
                // @ts-ignore
                public getChunk(chunkX: number, chunkZ: number, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk;
                // @ts-ignore
                public getChunkIfLoaded(chunkX: number, chunkZ: number): cn.nukkit.level.format.generic.BaseFullChunk;
                // @ts-ignore
                public generateChunkCallback(x: number, z: number, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void;
                // @ts-ignore
                public generateChunkCallback(x: number, z: number, chunk: cn.nukkit.level.format.generic.BaseFullChunk, isPopulated: boolean): void;
                // @ts-ignore
                public setChunk(chunkX: number, chunkZ: number): void;
                // @ts-ignore
                public setChunk(chunkX: number, chunkZ: number, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void;
                // @ts-ignore
                public setChunk(chunkX: number, chunkZ: number, chunk: cn.nukkit.level.format.generic.BaseFullChunk, unload: boolean): void;
                // @ts-ignore
                public getHighestBlockAt(x: number, z: number): number;
                // @ts-ignore
                public getMapColorAt(x: number, z: number): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public isChunkLoaded(x: number, z: number): boolean;
                // @ts-ignore
                public isChunkGenerated(x: number, z: number): boolean;
                // @ts-ignore
                public isChunkPopulated(x: number, z: number): boolean;
                // @ts-ignore
                public getSpawnLocation(): cn.nukkit.level.Position;
                // @ts-ignore
                public setSpawnLocation(pos: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public requestChunk(x: number, z: number, player: cn.nukkit.Player): void;
                // @ts-ignore
                public chunkRequestCallback(timestamp: number, x: number, z: number, subChunkCount: number, payload: number): void;
                // @ts-ignore
                public removeEntity(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public addEntity(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public addBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void;
                // @ts-ignore
                public scheduleBlockEntityUpdate(entity: cn.nukkit.blockentity.BlockEntity): void;
                // @ts-ignore
                public removeBlockEntity(entity: cn.nukkit.blockentity.BlockEntity): void;
                // @ts-ignore
                public isChunkInUse(x: number, z: number): boolean;
                // @ts-ignore
                public isChunkInUse(hash: number): boolean;
                // @ts-ignore
                public loadChunk(x: number, z: number): boolean;
                // @ts-ignore
                public loadChunk(x: number, z: number, generate: boolean): boolean;
                // @ts-ignore
                public unloadChunkRequest(x: number, z: number): boolean;
                // @ts-ignore
                public unloadChunkRequest(x: number, z: number, safe: boolean): boolean;
                // @ts-ignore
                public cancelUnloadChunkRequest(x: number, z: number): void;
                // @ts-ignore
                public cancelUnloadChunkRequest(hash: number): void;
                // @ts-ignore
                public unloadChunk(x: number, z: number): boolean;
                // @ts-ignore
                public unloadChunk(x: number, z: number, safe: boolean): boolean;
                // @ts-ignore
                public unloadChunk(x: number, z: number, safe: boolean, trySave: boolean): boolean;
                // @ts-ignore
                public isSpawnChunk(X: number, Z: number): boolean;
                // @ts-ignore
                public getSafeSpawn(): cn.nukkit.level.Position;
                // @ts-ignore
                public getSafeSpawn(spawn: cn.nukkit.math.Vector3): cn.nukkit.level.Position;
                // @ts-ignore
                public getTime(): number;
                // @ts-ignore
                public isDaytime(): boolean;
                // @ts-ignore
                public getCurrentTick(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getFolderName(): string;
                // @ts-ignore
                public setTime(time: number): void;
                // @ts-ignore
                public stopTime(): void;
                // @ts-ignore
                public startTime(): void;
                // @ts-ignore
                public getSeed(): number;
                // @ts-ignore
                public setSeed(seed: number): void;
                // @ts-ignore
                public populateChunk(x: number, z: number): boolean;
                // @ts-ignore
                public populateChunk(x: number, z: number, force: boolean): boolean;
                // @ts-ignore
                public generateChunk(x: number, z: number): void;
                // @ts-ignore
                public generateChunk(x: number, z: number, force: boolean): void;
                // @ts-ignore
                public regenerateChunk(x: number, z: number): void;
                // @ts-ignore
                public doChunkGarbageCollection(): void;
                // @ts-ignore
                public doGarbageCollection(allocatedTime: number): void;
                // @ts-ignore
                public unloadChunks(): void;
                // @ts-ignore
                public unloadChunks(force: boolean): void;
                // @ts-ignore
                public unloadChunks(maxUnload: number, force: boolean): void;
                // @ts-ignore
                public setMetadata(metadataKey: string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void;
                // @ts-ignore
                public getMetadata(metadataKey: string): java.util.List;
                // @ts-ignore
                public hasMetadata(metadataKey: string): boolean;
                // @ts-ignore
                public removeMetadata(metadataKey: string, owningPlugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public addEntityMovement(entity: cn.nukkit.entity.Entity, x: number, y: number, z: number, yaw: number, pitch: number, headYaw: number): void;
                // @ts-ignore
                public isRaining(): boolean;
                // @ts-ignore
                public setRaining(raining: boolean): boolean;
                // @ts-ignore
                public getRainTime(): number;
                // @ts-ignore
                public setRainTime(rainTime: number): void;
                // @ts-ignore
                public isThundering(): boolean;
                // @ts-ignore
                public setThundering(thundering: boolean): boolean;
                // @ts-ignore
                public getThunderTime(): number;
                // @ts-ignore
                public setThunderTime(thunderTime: number): void;
                // @ts-ignore
                public sendWeather(players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendWeather(player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendWeather(players: java.util.Collection): void;
                // @ts-ignore
                public getDimension(): number;
                // @ts-ignore
                public canBlockSeeSky(pos: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public getStrongPower(pos: cn.nukkit.math.Vector3, direction: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getStrongPower(pos: cn.nukkit.math.Vector3): number;
                // @ts-ignore
                public isSidePowered(pos: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace): boolean;
                // @ts-ignore
                public getRedstonePower(pos: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public isBlockPowered(pos: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public isBlockIndirectlyGettingPowered(pos: cn.nukkit.math.Vector3): number;
                // @ts-ignore
                public isAreaLoaded(bb: cn.nukkit.math.AxisAlignedBB): boolean;
                // @ts-ignore
                public getUpdateLCG(): number;
                // @ts-ignore
                public createPortal(target: cn.nukkit.block.Block): boolean;
            }
        }
    }
}
