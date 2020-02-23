declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockTorch extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public getBlockFace(meta: number): cn.nukkit.math.BlockFace;
            }
        }
    }
}
