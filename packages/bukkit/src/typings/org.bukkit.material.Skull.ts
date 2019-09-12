declare namespace org {
    namespace bukkit {
        namespace material {
            class Skull {
                constructor()
                /**
                 * Instantiate a skull facing in a particular direction.
                 */
                constructor(direction: org.bukkit.block.BlockFace)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.Skull;
            }
        }
    }
}
