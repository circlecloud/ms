declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockCactus extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public hasEntityCollision(): boolean;
                // @ts-ignore
                public getMinX(): number;
                // @ts-ignore
                public getMinY(): number;
                // @ts-ignore
                public getMinZ(): number;
                // @ts-ignore
                public getMaxX(): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public getMaxZ(): number;
                // @ts-ignore
                protected recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
            }
        }
    }
}
