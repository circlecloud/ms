declare namespace org {
    namespace bukkit {
        namespace potion {
            abstract class PotionEffectType {
                constructor(id: number)
                public static SPEED: org.bukkit.potion.PotionEffectType;
                public static SLOW: org.bukkit.potion.PotionEffectType;
                public static FAST_DIGGING: org.bukkit.potion.PotionEffectType;
                public static SLOW_DIGGING: org.bukkit.potion.PotionEffectType;
                public static INCREASE_DAMAGE: org.bukkit.potion.PotionEffectType;
                public static HEAL: org.bukkit.potion.PotionEffectType;
                public static HARM: org.bukkit.potion.PotionEffectType;
                public static JUMP: org.bukkit.potion.PotionEffectType;
                public static CONFUSION: org.bukkit.potion.PotionEffectType;
                public static REGENERATION: org.bukkit.potion.PotionEffectType;
                public static DAMAGE_RESISTANCE: org.bukkit.potion.PotionEffectType;
                public static FIRE_RESISTANCE: org.bukkit.potion.PotionEffectType;
                public static WATER_BREATHING: org.bukkit.potion.PotionEffectType;
                public static INVISIBILITY: org.bukkit.potion.PotionEffectType;
                public static BLINDNESS: org.bukkit.potion.PotionEffectType;
                public static NIGHT_VISION: org.bukkit.potion.PotionEffectType;
                public static HUNGER: org.bukkit.potion.PotionEffectType;
                public static WEAKNESS: org.bukkit.potion.PotionEffectType;
                public static POISON: org.bukkit.potion.PotionEffectType;
                public static WITHER: org.bukkit.potion.PotionEffectType;
                public static HEALTH_BOOST: org.bukkit.potion.PotionEffectType;
                public static ABSORPTION: org.bukkit.potion.PotionEffectType;
                public static SATURATION: org.bukkit.potion.PotionEffectType;
                public static GLOWING: org.bukkit.potion.PotionEffectType;
                public static LEVITATION: org.bukkit.potion.PotionEffectType;
                public static LUCK: org.bukkit.potion.PotionEffectType;
                public static UNLUCK: org.bukkit.potion.PotionEffectType;
                public static SLOW_FALLING: org.bukkit.potion.PotionEffectType;
                public static CONDUIT_POWER: org.bukkit.potion.PotionEffectType;
                public static DOLPHINS_GRACE: org.bukkit.potion.PotionEffectType;
                public static BAD_OMEN: org.bukkit.potion.PotionEffectType;
                public static HERO_OF_THE_VILLAGE: org.bukkit.potion.PotionEffectType;
                /**
                 * Creates a PotionEffect from this PotionEffectType, applying duration
                 * modifiers and checks.
                 */
                public createEffect(duration: number, amplifier: number): org.bukkit.potion.PotionEffect;
                /**
                 * Returns the duration modifier applied to effects of this type.
                 */
                public abstract getDurationModifier(): number;
                /**
                 * Returns the unique ID of this type.
                 */
                public getId(): number;
                /**
                 * Returns the name of this effect type.
                 */
                public abstract getName(): string;
                /**
                 * Returns whether the effect of this type happens once, immediately.
                 */
                public abstract isInstant(): boolean;
                /**
                 * Returns the color of this effect type.
                 */
                public abstract getColor(): org.bukkit.Color;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public toString(): string;
                /**
                 * Gets the effect type specified by the unique id.
                 */
                public static getById(id: number): org.bukkit.potion.PotionEffectType;
                /**
                 * Gets the effect type specified by the given name.
                 */
                public static getByName(name: string): org.bukkit.potion.PotionEffectType;
                /**
                 * Registers an effect type with the given object.
                 * <p>
                 * Generally not to be used from within a plugin.
                 */
                public static registerPotionEffectType(type: org.bukkit.potion.PotionEffectType): void;
                /**
                 * Stops accepting any effect type registrations.
                 */
                public static stopAcceptingRegistrations(): void;
                /**
                 * Returns an array of all the registered {@link PotionEffectType}s.
                 * This array is not necessarily in any particular order.
                 */
                public static values(): org.bukkit.potion.PotionEffectType[];
            }
        }
    }
}
