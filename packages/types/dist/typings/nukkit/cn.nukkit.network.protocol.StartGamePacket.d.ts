declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class StartGamePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static GAME_PUBLISH_SETTING_NO_MULTI_PLAY: number;
                    // @ts-ignore
                    public static GAME_PUBLISH_SETTING_INVITE_ONLY: number;
                    // @ts-ignore
                    public static GAME_PUBLISH_SETTING_FRIENDS_ONLY: number;
                    // @ts-ignore
                    public static GAME_PUBLISH_SETTING_FRIENDS_OF_FRIENDS: number;
                    // @ts-ignore
                    public static GAME_PUBLISH_SETTING_PUBLIC: number;
                    // @ts-ignore
                    public entityUniqueId: number;
                    // @ts-ignore
                    public entityRuntimeId: number;
                    // @ts-ignore
                    public playerGamemode: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public yaw: number;
                    // @ts-ignore
                    public pitch: number;
                    // @ts-ignore
                    public seed: number;
                    // @ts-ignore
                    public dimension: number;
                    // @ts-ignore
                    public generator: number;
                    // @ts-ignore
                    public worldGamemode: number;
                    // @ts-ignore
                    public difficulty: number;
                    // @ts-ignore
                    public spawnX: number;
                    // @ts-ignore
                    public spawnY: number;
                    // @ts-ignore
                    public spawnZ: number;
                    // @ts-ignore
                    public hasAchievementsDisabled: boolean;
                    // @ts-ignore
                    public dayCycleStopTime: number;
                    // @ts-ignore
                    public eduEditionOffer: number;
                    // @ts-ignore
                    public hasEduFeaturesEnabled: boolean;
                    // @ts-ignore
                    public rainLevel: number;
                    // @ts-ignore
                    public lightningLevel: number;
                    // @ts-ignore
                    public hasConfirmedPlatformLockedContent: boolean;
                    // @ts-ignore
                    public multiplayerGame: boolean;
                    // @ts-ignore
                    public broadcastToLAN: boolean;
                    // @ts-ignore
                    public xblBroadcastIntent: number;
                    // @ts-ignore
                    public platformBroadcastIntent: number;
                    // @ts-ignore
                    public commandsEnabled: boolean;
                    // @ts-ignore
                    public isTexturePacksRequired: boolean;
                    // @ts-ignore
                    public gameRules: cn.nukkit.level.GameRules;
                    // @ts-ignore
                    public bonusChest: boolean;
                    // @ts-ignore
                    public hasStartWithMapEnabled: boolean;
                    // @ts-ignore
                    public permissionLevel: number;
                    // @ts-ignore
                    public serverChunkTickRange: number;
                    // @ts-ignore
                    public hasLockedBehaviorPack: boolean;
                    // @ts-ignore
                    public hasLockedResourcePack: boolean;
                    // @ts-ignore
                    public isFromLockedWorldTemplate: boolean;
                    // @ts-ignore
                    public isUsingMsaGamertagsOnly: boolean;
                    // @ts-ignore
                    public isFromWorldTemplate: boolean;
                    // @ts-ignore
                    public isWorldTemplateOptionLocked: boolean;
                    // @ts-ignore
                    public isOnlySpawningV1Villagers: boolean;
                    // @ts-ignore
                    public vanillaVersion: string;
                    // @ts-ignore
                    public levelId: string;
                    // @ts-ignore
                    public worldName: string;
                    // @ts-ignore
                    public premiumWorldTemplateId: string;
                    // @ts-ignore
                    public isTrial: boolean;
                    // @ts-ignore
                    public isMovementServerAuthoritative: boolean;
                    // @ts-ignore
                    public currentTick: number;
                    // @ts-ignore
                    public enchantmentSeed: number;
                    // @ts-ignore
                    public multiplayerCorrelationId: string;
                    // @ts-ignore
                    public pid(): number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                }
            }
        }
    }
}
