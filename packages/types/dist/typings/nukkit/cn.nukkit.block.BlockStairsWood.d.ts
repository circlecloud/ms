declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockStairsWood extends cn.nukkit.block.BlockStairs {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getBurnChance(): number;
                // @ts-ignore
                public getBurnAbility(): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
            }
        }
    }
}
