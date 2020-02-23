declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockThin extends cn.nukkit.block.BlockTransparent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public isSolid(): boolean;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public canConnect(block: cn.nukkit.block.Block): boolean;
            }
        }
    }
}
