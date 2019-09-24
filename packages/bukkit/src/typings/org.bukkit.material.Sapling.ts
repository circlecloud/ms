declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Sapling extends org.bukkit.material.Wood {
                /**
                 * Constructs a sapling.
                 */
                constructor()
                /**
                 * Constructs a sapling of the given tree species.
                 */
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a sapling of the given tree species and if is it instant
                 * growable
                 */
                constructor(species: org.bukkit.TreeSpecies, isInstantGrowable: boolean)
                /**
                 * Constructs a sapling of the given type.
                 */
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a sapling of the given type and tree species.
                 */
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a sapling of the given type and tree species and if is it
                 * instant growable
                 */
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, isInstantGrowable: boolean)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Checks if the Sapling would grow when next ticked with bonemeal
                 */
                public isInstantGrowable(): boolean;
                /**
                 * Set whether this sapling will grow when next ticked with bonemeal
                 */
                public setIsInstantGrowable(isInstantGrowable: boolean): void;
                public toString(): string;
                public clone(): org.bukkit.material.Sapling;
            }
        }
    }
}
