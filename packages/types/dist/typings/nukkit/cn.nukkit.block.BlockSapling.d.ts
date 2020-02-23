declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockSapling extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static OAK: number;
                // @ts-ignore
                public static SPRUCE: number;
                // @ts-ignore
                public static BIRCH: number;
                // @ts-ignore
                public static BIRCH_TALL: number;
                // @ts-ignore
                public static JUNGLE: number;
                // @ts-ignore
                public static ACACIA: number;
                // @ts-ignore
                public static DARK_OAK: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public isSameType(pos: cn.nukkit.math.Vector3, type: number): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
