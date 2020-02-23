declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockSnowLayer extends cn.nukkit.block.BlockFallable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getDamage(): number;
                // @ts-ignore
                public setDamage(meta: number): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public canBeReplaced(): boolean;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public isTransparent(): boolean;
                // @ts-ignore
                public canBeFlowedInto(): boolean;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                public isSolid(): boolean;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
            }
        }
    }
}
