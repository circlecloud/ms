declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockLavaStill extends cn.nukkit.block.BlockLava {
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
                // @ts-ignore
                public onUpdate(type: number): number;
            }
        }
    }
}
