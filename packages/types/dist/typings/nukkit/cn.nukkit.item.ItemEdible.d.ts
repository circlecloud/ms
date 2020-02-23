declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
            abstract class ItemEdible extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number, name: string)
                // @ts-ignore
                constructor(id: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number)
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public onUse(player: cn.nukkit.Player, ticksUsed: number): boolean;
            }
        }
    }
}
