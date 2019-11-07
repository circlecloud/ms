declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Leaves extends org.bukkit.material.Wood {
                /**
                 * Constructs a leaf block.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a leaf block of the given tree species.
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a leaf block of the given tree species and flag for whether
                 * this leaf block will disappear when too far from a log.
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, isDecayable: boolean)
                /**
                 * Constructs a leaf block of the given type.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a leaf block of the given type and tree species.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a leaf block of the given type and tree species and flag for
                 * whether this leaf block will disappear when too far from a log.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, isDecayable: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                protected static DEFAULT_TYPE: org.bukkit.Material;
                // @ts-ignore
                protected static DEFAULT_DECAYABLE: boolean;
                /**
                 * Checks if this leaf block is in the process of decaying
                 */
                // @ts-ignore
                public isDecaying(): boolean;
                /**
                 * Set whether this leaf block is in the process of decaying
                 */
                // @ts-ignore
                public setDecaying(isDecaying: boolean): void;
                /**
                 * Checks if this leaf block is permanent or can decay when too far from a
                 * log
                 */
                // @ts-ignore
                public isDecayable(): boolean;
                /**
                 * Set whether this leaf block will disappear when too far from a log
                 */
                // @ts-ignore
                public setDecayable(isDecayable: boolean): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Leaves;
            }
        }
    }
}
