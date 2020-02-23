declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockRedstoneWire extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public canBePlacedOn(v: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                protected static canConnectUpwardsTo(level: cn.nukkit.level.Level, pos: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                protected static canConnectUpwardsTo(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                protected static canConnectTo(block: cn.nukkit.block.Block, side: cn.nukkit.math.BlockFace): boolean;
                // @ts-ignore
                public isPowerSource(): boolean;
            }
        }
    }
}
