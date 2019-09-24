declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class MaterialData {
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the raw data in this material
                 */
                public getData(): number;
                /**
                 * Sets the raw data of this material
                 */
                public setData(data: number): void;
                /**
                 * Gets the Material that this MaterialData represents
                 */
                public getItemType(): org.bukkit.Material;
                /**
                 * Creates a new ItemStack based on this MaterialData
                 */
                public toItemStack(): org.bukkit.inventory.ItemStack;
                /**
                 * Creates a new ItemStack based on this MaterialData
                 */
                public toItemStack(amount: number): org.bukkit.inventory.ItemStack;
                public toString(): string;
                public hashCode(): number;
                public equals(obj: any): boolean;
                public clone(): org.bukkit.material.MaterialData;
            }
        }
    }
}
