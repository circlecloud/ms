declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockDaylightDetector extends cn.nukkit.block.BlockTransparent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                protected invertDetect(): boolean;
            }
        }
    }
}
