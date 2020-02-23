declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockBedrock extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public canBePushed(): boolean;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
            }
        }
    }
}
