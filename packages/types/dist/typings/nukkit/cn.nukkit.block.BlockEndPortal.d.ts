declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockEndPortal extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public hasEntityCollision(): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public canBePushed(): boolean;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
            }
        }
    }
}
