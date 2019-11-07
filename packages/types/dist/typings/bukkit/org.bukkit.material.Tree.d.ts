// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Tree extends org.bukkit.material.Wood {
                /**
                 * Constructs a tree block.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a tree block of the given tree species.
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a tree block of the given tree species, and facing the given
                 * direction.
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, dir: org.bukkit.block.BlockFace)
                /**
                 * Constructs a tree block of the given type.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a tree block of the given type and tree species.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a tree block of the given type and tree species, and facing
                 * the given direction.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, dir: org.bukkit.block.BlockFace)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                protected static DEFAULT_TYPE: org.bukkit.Material;
                // @ts-ignore
                protected static DEFAULT_DIRECTION: org.bukkit.block.BlockFace;
                /**
                 * Get direction of the log
                 */
                // @ts-ignore
                public getDirection(): org.bukkit.block.BlockFace;
                /**
                 * Set direction of the log
                 */
                // @ts-ignore
                public setDirection(dir: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Tree;
            }
        }
    }
}
