declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockDoubleSlabStone extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static STONE: number;
                // @ts-ignore
                public static SANDSTONE: number;
                // @ts-ignore
                public static WOODEN: number;
                // @ts-ignore
                public static COBBLESTONE: number;
                // @ts-ignore
                public static BRICK: number;
                // @ts-ignore
                public static STONE_BRICK: number;
                // @ts-ignore
                public static QUARTZ: number;
                // @ts-ignore
                public static NETHER_BRICK: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
            }
        }
    }
}
