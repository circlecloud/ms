declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityEnderChest extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
