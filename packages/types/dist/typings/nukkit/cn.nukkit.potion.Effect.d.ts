declare namespace cn {
    namespace nukkit {
        namespace potion {
            // @ts-ignore
             class Effect extends java.lang.Object {
                // @ts-ignore
                constructor(id: number, name: string, r: number, g: number, b: number)
                // @ts-ignore
                constructor(id: number, name: string, r: number, g: number, b: number, isBad: boolean)
                // @ts-ignore
                public static SPEED: number;
                // @ts-ignore
                public static SLOWNESS: number;
                // @ts-ignore
                public static HASTE: number;
                // @ts-ignore
                public static SWIFTNESS: number;
                // @ts-ignore
                public static FATIGUE: number;
                // @ts-ignore
                public static MINING_FATIGUE: number;
                // @ts-ignore
                public static STRENGTH: number;
                // @ts-ignore
                public static HEALING: number;
                // @ts-ignore
                public static HARMING: number;
                // @ts-ignore
                public static JUMP: number;
                // @ts-ignore
                public static NAUSEA: number;
                // @ts-ignore
                public static CONFUSION: number;
                // @ts-ignore
                public static REGENERATION: number;
                // @ts-ignore
                public static DAMAGE_RESISTANCE: number;
                // @ts-ignore
                public static FIRE_RESISTANCE: number;
                // @ts-ignore
                public static WATER_BREATHING: number;
                // @ts-ignore
                public static INVISIBILITY: number;
                // @ts-ignore
                public static BLINDNESS: number;
                // @ts-ignore
                public static NIGHT_VISION: number;
                // @ts-ignore
                public static HUNGER: number;
                // @ts-ignore
                public static WEAKNESS: number;
                // @ts-ignore
                public static POISON: number;
                // @ts-ignore
                public static WITHER: number;
                // @ts-ignore
                public static HEALTH_BOOST: number;
                // @ts-ignore
                public static ABSORPTION: number;
                // @ts-ignore
                public static SATURATION: number;
                // @ts-ignore
                public static LEVITATION: number;
                // @ts-ignore
                public static FATAL_POISON: number;
                // @ts-ignore
                public static COUNDIT_POWER: number;
                // @ts-ignore
                public static SLOW_FALLING: number;
                // @ts-ignore
                protected static effects: cn.nukkit.potion.Effect[];
                // @ts-ignore
                protected id: number;
                // @ts-ignore
                protected name: string;
                // @ts-ignore
                protected duration: number;
                // @ts-ignore
                protected amplifier: number;
                // @ts-ignore
                protected color: number;
                // @ts-ignore
                protected show: boolean;
                // @ts-ignore
                protected ambient: boolean;
                // @ts-ignore
                protected bad: boolean;
                // @ts-ignore
                public static init(): void;
                // @ts-ignore
                public static getEffect(id: number): cn.nukkit.potion.Effect;
                // @ts-ignore
                public static getEffectByName(name: string): cn.nukkit.potion.Effect;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public setDuration(ticks: number): cn.nukkit.potion.Effect;
                // @ts-ignore
                public getDuration(): number;
                // @ts-ignore
                public isVisible(): boolean;
                // @ts-ignore
                public setVisible(visible: boolean): cn.nukkit.potion.Effect;
                // @ts-ignore
                public getAmplifier(): number;
                // @ts-ignore
                public setAmplifier(amplifier: number): cn.nukkit.potion.Effect;
                // @ts-ignore
                public isAmbient(): boolean;
                // @ts-ignore
                public setAmbient(ambient: boolean): cn.nukkit.potion.Effect;
                // @ts-ignore
                public isBad(): boolean;
                // @ts-ignore
                public canTick(): boolean;
                // @ts-ignore
                public applyEffect(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public getColor(): number[];
                // @ts-ignore
                public setColor(r: number, g: number, b: number): void;
                // @ts-ignore
                public add(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public remove(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public clone(): cn.nukkit.potion.Effect;
            }
        }
    }
}
