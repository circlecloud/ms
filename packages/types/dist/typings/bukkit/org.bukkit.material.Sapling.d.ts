declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Sapling extends org.bukkit.material.Wood {
                /**
                 * Constructs a sapling.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a sapling of the given tree species.
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a sapling of the given tree species and if is it instant
                 * growable
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, isInstantGrowable: boolean)
                /**
                 * Constructs a sapling of the given type.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a sapling of the given type and tree species.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a sapling of the given type and tree species and if is it
                 * instant growable
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, isInstantGrowable: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Checks if the Sapling would grow when next ticked with bonemeal
                 */
                // @ts-ignore
                public isInstantGrowable(): boolean;
                /**
                 * Set whether this sapling will grow when next ticked with bonemeal
                 */
                // @ts-ignore
                public setIsInstantGrowable(isInstantGrowable: boolean): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Sapling;
            }
        }
    }
}
