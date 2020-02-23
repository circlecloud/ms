declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                // @ts-ignore
                abstract class Enchantment extends java.lang.Object {
                    // @ts-ignore
                    constructor(id: number, name: string, weight: number, type: cn.nukkit.item.enchantment.EnchantmentType)
                    // @ts-ignore
                    protected static enchantments: cn.nukkit.item.enchantment.Enchantment[];
                    // @ts-ignore
                    public static ID_PROTECTION_ALL: number;
                    // @ts-ignore
                    public static ID_PROTECTION_FIRE: number;
                    // @ts-ignore
                    public static ID_PROTECTION_FALL: number;
                    // @ts-ignore
                    public static ID_PROTECTION_EXPLOSION: number;
                    // @ts-ignore
                    public static ID_PROTECTION_PROJECTILE: number;
                    // @ts-ignore
                    public static ID_THORNS: number;
                    // @ts-ignore
                    public static ID_WATER_BREATHING: number;
                    // @ts-ignore
                    public static ID_WATER_WALKER: number;
                    // @ts-ignore
                    public static ID_WATER_WORKER: number;
                    // @ts-ignore
                    public static ID_DAMAGE_ALL: number;
                    // @ts-ignore
                    public static ID_DAMAGE_SMITE: number;
                    // @ts-ignore
                    public static ID_DAMAGE_ARTHROPODS: number;
                    // @ts-ignore
                    public static ID_KNOCKBACK: number;
                    // @ts-ignore
                    public static ID_FIRE_ASPECT: number;
                    // @ts-ignore
                    public static ID_LOOTING: number;
                    // @ts-ignore
                    public static ID_EFFICIENCY: number;
                    // @ts-ignore
                    public static ID_SILK_TOUCH: number;
                    // @ts-ignore
                    public static ID_DURABILITY: number;
                    // @ts-ignore
                    public static ID_FORTUNE_DIGGING: number;
                    // @ts-ignore
                    public static ID_BOW_POWER: number;
                    // @ts-ignore
                    public static ID_BOW_KNOCKBACK: number;
                    // @ts-ignore
                    public static ID_BOW_FLAME: number;
                    // @ts-ignore
                    public static ID_BOW_INFINITY: number;
                    // @ts-ignore
                    public static ID_FORTUNE_FISHING: number;
                    // @ts-ignore
                    public static ID_LURE: number;
                    // @ts-ignore
                    public static ID_FROST_WALKER: number;
                    // @ts-ignore
                    public static ID_MENDING: number;
                    // @ts-ignore
                    public static ID_BINDING_CURSE: number;
                    // @ts-ignore
                    public static ID_VANISHING_CURSE: number;
                    // @ts-ignore
                    public static ID_TRIDENT_IMPALING: number;
                    // @ts-ignore
                    public static ID_TRIDENT_RIPTIDE: number;
                    // @ts-ignore
                    public static ID_TRIDENT_LOYALTY: number;
                    // @ts-ignore
                    public static ID_TRIDENT_CHANNELING: number;
                    // @ts-ignore
                    public id: number;
                    // @ts-ignore
                    public type: cn.nukkit.item.enchantment.EnchantmentType;
                    // @ts-ignore
                    protected level: number;
                    // @ts-ignore
                    protected name: string;
                    // @ts-ignore
                    public static words: java.lang.String[];
                    // @ts-ignore
                    public static init(): void;
                    // @ts-ignore
                    public static get(id: number): cn.nukkit.item.enchantment.Enchantment;
                    // @ts-ignore
                    public static getEnchantment(id: number): cn.nukkit.item.enchantment.Enchantment;
                    // @ts-ignore
                    public static getEnchantments(): cn.nukkit.item.enchantment.Enchantment[];
                    // @ts-ignore
                    public getLevel(): number;
                    // @ts-ignore
                    public setLevel(level: number): cn.nukkit.item.enchantment.Enchantment;
                    // @ts-ignore
                    public setLevel(level: number, safe: boolean): cn.nukkit.item.enchantment.Enchantment;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public getWeight(): number;
                    // @ts-ignore
                    public getMinLevel(): number;
                    // @ts-ignore
                    public getMaxLevel(): number;
                    // @ts-ignore
                    public getMaxEnchantableLevel(): number;
                    // @ts-ignore
                    public getMinEnchantAbility(level: number): number;
                    // @ts-ignore
                    public getMaxEnchantAbility(level: number): number;
                    // @ts-ignore
                    public getProtectionFactor(event: cn.nukkit.event.entity.EntityDamageEvent): number;
                    // @ts-ignore
                    public getDamageBonus(entity: cn.nukkit.entity.Entity): number;
                    // @ts-ignore
                    public doPostAttack(attacker: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public doPostHurt(attacker: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public isCompatibleWith(enchantment: cn.nukkit.item.enchantment.Enchantment): boolean;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public canEnchant(item: cn.nukkit.item.Item): boolean;
                    // @ts-ignore
                    public isMajor(): boolean;
                    // @ts-ignore
                    protected clone(): cn.nukkit.item.enchantment.Enchantment;
                    // @ts-ignore
                    public static getRandomName(): string;
                }
            }
        }
    }
}
