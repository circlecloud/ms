declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
            abstract class EntityHumanType extends cn.nukkit.entity.EntityCreature implements cn.nukkit.inventory.InventoryHolder {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected inventory: cn.nukkit.inventory.PlayerInventory;
                // @ts-ignore
                protected enderChestInventory: cn.nukkit.inventory.PlayerEnderChestInventory;
                // @ts-ignore
                protected offhandInventory: cn.nukkit.inventory.PlayerOffhandInventory;
                // @ts-ignore
                public getInventory(): cn.nukkit.inventory.PlayerInventory;
                // @ts-ignore
                public getEnderChestInventory(): cn.nukkit.inventory.PlayerEnderChestInventory;
                // @ts-ignore
                public getOffhandInventory(): cn.nukkit.inventory.PlayerOffhandInventory;
                // @ts-ignore
                protected initEntity(): void;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public getDrops(): cn.nukkit.item.Item[];
                // @ts-ignore
                public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                // @ts-ignore
                protected calculateEnchantmentProtectionFactor(item: cn.nukkit.item.Item, source: cn.nukkit.event.entity.EntityDamageEvent): number;
                // @ts-ignore
                public setOnFire(seconds: number): void;
            }
        }
    }
}
