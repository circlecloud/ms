declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockDoublePlant extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static SUNFLOWER: number;
                // @ts-ignore
                public static LILAC: number;
                // @ts-ignore
                public static TALL_GRASS: number;
                // @ts-ignore
                public static LARGE_FERN: number;
                // @ts-ignore
                public static ROSE_BUSH: number;
                // @ts-ignore
                public static PEONY: number;
                // @ts-ignore
                public static TOP_HALF_BITMASK: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public canBeReplaced(): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
            }
        }
    }
}
