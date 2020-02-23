declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockMelon extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canSilkTouch(): boolean;
            }
        }
    }
}
