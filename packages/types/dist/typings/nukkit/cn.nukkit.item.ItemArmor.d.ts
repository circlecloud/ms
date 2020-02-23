declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
            abstract class ItemArmor extends cn.nukkit.item.Item implements cn.nukkit.item.ItemDurable {
                // @ts-ignore
                constructor(id: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number, name: string)
                // @ts-ignore
                public static TIER_LEATHER: number;
                // @ts-ignore
                public static TIER_IRON: number;
                // @ts-ignore
                public static TIER_CHAIN: number;
                // @ts-ignore
                public static TIER_GOLD: number;
                // @ts-ignore
                public static TIER_DIAMOND: number;
                // @ts-ignore
                public static TIER_OTHER: number;
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public isArmor(): boolean;
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public getEnchantAbility(): number;
                // @ts-ignore
                public isUnbreakable(): boolean;
            }
        }
    }
}
