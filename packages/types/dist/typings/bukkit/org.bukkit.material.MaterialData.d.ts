// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class MaterialData extends java.lang.Object {
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the raw data in this material
                 */
                // @ts-ignore
                public getData(): number;
                /**
                 * Sets the raw data of this material
                 */
                // @ts-ignore
                public setData(data: number): void;
                /**
                 * Gets the Material that this MaterialData represents
                 */
                // @ts-ignore
                public getItemType(): org.bukkit.Material;
                /**
                 * Creates a new ItemStack based on this MaterialData
                 */
                // @ts-ignore
                public toItemStack(): org.bukkit.inventory.ItemStack;
                /**
                 * Creates a new ItemStack based on this MaterialData
                 */
                // @ts-ignore
                public toItemStack(amount: number): org.bukkit.inventory.ItemStack;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                // @ts-ignore
                public clone(): org.bukkit.material.MaterialData;
            }
        }
    }
}
