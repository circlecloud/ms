declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockTrappedChest extends cn.nukkit.block.BlockChest {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public getWeakPower(face: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public isPowerSource(): boolean;
            }
        }
    }
}
