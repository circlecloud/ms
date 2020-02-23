declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityMovingBlock extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public block: cn.nukkit.block.Block;
                // @ts-ignore
                public piston: cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public progress: number;
                // @ts-ignore
                protected initBlockEntity(): void;
                // @ts-ignore
                public getBlock(): cn.nukkit.block.Block;
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
