declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityEnchantTable extends cn.nukkit.blockentity.BlockEntitySpawnable implements cn.nukkit.blockentity.BlockEntityNameable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public hasName(): boolean;
                // @ts-ignore
                public setName(name: string): void;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
