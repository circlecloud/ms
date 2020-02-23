declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockFire extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public hasEntityCollision(): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public canBeReplaced(): boolean;
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public canNeighborBurn(): boolean;
                // @ts-ignore
                public isBlockTopFacingSurfaceSolid(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public tickRate(): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                protected recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
            }
        }
    }
}
