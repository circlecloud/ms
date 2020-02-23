declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockCocoa extends cn.nukkit.block.BlockTransparentMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                protected static EAST: cn.nukkit.math.AxisAlignedBB[];
                // @ts-ignore
                protected static WEST: cn.nukkit.math.AxisAlignedBB[];
                // @ts-ignore
                protected static NORTH: cn.nukkit.math.AxisAlignedBB[];
                // @ts-ignore
                protected static SOUTH: cn.nukkit.math.AxisAlignedBB[];
                // @ts-ignore
                protected static ALL: cn.nukkit.math.AxisAlignedBB[];
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public setDamage(meta: number): void;
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
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
            }
        }
    }
}
