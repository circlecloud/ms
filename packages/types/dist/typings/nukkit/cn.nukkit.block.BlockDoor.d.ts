declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockDoor extends cn.nukkit.block.BlockTransparentMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static DOOR_OPEN_BIT: number;
                // @ts-ignore
                public static DOOR_TOP_BIT: number;
                // @ts-ignore
                public static DOOR_HINGE_BIT: number;
                // @ts-ignore
                public static DOOR_POWERED_BIT: number;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public isSolid(): boolean;
                // @ts-ignore
                public getFullDamage(): number;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public toggle(player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public isOpen(): boolean;
                // @ts-ignore
                public isTop(): boolean;
                // @ts-ignore
                public isTop(meta: number): boolean;
                // @ts-ignore
                public isRightHinged(): boolean;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
            }
        }
    }
}
