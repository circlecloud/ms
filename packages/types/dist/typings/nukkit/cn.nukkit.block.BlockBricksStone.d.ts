declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockBricksStone extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static NORMAL: number;
                // @ts-ignore
                public static MOSSY: number;
                // @ts-ignore
                public static CRACKED: number;
                // @ts-ignore
                public static CHISELED: number;
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
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
            }
        }
    }
}
