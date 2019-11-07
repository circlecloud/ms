// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class LongGrass extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(species: org.bukkit.GrassSpecies)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current species of this grass
                 */
                // @ts-ignore
                public getSpecies(): org.bukkit.GrassSpecies;
                /**
                 * Sets the species of this grass
                 */
                // @ts-ignore
                public setSpecies(species: org.bukkit.GrassSpecies): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.LongGrass;
            }
        }
    }
}
