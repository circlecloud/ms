declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockStone extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static NORMAL: number;
                // @ts-ignore
                public static GRANITE: number;
                // @ts-ignore
                public static POLISHED_GRANITE: number;
                // @ts-ignore
                public static DIORITE: number;
                // @ts-ignore
                public static POLISHED_DIORITE: number;
                // @ts-ignore
                public static ANDESITE: number;
                // @ts-ignore
                public static POLISHED_ANDESITE: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public canSilkTouch(): boolean;
            }
        }
    }
}
