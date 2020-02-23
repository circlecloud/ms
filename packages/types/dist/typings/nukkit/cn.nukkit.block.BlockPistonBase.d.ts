declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockPistonBase extends cn.nukkit.block.BlockSolidMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public sticky: boolean;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public isExtended(): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public static canPush(block: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, destroyBlocks: boolean): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
            }
        }
    }
}
