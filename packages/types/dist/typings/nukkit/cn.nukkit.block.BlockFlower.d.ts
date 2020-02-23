declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockFlower extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static TYPE_POPPY: number;
                // @ts-ignore
                public static TYPE_BLUE_ORCHID: number;
                // @ts-ignore
                public static TYPE_ALLIUM: number;
                // @ts-ignore
                public static TYPE_AZURE_BLUET: number;
                // @ts-ignore
                public static TYPE_RED_TULIP: number;
                // @ts-ignore
                public static TYPE_ORANGE_TULIP: number;
                // @ts-ignore
                public static TYPE_WHITE_TULIP: number;
                // @ts-ignore
                public static TYPE_PINK_TULIP: number;
                // @ts-ignore
                public static TYPE_OXEYE_DAISY: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                protected getUncommonFlower(): cn.nukkit.block.Block;
            }
        }
    }
}
