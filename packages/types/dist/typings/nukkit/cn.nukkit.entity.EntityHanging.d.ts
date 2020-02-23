declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
            abstract class EntityHanging extends cn.nukkit.entity.Entity {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected direction: number;
                // @ts-ignore
                protected initEntity(): void;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public getDirection(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public onUpdate(currentTick: number): boolean;
                // @ts-ignore
                protected isSurfaceValid(): boolean;
            }
        }
    }
}
