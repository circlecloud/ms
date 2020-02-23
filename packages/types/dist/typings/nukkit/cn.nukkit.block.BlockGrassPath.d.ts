declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockGrassPath extends cn.nukkit.block.BlockGrass {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canSilkTouch(): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
            }
        }
    }
}
