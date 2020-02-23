declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockDispenser extends cn.nukkit.block.BlockSolidMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public hasComparatorInputOverride(): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public getComparatorInputOverride(): number;
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public isTriggered(): boolean;
                // @ts-ignore
                public setTriggered(value: boolean): void;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public getDispensePosition(): cn.nukkit.math.Vector3;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
            }
        }
    }
}
