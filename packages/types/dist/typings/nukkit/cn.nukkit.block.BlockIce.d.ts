declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockIce extends cn.nukkit.block.BlockTransparent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getFrictionFactor(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canSilkTouch(): boolean;
            }
        }
    }
}
