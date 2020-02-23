declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockDragonEgg extends cn.nukkit.block.BlockFallable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public isTransparent(): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public teleport(): void;
            }
        }
    }
}
