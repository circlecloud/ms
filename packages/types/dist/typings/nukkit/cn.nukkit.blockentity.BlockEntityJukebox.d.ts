declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityJukebox extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected initBlockEntity(): void;
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public setRecordItem(recordItem: cn.nukkit.item.Item): void;
                // @ts-ignore
                public getRecordItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public play(): void;
                // @ts-ignore
                public stop(): void;
                // @ts-ignore
                public dropItem(): void;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
