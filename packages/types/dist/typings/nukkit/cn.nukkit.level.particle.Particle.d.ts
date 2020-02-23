declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                // @ts-ignore
                abstract class Particle extends cn.nukkit.math.Vector3 {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(x: number)
                    // @ts-ignore
                    constructor(x: number, y: number)
                    // @ts-ignore
                    constructor(x: number, y: number, z: number)
                    // @ts-ignore
                    public static TYPE_BUBBLE: number;
                    // @ts-ignore
                    public static TYPE_CRITICAL: number;
                    // @ts-ignore
                    public static TYPE_BLOCK_FORCE_FIELD: number;
                    // @ts-ignore
                    public static TYPE_SMOKE: number;
                    // @ts-ignore
                    public static TYPE_EXPLODE: number;
                    // @ts-ignore
                    public static TYPE_EVAPORATION: number;
                    // @ts-ignore
                    public static TYPE_FLAME: number;
                    // @ts-ignore
                    public static TYPE_LAVA: number;
                    // @ts-ignore
                    public static TYPE_LARGE_SMOKE: number;
                    // @ts-ignore
                    public static TYPE_REDSTONE: number;
                    // @ts-ignore
                    public static TYPE_RISING_RED_DUST: number;
                    // @ts-ignore
                    public static TYPE_ITEM_BREAK: number;
                    // @ts-ignore
                    public static TYPE_SNOWBALL_POOF: number;
                    // @ts-ignore
                    public static TYPE_HUGE_EXPLODE: number;
                    // @ts-ignore
                    public static TYPE_HUGE_EXPLODE_SEED: number;
                    // @ts-ignore
                    public static TYPE_MOB_FLAME: number;
                    // @ts-ignore
                    public static TYPE_HEART: number;
                    // @ts-ignore
                    public static TYPE_TERRAIN: number;
                    // @ts-ignore
                    public static TYPE_SUSPENDED_TOWN: number;
                    // @ts-ignore
                    public static TYPE_TOWN_AURA: number;
                    // @ts-ignore
                    public static TYPE_PORTAL: number;
                    // @ts-ignore
                    public static TYPE_SPLASH: number;
                    // @ts-ignore
                    public static TYPE_WATER_SPLASH: number;
                    // @ts-ignore
                    public static TYPE_WATER_WAKE: number;
                    // @ts-ignore
                    public static TYPE_DRIP_WATER: number;
                    // @ts-ignore
                    public static TYPE_DRIP_LAVA: number;
                    // @ts-ignore
                    public static TYPE_DRIP_HONEY: number;
                    // @ts-ignore
                    public static TYPE_FALLING_DUST: number;
                    // @ts-ignore
                    public static TYPE_DUST: number;
                    // @ts-ignore
                    public static TYPE_MOB_SPELL: number;
                    // @ts-ignore
                    public static TYPE_MOB_SPELL_AMBIENT: number;
                    // @ts-ignore
                    public static TYPE_MOB_SPELL_INSTANTANEOUS: number;
                    // @ts-ignore
                    public static TYPE_NOTE_AND_DUST: number;
                    // @ts-ignore
                    public static TYPE_SLIME: number;
                    // @ts-ignore
                    public static TYPE_RAIN_SPLASH: number;
                    // @ts-ignore
                    public static TYPE_VILLAGER_ANGRY: number;
                    // @ts-ignore
                    public static TYPE_VILLAGER_HAPPY: number;
                    // @ts-ignore
                    public static TYPE_ENCHANTMENT_TABLE: number;
                    // @ts-ignore
                    public static TYPE_TRACKING_EMITTER: number;
                    // @ts-ignore
                    public static TYPE_NOTE: number;
                    // @ts-ignore
                    public static TYPE_WITCH_SPELL: number;
                    // @ts-ignore
                    public static TYPE_CARROT: number;
                    // @ts-ignore
                    public static TYPE_END_ROD: number;
                    // @ts-ignore
                    public static TYPE_RISING_DRAGONS_BREATH: number;
                    // @ts-ignore
                    public static TYPE_SPIT: number;
                    // @ts-ignore
                    public static TYPE_TOTEM: number;
                    // @ts-ignore
                    public static TYPE_FOOD: number;
                    // @ts-ignore
                    public static TYPE_FIREWORKS_STARTER: number;
                    // @ts-ignore
                    public static TYPE_FIREWORKS_SPARK: number;
                    // @ts-ignore
                    public static TYPE_FIREWORKS_OVERLAY: number;
                    // @ts-ignore
                    public static TYPE_BALLOON_GAS: number;
                    // @ts-ignore
                    public static TYPE_COLORED_FLAME: number;
                    // @ts-ignore
                    public static TYPE_SPARKLER: number;
                    // @ts-ignore
                    public static TYPE_CONDUIT: number;
                    // @ts-ignore
                    public static TYPE_BUBBLE_COLUMN_UP: number;
                    // @ts-ignore
                    public static TYPE_BUBBLE_COLUMN_DOWN: number;
                    // @ts-ignore
                    public static TYPE_SNEEZE: number;
                    // @ts-ignore
                    public static TYPE_LARGE_EXPLOSION: number;
                    // @ts-ignore
                    public static TYPE_INK: number;
                    // @ts-ignore
                    public static TYPE_FALLING_RED_DUST: number;
                    // @ts-ignore
                    public static TYPE_CAMPFIRE_SMOKE: number;
                    // @ts-ignore
                    public static TYPE_FALLING_DRAGONS_BREATH: number;
                    // @ts-ignore
                    public static TYPE_DRAGONS_BREATH: number;
                    // @ts-ignore
                    public abstract encode(): cn.nukkit.network.protocol.DataPacket[];
                }
            }
        }
    }
}
