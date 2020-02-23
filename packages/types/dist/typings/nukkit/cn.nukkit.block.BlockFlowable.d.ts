declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockFlowable extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public canBeFlowedInto(): boolean;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public isSolid(): boolean;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
            }
        }
    }
}
