declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockStairs extends cn.nukkit.block.BlockTransparentMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getMinY(): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public collidesWithBB(bb: cn.nukkit.math.AxisAlignedBB): boolean;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
            }
        }
    }
}
