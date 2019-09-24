declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Llama extends org.bukkit.entity.ChestedHorse {
                /**
                 * Gets the llama's color.
                 */
                 getColor(): org.bukkit.entity.Llama.Color;
                /**
                 * Sets the llama's color.
                 */
                 setColor(color: org.bukkit.entity.Llama.Color): void;
                /**
                 * Gets the llama's strength. A higher strength llama will have more
                 * inventory slots and be more threatening to entities.
                 */
                 getStrength(): number;
                /**
                 * Sets the llama's strength. A higher strength llama will have more
                 * inventory slots and be more threatening to entities. Inventory slots are
                 * equal to strength * 3.
                 */
                 setStrength(strength: number): void;
                 getInventory(): org.bukkit.inventory.LlamaInventory;
            }
        }
    }
}
