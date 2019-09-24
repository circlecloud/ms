declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Wood {
                /**
                 * Constructs a wood block.
                 */
                constructor()
                /**
                 * Constructs a wood block of the given tree species.
                 */
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a wood block of the given type.
                 */
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a wood block of the given type and tree species.
                 */
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                constructor(type: org.bukkit.Material, data: number)
                protected static DEFAULT_TYPE: org.bukkit.Material;
                protected static DEFAULT_SPECIES: org.bukkit.TreeSpecies;
                /**
                 * Gets the current species of this wood block
                 */
                public getSpecies(): org.bukkit.TreeSpecies;
                /**
                 * Sets the species of this wood block
                 */
                public setSpecies(species: org.bukkit.TreeSpecies): void;
                public toString(): string;
                public clone(): org.bukkit.material.Wood;
            }
        }
    }
}
