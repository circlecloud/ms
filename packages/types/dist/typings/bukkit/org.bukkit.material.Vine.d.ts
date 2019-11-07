declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Vine extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                constructor(data: number)
                // @ts-ignore
                constructor(faces: org.bukkit.block.BlockFace)
                // @ts-ignore
                constructor(faces: java.util.EnumSet)
                /**
                 * Check if the vine is attached to the specified face of an adjacent
                 * block. You can check two faces at once by passing e.g. {@link
                 * BlockFace#NORTH_EAST}.
                 */
                // @ts-ignore
                public isOnFace(face: org.bukkit.block.BlockFace): boolean;
                /**
                 * Attach the vine to the specified face of an adjacent block.
                 */
                // @ts-ignore
                public putOnFace(face: org.bukkit.block.BlockFace): void;
                /**
                 * Detach the vine from the specified face of an adjacent block.
                 */
                // @ts-ignore
                public removeFromFace(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Vine;
            }
        }
    }
}
