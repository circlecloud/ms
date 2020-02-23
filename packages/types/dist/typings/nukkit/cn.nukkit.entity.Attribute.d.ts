declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
             class Attribute extends java.lang.Object {
                // @ts-ignore
                public static ABSORPTION: number;
                // @ts-ignore
                public static SATURATION: number;
                // @ts-ignore
                public static EXHAUSTION: number;
                // @ts-ignore
                public static KNOCKBACK_RESISTANCE: number;
                // @ts-ignore
                public static MAX_HEALTH: number;
                // @ts-ignore
                public static MOVEMENT_SPEED: number;
                // @ts-ignore
                public static FOLLOW_RANGE: number;
                // @ts-ignore
                public static MAX_HUNGER: number;
                // @ts-ignore
                public static FOOD: number;
                // @ts-ignore
                public static ATTACK_DAMAGE: number;
                // @ts-ignore
                public static EXPERIENCE_LEVEL: number;
                // @ts-ignore
                public static EXPERIENCE: number;
                // @ts-ignore
                public static LUCK: number;
                // @ts-ignore
                protected static attributes: java.util.Map;
                // @ts-ignore
                protected minValue: number;
                // @ts-ignore
                protected maxValue: number;
                // @ts-ignore
                protected defaultValue: number;
                // @ts-ignore
                protected currentValue: number;
                // @ts-ignore
                protected name: string;
                // @ts-ignore
                protected shouldSend: boolean;
                // @ts-ignore
                public static init(): void;
                // @ts-ignore
                public static addAttribute(id: number, name: string, minValue: number, maxValue: number, defaultValue: number): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public static addAttribute(id: number, name: string, minValue: number, maxValue: number, defaultValue: number, shouldSend: boolean): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public static getAttribute(id: number): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public static getAttributeByName(name: string): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public getMinValue(): number;
                // @ts-ignore
                public setMinValue(minValue: number): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public getMaxValue(): number;
                // @ts-ignore
                public setMaxValue(maxValue: number): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public getDefaultValue(): number;
                // @ts-ignore
                public setDefaultValue(defaultValue: number): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public getValue(): number;
                // @ts-ignore
                public setValue(value: number): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public setValue(value: number, fit: boolean): cn.nukkit.entity.Attribute;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public isSyncable(): boolean;
                // @ts-ignore
                public clone(): cn.nukkit.entity.Attribute;
            }
        }
    }
}
