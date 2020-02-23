declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockBeacon extends cn.nukkit.block.BlockTransparent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public canBePushed(): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
