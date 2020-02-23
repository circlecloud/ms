declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockSolidMeta extends cn.nukkit.block.BlockMeta {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public isSolid(): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
