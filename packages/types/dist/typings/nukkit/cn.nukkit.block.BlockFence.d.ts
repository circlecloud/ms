declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockFence extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static FENCE_OAK: number;
                // @ts-ignore
                public static FENCE_SPRUCE: number;
                // @ts-ignore
                public static FENCE_BIRCH: number;
                // @ts-ignore
                public static FENCE_JUNGLE: number;
                // @ts-ignore
                public static FENCE_ACACIA: number;
                // @ts-ignore
                public static FENCE_DARK_OAK: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public getBurnChance(): number;
                // @ts-ignore
                public getBurnAbility(): number;
                // @ts-ignore
                public canConnect(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
            }
        }
    }
}
