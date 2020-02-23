declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockRedstoneComparator extends cn.nukkit.block.BlockRedstoneDiode {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                protected getDelay(): number;
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public getMode(): cn.nukkit.block.BlockRedstoneComparator.Mode;
                // @ts-ignore
                protected getUnpowered(): cn.nukkit.block.BlockRedstoneComparator;
                // @ts-ignore
                protected getPowered(): cn.nukkit.block.BlockRedstoneComparator;
                // @ts-ignore
                protected getRedstoneSignal(): number;
                // @ts-ignore
                public updateState(): void;
                // @ts-ignore
                protected calculateInputStrength(): number;
                // @ts-ignore
                protected shouldBePowered(): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public isPowered(): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
