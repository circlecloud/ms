declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockWall extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static NONE_MOSSY_WALL: number;
                // @ts-ignore
                public static MOSSY_WALL: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public isSolid(): boolean;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public canConnect(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
            }
        }
    }
}
