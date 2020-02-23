declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockLeaves2 extends cn.nukkit.block.BlockLeaves {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public static ACACIA: number;
                // @ts-ignore
                public static DARK_OAK: number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                protected canDropApple(): boolean;
                // @ts-ignore
                protected getSapling(): cn.nukkit.item.Item;
            }
        }
    }
}
