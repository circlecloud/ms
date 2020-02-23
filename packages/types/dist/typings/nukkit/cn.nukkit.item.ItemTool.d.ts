declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
            abstract class ItemTool extends cn.nukkit.item.Item implements cn.nukkit.item.ItemDurable {
                // @ts-ignore
                constructor(id: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number, name: string)
                // @ts-ignore
                public static TIER_WOODEN: number;
                // @ts-ignore
                public static TIER_GOLD: number;
                // @ts-ignore
                public static TIER_STONE: number;
                // @ts-ignore
                public static TIER_IRON: number;
                // @ts-ignore
                public static TIER_DIAMOND: number;
                // @ts-ignore
                public static TYPE_NONE: number;
                // @ts-ignore
                public static TYPE_SWORD: number;
                // @ts-ignore
                public static TYPE_SHOVEL: number;
                // @ts-ignore
                public static TYPE_PICKAXE: number;
                // @ts-ignore
                public static TYPE_AXE: number;
                // @ts-ignore
                public static TYPE_SHEARS: number;
                // @ts-ignore
                public static DURABILITY_WOODEN: number;
                // @ts-ignore
                public static DURABILITY_GOLD: number;
                // @ts-ignore
                public static DURABILITY_STONE: number;
                // @ts-ignore
                public static DURABILITY_IRON: number;
                // @ts-ignore
                public static DURABILITY_DIAMOND: number;
                // @ts-ignore
                public static DURABILITY_FLINT_STEEL: number;
                // @ts-ignore
                public static DURABILITY_SHEARS: number;
                // @ts-ignore
                public static DURABILITY_BOW: number;
                // @ts-ignore
                public static DURABILITY_TRIDENT: number;
                // @ts-ignore
                public static DURABILITY_FISHING_ROD: number;
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public useOn(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public useOn(entity: cn.nukkit.entity.Entity): boolean;
                // @ts-ignore
                public isUnbreakable(): boolean;
                // @ts-ignore
                public isPickaxe(): boolean;
                // @ts-ignore
                public isAxe(): boolean;
                // @ts-ignore
                public isSword(): boolean;
                // @ts-ignore
                public isShovel(): boolean;
                // @ts-ignore
                public isHoe(): boolean;
                // @ts-ignore
                public isShears(): boolean;
                // @ts-ignore
                public isTool(): boolean;
                // @ts-ignore
                public getEnchantAbility(): number;
            }
        }
    }
}
