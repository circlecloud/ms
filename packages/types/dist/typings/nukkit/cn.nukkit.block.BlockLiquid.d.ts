declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockLiquid extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public adjacentSources: number;
                // @ts-ignore
                protected flowVector: cn.nukkit.math.Vector3;
                // @ts-ignore
                public canBeFlowedInto(): boolean;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public hasEntityCollision(): boolean;
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public canBeReplaced(): boolean;
                // @ts-ignore
                public isSolid(): boolean;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public getBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                protected recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public getFluidHeightPercent(): number;
                // @ts-ignore
                protected getFlowDecay(block: cn.nukkit.block.Block): number;
                // @ts-ignore
                protected getEffectiveFlowDecay(block: cn.nukkit.block.Block): number;
                // @ts-ignore
                public clearCaches(): void;
                // @ts-ignore
                public getFlowVector(): cn.nukkit.math.Vector3;
                // @ts-ignore
                public addVelocityToEntity(entity: cn.nukkit.entity.Entity, vector: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public getFlowDecayPerBlock(): number;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                protected flowIntoBlock(block: cn.nukkit.block.Block, newFlowDecay: number): void;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                protected checkForHarden(): void;
                // @ts-ignore
                protected triggerLavaMixEffects(pos: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public abstract getBlock(meta: number): cn.nukkit.block.BlockLiquid;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                protected liquidCollide(cause: cn.nukkit.block.Block, result: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                protected canFlowInto(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
            }
        }
    }
}
