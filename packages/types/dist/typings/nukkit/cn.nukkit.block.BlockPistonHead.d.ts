declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockPistonHead extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public canBePushed(): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
            }
        }
    }
}
