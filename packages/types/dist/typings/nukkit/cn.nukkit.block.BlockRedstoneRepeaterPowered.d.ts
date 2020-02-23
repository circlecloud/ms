declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockRedstoneRepeaterPowered extends cn.nukkit.block.BlockRedstoneDiode {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                protected isAlternateInput(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                protected getDelay(): number;
                // @ts-ignore
                protected getPowered(): cn.nukkit.block.Block;
                // @ts-ignore
                protected getUnpowered(): cn.nukkit.block.Block;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public isLocked(): boolean;
            }
        }
    }
}
