declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockCobweb extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
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
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
            }
        }
    }
}