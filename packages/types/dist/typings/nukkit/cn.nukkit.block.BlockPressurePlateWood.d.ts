declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockPressurePlateWood extends cn.nukkit.block.BlockPressurePlateBase {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
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
                protected computeRedstoneStrength(): number;
            }
        }
    }
}
