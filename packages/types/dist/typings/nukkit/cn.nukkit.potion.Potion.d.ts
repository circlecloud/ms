declare namespace cn {
    namespace nukkit {
        namespace potion {
            // @ts-ignore
             class Potion extends java.lang.Object {
                // @ts-ignore
                constructor(id: number)
                // @ts-ignore
                constructor(id: number, level: number)
                // @ts-ignore
                constructor(id: number, level: number, splash: boolean)
                // @ts-ignore
                public static NO_EFFECTS: number;
                // @ts-ignore
                public static WATER: number;
                // @ts-ignore
                public static MUNDANE: number;
                // @ts-ignore
                public static MUNDANE_II: number;
                // @ts-ignore
                public static THICK: number;
                // @ts-ignore
                public static AWKWARD: number;
                // @ts-ignore
                public static NIGHT_VISION: number;
                // @ts-ignore
                public static NIGHT_VISION_LONG: number;
                // @ts-ignore
                public static INVISIBLE: number;
                // @ts-ignore
                public static INVISIBLE_LONG: number;
                // @ts-ignore
                public static LEAPING: number;
                // @ts-ignore
                public static LEAPING_LONG: number;
                // @ts-ignore
                public static LEAPING_II: number;
                // @ts-ignore
                public static FIRE_RESISTANCE: number;
                // @ts-ignore
                public static FIRE_RESISTANCE_LONG: number;
                // @ts-ignore
                public static SPEED: number;
                // @ts-ignore
                public static SPEED_LONG: number;
                // @ts-ignore
                public static SPEED_II: number;
                // @ts-ignore
                public static SLOWNESS: number;
                // @ts-ignore
                public static SLOWNESS_LONG: number;
                // @ts-ignore
                public static WATER_BREATHING: number;
                // @ts-ignore
                public static WATER_BREATHING_LONG: number;
                // @ts-ignore
                public static INSTANT_HEALTH: number;
                // @ts-ignore
                public static INSTANT_HEALTH_II: number;
                // @ts-ignore
                public static HARMING: number;
                // @ts-ignore
                public static HARMING_II: number;
                // @ts-ignore
                public static POISON: number;
                // @ts-ignore
                public static POISON_LONG: number;
                // @ts-ignore
                public static POISON_II: number;
                // @ts-ignore
                public static REGENERATION: number;
                // @ts-ignore
                public static REGENERATION_LONG: number;
                // @ts-ignore
                public static REGENERATION_II: number;
                // @ts-ignore
                public static STRENGTH: number;
                // @ts-ignore
                public static STRENGTH_LONG: number;
                // @ts-ignore
                public static STRENGTH_II: number;
                // @ts-ignore
                public static WEAKNESS: number;
                // @ts-ignore
                public static WEAKNESS_LONG: number;
                // @ts-ignore
                public static WITHER_II: number;
                // @ts-ignore
                public static TURTLE_MASTER: number;
                // @ts-ignore
                public static TURTLE_MASTER_LONG: number;
                // @ts-ignore
                public static TURTLE_MASTER_II: number;
                // @ts-ignore
                public static SLOW_FALLING: number;
                // @ts-ignore
                public static SLOW_FALLING_LONG: number;
                // @ts-ignore
                protected static potions: cn.nukkit.potion.Potion[];
                // @ts-ignore
                protected id: number;
                // @ts-ignore
                protected level: number;
                // @ts-ignore
                protected splash: boolean;
                // @ts-ignore
                public static init(): void;
                // @ts-ignore
                public static getPotion(id: number): cn.nukkit.potion.Potion;
                // @ts-ignore
                public static getPotionByName(name: string): cn.nukkit.potion.Potion;
                // @ts-ignore
                public getEffect(): cn.nukkit.potion.Effect;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getLevel(): number;
                // @ts-ignore
                public isSplash(): boolean;
                // @ts-ignore
                public setSplash(splash: boolean): cn.nukkit.potion.Potion;
                // @ts-ignore
                public applyPotion(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public applyPotion(entity: cn.nukkit.entity.Entity, health: number): void;
                // @ts-ignore
                public clone(): cn.nukkit.potion.Potion;
                // @ts-ignore
                public static getEffect(potionType: number, isSplash: boolean): cn.nukkit.potion.Effect;
                // @ts-ignore
                public static getLevel(potionType: number): number;
                // @ts-ignore
                public static isInstant(potionType: number): boolean;
                // @ts-ignore
                public static getApplySeconds(potionType: number, isSplash: boolean): number;
            }
        }
    }
}
