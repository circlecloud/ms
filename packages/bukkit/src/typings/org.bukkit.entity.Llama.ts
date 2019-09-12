declare namespace org {
    namespace bukkit {
        namespace entity {
            class Llama {
                /**
                 * Gets the llama's color.
                 */
                public getColor(): org.bukkit.entity.Llama.Color;
                /**
                 * Sets the llama's color.
                 */
                public setColor(color: org.bukkit.entity.Llama.Color): void;
                /**
                 * Gets the llama's strength. A higher strength llama will have more
                 * inventory slots and be more threatening to entities.
                 */
                public getStrength(): number;
                /**
                 * Sets the llama's strength. A higher strength llama will have more
                 * inventory slots and be more threatening to entities. Inventory slots are
                 * equal to strength * 3.
                 */
                public setStrength(strength: number): void;
                public getInventory(): org.bukkit.inventory.LlamaInventory;
            }
        }
    }
}
