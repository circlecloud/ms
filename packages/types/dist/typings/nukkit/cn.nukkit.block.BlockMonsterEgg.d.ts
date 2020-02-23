declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockMonsterEgg extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static STONE: number;
                // @ts-ignore
                public static COBBLESTONE: number;
                // @ts-ignore
                public static STONE_BRICK: number;
                // @ts-ignore
                public static MOSSY_BRICK: number;
                // @ts-ignore
                public static CRACKED_BRICK: number;
                // @ts-ignore
                public static CHISELED_BRICK: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
            }
        }
    }
}
