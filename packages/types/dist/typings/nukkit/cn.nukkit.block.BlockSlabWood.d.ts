declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockSlabWood extends cn.nukkit.block.BlockSlab {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getBurnChance(): number;
                // @ts-ignore
                public getBurnAbility(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
