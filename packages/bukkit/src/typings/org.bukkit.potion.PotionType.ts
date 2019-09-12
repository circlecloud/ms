declare namespace org {
    namespace bukkit {
        namespace potion {
            class PotionType {
                public static UNCRAFTABLE: org.bukkit.potion.PotionType;
                public static WATER: org.bukkit.potion.PotionType;
                public static MUNDANE: org.bukkit.potion.PotionType;
                public static THICK: org.bukkit.potion.PotionType;
                public static AWKWARD: org.bukkit.potion.PotionType;
                public static NIGHT_VISION: org.bukkit.potion.PotionType;
                public static INVISIBILITY: org.bukkit.potion.PotionType;
                public static JUMP: org.bukkit.potion.PotionType;
                public static FIRE_RESISTANCE: org.bukkit.potion.PotionType;
                public static SPEED: org.bukkit.potion.PotionType;
                public static SLOWNESS: org.bukkit.potion.PotionType;
                public static WATER_BREATHING: org.bukkit.potion.PotionType;
                public static INSTANT_HEAL: org.bukkit.potion.PotionType;
                public static INSTANT_DAMAGE: org.bukkit.potion.PotionType;
                public static POISON: org.bukkit.potion.PotionType;
                public static REGEN: org.bukkit.potion.PotionType;
                public static STRENGTH: org.bukkit.potion.PotionType;
                public static WEAKNESS: org.bukkit.potion.PotionType;
                public static LUCK: org.bukkit.potion.PotionType;
                public static TURTLE_MASTER: org.bukkit.potion.PotionType;
                public static SLOW_FALLING: org.bukkit.potion.PotionType;
                public static values(): org.bukkit.potion.PotionType[];
                public static valueOf(name: string): org.bukkit.potion.PotionType;
                public getEffectType(): org.bukkit.potion.PotionEffectType;
                public isInstant(): boolean;
                /**
                 * Checks if the potion type has an upgraded state.
                 * This refers to whether or not the potion type can be Tier 2,
                 * such as Potion of Fire Resistance II.
                 */
                public isUpgradeable(): boolean;
                /**
                 * Checks if the potion type has an extended state.
                 * This refers to the extended duration potions
                 */
                public isExtendable(): boolean;
                public getMaxLevel(): number;
                public static getByEffect(effectType: org.bukkit.potion.PotionEffectType): org.bukkit.potion.PotionType;
            }
        }
    }
}
