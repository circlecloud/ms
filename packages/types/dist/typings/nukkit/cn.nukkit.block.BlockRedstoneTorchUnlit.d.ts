declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockRedstoneTorchUnlit extends cn.nukkit.block.BlockTorch {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                protected checkState(): boolean;
                // @ts-ignore
                public tickRate(): number;
            }
        }
    }
}
