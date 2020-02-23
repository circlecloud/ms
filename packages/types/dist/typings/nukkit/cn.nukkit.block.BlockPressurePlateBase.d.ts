declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockPressurePlateBase extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                protected onPitch: number;
                // @ts-ignore
                protected offPitch: number;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public getMinX(): number;
                // @ts-ignore
                public getMinZ(): number;
                // @ts-ignore
                public getMinY(): number;
                // @ts-ignore
                public getMaxX(): number;
                // @ts-ignore
                public getMaxZ(): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public isPowerSource(): boolean;
                // @ts-ignore
                public isActivated(): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                protected recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                protected updateState(oldStrength: number): void;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getRedstonePower(): number;
                // @ts-ignore
                public setRedstonePower(power: number): void;
                // @ts-ignore
                protected playOnSound(): void;
                // @ts-ignore
                protected playOffSound(): void;
                // @ts-ignore
                protected abstract computeRedstoneStrength(): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
            }
        }
    }
}
