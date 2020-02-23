declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityFurnace extends cn.nukkit.blockentity.BlockEntitySpawnable implements cn.nukkit.inventory.InventoryHolder, cn.nukkit.blockentity.BlockEntityContainer, cn.nukkit.blockentity.BlockEntityNameable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected inventory: cn.nukkit.inventory.FurnaceInventory;
                // @ts-ignore
                protected burnTime: number;
                // @ts-ignore
                protected burnDuration: number;
                // @ts-ignore
                protected cookTime: number;
                // @ts-ignore
                protected maxTime: number;
                // @ts-ignore
                protected initBlockEntity(): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public hasName(): boolean;
                // @ts-ignore
                public setName(name: string): void;
                // @ts-ignore
                public close(): void;
                // @ts-ignore
                public onBreak(): void;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public isBlockEntityValid(): boolean;
                // @ts-ignore
                public getSize(): number;
                // @ts-ignore
                protected getSlotIndex(index: number): number;
                // @ts-ignore
                public getItem(index: number): cn.nukkit.item.Item;
                // @ts-ignore
                public setItem(index: number, item: cn.nukkit.item.Item): void;
                // @ts-ignore
                public getInventory(): cn.nukkit.inventory.FurnaceInventory;
                // @ts-ignore
                protected checkFuel(fuel: cn.nukkit.item.Item): void;
                // @ts-ignore
                public onUpdate(): boolean;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public getBurnTime(): number;
                // @ts-ignore
                public setBurnTime(burnTime: number): void;
                // @ts-ignore
                public getBurnDuration(): number;
                // @ts-ignore
                public setBurnDuration(burnDuration: number): void;
                // @ts-ignore
                public getCookTime(): number;
                // @ts-ignore
                public setCookTime(cookTime: number): void;
                // @ts-ignore
                public getMaxTime(): number;
                // @ts-ignore
                public setMaxTime(maxTime: number): void;
            }
        }
    }
}
