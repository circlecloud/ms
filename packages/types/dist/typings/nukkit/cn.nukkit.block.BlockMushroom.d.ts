declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockMushroom extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public grow(): boolean;
                // @ts-ignore
                public canStay(): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canSilkTouch(): boolean;
                // @ts-ignore
                protected abstract getType(): number;
            }
        }
    }
}
