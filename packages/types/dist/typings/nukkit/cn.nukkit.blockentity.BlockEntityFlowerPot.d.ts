declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityFlowerPot extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected initBlockEntity(): void;
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
