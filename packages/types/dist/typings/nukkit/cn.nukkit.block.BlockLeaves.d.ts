declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockLeaves extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static OAK: number;
                // @ts-ignore
                public static SPRUCE: number;
                // @ts-ignore
                public static BIRCH: number;
                // @ts-ignore
                public static JUNGLE: number;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getBurnChance(): number;
                // @ts-ignore
                public getBurnAbility(): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public isCheckDecay(): boolean;
                // @ts-ignore
                public setCheckDecay(checkDecay: boolean): void;
                // @ts-ignore
                public isPersistent(): boolean;
                // @ts-ignore
                public setPersistent(persistent: boolean): void;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canSilkTouch(): boolean;
                // @ts-ignore
                protected canDropApple(): boolean;
                // @ts-ignore
                protected getSapling(): cn.nukkit.item.Item;
            }
        }
    }
}
