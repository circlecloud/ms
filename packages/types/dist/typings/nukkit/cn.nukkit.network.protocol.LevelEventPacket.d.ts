declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class LevelEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static EVENT_SOUND_CLICK: number;
                    // @ts-ignore
                    public static EVENT_SOUND_CLICK_FAIL: number;
                    // @ts-ignore
                    public static EVENT_SOUND_SHOOT: number;
                    // @ts-ignore
                    public static EVENT_SOUND_DOOR: number;
                    // @ts-ignore
                    public static EVENT_SOUND_FIZZ: number;
                    // @ts-ignore
                    public static EVENT_SOUND_TNT: number;
                    // @ts-ignore
                    public static EVENT_SOUND_GHAST: number;
                    // @ts-ignore
                    public static EVENT_SOUND_BLAZE_SHOOT: number;
                    // @ts-ignore
                    public static EVENT_SOUND_GHAST_SHOOT: number;
                    // @ts-ignore
                    public static EVENT_SOUND_DOOR_BUMP: number;
                    // @ts-ignore
                    public static EVENT_SOUND_DOOR_CRASH: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ENDERMAN_TELEPORT: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ANVIL_BREAK: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ANVIL_USE: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ANVIL_FALL: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ITEM_DROP: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ITEM_THROWN: number;
                    // @ts-ignore
                    public static EVENT_SOUND_PORTAL: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ITEM_FRAME_ITEM_ADDED: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ITEM_FRAME_PLACED: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ITEM_FRAME_REMOVED: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ITEM_FRAME_ITEM_REMOVED: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ITEM_FRAME_ITEM_ROTATED: number;
                    // @ts-ignore
                    public static EVENT_SOUND_CAMERA_TAKE_PICTURE: number;
                    // @ts-ignore
                    public static EVENT_SOUND_EXPERIENCE_ORB: number;
                    // @ts-ignore
                    public static EVENT_SOUND_TOTEM: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ARMOR_STAND_BREAK: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ARMOR_STAND_HIT: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ARMOR_STAND_FALL: number;
                    // @ts-ignore
                    public static EVENT_SOUND_ARMOR_STAND_PLACE: number;
                    // @ts-ignore
                    public static EVENT_GUARDIAN_CURSE: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_BLOCK_FORCE_FIELD: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_PROJECTILE_HIT: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_DRAGON_EGG_TELEPORT: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_ENDERMAN_TELEPORT: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_PUNCH_BLOCK: number;
                    // @ts-ignore
                    public static EVENT_SOUND_BUTTON_CLICK: number;
                    // @ts-ignore
                    public static EVENT_SOUND_EXPLODE: number;
                    // @ts-ignore
                    public static EVENT_CAULDRON_DYE_ARMOR: number;
                    // @ts-ignore
                    public static EVENT_CAULDRON_CLEAN_ARMOR: number;
                    // @ts-ignore
                    public static EVENT_CAULDRON_FILL_POTION: number;
                    // @ts-ignore
                    public static EVENT_CAULDRON_TAKE_POTION: number;
                    // @ts-ignore
                    public static EVENT_SOUND_SPLASH: number;
                    // @ts-ignore
                    public static EVENT_CAULDRON_TAKE_WATER: number;
                    // @ts-ignore
                    public static EVENT_CAULDRON_ADD_DYE: number;
                    // @ts-ignore
                    public static EVENT_CAULDRON_CLEAN_BANNER: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_SHOOT: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_DESTROY: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_SPLASH: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_EYE_DESPAWN: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_SPAWN: number;
                    // @ts-ignore
                    public static EVENT_PARTICLE_BONEMEAL: number;
                    // @ts-ignore
                    public static EVENT_START_RAIN: number;
                    // @ts-ignore
                    public static EVENT_START_THUNDER: number;
                    // @ts-ignore
                    public static EVENT_STOP_RAIN: number;
                    // @ts-ignore
                    public static EVENT_STOP_THUNDER: number;
                    // @ts-ignore
                    public static EVENT_SOUND_CAULDRON: number;
                    // @ts-ignore
                    public static EVENT_SOUND_CAULDRON_DYE_ARMOR: number;
                    // @ts-ignore
                    public static EVENT_SOUND_CAULDRON_FILL_POTION: number;
                    // @ts-ignore
                    public static EVENT_SOUND_CAULDRON_FILL_WATER: number;
                    // @ts-ignore
                    public static EVENT_BLOCK_START_BREAK: number;
                    // @ts-ignore
                    public static EVENT_BLOCK_STOP_BREAK: number;
                    // @ts-ignore
                    public static EVENT_SET_DATA: number;
                    // @ts-ignore
                    public static EVENT_PLAYERS_SLEEPING: number;
                    // @ts-ignore
                    public static EVENT_ADD_PARTICLE_MASK: number;
                    // @ts-ignore
                    public evid: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
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
