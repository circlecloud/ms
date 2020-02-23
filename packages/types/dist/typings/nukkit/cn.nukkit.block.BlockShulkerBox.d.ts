declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockShulkerBox extends cn.nukkit.block.BlockUndyedShulkerBox {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public getDyeColor(): cn.nukkit.utils.DyeColor;
                // @ts-ignore
                public getFullId(): number;
                // @ts-ignore
                public getDamage(): number;
                // @ts-ignore
                public setDamage(meta: number): void;
            }
        }
    }
}
