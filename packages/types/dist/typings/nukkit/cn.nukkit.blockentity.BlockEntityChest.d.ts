declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityChest extends cn.nukkit.blockentity.BlockEntitySpawnable implements cn.nukkit.inventory.InventoryHolder, cn.nukkit.blockentity.BlockEntityContainer, cn.nukkit.blockentity.BlockEntityNameable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected inventory: cn.nukkit.inventory.ChestInventory;
                // @ts-ignore
                protected doubleInventory: cn.nukkit.inventory.DoubleChestInventory;
                // @ts-ignore
                protected initBlockEntity(): void;
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
                public getInventory(): cn.nukkit.inventory.BaseInventory;
                // @ts-ignore
                public getRealInventory(): cn.nukkit.inventory.ChestInventory;
                // @ts-ignore
                protected checkPairing(): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public hasName(): boolean;
                // @ts-ignore
                public setName(name: string): void;
                // @ts-ignore
                public isPaired(): boolean;
                // @ts-ignore
                public getPair(): cn.nukkit.blockentity.BlockEntityChest;
                // @ts-ignore
                public pairWith(chest: cn.nukkit.blockentity.BlockEntityChest): boolean;
                // @ts-ignore
                public createPair(chest: cn.nukkit.blockentity.BlockEntityChest): void;
                // @ts-ignore
                public unpair(): boolean;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
