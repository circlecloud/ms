declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Vine extends org.bukkit.material.MaterialData {
                constructor()
                constructor(type: org.bukkit.Material, data: number)
                constructor(data: number)
                constructor(faces: org.bukkit.block.BlockFace)
                constructor(faces: any)
                /**
                 * Check if the vine is attached to the specified face of an adjacent
                 * block. You can check two faces at once by passing e.g. {@link
                 * BlockFace#NORTH_EAST}.
                 */
                public isOnFace(face: org.bukkit.block.BlockFace): boolean;
                /**
                 * Attach the vine to the specified face of an adjacent block.
                 */
                public putOnFace(face: org.bukkit.block.BlockFace): void;
                /**
                 * Detach the vine from the specified face of an adjacent block.
                 */
                public removeFromFace(face: org.bukkit.block.BlockFace): void;
                public toString(): string;
                public clone(): org.bukkit.material.Vine;
            }
        }
    }
}
