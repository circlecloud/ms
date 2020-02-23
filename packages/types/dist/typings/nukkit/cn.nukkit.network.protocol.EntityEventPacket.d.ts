declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class EntityEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static HURT_ANIMATION: number;
                    // @ts-ignore
                    public static DEATH_ANIMATION: number;
                    // @ts-ignore
                    public static ARM_SWING: number;
                    // @ts-ignore
                    public static TAME_FAIL: number;
                    // @ts-ignore
                    public static TAME_SUCCESS: number;
                    // @ts-ignore
                    public static SHAKE_WET: number;
                    // @ts-ignore
                    public static USE_ITEM: number;
                    // @ts-ignore
                    public static EAT_GRASS_ANIMATION: number;
                    // @ts-ignore
                    public static FISH_HOOK_BUBBLE: number;
                    // @ts-ignore
                    public static FISH_HOOK_POSITION: number;
                    // @ts-ignore
                    public static FISH_HOOK_HOOK: number;
                    // @ts-ignore
                    public static FISH_HOOK_TEASE: number;
                    // @ts-ignore
                    public static SQUID_INK_CLOUD: number;
                    // @ts-ignore
                    public static ZOMBIE_VILLAGER_CURE: number;
                    // @ts-ignore
                    public static AMBIENT_SOUND: number;
                    // @ts-ignore
                    public static RESPAWN: number;
                    // @ts-ignore
                    public static IRON_GOLEM_OFFER_FLOWER: number;
                    // @ts-ignore
                    public static IRON_GOLEM_WITHDRAW_FLOWER: number;
                    // @ts-ignore
                    public static LOVE_PARTICLES: number;
                    // @ts-ignore
                    public static WITCH_SPELL_PARTICLES: number;
                    // @ts-ignore
                    public static FIREWORK_EXPLOSION: number;
                    // @ts-ignore
                    public static SILVERFISH_SPAWN_ANIMATION: number;
                    // @ts-ignore
                    public static WITCH_DRINK_POTION: number;
                    // @ts-ignore
                    public static WITCH_THROW_POTION: number;
                    // @ts-ignore
                    public static MINECART_TNT_PRIME_FUSE: number;
                    // @ts-ignore
                    public static ENCHANT: number;
                    // @ts-ignore
                    public static ELDER_GUARDIAN_CURSE: number;
                    // @ts-ignore
                    public static AGENT_ARM_SWING: number;
                    // @ts-ignore
                    public static ENDER_DRAGON_DEATH: number;
                    // @ts-ignore
                    public static DUST_PARTICLES: number;
                    // @ts-ignore
                    public static ARROW_SHAKE: number;
                    // @ts-ignore
                    public static EATING_ITEM: number;
                    // @ts-ignore
                    public static BABY_ANIMAL_FEED: number;
                    // @ts-ignore
                    public static DEATH_SMOKE_CLOUD: number;
                    // @ts-ignore
                    public static COMPLETE_TRADE: number;
                    // @ts-ignore
                    public static REMOVE_LEASH: number;
                    // @ts-ignore
                    public static CONSUME_TOTEM: number;
                    // @ts-ignore
                    public static PLAYER_CHECK_TREASURE_HUNTER_ACHIEVEMENT: number;
                    // @ts-ignore
                    public static ENTITY_SPAWN: number;
                    // @ts-ignore
                    public static DRAGON_PUKE: number;
                    // @ts-ignore
                    public static MERGE_ITEMS: number;
                    // @ts-ignore
                    public eid: number;
                    // @ts-ignore
                    public event: number;
                    // @ts-ignore
                    public data: number;
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
