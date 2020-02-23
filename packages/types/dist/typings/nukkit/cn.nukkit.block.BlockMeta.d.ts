declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockMeta extends cn.nukkit.block.Block {
                // @ts-ignore
                constructor(meta: number)
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
