declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockOreRedstoneGlowing extends cn.nukkit.block.BlockOreRedstone {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public canSilkTouch(): boolean;
            }
        }
    }
}
