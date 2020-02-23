declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemBlock extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor(block: cn.nukkit.block.Block)
                // @ts-ignore
                constructor(block: cn.nukkit.block.Block, meta: java.lang.Integer)
                // @ts-ignore
                constructor(block: cn.nukkit.block.Block, meta: java.lang.Integer, count: number)
                // @ts-ignore
                public setDamage(meta: java.lang.Integer): void;
                // @ts-ignore
                public clone(): cn.nukkit.item.ItemBlock;
                // @ts-ignore
                public getBlock(): cn.nukkit.block.Block;
                // @ts-ignore
                public getMaxStackSize(): number;
            }
        }
    }
}
