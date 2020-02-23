declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityComparator extends cn.nukkit.blockentity.BlockEntity {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public getOutputSignal(): number;
                // @ts-ignore
                public setOutputSignal(outputSignal: number): void;
                // @ts-ignore
                public saveNBT(): void;
            }
        }
    }
}
