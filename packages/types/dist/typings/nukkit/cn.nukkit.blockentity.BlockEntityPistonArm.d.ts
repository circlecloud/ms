declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityPistonArm extends cn.nukkit.blockentity.BlockEntity {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public progress: number;
                // @ts-ignore
                public lastProgress: number;
                // @ts-ignore
                public facing: cn.nukkit.math.BlockFace;
                // @ts-ignore
                public extending: boolean;
                // @ts-ignore
                public sticky: boolean;
                // @ts-ignore
                public state: number;
                // @ts-ignore
                public newState: number;
                // @ts-ignore
                public attachedBlock: cn.nukkit.math.Vector3;
                // @ts-ignore
                public isMovable: boolean;
                // @ts-ignore
                public powered: boolean;
                // @ts-ignore
                protected initBlockEntity(): void;
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
