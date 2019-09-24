declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Tree {
                /**
                 * Constructs a tree block.
                 */
                constructor()
                /**
                 * Constructs a tree block of the given tree species.
                 */
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a tree block of the given tree species, and facing the given
                 * direction.
                 */
                constructor(species: org.bukkit.TreeSpecies, dir: org.bukkit.block.BlockFace)
                /**
                 * Constructs a tree block of the given type.
                 */
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a tree block of the given type and tree species.
                 */
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a tree block of the given type and tree species, and facing
                 * the given direction.
                 */
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, dir: org.bukkit.block.BlockFace)
                constructor(type: org.bukkit.Material, data: number)
                protected static DEFAULT_TYPE: org.bukkit.Material;
                protected static DEFAULT_DIRECTION: org.bukkit.block.BlockFace;
                /**
                 * Get direction of the log
                 */
                public getDirection(): org.bukkit.block.BlockFace;
                /**
                 * Set direction of the log
                 */
                public setDirection(dir: org.bukkit.block.BlockFace): void;
                public toString(): string;
                public clone(): org.bukkit.material.Tree;
            }
        }
    }
}
