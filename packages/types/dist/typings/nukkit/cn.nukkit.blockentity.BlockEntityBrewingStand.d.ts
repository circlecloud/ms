declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
             class BlockEntityBrewingStand extends cn.nukkit.blockentity.BlockEntitySpawnable implements cn.nukkit.inventory.InventoryHolder, cn.nukkit.blockentity.BlockEntityContainer, cn.nukkit.blockentity.BlockEntityNameable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected inventory: cn.nukkit.inventory.BrewingInventory;
                // @ts-ignore
                public static MAX_BREW_TIME: number;
                // @ts-ignore
                public brewTime: number;
                // @ts-ignore
                public fuelTotal: number;
                // @ts-ignore
                public fuelAmount: number;
                // @ts-ignore
                public static ingredients: java.util.List;
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
                public getInventory(): cn.nukkit.inventory.BrewingInventory;
                // @ts-ignore
                protected checkIngredient(ingredient: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public onUpdate(): boolean;
                // @ts-ignore
                protected sendFuel(): void;
                // @ts-ignore
                protected sendBrewTime(): void;
                // @ts-ignore
                public updateBlock(): void;
                // @ts-ignore
                public getFuel(): number;
                // @ts-ignore
                public setFuel(fuel: number): void;
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
