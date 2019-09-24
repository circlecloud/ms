declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Leaves extends org.bukkit.material.Wood {
                /**
                 * Constructs a leaf block.
                 */
                constructor()
                /**
                 * Constructs a leaf block of the given tree species.
                 */
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a leaf block of the given tree species and flag for whether
                 * this leaf block will disappear when too far from a log.
                 */
                constructor(species: org.bukkit.TreeSpecies, isDecayable: boolean)
                /**
                 * Constructs a leaf block of the given type.
                 */
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a leaf block of the given type and tree species.
                 */
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a leaf block of the given type and tree species and flag for
                 * whether this leaf block will disappear when too far from a log.
                 */
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, isDecayable: boolean)
                constructor(type: org.bukkit.Material, data: number)
                protected static DEFAULT_TYPE: org.bukkit.Material;
                protected static DEFAULT_DECAYABLE: boolean;
                /**
                 * Checks if this leaf block is in the process of decaying
                 */
                public isDecaying(): boolean;
                /**
                 * Set whether this leaf block is in the process of decaying
                 */
                public setDecaying(isDecaying: boolean): void;
                /**
                 * Checks if this leaf block is permanent or can decay when too far from a
                 * log
                 */
                public isDecayable(): boolean;
                /**
                 * Set whether this leaf block will disappear when too far from a log
                 */
                public setDecayable(isDecayable: boolean): void;
                public toString(): string;
                public clone(): org.bukkit.material.Leaves;
            }
        }
    }
}
