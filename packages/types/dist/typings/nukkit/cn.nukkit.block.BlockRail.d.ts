declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockRail extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                protected canBePowered: boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                protected checkRailsConnected(): java.util.Map;
                // @ts-ignore
                public isAbstract(): boolean;
                // @ts-ignore
                public canPowered(): boolean;
                // @ts-ignore
                public getOrientation(): cn.nukkit.utils.Rail.Orientation;
                // @ts-ignore
                public setOrientation(o: cn.nukkit.utils.Rail.Orientation): void;
                // @ts-ignore
                public getRealMeta(): number;
                // @ts-ignore
                public isActive(): boolean;
                // @ts-ignore
                public setActive(active: boolean): void;
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
