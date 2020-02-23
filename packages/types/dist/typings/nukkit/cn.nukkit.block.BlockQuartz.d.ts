declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockQuartz extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static QUARTZ_NORMAL: number;
                // @ts-ignore
                public static QUARTZ_CHISELED: number;
                // @ts-ignore
                public static QUARTZ_PILLAR: number;
                // @ts-ignore
                public static QUARTZ_PILLAR2: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
            }
        }
    }
}
