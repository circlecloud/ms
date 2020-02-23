declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockRedstone extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public isPowerSource(): boolean;
                // @ts-ignore
                public getWeakPower(face: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
            }
        }
    }
}
