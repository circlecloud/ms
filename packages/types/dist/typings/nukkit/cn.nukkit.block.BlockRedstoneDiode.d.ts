declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockRedstoneDiode extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public updateState(): void;
                // @ts-ignore
                public isLocked(): boolean;
                // @ts-ignore
                protected calculateInputStrength(): number;
                // @ts-ignore
                protected getPowerOnSides(): number;
                // @ts-ignore
                protected getPowerOnSide(pos: cn.nukkit.math.Vector3, side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public isPowerSource(): boolean;
                // @ts-ignore
                protected shouldBePowered(): boolean;
                // @ts-ignore
                public abstract getFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                protected abstract getDelay(): number;
                // @ts-ignore
                protected abstract getUnpowered(): cn.nukkit.block.Block;
                // @ts-ignore
                protected abstract getPowered(): cn.nukkit.block.Block;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                protected isAlternateInput(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public static isDiode(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                protected getRedstoneSignal(): number;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public isPowered(): boolean;
                // @ts-ignore
                public isFacingTowardsRepeater(): boolean;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
