declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Ladder extends org.bukkit.material.SimpleAttachableMaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the face that this block is attached on
                 */
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace;
                /**
                 * Sets the direction this ladder is facing
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public clone(): org.bukkit.material.Ladder;
            }
        }
    }
}
