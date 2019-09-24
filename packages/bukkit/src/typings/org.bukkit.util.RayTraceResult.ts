declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class RayTraceResult {
                /**
                 * Creates a RayTraceResult.
                 */
                constructor(hitPosition: org.bukkit.util.Vector)
                /**
                 * Creates a RayTraceResult.
                 */
                constructor(hitPosition: org.bukkit.util.Vector, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Creates a RayTraceResult.
                 */
                constructor(hitPosition: org.bukkit.util.Vector, hitBlock: org.bukkit.block.Block, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Creates a RayTraceResult.
                 */
                constructor(hitPosition: org.bukkit.util.Vector, hitEntity: org.bukkit.entity.Entity)
                /**
                 * Creates a RayTraceResult.
                 */
                constructor(hitPosition: org.bukkit.util.Vector, hitEntity: org.bukkit.entity.Entity, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Gets the exact position of the hit.
                 */
                public getHitPosition(): org.bukkit.util.Vector;
                /**
                 * Gets the hit block.
                 */
                public getHitBlock(): org.bukkit.block.Block;
                /**
                 * Gets the hit block face.
                 */
                public getHitBlockFace(): org.bukkit.block.BlockFace;
                /**
                 * Gets the hit entity.
                 */
                public getHitEntity(): org.bukkit.entity.Entity;
                public hashCode(): number;
                public equals(obj: any): boolean;
                public toString(): string;
            }
        }
    }
}
