declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityBeacon extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected initBlockEntity(): void;
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public onUpdate(): boolean;
                // @ts-ignore
                public getPowerLevel(): number;
                // @ts-ignore
                public setPowerLevel(level: number): void;
                // @ts-ignore
                public getPrimaryPower(): number;
                // @ts-ignore
                public setPrimaryPower(power: number): void;
                // @ts-ignore
                public getSecondaryPower(): number;
                // @ts-ignore
                public setSecondaryPower(power: number): void;
                // @ts-ignore
                public updateCompoundTag(nbt: cn.nukkit.nbt.tag.CompoundTag, player: cn.nukkit.Player): boolean;
            }
        }
    }
}
