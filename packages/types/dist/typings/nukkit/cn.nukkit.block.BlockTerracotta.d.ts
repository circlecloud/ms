declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockTerracotta extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                constructor(dyeColor: cn.nukkit.utils.TerracottaColor)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public getDyeColor(): cn.nukkit.utils.TerracottaColor;
            }
        }
    }
}
