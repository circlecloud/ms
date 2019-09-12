declare namespace org {
    namespace bukkit {
        namespace material {
            class Torch {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the face that this block is attached on
                 */
                public getAttachedFace(): org.bukkit.block.BlockFace;
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public clone(): org.bukkit.material.Torch;
            }
        }
    }
}
