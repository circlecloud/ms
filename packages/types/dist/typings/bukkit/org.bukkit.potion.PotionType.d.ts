declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
             class PotionType extends java.lang.Enum {
                // @ts-ignore
                public static UNCRAFTABLE: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static WATER: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static MUNDANE: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static THICK: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static AWKWARD: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static NIGHT_VISION: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static INVISIBILITY: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static JUMP: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static FIRE_RESISTANCE: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static SPEED: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static SLOWNESS: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static WATER_BREATHING: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static INSTANT_HEAL: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static INSTANT_DAMAGE: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static POISON: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static REGEN: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static STRENGTH: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static WEAKNESS: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static LUCK: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static TURTLE_MASTER: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static SLOW_FALLING: org.bukkit.potion.PotionType;
                // @ts-ignore
                public static values(): org.bukkit.potion.PotionType[];
                // @ts-ignore
                public static valueOf(name: string): org.bukkit.potion.PotionType;
                // @ts-ignore
                public getEffectType(): org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public isInstant(): boolean;
                /**
                 * Checks if the potion type has an upgraded state.
                 * This refers to whether or not the potion type can be Tier 2,
                 * such as Potion of Fire Resistance II.
                 */
                // @ts-ignore
                public isUpgradeable(): boolean;
                /**
                 * Checks if the potion type has an extended state.
                 * This refers to the extended duration potions
                 */
                // @ts-ignore
                public isExtendable(): boolean;
                // @ts-ignore
                public getMaxLevel(): number;
                // @ts-ignore
                public static getByEffect(effectType: org.bukkit.potion.PotionEffectType): org.bukkit.potion.PotionType;
            }
        }
    }
}
