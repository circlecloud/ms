declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class LongGrass extends org.bukkit.material.MaterialData {
                constructor()
                constructor(species: org.bukkit.GrassSpecies)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current species of this grass
                 */
                public getSpecies(): org.bukkit.GrassSpecies;
                /**
                 * Sets the species of this grass
                 */
                public setSpecies(species: org.bukkit.GrassSpecies): void;
                public toString(): string;
                public clone(): org.bukkit.material.LongGrass;
            }
        }
    }
}
