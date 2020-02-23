declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockTrapdoor extends cn.nukkit.block.BlockTransparentMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static TRAPDOOR_OPEN_BIT: number;
                // @ts-ignore
                public static TRAPDOOR_TOP_BIT: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getMinX(): number;
                // @ts-ignore
                public getMaxX(): number;
                // @ts-ignore
                public getMinY(): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public getMinZ(): number;
                // @ts-ignore
                public getMaxZ(): number;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public toggle(player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public isOpen(): boolean;
                // @ts-ignore
                public isTop(): boolean;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
            }
        }
    }
}
