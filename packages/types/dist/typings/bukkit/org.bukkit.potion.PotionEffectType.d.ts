// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
            abstract class PotionEffectType extends java.lang.Object {
                // @ts-ignore
                constructor(id: number)
                // @ts-ignore
                public static SPEED: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static SLOW: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static FAST_DIGGING: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static SLOW_DIGGING: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static INCREASE_DAMAGE: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static HEAL: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static HARM: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static JUMP: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static CONFUSION: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static REGENERATION: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static DAMAGE_RESISTANCE: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static FIRE_RESISTANCE: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static WATER_BREATHING: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static INVISIBILITY: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static BLINDNESS: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static NIGHT_VISION: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static HUNGER: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static WEAKNESS: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static POISON: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static WITHER: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static HEALTH_BOOST: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static ABSORPTION: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static SATURATION: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static GLOWING: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static LEVITATION: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static LUCK: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static UNLUCK: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static SLOW_FALLING: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static CONDUIT_POWER: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static DOLPHINS_GRACE: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static BAD_OMEN: org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public static HERO_OF_THE_VILLAGE: org.bukkit.potion.PotionEffectType;
                /**
                 * Creates a PotionEffect from this PotionEffectType, applying duration
                 * modifiers and checks.
                 */
                // @ts-ignore
                public createEffect(duration: number, amplifier: number): org.bukkit.potion.PotionEffect;
                /**
                 * Returns the duration modifier applied to effects of this type.
                 */
                // @ts-ignore
                public abstract getDurationModifier(): number;
                /**
                 * Returns the unique ID of this type.
                 */
                // @ts-ignore
                public getId(): number;
                /**
                 * Returns the name of this effect type.
                 */
                // @ts-ignore
                public abstract getName(): string;
                /**
                 * Returns whether the effect of this type happens once, immediately.
                 */
                // @ts-ignore
                public abstract isInstant(): boolean;
                /**
                 * Returns the color of this effect type.
                 */
                // @ts-ignore
                public abstract getColor(): org.bukkit.Color;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public toString(): string;
                /**
                 * Gets the effect type specified by the unique id.
                 */
                // @ts-ignore
                public static getById(id: number): org.bukkit.potion.PotionEffectType;
                /**
                 * Gets the effect type specified by the given name.
                 */
                // @ts-ignore
                public static getByName(name: string): org.bukkit.potion.PotionEffectType;
                /**
                 * Registers an effect type with the given object.
                 * <p>
                 * Generally not to be used from within a plugin.
                 */
                // @ts-ignore
                public static registerPotionEffectType(type: org.bukkit.potion.PotionEffectType): void;
                /**
                 * Stops accepting any effect type registrations.
                 */
                // @ts-ignore
                public static stopAcceptingRegistrations(): void;
                /**
                 * Returns an array of all the registered {@link PotionEffectType}s.
                 * This array is not necessarily in any particular order.
                 */
                // @ts-ignore
                public static values(): org.bukkit.potion.PotionEffectType[];
            }
        }
    }
}
