declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Wood extends org.bukkit.material.MaterialData {
                /**
                 * Constructs a wood block.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a wood block of the given tree species.
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a wood block of the given type.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a wood block of the given type and tree species.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                protected static DEFAULT_TYPE: org.bukkit.Material;
                // @ts-ignore
                protected static DEFAULT_SPECIES: org.bukkit.TreeSpecies;
                /**
                 * Gets the current species of this wood block
                 */
                // @ts-ignore
                public getSpecies(): org.bukkit.TreeSpecies;
                /**
                 * Sets the species of this wood block
                 */
                // @ts-ignore
                public setSpecies(species: org.bukkit.TreeSpecies): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Wood;
            }
        }
    }
}
