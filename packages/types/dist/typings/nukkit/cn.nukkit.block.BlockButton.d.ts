declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockButton extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public isActivated(): boolean;
                // @ts-ignore
                public isPowerSource(): boolean;
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
            }
        }
    }
}