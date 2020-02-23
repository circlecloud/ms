declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockPotato extends cn.nukkit.block.BlockCrops {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
            }
        }
    }
}
