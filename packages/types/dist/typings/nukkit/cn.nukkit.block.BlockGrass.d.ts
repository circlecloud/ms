declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockGrass extends cn.nukkit.block.BlockDirt {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canSilkTouch(): boolean;
                // @ts-ignore
                public getFullId(): number;
                // @ts-ignore
                public setDamage(meta: number): void;
            }
        }
    }
}
