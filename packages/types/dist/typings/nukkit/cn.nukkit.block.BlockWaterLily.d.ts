declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockWaterLily extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getMinX(): number;
                // @ts-ignore
                public getMinZ(): number;
                // @ts-ignore
                public getMaxX(): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public getMaxZ(): number;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                public getFullId(): number;
                // @ts-ignore
                public setDamage(meta: number): void;
            }
        }
    }
}
