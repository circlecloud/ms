declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockWaterStill extends cn.nukkit.block.BlockWater {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getBlock(meta: number): cn.nukkit.block.BlockLiquid;
            }
        }
    }
}
