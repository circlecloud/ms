declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockSlab extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor(meta: number, doubleSlab: number)
                // @ts-ignore
                protected doubleSlab: number;
                // @ts-ignore
                public getMinY(): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
            }
        }
    }
}
