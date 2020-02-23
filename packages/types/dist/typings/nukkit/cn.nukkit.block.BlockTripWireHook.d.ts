declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockTripWireHook extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public calculateState(onBreak: boolean, updateAround: boolean, pos: number, block: cn.nukkit.block.Block): void;
                // @ts-ignore
                public isAttached(): boolean;
                // @ts-ignore
                public isPowered(): boolean;
                // @ts-ignore
                public setPowered(value: boolean): void;
                // @ts-ignore
                public setAttached(value: boolean): void;
                // @ts-ignore
                public setFace(face: cn.nukkit.math.BlockFace): void;
                // @ts-ignore
                public isPowerSource(): boolean;
                // @ts-ignore
                public getWeakPower(face: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
            }
        }
    }
}
