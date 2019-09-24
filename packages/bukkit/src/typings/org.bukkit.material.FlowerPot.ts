declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class FlowerPot {
                /**
                 * Default constructor for a flower pot.
                 */
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Get the material in the flower pot
                 */
                public getContents(): org.bukkit.material.MaterialData;
                /**
                 * Set the contents of the flower pot
                 */
                public setContents(materialData: org.bukkit.material.MaterialData): void;
                public toString(): string;
                public clone(): org.bukkit.material.FlowerPot;
            }
        }
    }
}
