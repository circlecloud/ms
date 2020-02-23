declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemTrident extends cn.nukkit.item.ItemTool {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer)
                // @ts-ignore
                constructor(meta: java.lang.Integer, count: number)
                // @ts-ignore
                public getMaxDurability(): number;
                // @ts-ignore
                public isSword(): boolean;
                // @ts-ignore
                public getAttackDamage(): number;
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public onRelease(player: cn.nukkit.Player, ticksUsed: number): boolean;
            }
        }
    }
}
