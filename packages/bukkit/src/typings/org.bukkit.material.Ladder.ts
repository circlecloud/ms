declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Ladder {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the face that this block is attached on
                 */
                public getAttachedFace(): org.bukkit.block.BlockFace;
                /**
                 * Sets the direction this ladder is facing
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public clone(): org.bukkit.material.Ladder;
            }
        }
    }
}
