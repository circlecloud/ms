declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockConcretePowder extends cn.nukkit.block.BlockFallable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getFullId(): number;
                // @ts-ignore
                public getDamage(): number;
                // @ts-ignore
                public setDamage(meta: number): void;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, b: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
            }
        }
    }
}
