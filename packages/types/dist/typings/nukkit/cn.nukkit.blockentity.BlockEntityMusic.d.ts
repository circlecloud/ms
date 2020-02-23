declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityMusic extends cn.nukkit.blockentity.BlockEntity {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected initBlockEntity(): void;
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public changePitch(): void;
                // @ts-ignore
                public getPitch(): number;
                // @ts-ignore
                public setPowered(powered: boolean): void;
                // @ts-ignore
                public isPowered(): boolean;
            }
        }
    }
}
