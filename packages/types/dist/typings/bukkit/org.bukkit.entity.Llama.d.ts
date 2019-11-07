declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Llama extends org.bukkit.entity.ChestedHorse {
                /**
                 * Gets the llama's color.
                 */
                // @ts-ignore
                 getColor(): org.bukkit.entity.Llama.Color;
                /**
                 * Sets the llama's color.
                 */
                // @ts-ignore
                 setColor(color: org.bukkit.entity.Llama.Color): void;
                /**
                 * Gets the llama's strength. A higher strength llama will have more
                 * inventory slots and be more threatening to entities.
                 */
                // @ts-ignore
                 getStrength(): number;
                /**
                 * Sets the llama's strength. A higher strength llama will have more
                 * inventory slots and be more threatening to entities. Inventory slots are
                 * equal to strength * 3.
                 */
                // @ts-ignore
                 setStrength(strength: number): void;
                // @ts-ignore
                 getInventory(): org.bukkit.inventory.LlamaInventory;
            }
        }
    }
}
