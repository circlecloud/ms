declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockTNT extends cn.nukkit.block.BlockSolid {
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
                public canBeActivated(): boolean;
                // @ts-ignore
                public getBurnChance(): number;
                // @ts-ignore
                public getBurnAbility(): number;
                // @ts-ignore
                public prime(): void;
                // @ts-ignore
                public prime(fuse: number): void;
                // @ts-ignore
                public prime(fuse: number, source: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
