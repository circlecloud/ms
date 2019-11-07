// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class FlowerPot extends org.bukkit.material.MaterialData {
                /**
                 * Default constructor for a flower pot.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Get the material in the flower pot
                 */
                // @ts-ignore
                public getContents(): org.bukkit.material.MaterialData;
                /**
                 * Set the contents of the flower pot
                 */
                // @ts-ignore
                public setContents(materialData: org.bukkit.material.MaterialData): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.FlowerPot;
            }
        }
    }
}
