declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockOreRedstone extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public getDropExp(): number;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public canSilkTouch(): boolean;
            }
        }
    }
}
