declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemFlintSteel extends cn.nukkit.item.ItemTool {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer)
                // @ts-ignore
                constructor(meta: java.lang.Integer, count: number)
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public onActivate(level: cn.nukkit.level.Level, player: cn.nukkit.Player, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number): boolean;
                // @ts-ignore
                public getMaxDurability(): number;
            }
        }
    }
}
