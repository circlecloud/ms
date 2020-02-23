declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class LevelSoundEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static SOUND_ITEM_USE_ON: number;
                    // @ts-ignore
                    public static SOUND_HIT: number;
                    // @ts-ignore
                    public static SOUND_STEP: number;
                    // @ts-ignore
                    public static SOUND_FLY: number;
                    // @ts-ignore
                    public static SOUND_JUMP: number;
                    // @ts-ignore
                    public static SOUND_BREAK: number;
                    // @ts-ignore
                    public static SOUND_PLACE: number;
                    // @ts-ignore
                    public static SOUND_HEAVY_STEP: number;
                    // @ts-ignore
                    public static SOUND_GALLOP: number;
                    // @ts-ignore
                    public static SOUND_FALL: number;
                    // @ts-ignore
                    public static SOUND_AMBIENT: number;
                    // @ts-ignore
                    public static SOUND_AMBIENT_BABY: number;
                    // @ts-ignore
                    public static SOUND_AMBIENT_IN_WATER: number;
                    // @ts-ignore
                    public static SOUND_BREATHE: number;
                    // @ts-ignore
                    public static SOUND_DEATH: number;
                    // @ts-ignore
                    public static SOUND_DEATH_IN_WATER: number;
                    // @ts-ignore
                    public static SOUND_DEATH_TO_ZOMBIE: number;
                    // @ts-ignore
                    public static SOUND_HURT: number;
                    // @ts-ignore
                    public static SOUND_HURT_IN_WATER: number;
                    // @ts-ignore
                    public static SOUND_MAD: number;
                    // @ts-ignore
                    public static SOUND_BOOST: number;
                    // @ts-ignore
                    public static SOUND_BOW: number;
                    // @ts-ignore
                    public static SOUND_SQUISH_BIG: number;
                    // @ts-ignore
                    public static SOUND_SQUISH_SMALL: number;
                    // @ts-ignore
                    public static SOUND_FALL_BIG: number;
                    // @ts-ignore
                    public static SOUND_FALL_SMALL: number;
                    // @ts-ignore
                    public static SOUND_SPLASH: number;
                    // @ts-ignore
                    public static SOUND_FIZZ: number;
                    // @ts-ignore
                    public static SOUND_FLAP: number;
                    // @ts-ignore
                    public static SOUND_SWIM: number;
                    // @ts-ignore
                    public static SOUND_DRINK: number;
                    // @ts-ignore
                    public static SOUND_EAT: number;
                    // @ts-ignore
                    public static SOUND_TAKEOFF: number;
                    // @ts-ignore
                    public static SOUND_SHAKE: number;
                    // @ts-ignore
                    public static SOUND_PLOP: number;
                    // @ts-ignore
                    public static SOUND_LAND: number;
                    // @ts-ignore
                    public static SOUND_SADDLE: number;
                    // @ts-ignore
                    public static SOUND_ARMOR: number;
                    // @ts-ignore
                    public static SOUND_MOB_ARMOR_STAND_PLACE: number;
                    // @ts-ignore
                    public static SOUND_ADD_CHEST: number;
                    // @ts-ignore
                    public static SOUND_THROW: number;
                    // @ts-ignore
                    public static SOUND_ATTACK: number;
                    // @ts-ignore
                    public static SOUND_ATTACK_NODAMAGE: number;
                    // @ts-ignore
                    public static SOUND_ATTACK_STRONG: number;
                    // @ts-ignore
                    public static SOUND_WARN: number;
                    // @ts-ignore
                    public static SOUND_SHEAR: number;
                    // @ts-ignore
                    public static SOUND_MILK: number;
                    // @ts-ignore
                    public static SOUND_THUNDER: number;
                    // @ts-ignore
                    public static SOUND_EXPLODE: number;
                    // @ts-ignore
                    public static SOUND_FIRE: number;
                    // @ts-ignore
                    public static SOUND_IGNITE: number;
                    // @ts-ignore
                    public static SOUND_FUSE: number;
                    // @ts-ignore
                    public static SOUND_STARE: number;
                    // @ts-ignore
                    public static SOUND_SPAWN: number;
                    // @ts-ignore
                    public static SOUND_SHOOT: number;
                    // @ts-ignore
                    public static SOUND_BREAK_BLOCK: number;
                    // @ts-ignore
                    public static SOUND_LAUNCH: number;
                    // @ts-ignore
                    public static SOUND_BLAST: number;
                    // @ts-ignore
                    public static SOUND_LARGE_BLAST: number;
                    // @ts-ignore
                    public static SOUND_TWINKLE: number;
                    // @ts-ignore
                    public static SOUND_REMEDY: number;
                    // @ts-ignore
                    public static SOUND_UNFECT: number;
                    // @ts-ignore
                    public static SOUND_LEVELUP: number;
                    // @ts-ignore
                    public static SOUND_BOW_HIT: number;
                    // @ts-ignore
                    public static SOUND_BULLET_HIT: number;
                    // @ts-ignore
                    public static SOUND_EXTINGUISH_FIRE: number;
                    // @ts-ignore
                    public static SOUND_ITEM_FIZZ: number;
                    // @ts-ignore
                    public static SOUND_CHEST_OPEN: number;
                    // @ts-ignore
                    public static SOUND_CHEST_CLOSED: number;
                    // @ts-ignore
                    public static SOUND_SHULKERBOX_OPEN: number;
                    // @ts-ignore
                    public static SOUND_SHULKERBOX_CLOSED: number;
                    // @ts-ignore
                    public static SOUND_ENDERCHEST_OPEN: number;
                    // @ts-ignore
                    public static SOUND_ENDERCHEST_CLOSED: number;
                    // @ts-ignore
                    public static SOUND_POWER_ON: number;
                    // @ts-ignore
                    public static SOUND_POWER_OFF: number;
                    // @ts-ignore
                    public static SOUND_ATTACH: number;
                    // @ts-ignore
                    public static SOUND_DETACH: number;
                    // @ts-ignore
                    public static SOUND_DENY: number;
                    // @ts-ignore
                    public static SOUND_TRIPOD: number;
                    // @ts-ignore
                    public static SOUND_POP: number;
                    // @ts-ignore
                    public static SOUND_DROP_SLOT: number;
                    // @ts-ignore
                    public static SOUND_NOTE: number;
                    // @ts-ignore
                    public static SOUND_THORNS: number;
                    // @ts-ignore
                    public static SOUND_PISTON_IN: number;
                    // @ts-ignore
                    public static SOUND_PISTON_OUT: number;
                    // @ts-ignore
                    public static SOUND_PORTAL: number;
                    // @ts-ignore
                    public static SOUND_WATER: number;
                    // @ts-ignore
                    public static SOUND_LAVA_POP: number;
                    // @ts-ignore
                    public static SOUND_LAVA: number;
                    // @ts-ignore
                    public static SOUND_BURP: number;
                    // @ts-ignore
                    public static SOUND_BUCKET_FILL_WATER: number;
                    // @ts-ignore
                    public static SOUND_BUCKET_FILL_LAVA: number;
                    // @ts-ignore
                    public static SOUND_BUCKET_EMPTY_WATER: number;
                    // @ts-ignore
                    public static SOUND_BUCKET_EMPTY_LAVA: number;
                    // @ts-ignore
                    public static SOUND_ARMOR_EQUIP_CHAIN: number;
                    // @ts-ignore
                    public static SOUND_ARMOR_EQUIP_DIAMOND: number;
                    // @ts-ignore
                    public static SOUND_ARMOR_EQUIP_GENERIC: number;
                    // @ts-ignore
                    public static SOUND_ARMOR_EQUIP_GOLD: number;
                    // @ts-ignore
                    public static SOUND_ARMOR_EQUIP_IRON: number;
                    // @ts-ignore
                    public static SOUND_ARMOR_EQUIP_LEATHER: number;
                    // @ts-ignore
                    public static SOUND_ARMOR_EQUIP_ELYTRA: number;
                    // @ts-ignore
                    public static SOUND_RECORD_13: number;
                    // @ts-ignore
                    public static SOUND_RECORD_CAT: number;
                    // @ts-ignore
                    public static SOUND_RECORD_BLOCKS: number;
                    // @ts-ignore
                    public static SOUND_RECORD_CHIRP: number;
                    // @ts-ignore
                    public static SOUND_RECORD_FAR: number;
                    // @ts-ignore
                    public static SOUND_RECORD_MALL: number;
                    // @ts-ignore
                    public static SOUND_RECORD_MELLOHI: number;
                    // @ts-ignore
                    public static SOUND_RECORD_STAL: number;
                    // @ts-ignore
                    public static SOUND_RECORD_STRAD: number;
                    // @ts-ignore
                    public static SOUND_RECORD_WARD: number;
                    // @ts-ignore
                    public static SOUND_RECORD_11: number;
                    // @ts-ignore
                    public static SOUND_RECORD_WAIT: number;
                    // @ts-ignore
                    public static SOUND_STOP_RECORD: number;
                    // @ts-ignore
                    public static SOUND_GUARDIAN_FLOP: number;
                    // @ts-ignore
                    public static SOUND_ELDERGUARDIAN_CURSE: number;
                    // @ts-ignore
                    public static SOUND_MOB_WARNING: number;
                    // @ts-ignore
                    public static SOUND_MOB_WARNING_BABY: number;
                    // @ts-ignore
                    public static SOUND_TELEPORT: number;
                    // @ts-ignore
                    public static SOUND_SHULKER_OPEN: number;
                    // @ts-ignore
                    public static SOUND_SHULKER_CLOSE: number;
                    // @ts-ignore
                    public static SOUND_HAGGLE: number;
                    // @ts-ignore
                    public static SOUND_HAGGLE_YES: number;
                    // @ts-ignore
                    public static SOUND_HAGGLE_NO: number;
                    // @ts-ignore
                    public static SOUND_HAGGLE_IDLE: number;
                    // @ts-ignore
                    public static SOUND_CHORUSGROW: number;
                    // @ts-ignore
                    public static SOUND_CHORUSDEATH: number;
                    // @ts-ignore
                    public static SOUND_GLASS: number;
                    // @ts-ignore
                    public static SOUND_POTION_BREWED: number;
                    // @ts-ignore
                    public static SOUND_CAST_SPELL: number;
                    // @ts-ignore
                    public static SOUND_PREPARE_ATTACK: number;
                    // @ts-ignore
                    public static SOUND_PREPARE_SUMMON: number;
                    // @ts-ignore
                    public static SOUND_PREPARE_WOLOLO: number;
                    // @ts-ignore
                    public static SOUND_FANG: number;
                    // @ts-ignore
                    public static SOUND_CHARGE: number;
                    // @ts-ignore
                    public static SOUND_CAMERA_TAKE_PICTURE: number;
                    // @ts-ignore
                    public static SOUND_LEASHKNOT_PLACE: number;
                    // @ts-ignore
                    public static SOUND_LEASHKNOT_BREAK: number;
                    // @ts-ignore
                    public static SOUND_GROWL: number;
                    // @ts-ignore
                    public static SOUND_WHINE: number;
                    // @ts-ignore
                    public static SOUND_PANT: number;
                    // @ts-ignore
                    public static SOUND_PURR: number;
                    // @ts-ignore
                    public static SOUND_PURREOW: number;
                    // @ts-ignore
                    public static SOUND_DEATH_MIN_VOLUME: number;
                    // @ts-ignore
                    public static SOUND_DEATH_MID_VOLUME: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_BLAZE: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_CAVE_SPIDER: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_CREEPER: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_ELDER_GUARDIAN: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_ENDER_DRAGON: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_ENDERMAN: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_EVOCATION_ILLAGER: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_GHAST: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_HUSK: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_ILLUSION_ILLAGER: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_MAGMA_CUBE: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_POLAR_BEAR: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_SHULKER: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_SILVERFISH: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_SKELETON: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_SLIME: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_SPIDER: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_STRAY: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_VEX: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_VINDICATION_ILLAGER: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_WITCH: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_WITHER: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_WITHER_SKELETON: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_WOLF: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_ZOMBIE: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_ZOMBIE_PIGMAN: number;
                    // @ts-ignore
                    public static SOUND_IMITATE_ZOMBIE_VILLAGER: number;
                    // @ts-ignore
                    public static SOUND_BLOCK_END_PORTAL_FRAME_FILL: number;
                    // @ts-ignore
                    public static SOUND_BLOCK_END_PORTAL_SPAWN: number;
                    // @ts-ignore
                    public static SOUND_RANDOM_ANVIL_USE: number;
                    // @ts-ignore
                    public static SOUND_BOTTLE_DRAGONBREATH: number;
                    // @ts-ignore
                    public static SOUND_PORTAL_TRAVEL: number;
                    // @ts-ignore
                    public static SOUND_ITEM_TRIDENT_HIT: number;
                    // @ts-ignore
                    public static SOUND_ITEM_TRIDENT_RETURN: number;
                    // @ts-ignore
                    public static SOUND_ITEM_TRIDENT_RIPTIDE_1: number;
                    // @ts-ignore
                    public static SOUND_ITEM_TRIDENT_RIPTIDE_2: number;
                    // @ts-ignore
                    public static SOUND_ITEM_TRIDENT_RIPTIDE_3: number;
                    // @ts-ignore
                    public static SOUND_ITEM_TRIDENT_THROW: number;
                    // @ts-ignore
                    public static SOUND_ITEM_TRIDENT_THUNDER: number;
                    // @ts-ignore
                    public static SOUND_ITEM_TRIDENT_HIT_GROUND: number;
                    // @ts-ignore
                    public static SOUND_DEFAULT: number;
                    // @ts-ignore
                    public static SOUND_ELEMCONSTRUCT_OPEN: number;
                    // @ts-ignore
                    public static SOUND_ICEBOMB_HIT: number;
                    // @ts-ignore
                    public static SOUND_BALLOONPOP: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_ICEBOMB: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_BLEACH: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_EPASTE: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_EPASTE2: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_FERTILIZER: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_FIREBALL: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_MGSALT: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_MISCFIRE: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_FIRE: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_MISCEXPLOSION: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_MISCMYSTICAL: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_MISCMYSTICAL2: number;
                    // @ts-ignore
                    public static SOUND_LT_REACTION_PRODUCT: number;
                    // @ts-ignore
                    public static SOUND_SPARKLER_USE: number;
                    // @ts-ignore
                    public static SOUND_GLOWSTICK_USE: number;
                    // @ts-ignore
                    public static SOUND_SPARKLER_ACTIVE: number;
                    // @ts-ignore
                    public static SOUND_CONVERT_TO_DROWNED: number;
                    // @ts-ignore
                    public static SOUND_BUCKET_FILL_FISH: number;
                    // @ts-ignore
                    public static SOUND_BUCKET_EMPTY_FISH: number;
                    // @ts-ignore
                    public static SOUND_BUBBLE_UP: number;
                    // @ts-ignore
                    public static SOUND_BUBBLE_DOWN: number;
                    // @ts-ignore
                    public static SOUND_BUBBLE_POP: number;
                    // @ts-ignore
                    public static SOUND_BUBBLE_UPINSIDE: number;
                    // @ts-ignore
                    public static SOUND_BUBBLE_DOWNINSIDE: number;
                    // @ts-ignore
                    public static SOUND_HURT_BABY: number;
                    // @ts-ignore
                    public static SOUND_DEATH_BABY: number;
                    // @ts-ignore
                    public static SOUND_STEP_BABY: number;
                    // @ts-ignore
                    public static SOUND_BORN: number;
                    // @ts-ignore
                    public static SOUND_BLOCK_TURTLE_EGG_BREAK: number;
                    // @ts-ignore
                    public static SOUND_BLOCK_TURTLE_EGG_CRACK: number;
                    // @ts-ignore
                    public static SOUND_BLOCK_TURTLE_EGG_HATCH: number;
                    // @ts-ignore
                    public static SOUND_BLOCK_TURTLE_EGG_ATTACK: number;
                    // @ts-ignore
                    public static SOUND_BEACON_ACTIVATE: number;
                    // @ts-ignore
                    public static SOUND_BEACON_AMBIENT: number;
                    // @ts-ignore
                    public static SOUND_BEACON_DEACTIVATE: number;
                    // @ts-ignore
                    public static SOUND_BEACON_POWER: number;
                    // @ts-ignore
                    public static SOUND_CONDUIT_ACTIVATE: number;
                    // @ts-ignore
                    public static SOUND_CONDUIT_AMBIENT: number;
                    // @ts-ignore
                    public static SOUND_CONDUIT_ATTACK: number;
                    // @ts-ignore
                    public static SOUND_CONDUIT_DEACTIVATE: number;
                    // @ts-ignore
                    public static SOUND_CONDUIT_SHORT: number;
                    // @ts-ignore
                    public static SOUND_SWOOP: number;
                    // @ts-ignore
                    public static SOUND_BLOCK_BAMBOO_SAPLING_PLACE: number;
                    // @ts-ignore
                    public static SOUND_PRESNEEZE: number;
                    // @ts-ignore
                    public static SOUND_SNEEZE: number;
                    // @ts-ignore
                    public static SOUND_AMBIENT_TAME: number;
                    // @ts-ignore
                    public static SOUND_SCARED: number;
                    // @ts-ignore
                    public static SOUND_BLOCK_SCAFFOLDING_CLIMB: number;
                    // @ts-ignore
                    public static SOUND_CROSSBOW_LOADING_START: number;
                    // @ts-ignore
                    public static SOUND_CROSSBOW_LOADING_MIDDLE: number;
                    // @ts-ignore
                    public static SOUND_CROSSBOW_LOADING_END: number;
                    // @ts-ignore
                    public static SOUND_CROSSBOW_SHOOT: number;
                    // @ts-ignore
                    public static SOUND_CROSSBOW_QUICK_CHARGE_START: number;
                    // @ts-ignore
                    public static SOUND_CROSSBOW_QUICK_CHARGE_MIDDLE: number;
                    // @ts-ignore
                    public static SOUND_CROSSBOW_QUICK_CHARGE_END: number;
                    // @ts-ignore
                    public static SOUND_AMBIENT_AGGRESSIVE: number;
                    // @ts-ignore
                    public static SOUND_AMBIENT_WORRIED: number;
                    // @ts-ignore
                    public static SOUND_CANT_BREED: number;
                    // @ts-ignore
                    public static SOUND_UNDEFINED: number;
                    // @ts-ignore
                    public sound: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public extraData: number;
                    // @ts-ignore
                    public entityIdentifier: string;
                    // @ts-ignore
                    public isBabyMob: boolean;
                    // @ts-ignore
                    public isGlobal: boolean;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public pid(): number;
                }
            }
        }
    }
}
