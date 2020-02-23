declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemFirework extends cn.nukkit.item.Item {
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
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public addExplosion(explosion: cn.nukkit.item.ItemFirework.FireworkExplosion): void;
                // @ts-ignore
                public clearExplosions(): void;
            }
        }
    }
}
