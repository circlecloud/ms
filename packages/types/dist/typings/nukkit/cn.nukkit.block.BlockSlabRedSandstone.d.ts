declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockSlabRedSandstone extends cn.nukkit.block.BlockSlab {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static RED_SANDSTONE: number;
                // @ts-ignore
                public static PURPUR: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
